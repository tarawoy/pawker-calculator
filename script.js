function updateHandValueDisplay(handName, level) { try { if (typeof handData === 'undefined') { const d=document.getElementById(`display-${handName.replace(/ /g, '_')}`); if(d) d.textContent = "(DB Err)"; console.error("handData undef for", handName); return; } const dId = `display-${handName.replace(/ /g, '_')}`; const dS = document.getElementById(dId); if (!dS) return; const lD = (handData[handName]?.[level]) ?? (handData[handName]?.[1]) ?? null; const c = lD ? (lD.chips ?? lD.c ?? '?') : '?'; const m = lD ? (lD.mult ?? lD.m ?? '?') : '?'; dS.textContent = `(${c} x ${m})`; } catch (e) { console.error(`Err updating ${handName} L${level}:`, e); const dId = `display-${handName.replace(/ /g, '_')}`; const dS = document.getElementById(dId); if(dS) dS.textContent = "(Err)"; } }

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded. Init Pawker Calc...");

    const rankOrder = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    let jokerSlotsData = []; let activeHand = [];
    let handLevels = { 'High Card': 1, 'Pair': 1, 'Two Pair': 1, 'Three of a Kind': 1, 'Straight': 1, 'Flush': 1, 'Full House': 1, 'Four of a Kind': 1, 'Straight Flush': 1, 'Five of a Kind': 1, 'Flush House': 1, 'Flush Five': 1 };
    let currentEditingSlot = -1; let lastJokerIDFromLibrary = null; const faceCardRanks = ["J", "Q", "K"];

    let modal, closeModalButton, saveJokerButton, calculateButton, activeJokersList, handLevelsList, playedHandTypeDropdown, activeHandList, cardLibraryGrid, jokerSearchInput, isFirstHandCheckbox;
    try {
        modal = document.getElementById("jokerModal"); closeModalButton = document.querySelector(".close-button"); saveJokerButton = document.getElementById("saveJokerButton");
        calculateButton = document.getElementById("calculateButton"); activeJokersList = document.getElementById("active-jokers-list"); handLevelsList = document.getElementById("hand-levels-list");
        playedHandTypeDropdown = document.getElementById("playedHandType"); activeHandList = document.getElementById("active-hand-list"); cardLibraryGrid = document.getElementById("card-library-grid");
        jokerSearchInput = document.getElementById("jokerSearch"); isFirstHandCheckbox = document.getElementById("isFirstHandCheckbox");
        const criticalElements = { calculateButton, activeJokersList, handLevelsList, playedHandTypeDropdown, activeHandList, cardLibraryGrid, jokerSearchInput, modal, closeModalButton, saveJokerButton, isFirstHandCheckbox };
        let missingElement = false; for (const key in criticalElements) { if (!criticalElements[key]) { console.error(`Element "${key}" not found!`); missingElement = true; } }
        if (missingElement) { alert("Init failed: Missing critical elements."); return; }
        console.log("UI Elements selected.");
    } catch (error) { console.error("Error selecting initial UI elements:", error); alert("Init failed selecting elements."); return; }

    try {
        const tabButtons = document.querySelectorAll(".tab-link");
        tabButtons.forEach(button => { button.addEventListener("click", () => { try { const tabId = button.getAttribute("data-tab"); document.querySelectorAll(".tab-link").forEach(btn => btn.classList.remove("active")); document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active")); button.classList.add("active"); const tC = document.getElementById(tabId); if (tC) tC.classList.add("active"); else console.warn(`Tab ${tabId} not found.`); } catch (tabError) { console.error("Tab click error:", tabError); } }); });
        console.log("Tab listeners attached.");
    } catch (error) { console.error("Error setting up tabs:", error); }

    function renderAllJokerSlots() { try { if (!activeJokersList) return; activeJokersList.innerHTML = ""; const iFH = isFirstHandCheckbox ? isFirstHandCheckbox.checked : false; const cPCC = activeHand.length; jokerSlotsData.forEach((d, i) => { const s = document.createElement("div"); s.className = "joker-widget"; s.setAttribute("data-slot", i); const nD = d.name || "Unknown Joker"; s.innerHTML = `<div class="joker-widget-header"><strong class="joker-name-display">${nD}</strong><span><button class="edit-joker-btn">Edit</button><button class="remove-joker-btn">X</button></span></div><div class="joker-widget-nav"><button class="move-left">&lt;</button><button class="move-right">&gt;</button></div><div class="joker-widget-quick-inputs"><label>+Chips: <input type="number" class="quick-chips" value="${d.chips ?? 0}"></label><label>+Mult: <input type="number" class="quick-mult" value="${d.mult ?? 0}"></label><label>xMult: <input type="number" class="quick-xmult" value="${d.xmult ?? 1}" step="0.1"></label></div>`; const qID = s.querySelector('.joker-widget-quick-inputs'); if (d.effect?.type === 'manual_random' && qID) { const mS=document.createElement('div'); mS.className='manual-random-input'; let opts=''; let dV=0; if(d.effect.options?.length > 0){ dV=d.effect.options[0]; opts=d.effect.options.map(o => `<option value="${o}" ${o===(d.manualValue ?? dV)?'selected':''}>${o>0?'+':''}${o}</option>`).join(''); } if(d.manualValue===undefined) d.manualValue=dV; mS.innerHTML=`<label>Outcome:</label><select class="manual-random-select" data-slot="${i}">${opts}</select>`; qID.appendChild(mS); } else if (d.effect?.type === 'manual_probabilistic' && qID) { const cond = d.effect.condition; let pCM = !cond; if (cond) { const tGS = { playedCardCount: cPCC }; if (tGS.hasOwnProperty(cond.property) && cond.comparison === '===' && tGS[cond.property] === cond.value) pCM = true; } if (pCM) { const pD = document.createElement('div'); pD.className = 'manual-probabilistic-input'; if (d.triggered === undefined) d.triggered = false; pD.innerHTML = `<label class="prob-label"><input type="checkbox" class="manual-probabilistic-trigger" data-slot="${i}" ${d.triggered ? 'checked' : ''}> Trigger? (+${d.effect.bonus?.mult ?? '?'} Mult, ${d.effect.probability * 100}%)</label>`; qID.appendChild(pD); } else { d.triggered = false; } } else if (d.effect?.type === 'manual_first_hand_random' && qID) { if (iFH) { const fHS = document.createElement('div'); fHS.className = 'manual-first-hand-input'; let opts = ''; const dV = d.effect.default_value || 'none'; if (d.effect.options?.length > 0) { opts = d.effect.options.map(o => `<option value="${o.value}" ${o.value === (d.manualValue ?? dV) ? 'selected' : ''}>${o.text}</option>`).join(''); } if (d.manualValue === undefined) d.manualValue = dV; fHS.innerHTML = `<label>1st Hand:</label><select class="manual-first-hand-select" data-slot="${i}">${opts}</select>`; qID.appendChild(fHS); } else { d.manualValue = d.effect?.default_value || 'none'; } } if (i === 0) s.querySelector(".move-left").style.display = "none"; if (i === jokerSlotsData.length - 1) s.querySelector(".move-right").style.display = "none"; activeJokersList.appendChild(s); }); } catch (e) { console.error("Error rendering Joker slots:", e); } }

    try {
        if (!activeJokersList) throw new Error("activeJokersList is null");
        activeJokersList.addEventListener("click", (e) => { try { const sD = e.target.closest(".joker-widget"); if (!sD) return; const sI = parseInt(sD.getAttribute("data-slot")); if (e.target.classList.contains("edit-joker-btn")) openModal(sI); if (e.target.classList.contains("move-left")) moveJoker(sI, -1); if (e.target.classList.contains("move-right")) moveJoker(sI, 1); if (e.target.classList.contains("remove-joker-btn")) { jokerSlotsData.splice(sI, 1); renderAllJokerSlots(); } } catch (cE) { console.error("Joker click error:", cE); } });
        activeJokersList.addEventListener("change", (e) => { try { const sD = e.target.closest(".joker-widget"); if (!sD) return; const sI = parseInt(sD.getAttribute("data-slot")); if (jokerSlotsData[sI]) { if (e.target.classList.contains("quick-chips")) jokerSlotsData[sI].chips = parseInt(e.target.value) || 0; if (e.target.classList.contains("quick-mult")) jokerSlotsData[sI].mult = parseInt(e.target.value) || 0; if (e.target.classList.contains("quick-xmult")) jokerSlotsData[sI].xmult = parseFloat(e.target.value) || 1; if (e.target.classList.contains("manual-random-select")) jokerSlotsData[sI].manualValue = parseInt(e.target.value); if (e.target.classList.contains("manual-probabilistic-trigger")) jokerSlotsData[sI].triggered = e.target.checked; if (e.target.classList.contains("manual-first-hand-select")) jokerSlotsData[sI].manualValue = e.target.value; } else { console.warn(`Joker data slot ${sI} not found.`);} } catch (chE) { console.error("Joker change error:", chE); } });
        console.log("Joker listeners attached.");
    } catch(error) { console.error("Error setting Joker listeners:", error); }

    function moveJoker(sI, dir) { try { const nI = sI + dir; if (nI < 0 || nI >= jokerSlotsData.length) return; [jokerSlotsData[sI], jokerSlotsData[nI]] = [jokerSlotsData[nI], jokerSlotsData[sI]]; renderAllJokerSlots(); } catch (e) { console.error("Move Joker error:", e); } }

    function openModal(sI) { try { currentEditingSlot = sI; const d = jokerSlotsData[sI]; if (!d) { console.error(`Data slot ${sI} not found!`); return; } document.getElementById("modalJokerName").textContent = d.name; document.getElementById("modalJokerImage").src = d.img; document.getElementById("modalJokerDesc").textContent = d.desc; document.getElementById("jokerChips").value = d.chips; document.getElementById("jokerMult").value = d.mult; document.getElementById("jokerXMult").value = d.xmult; document.getElementById("modalTitle").textContent = "Edit Joker"; saveJokerButton.textContent = "Save Changes"; modal.style.display = "block"; } catch (e) { console.error("Open modal error:", e); } }
    function closeModal() { if(modal) modal.style.display = "none"; currentEditingSlot = -1; }

    function saveJokerData() {
        try {
            if (currentEditingSlot === -1) {
                const dbE = JOKER_LIBRARY?.find(j => j.id === lastJokerIDFromLibrary);
                if (!dbE) { console.error("DB entry not found for ID:", lastJokerIDFromLibrary); return; }
                const nJD = {
                    id: dbE.id,
                    name: dbE.name,
                    img: dbE.img,
                    desc: dbE.desc,
                    effect: dbE.effect ? JSON.parse(JSON.stringify(dbE.effect)) : null,
                    chips: parseInt(document.getElementById("jokerChips").value) || 0,
                    mult: parseInt(document.getElementById("jokerMult").value) || 0,
                    xmult: parseFloat(document.getElementById("jokerXMult").value) || 1
                };
                if (nJD.effect?.type === 'manual_random' && nJD.effect.options?.length > 0) nJD.manualValue = nJD.effect.options[0];
                if (nJD.effect?.type === 'manual_probabilistic') nJD.triggered = false;
                if (nJD.effect?.type === 'manual_first_hand_random') nJD.manualValue = nJD.effect.default_value || 'none';

                jokerSlotsData.push(nJD);
                lastJokerIDFromLibrary = null;
            } else if (jokerSlotsData[currentEditingSlot]) {
                const d = jokerSlotsData[currentEditingSlot];
                d.chips = parseInt(document.getElementById("jokerChips").value) || 0;
                d.mult = parseInt(document.getElementById("jokerMult").value) || 0;
                d.xmult = parseFloat(document.getElementById("jokerXMult").value) || 1;
            } else {
                console.error(`Cannot save slot ${currentEditingSlot}`);
            }
            renderAllJokerSlots();
            closeModal();
        } catch (e) {
            console.error("Save Joker error:", e);
            closeModal();
        }
    }

    try { if(closeModalButton) closeModalButton.addEventListener("click", closeModal); if(saveJokerButton) saveJokerButton.addEventListener("click", saveJokerData); window.addEventListener("click", (e) => { try { if (e.target === modal) closeModal(); } catch(err){ console.error("Modal background click error:", err); }}); } catch(e) { console.error("Error setting modal listeners:", e); }

    function renderJokerLibrary() { try { const lG=document.getElementById("joker-library-grid"); if(!lG){console.error("joker-library-grid not found!"); return;} lG.innerHTML=""; if(typeof JOKER_LIBRARY==='undefined'||!Array.isArray(JOKER_LIBRARY)){lG.innerHTML="<p>Error: JOKER_LIBRARY missing/invalid.</p>"; console.error("JOKER_LIBRARY missing/invalid."); return;} if(JOKER_LIBRARY.length===0){lG.innerHTML="<p>Joker library empty.</p>"; return;} JOKER_LIBRARY.forEach((j,i)=>{ try{ const itm=document.createElement("div"); itm.className="joker-library-item"; itm.setAttribute("data-id",j.id??`j_${i}`); itm.setAttribute("data-name",j.name??"Unknown"); itm.setAttribute("data-desc",j.desc??""); itm.setAttribute("data-img",j.img??""); itm.setAttribute("data-chips",j.chips??0); itm.setAttribute("data-mult",j.mult??0); itm.setAttribute("data-xmult",j.xmult??1); itm.innerHTML=`<img class="lib-img" src="${j.img??''}" alt="${j.name??'Joker'}" loading="lazy"><strong class="lib-name">${j.name??'Unknown'}</strong><p class="lib-desc">${j.desc??''}</p>`; lG.appendChild(itm); }catch(lE){console.error(`Error rendering joker ${i}:`,j,lE);} }); }catch(e){console.error("Render Joker lib error:",e); const lG=document.getElementById("joker-library-grid"); if(lG)lG.innerHTML="<p>Error rendering Joker library.</p>";} }
    try { const lG = document.getElementById("joker-library-grid"); if (lG) { lG.addEventListener("click", (e) => { try { const itm = e.target.closest(".joker-library-item"); if(!itm) return; const d = itm.dataset; lastJokerIDFromLibrary = d.id; document.getElementById("modalJokerName").textContent = d.name; document.getElementById("modalJokerDesc").textContent = d.desc; document.getElementById("modalJokerImage").src = d.img; document.getElementById("jokerChips").value = d.chips || 0; document.getElementById("jokerMult").value = d.mult || 0; document.getElementById("jokerXMult").value = d.xmult || 1; currentEditingSlot = -1; document.getElementById("modalTitle").textContent = "Add Joker"; saveJokerButton.textContent = "Add Joker"; if(modal) modal.style.display = "block"; } catch (err) { console.error("Joker lib click error:", err); } }); } else { console.error("joker-library-grid not found!"); } if(jokerSearchInput) { jokerSearchInput.addEventListener("input", (e) => { try { const sT = e.target.value.toLowerCase(); document.querySelectorAll("#joker-library-grid .joker-library-item").forEach(jI => { const jN = jI.dataset.name.toLowerCase(); jI.style.display = jN.includes(sT) ? "" : "none"; }); } catch (err) { console.error("Joker search error:", err); } }); } else { console.error("jokerSearchInput not found!"); } } catch(e) { console.error("Error setting Joker lib listeners:", e); }

    function updateWidgetClasses(widget, card) {
        try {
            if (!widget || !card || typeof CARD_MODIFIERS === 'undefined') {
                console.warn("updateWidgetClasses: Missing data", {widget, card, CARD_MODIFIERS});
                return;
            }
            const container = widget.querySelector('.card-image-container');
            if (!container) { console.warn("card-image-container not found in widget"); return; }
            
            const allModifiers = [
                ...(CARD_MODIFIERS.enhancements || []).map(e => `enhancement-${e.value}`),
                ...(CARD_MODIFIERS.editions || []).map(e => `edition-${e.value}`)
            ];
            allModifiers.forEach(cls => { if(cls && cls !== 'enhancement-none' && cls !== 'edition-none') container.classList.remove(cls); });

            if (card.enhancement && card.enhancement !== 'none') container.classList.add(`enhancement-${card.enhancement}`);
            if (card.edition && card.edition !== 'none') container.classList.add(`edition-${card.edition}`);
        } catch(e) { console.error("Error updating widget classes:", e); }
    }

    function renderCardLibrary() { try { if (!cardLibraryGrid) return; cardLibraryGrid.innerHTML = ""; if (typeof CARD_DECK === 'undefined') { cardLibraryGrid.innerHTML = "<p>Error: card_db.js not found.</p>"; return; } CARD_DECK.forEach((c, i) => { try { const itm = document.createElement("div"); itm.className = "card-library-item"; itm.setAttribute("data-id", c.id ?? `c_${i}`); itm.innerHTML = `<img src="${c.img ?? ''}" alt="${c.name ?? 'Card'}" loading="lazy">`; cardLibraryGrid.appendChild(itm); } catch (lE) { console.error(`Error rendering card ${i}:`, c, lE); } }); } catch(e) { console.error("Render Card lib error:", e); } }
    
    function renderActiveHand() {
         try {
             if(!activeHandList) return;
             activeHandList.innerHTML = "";
             if (typeof CARD_MODIFIERS === 'undefined') { console.error("CARD_MODIFIERS not loaded!"); return; }
             
             const editionOptionsHTML = CARD_MODIFIERS.editions.map(e => `<option value="${e.value}">${e.text}</option>`).join('');
             const enhancementOptionsHTML = CARD_MODIFIERS.enhancements.map(e => `<option value="${e.value}">${e.text}</option>`).join('');
             const sealOptionsHTML = CARD_MODIFIERS.seals.map(s => `<option value="${s.value}">${s.text}</option>`).join('');

             activeHand.forEach((card, index) => {
                const imagePath = card.img;
                const widget = document.createElement("div"); widget.className = "card-widget"; widget.setAttribute("data-index", index);
                
                widget.innerHTML = `
                    <div class="card-widget-header"><strong>${card.name ?? 'Card'}</strong><button class="remove-card-btn">X</button></div>
                    <div class="card-image-container">
                        <img src="${imagePath}" alt="${card.name ?? 'Card'}" class="card-base-image">
                    </div>
                    <label>Edition:</label><select class="card-edition">${editionOptionsHTML}</select>
                    <label>Enhancement:</label><select class="card-enhancement">${enhancementOptionsHTML}</select>
                    <label>Seal:</label><select class="card-seal">${sealOptionsHTML}</select>`;
                
                widget.querySelector('.card-edition').value = card.edition || 'none';
                widget.querySelector('.card-enhancement').value = card.enhancement || 'none';
                widget.querySelector('.card-seal').value = card.seal || 'none';
                
                updateWidgetClasses(widget, card); 
                
                activeHandList.appendChild(widget);
             });
             renderAllJokerSlots();
         } catch(error) { console.error("Error rendering Active Hand:", error); }
    }
    try {
        if(cardLibraryGrid) cardLibraryGrid.addEventListener("click", (e) => { try { if (activeHand.length >= 5) { return; } const itm = e.target.closest(".card-library-item"); if (!itm) return; if (typeof CARD_DECK === 'undefined') { console.error("CARD_DECK NA!"); return; } const cD = CARD_DECK.find(c => c.id === itm.dataset.id); if (cD) { activeHand.push({ ...cD, edition: 'none', enhancement: 'none', seal: 'none' }); renderActiveHand(); runHandDetection(); } else { console.warn("Card data not found:", itm.dataset.id); } } catch (err) { console.error("Card lib click error:", err); } });
        else console.error("cardLibraryGrid not found!");
        if(activeHandList) {
            activeHandList.addEventListener("click", (e) => { try { if (e.target.classList.contains("remove-card-btn")) { const w = e.target.closest(".card-widget"); if(!w) return; const i = parseInt(w.dataset.index); if (!isNaN(i) && i >= 0 && i < activeHand.length) { activeHand.splice(i, 1); renderActiveHand(); runHandDetection(); } else { console.warn("Invalid index for removal:", i); } } } catch (err) { console.error("Active hand click error:", err); } });
            activeHandList.addEventListener("change", (e) => { 
                try { 
                    const w = e.target.closest(".card-widget"); if(!w) return; 
                    const i = parseInt(w.dataset.index); 
                    if (activeHand[i]) {
                        let needsDetect = false;
                        if (e.target.classList.contains("card-edition")) { activeHand[i].edition = e.target.value; needsDetect = (activeHand[i].edition === 'fur' || activeHand[i].edition === 'wild' || activeHand[i].edition === 'stone'); }
                        if (e.target.classList.contains("card-enhancement")) { activeHand[i].enhancement = e.target.value; needsDetect = (activeHand[i].enhancement === 'wild'); }
                        if (e.target.classList.contains("card-seal")) activeHand[i].seal = e.target.value;
                        updateWidgetClasses(w, activeHand[i]);
                        if (needsDetect) runHandDetection();
                    } else { console.warn(`Card data missing index ${i} on change.`);} 
                } catch (err) { console.error("Active hand change error:", err); } 
            });
        } else console.error("activeHandList not found!");
        if(handLevelsList) { handLevelsList.addEventListener("change", (e) => { try { if (e.target.classList.contains("level-input")) { const hN = e.target.getAttribute("data-hand"); const l = parseInt(e.target.value) || 1; if (hN && handLevels.hasOwnProperty(hN)) { handLevels[hN] = l; updateHandValueDisplay(hN, l); } else { console.warn("Invalid hand name:", hN); } } } catch (err) { console.error("Hand levels change error:", err); } }); }
        else console.error("handLevelsList not found!");
        console.log("Card listeners attached.");
    } catch(e) { console.error("Error setting Card listeners:", e); }

    function runHandDetection() { try { const hT = detectHand(activeHand); if(playedHandTypeDropdown) playedHandTypeDropdown.value = hT; } catch (e) { console.error("Hand detection error:", e); } }
    
    function detectHand(cards) {
        try {
            if (!cards || cards.length === 0) return "High Card";
            const vC=cards.filter(c=>c && c.edition!=='stone' && c.edition!=='fur');
            const wC=vC.filter(c=>c.enhancement==='wild' || c.edition === 'wild').length;
            const r=vC.filter(c=>c.enhancement!=='wild' && c.edition !== 'wild' && c.rank).map(c=>rankOrder[c.rank]).sort((a,b)=>a-b);
            const uR=[...new Set(r)]; const rC={}; r.forEach(rk=>rC[rk]=(rC[rk]||0)+1); const rCV=Object.values(rC);
            const s=vC.filter(c=>c.enhancement!=='wild' && c.edition !== 'wild' && c.suit).map(c=>c.suit); const fS=s.length>0?s[0]:null;

            if (vC.length === 5) {
                const iF=s.length>0&&(s.every(st=>st===fS)||s.length===0); let iS=false;
                if(uR.length+wC===5){ let lR=14,hR=2; if(uR.length>0){lR=uR[0];hR=uR[uR.length-1];} if(uR.includes(14)){ const lRs=uR.map(rk=>rk===14?1:rk).sort((a,b)=>a-b); const lU=[...new Set(lRs)]; if(lU.length>0&&lU[lU.length-1]-lU[0]-(lU.length-1)<=wC) iS=true;} if(!iS&&uR.length>0){ if(hR-lR-(uR.length-1)<=wC) iS=true;} } else if (r.length===0&&wC===5) iS=true;
                
                const h5K_ranks=rCV.some(c=>(c+wC)===5);
                if (h5K_ranks && iF) return "Flush Five";
                if(iF&&iS) return "Straight Flush";
                if(iF) return "Flush";
            }
            const h5K=rCV.some(c=>(c+wC)===5)&&vC.length===5; if(h5K) return "Five of a Kind";
            const h4K=rCV.some(c=>(c+wC)>=4); if(h4K) return "Four of a Kind";
            let h3=rCV.some(c=>(c+wC)>=3); let hP=false;
            if(h3){ let wL=wC; let rL=[...r]; for(let rk in rC){ if((rC[rk]+wC)>=3){ let n=3-(rC[rk]||0); wL-=(n<0?0:n); rL=rL.filter(rn=>rn!==parseInt(rk)); break; } } const sC={}; rL.forEach(rk=>sC[rk]=(sC[rk]||0)+1); hP=Object.values(sC).some(c=>(c+wL)>=2); if(rL.length===0&&wL>=2) hP=true; }
            if(h3&&hP&&vC.length===5) return "Full House";
            if (vC.length===5) {
                let iS=false; if(uR.length+wC===5){ let lR=14,hR=2; if(uR.length>0){lR=uR[0];hR=uR[uR.length-1];} if(uR.includes(14)){ const lRs=uR.map(rk=>rk===14?1:rk).sort((a,b)=>a-b); const lU=[...new Set(lRs)]; if(lU.length>0&&lU[lU.length-1]-lU[0]-(lU.length-1)<=wC) iS=true;} if(!iS&&uR.length>0){ if(hR-lR-(uR.length-1)<=wC) iS=true;} } else if (r.length===0&&wC===5) iS=true; if(iS) return "Straight";
            }
            if(h3) return "Three of a Kind";
            const p=rCV.filter(c=>c===2).length; const h2P=(p===2)||(p===1&&wC>=1)||(wC>=2); if(h2P) return "Two Pair";
            hP=rCV.some(c=>(c+wC)>=2); if(hP) return "Pair";
            return "High Card";
        } catch (e) { console.error("Detect hand error:", e); return "High Card"; }
    }

    try { if(calculateButton) calculateButton.addEventListener("click", calculateScore); else console.error("Calculate button not found!"); } catch(e) { console.error("Error setting Calc listener:", e); }
    try { if (isFirstHandCheckbox) isFirstHandCheckbox.addEventListener('change', renderAllJokerSlots); else console.error("isFirstHandCheckbox not found!"); } catch(e) { console.error("Error setting First Hand listener:", e); }

    function calculateScore() {
        console.log("Starting score calculation...");
        try {
            if (typeof handData === 'undefined' || typeof CARD_MODIFIERS === 'undefined') { throw new Error("Database files (handData or CARD_MODIFIERS) not loaded!"); }
            const pHT = playedHandTypeDropdown ? playedHandTypeDropdown.value : "High Card"; const pHL = handLevels[pHT] || 1;
            const tSCI = document.getElementById("totalCardsScoredInput"); if (!tSCI) console.warn("totalCardsScoredInput not found."); const tSC = tSCI ? parseInt(tSCI.value) || 0 : 0;
            const iFH = isFirstHandCheckbox ? isFirstHandCheckbox.checked : false;
            const gS = { handType: pHT, activeHand: activeHand, jokerCount: jokerSlotsData.length, playedCardCount: activeHand.length, totalCardsScored: tSC, isFirstHand: iFH };

            const bHD = (handData[pHT]?.[pHL]) ?? (handData[pHT]?.[1]) ?? { chips: 0, mult: 0 };
            let bC = bHD?.chips ?? 0; let bM = bHD?.mult ?? 0;

            let tCFC = 0; let tMFC = 0; let xMFC = [];
            const iFRA = jokerSlotsData.some(j => j.id && j.effect?.handler_id === 'retrigger_face_cards');
            const iERA = jokerSlotsData.some(j => j.id && j.effect?.handler_id === 'retrigger_enhanced_cards');
            const iRLA = jokerSlotsData.some(j => j.id && j.effect?.handler_id === 'retrigger_lucky_cards');
            
            const iR_235 = jokerSlotsData.some(j => j.id && j.effect?.handler_id === 'retrigger_2_3_5');
            const iR_low = jokerSlotsData.some(j => j.id && j.effect?.handler_id === 'retrigger_low_ranks');
            const lowRanks = ['A', '2', '3', '4', '5', '6', '7', '8'];
            const ranks_235 = ['2', '3', '5'];

            activeHand.forEach(card => {
                let cardChips = 0; let cardMult = 0; let cardXMult = 1;
                let iterations = 1;
                const sE = CARD_MODIFIERS.editions.find(e => e.value === card.edition) || {effect: {}};
                const sEnh = CARD_MODIFIERS.enhancements.find(e => e.value === card.enhancement) || {effect: {}};
                const sS = CARD_MODIFIERS.seals.find(s => s.value === card.seal) || {effect: {}};

                const isStone = card.edition === 'stone';
                const isFur = card.edition === 'fur';

                if (!isStone && !isFur) {
                    cardChips += card.chipValue || 0;
                }
                
                cardChips += sEnh.effect?.chips || 0;
                cardChips += sE.effect?.chips || 0;
                cardMult += sEnh.effect?.mult || 0;
                cardMult += sE.effect?.mult || 0;
                cardXMult *= sE.effect?.xmult || 1;
                cardXMult *= sEnh.effect?.xmult || 1;
                
                if (sS.effect?.trigger) iterations = sS.effect.trigger;
                if (iFRA && faceCardRanks.includes(card.rank)) iterations = 2;
                if (iERA && (card.enhancement !== 'none' || card.edition !== 'none')) iterations = 2;
                if (iRLA && sE.value === 'lucky') iterations = 3; 
                if (iR_235 && ranks_235.includes(card.rank)) iterations = 2;
                if (iR_low && lowRanks.includes(card.rank)) iterations = 2;

                for (let i = 0; i < iterations; i++) {
                    tCFC += cardChips;
                    tMFC += cardMult;
                    if (cardXMult > 1) xMFC.push(cardXMult);
                }
            });
            let tXFC = xMFC.reduce((a, v) => a * v, 1);

            let jBC = 0; let jBM = 0; let jBX = [];
            jokerSlotsData.forEach(j => {
                const jokerId = j.id || ''; 

                jBC += j.chips; jBM += j.mult; 
                if (jokerId === 'joker146' && gS.handType === 'Pair') {
                    // Tubby Greed case handled later
                } else if (j.xmult != 1) { 
                    jBX.push(j.xmult);
                }

                if (j.effect && j.effect.trigger === 'onHandPlay') {
                    let cMC = false; let pCM = true;
                    if (j.effect.condition) { const cond = j.effect.condition; const pV = gS[cond.property]; const rV = cond.value; const comp = cond.comparison || (cond.property === 'handType' ? 'includesHand' : '==='); pCM = false; switch (comp) { case '===': pCM = (pV === rV); break; case '<=': pCM = (pV <= rV); break; case '>=': pCM = (pV >= rV); break; case '<': pCM = (pV < rV); break; case '>': pCM = (pV > rV); break; case 'includesHand': if (pV === rV) { pCM = true; } else { switch (rV) { case "Straight": pCM = (pV === "Straight Flush"); break; case "Flush": pCM = (pV === "Straight Flush" || pV === "Flush House" || pV === "Five of a Kind" || pV === "Flush Five"); break; case "Pair": pCM = (pV === "Two Pair" || pV === "Three of a Kind" || pV === "Full House" || pV === "Four of a Kind" || pV === "Flush House" || pV === "Five of a Kind" || pV === "Flush Five"); break; case "Two Pair": pCM = (pV === "Full House" || pV === "Flush House" || pV === "Four of a Kind" || pV === "Five of a Kind" || pV === "Flush Five"); break; case "Three of a Kind": pCM = (pV === "Full House" || pV === "Flush House" || pV === "Four of a Kind" || pV === "Five of a Kind" || pV === "Flush Five"); break; } } break; default: pCM = (pV === rV); } }

                    if (j.effect.type === 'conditional' && pCM) { cMC = true; }
                    else if (j.effect.type === 'scaling') { const pV=gS[j.effect.property]; const sc=j.effect.scale; const b=j.effect.bonus; if (pV!==undefined && sc>0) { const m=Math.floor(pV/sc); if (m>0) { jBC+=(b?.chips||0)*m; jBM+=(b?.mult||0)*m; if ((b?.xmult||1)>1) { for (let i=0; i<m; i++) jBX.push(b.xmult); } } } }
                    else if (j.effect.type === 'iterative') { const tA=gS[j.effect.target]; const cond=j.effect.condition; const b=j.effect.bonus; if (Array.isArray(tA) && cond && b) { let mC=0; tA.forEach(itm => { let iM=false; const iV=itm?itm[cond.property]:undefined; const rV=cond.value; const op=cond.operator||'==='; if (iV!==undefined) { if (op==='===') { if (iV===rV) iM=true; } else if (op==='in') { if (Array.isArray(rV) && rV.includes(iV)) iM=true; } } if (iM) mC++; }); if (mC>0) { jBC+=(b.chips||0)*mC; jBM+=(b.mult||0)*mC; if ((b.xmult||1)>1) { for (let i=0; i<mC; i++) jBX.push(b.xmult); } } } }
                    else if (j.effect.type === 'manual_random') { const sO=j.manualValue; if (sO!==undefined) { if (j.effect.bonus_type==='mult') jBM+=sO; } }
                    else if (j.effect.type === 'manual_probabilistic') { if (pCM && j.triggered) { const b=j.effect.bonus; jBC+=b?.chips||0; jBM+=b?.mult||0; if ((b?.xmult||1)>1) jBX.push(b.xmult); } }
                    else if (j.effect.type === 'manual_first_hand_random') { if (gS.isFirstHand) { const sO = j.manualValue; if (sO === 'mult_x2') jBX.push(2); else if (sO === 'chips_-1000') jBC -= 1000; } }
                    else if (j.effect.type === 'special_logic') {
                        if (j.effect.handler_id === 'suit_polarity') { const vS=gS.activeHand.filter(c=>c && c.edition!=='stone' && c.edition!=='fur').map(c=>c.suit); if (vS.length>0) { const iAR=vS.every(s=>s==='h'||s==='d'); const iAB=vS.every(s=>s==='c'||s==='s'); if (iAR) jBC+=100; else if (iAB) jBC-=100; } }
                        else if (j.effect.handler_id === 'meowsers_2_and_7') { const r=gS.activeHand.filter(c=>c && c.edition!=='stone' && c.edition!=='fur').map(c=>c.rank); if (r.includes('2') && r.includes('7')) jBX.push(5); }
                        else if (j.effect.handler_id === 'meowsers_5_and_7') { const r=gS.activeHand.filter(c=>c && c.edition!=='stone' && c.edition!=='fur').map(c=>c.rank); if (r.includes('5') && r.includes('7')) jBX.push(4); }
                        else if (j.effect.handler_id === 'torini_jqk') { const r=gS.activeHand.filter(c=>c && c.edition!=='stone' && c.edition!=='fur').map(c=>c.rank); if (r.includes('J') && r.includes('Q') && r.includes('K')) jBX.push(6); }
                        else if (j.effect.handler_id === 'odd_even_full_hand') {
                            if (gS.playedCardCount === 5) {
                                const ranks = gS.activeHand.filter(c => c && c.edition !== 'stone' && c.edition !== 'fur' && c.rank).map(c => rankOrder[c.rank]);
                                if (ranks.length === 5) {
                                    const isAllEven = ranks.every(r => r % 2 === 0);
                                    const standardOddRanks = [3, 5, 7, 9];
                                    const isAllStandardOdd = ranks.every(r => standardOddRanks.includes(r));
                                    if (isAllEven || isAllStandardOdd) {
                                        jBX.push(4);
                                    }
                                }
                            }
                        }
                    }

                    if (cMC && j.effect.type === 'conditional') { const b=j.effect.bonus; jBC+=b?.chips||0; jBM+=b?.mult||0; if ((b?.xmult||1)>1) jBX.push(b.xmult); }
                }
            });
            let tJX = jBX.reduce((a, v) => a * v, 1);

            let tC = bC + tCFC + jBC;
            let tAM = bM + tMFC + jBM;
            let tMM = tXFC * tJX;
            let tM = tAM * tMM;

            const focusFelineActive = jokerSlotsData.some(j => j.id && j.id === 'joker121');
            const purrfectCutActive = jokerSlotsData.some(j => j.id && j.id === 'joker126');

            if (focusFelineActive) {
                tC *= 0.5;
                tM *= 2;
                console.log("Applied Focus Feline: Chips x0.5, Mult x2");
            }
            if (purrfectCutActive) {
                tC *= 2;
                tM *= 0.5;
                 console.log("Applied Purrfect Cut: Chips x2, Mult x0.5");
            }

            if (jokerSlotsData.some(j => j.id && j.id === 'joker146') && gS.handType === 'Pair') {
                tM = 0;
                console.log("Applied Tubby Greed: Final Mult set to 0 for Pair");
            }

            let fS = tC * tM; if (fS < 0) fS = 0;

            console.log(`--- Final Values ---`);
            console.log(`Final tC: ${tC}`);
            console.log(`Final tM: ${tM}`);
            console.log(`Final Score (fS): ${fS}`);
            console.log(`--------------------`);

             const rCEl = document.getElementById("resultChips");
             const rMEl = document.getElementById("resultMult");
             const rSEl = document.getElementById("resultScore");

             if(rCEl) rCEl.textContent = Math.round(tC).toLocaleString('en-US'); 
             if(rMEl) rMEl.textContent = tM.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }); // Menampilkan 1 desimal
             if(rSEl) rSEl.textContent = Math.round(fS).toLocaleString('en-US'); 
             console.log("Score calculation finished.");

        } catch (error) {
            console.error("Error during score calculation:", error);
            const rSEl = document.getElementById("resultScore"); if(rSEl) rSEl.textContent = "Error!";
        }
    }

    try {
        console.log("Initializing application...");
        renderAllJokerSlots(); renderJokerLibrary(); renderCardLibrary(); runHandDetection();
        Object.keys(handLevels).forEach(hN => { if (handLevels.hasOwnProperty(hN)) updateHandValueDisplay(hN, handLevels[hN]); });
        console.log("Pawker Calculator Initialized Successfully.");
    } catch (error) { console.error("Error during initialization:", error); }

});