// 12款精選精緻主題顏色庫配對表
const COLOR_PALETTE = [
    { id: "cls-sky", bg: "bg-sky-100", text: "text-sky-700", hex: "#0284c7" },
    { id: "cls-indigo", bg: "bg-indigo-100", text: "text-indigo-700", hex: "#4f46e5" },
    { id: "cls-emerald", bg: "bg-emerald-100", text: "text-emerald-700", hex: "#059669" },
    { id: "cls-amber", bg: "bg-amber-100", text: "text-amber-700", hex: "#d97706" },
    { id: "cls-rose", bg: "bg-rose-100", text: "text-rose-700", hex: "#e11d48" },
    { id: "cls-purple", bg: "bg-purple-100", text: "text-purple-700", hex: "#9333ea" },
    { id: "cls-teal", bg: "bg-teal-100", text: "text-teal-700", hex: "#0d9488" },
    { id: "cls-orange", bg: "bg-orange-100", text: "text-orange-700", hex: "#ea580c" },
    { id: "cls-pink", bg: "bg-pink-100", text: "text-pink-700", hex: "#db2777" },
    { id: "cls-blue", bg: "bg-blue-100", text: "text-blue-700", hex: "#2563eb" },
    { id: "cls-violet", bg: "bg-violet-100", text: "text-violet-700", hex: "#7c3aed" },
    { id: "cls-cyan", bg: "bg-cyan-100", text: "text-cyan-700", hex: "#0891b2" }
];

// 預設核心類型標籤池
let globalTags = [
    { id: "tag-1", name: "交通", colorId: "cls-sky" },
    { id: "tag-2", name: "航班", colorId: "cls-indigo" },
    { id: "tag-3", name: "餐飲", colorId: "cls-amber" },
    { id: "tag-4", name: "景點", colorId: "cls-emerald" },
    { id: "tag-5", name: "住宿", colorId: "cls-purple" },
    { id: "tag-6", name: "遊樂園", colorId: "cls-rose" }
];

// 核心初始化資料庫 (包含你指定的大阪原始班機與影城排程資料)
let appData = {
    trips: [
        {
            id: "trip-osaka-2026",
            name: "大阪五日遊",
            startDate: "2026-08-11",
            days: 5,
            events: [
                { id: "e-1", dayIndex: 0, hour: "08", min: "10", title: "搭乘星宇航空客機 (JX820)", tagId: "tag-2", location: "桃園國際機場", note: "預計 08:10 起飛，前往大阪關西國際機場 (KIX)。\n請提早2-3小時抵達機場辦理登機與行李託運。" },
                { id: "e-2", dayIndex: 0, hour: "12", min: "00", title: "抵達關西國際機場", tagId: "tag-1", location: "關西國際機場", note: "出關後前往搭乘聯外交通工具進入大阪市區。" },
                { id: "e-3", dayIndex: 0, hour: "15", min: "00", title: "飯店 Check-in 放置行李", tagId: "tag-5", location: "Hotel Gran Resort Osaka", note: "辦理入住，稍作休息後開始市區漫步與美食行程。" },
                
                { id: "e-4", dayIndex: 1, hour: "08", min: "00", title: "前往日本環球影城 (USJ)", tagId: "tag-6", location: "日本環球影城", note: "持門票與快速通關券準備入場！" },
                { id: "e-5", dayIndex: 1, hour: "10", min: "20", title: "超級任天堂世界™ 區域入場限制時間", tagId: "tag-6", location: "超級任天堂世界", note: "★快速通關規定時間，由此時間起可進入馬利歐園區。" },
                { id: "e-6", dayIndex: 1, hour: "10", min: "40", title: "耀西冒險 快速通關體驗", tagId: "tag-6", location: "耀西冒險", note: "10:40 - 11:10 區內必須至設施報到體驗。" },
                { id: "e-7", dayIndex: 1, hour: "11", min: "10", title: "瑪利歐賽車～庫巴的挑戰書～ 體驗", tagId: "tag-6", location: "瑪利歐賽車", note: "11:10 - 11:40 區內至設施快速通關報到。" },
                { id: "e-8", dayIndex: 1, hour: "13", min: "00", title: "園區內美味午餐時間", tagId: "tag-3", location: "奇諾比奧咖啡店", note: "享用馬利歐主題餐點。" },
                { id: "e-9", dayIndex: 1, hour: "16", min: "50", title: "哈利波特魔法世界™ 區域入場時間", tagId: "tag-6", location: "哈利波特的魔法世界", note: "★快速通關限制時段進入魔法世界。" },
                { id: "e-10", dayIndex: 1, hour: "17", min: "10", title: "鷹馬的飛行 快速通關體驗", tagId: "tag-6", location: "鷹馬的飛行", note: "17:10 - 17:40 區內報到遊玩。" },
                { id: "e-11", dayIndex: 1, hour: "17", min: "40", title: "哈利波特禁忌之旅™ 體驗", tagId: "tag-6", location: "哈利波特禁忌之旅", note: "17:40 - 18:10 區內報到，享受魔法翱翔。" },
                
                { id: "e-12", dayIndex: 4, hour: "14", min: "00", title: "抵達關西機場辦理登機", tagId: "tag-2", location: "關西國際機場", note: "準備搭乘回程星宇航空班機，可做免稅品採購。" }
            ],
            checklist: [
                { id: "c-1", type: "prep", text: "確認護照效期大於六個月", done: true },
                { id: "c-2", type: "prep", text: "列印環球影城門票與Express Pass 7 QR碼", done: true },
                { id: "c-3", type: "prep", text: "投保旅遊平安險與不便險", done: false },
                { id: "c-4", type: "luggage", text: "行動電源、日規變壓外接頭", done: false },
                { id: "c-5", type: "luggage", text: "個人換洗衣物五天份與慢跑鞋", done: true }
            ],
            vouchers: [
                { id: "v-1", name: "星宇航空來回機票電子憑證", code: "STAR-JX820-KIX", note: "去程：8/11 JX820 08:10起飛\n回程：8/15 班機依航司當日通知為準" },
                { id: "v-2", name: "環球影城 Express Pass 7 快速通關券", code: "USJ-EP7-20260812", note: "包含瑪利歐賽車、禁忌之旅、耀西冒險等特定時段快速通行權。" }
            ]
        }
    ]
};

// 全局控管核心變數
let currentTripId = null;
let currentDayIndex = 0;
let currentChecklistType = "prep";
let activeSelectedColorId = "cls-sky";
let confirmActionCallback = null;

// 頁面初次加載
window.onload = function() {
    initTimeSelectOptions();
    initColorPickerGrid();
    renderTripCards();
};

// 輪條式下拉時間選項生成
function initTimeSelectOptions() {
    const hSelect = document.getElementById("form-event-hour");
    const mSelect = document.getElementById("form-event-min");
    hSelect.innerHTML = "";
    mSelect.innerHTML = "";
    for(let i=0; i<24; i++) {
        let hStr = i < 10 ? "0"+i : ""+i;
        hSelect.innerHTML += `<option value="${hStr}">${hStr} 點</option>`;
    }
    for(let i=0; i<60; i+=5) { 
        let mStr = i < 10 ? "0"+i : ""+i;
        mSelect.innerHTML += `<option value="${mStr}">${mStr} 分</option>`;
    }
}

// 顏色選擇盤介面渲染
function initColorPickerGrid() {
    const grid = document.getElementById("tag-color-picker-grid");
    grid.innerHTML = "";
    COLOR_PALETTE.forEach(c => {
        grid.innerHTML += `
            <button type="button" onclick="selectTagColorId('${c.id}')" id="cp-${c.id}" class="w-full h-8 rounded-lg ${c.bg} border-2 border-transparent transition focus:outline-none"></button>
        `;
    });
    selectTagColorId("cls-sky");
}

function selectTagColorId(cid) {
    COLOR_PALETTE.forEach(c => {
        const btn = document.getElementById(`cp-${c.id}`);
        if(btn) {
            btn.style.borderColor = (c.id === cid) ? "#0f172a" : "transparent";
        }
    });
    activeSelectedColorId = cid;
}

// 安全刪除二次彈窗觸發器
function triggerConfirmModal(message, onConfirm) {
    document.getElementById("confirm-modal-text").innerText = message;
    document.getElementById("modal-confirm").classList.remove("hidden");
    confirmActionCallback = onConfirm;
}

function closeConfirmModal(isConfirmed) {
    document.getElementById("modal-confirm").classList.add("hidden");
    if(isConfirmed && confirmActionCallback) confirmActionCallback();
    confirmActionCallback = null;
}

// 頁面主分頁路由器切換
function goToHome() {
    document.getElementById("page-home").classList.remove("hidden");
    document.getElementById("page-detail").classList.add("hidden");
    document.getElementById("nav-trip-title").classList.add("hidden");
    currentTripId = null;
    renderTripCards();
}

function goToDetail(tripId) {
    currentTripId = tripId;
    const trip = appData.trips.find(t => t.id === tripId);
    if(!trip) return;
    document.getElementById("page-home").classList.add("hidden");
    document.getElementById("page-detail").classList.remove("hidden");
    document.getElementById("nav-trip-title").innerText = trip.name;
    document.getElementById("nav-trip-title").classList.remove("hidden");
    document.getElementById("detail-trip-name").innerText = trip.name;
    currentDayIndex = 0;
    switchSubTab("itinerary");
}

function switchSubTab(subTab) {
    ["itinerary", "checklist", "vouchers"].forEach(tab => {
        const page = document.getElementById(`sub-page-${tab}`);
        const btn = document.getElementById(`tab-btn-${tab}`);
        if(tab === subTab) {
            page.classList.remove("hidden");
            btn.className = "flex-1 py-2.5 text-center font-medium rounded-lg transition text-sky-600 bg-sky-50";
        } else {
            page.classList.add("hidden");
            btn.className = "flex-1 py-2.5 text-center font-medium rounded-lg transition text-slate-600 hover:bg-slate-50";
        }
    });
    if(subTab === "itinerary") renderItineraryModule();
    if(subTab === "checklist") renderChecklistModule();
    if(subTab === "vouchers") renderVouchersModule();
}

// ================= 核心渲染模組群 =================
function renderTripCards() {
    const container = document.getElementById("trip-list-container");
    container.innerHTML = "";
    if(appData.trips.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12 bg-white rounded-card border border-slate-200"><p class="text-slate-400 text-sm">目前還沒有旅程規劃，點擊按鈕新增！</p></div>`;
        return;
    }
    appData.trips.forEach(trip => {
        let endD = new Date(trip.startDate);
        endD.setDate(endD.getDate() + (trip.days - 1));
        let endStr = endD.toISOString().split('T')[0];
        container.innerHTML += `
            <div class="bg-white border border-slate-200 rounded-card shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group">
                <div class="p-5 cursor-pointer" onclick="goToDetail('${trip.id}')">
                    <div class="flex items-center justify-between mb-2">
                        <span class="bg-sky-50 text-sky-700 font-bold text-xs px-2.5 py-1 rounded-md"><i class="fa-solid fa-plane-departure mr-1"></i>${trip.days} 天</span>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition mb-2">${trip.name}</h3>
                    <div class="text-slate-500 text-xs flex items-center space-x-1"><i class="fa-regular fa-calendar-minus"></i><span>${trip.startDate} ~ ${endStr}</span></div>
                </div>
                <div class="bg-slate-50 px-4 py-2.5 border-t border-slate-100 flex justify-end space-x-4 text-xs">
                    <button onclick="openTripModal('${trip.id}')" class="text-indigo-600 hover:text-indigo-800 font-medium"><i class="fa-solid fa-pen-to-square mr-0.5"></i>編輯</button>
                    <button onclick="deleteTripCard('${trip.id}')" class="text-rose-600 hover:text-rose-800 font-medium"><i class="fa-solid fa-trash mr-0.5"></i>刪除</button>
                </div>
            </div>
        `;
    });
}

function openTripModal(tripId = null) {
    document.getElementById("modal-trip").classList.remove("hidden");
    if(tripId) {
        document.getElementById("modal-trip-title").innerText = "修改旅遊計畫";
        const trip = appData.trips.find(t => t.id === tripId);
        document.getElementById("form-trip-id").value = trip.id;
        document.getElementById("form-trip-name").value = trip.name;
        document.getElementById("form-trip-start").value = trip.startDate;
        document.getElementById("form-trip-days").value = trip.days;
    } else {
        document.getElementById("modal-trip-title").innerText = "新增旅遊計畫";
        document.getElementById("form-trip-id").value = "";
        document.getElementById("form-trip-name").value = "";
        document.getElementById("form-trip-start").value = new Date().toISOString().split('T')[0];
        document.getElementById("form-trip-days").value = 5;
    }
}

function closeTripModal() { document.getElementById("modal-trip").classList.add("hidden"); }

function saveTripData() {
    const id = document.getElementById("form-trip-id").value;
    const name = document.getElementById("form-trip-name").value.trim() || "未命名旅程";
    const startDate = document.getElementById("form-trip-start").value;
    const days = parseInt(document.getElementById("form-trip-days").value) || 1;

    if(!id) {
        appData.trips.push({ id: "trip-" + Date.now(), name, startDate, days, events: [], checklist: [], vouchers: [] });
    } else {
        const trip = appData.trips.find(t => t.id === id);
        if(trip) { trip.name = name; trip.startDate = startDate; trip.days = days; }
    }
    closeTripModal();
    renderTripCards();
}

function deleteTripCard(tripId) {
    triggerConfirmModal("確定要刪除整個旅程嗎？這將會一併清除該行程下所有的安排！", function() {
        appData.trips = appData.trips.filter(t => t.id !== tripId);
        renderTripCards();
    });
}

// 行程詳細天數排程
function renderItineraryModule() {
    const trip = appData.trips.find(t => t.id === currentTripId);
    if(!trip) return;
    if(currentDayIndex >= trip.days) currentDayIndex = 0;

    const tabsContainer = document.getElementById("day-tabs-container");
    tabsContainer.innerHTML = "";
    for(let i=0; i<trip.days; i++) {
        tabsContainer.innerHTML += `
            <button onclick="selectDayTab(${i})" class="px-4 py-2 rounded-xl text-sm font-bold transition flex-shrink-0 ${i === currentDayIndex ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200'}">Day ${i+1}</button>
        `;
    }

    document.getElementById("current-day-badge").innerText = `DAY ${currentDayIndex + 1}`;
    let activeDate = new Date(trip.startDate);
    activeDate.setDate(activeDate.getDate() + currentDayIndex);
    document.getElementById("current-day-date").innerText = activeDate.toISOString().split('T')[0];

    const timeline = document.getElementById("event-timeline-container");
    timeline.innerHTML = "";
    let dayEvents = trip.events.filter(e => e.dayIndex === currentDayIndex);
    dayEvents.sort((a,b) => (a.hour + ":" + a.min).localeCompare(b.hour + ":" + b.min));

    if(dayEvents.length === 0) {
        timeline.innerHTML = `<div class="text-center py-8 text-slate-400 text-xs">這天還沒有排行程。</div>`;
        return;
    }

    dayEvents.forEach(ev => {
        const tag = globalTags.find(t => t.id === ev.tagId) || { name: '無分類', colorId: 'cls-sky' };
        const colorConfig = COLOR_PALETTE.find(c => c.id === tag.colorId) || COLOR_PALETTE[0];
        let mapButtonHtml = ev.location ? `
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.location)}" target="_blank" class="inline-flex items-center space-x-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md border border-emerald-200 mt-2 font-medium"><i class="fa-solid fa-map-location-dot"></i><span>導航至：${ev.location}</span></a>
        ` : '';

        timeline.innerHTML += `
            <div class="relative group">
                <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white ring-4 ring-white"></div>
                <div onclick="openViewerModal('${ev.title}', \`時間：${ev.hour}:${ev.min}\\n類型：${tag.name}\\n地點：${ev.location || '無'}\\n\\n【詳細備註】\\n${ev.note || '無備註'}\`)" class="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-xs hover:border-indigo-200 hover:bg-indigo-50/20 transition cursor-pointer">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-2">
                            <span class="font-bold text-slate-900 text-base">${ev.hour}:${ev.min}</span>
                            <span class="${colorConfig.bg} ${colorConfig.text} text-[10px] px-2 py-0.5 rounded-md font-bold">${tag.name}</span>
                        </div>
                        <div class="flex space-x-3 text-xs" onclick="event.stopPropagation()">
                            <button onclick="openEventModal('${ev.id}')" class="text-indigo-600 font-medium"><i class="fa-solid fa-pen mr-0.5"></i>編輯</button>
                            <button onclick="deleteEventItem('${ev.id}')" class="text-rose-600 font-medium"><i class="fa-solid fa-trash-can mr-0.5"></i>刪除</button>
                        </div>
                    </div>
                    <h4 class="font-bold text-slate-800 text-sm mt-2">${ev.title}</h4>
                    ${ev.note ? `<p class="text-slate-500 text-xs mt-1 truncate">${ev.note}</p>` : ''}
                    ${mapButtonHtml}
                </div>
            </div>
        `;
    });
    renderTagPoolDisplay();
}

function selectDayTab(idx) { currentDayIndex = idx; renderItineraryModule(); }
function renderTagPoolDisplay() {
    const pool = document.getElementById("tag-display-pool");
    pool.innerHTML = "";
    globalTags.forEach(t => {
        const c = COLOR_PALETTE.find(cp => cp.id === t.colorId) || COLOR_PALETTE[0];
        pool.innerHTML += `<span class="${c.bg} ${c.text} text-xs px-2.5 py-1 rounded-md font-medium border border-black/5">${t.name}</span>`;
    });
}

function openEventModal(eventId = null) {
    const tagSelect = document.getElementById("form-event-tag");
    tagSelect.innerHTML = "";
    globalTags.forEach(t => { tagSelect.innerHTML += `<option value="${t.id}">${t.name}</option>`; });
    document.getElementById("modal-event").classList.remove("hidden");
    const trip = appData.trips.find(t => t.id === currentTripId);

    if(eventId) {
        document.getElementById("modal-event-title").innerText = "編輯行程點";
        const ev = trip.events.find(e => e.id === eventId);
        document.getElementById("form-event-id").value = ev.id;
        document.getElementById("form-event-hour").value = ev.hour;
        document.getElementById("form-event-min").value = ev.min;
        document.getElementById("form-event-title-input").value = ev.title;
        document.getElementById("form-event-tag").value = ev.tagId;
        document.getElementById("form-event-location").value = ev.location || "";
        document.getElementById("form-event-note").value = ev.note || "";
    } else {
        document.getElementById("modal-event-title").innerText = "新增行程點";
        document.getElementById("form-event-id").value = "";
        document.getElementById("form-event-hour").value = "08";
        document.getElementById("form-event-min").value = "00";
        document.getElementById("form-event-title-input").value = "";
        document.getElementById("form-event-location").value = "";
        document.getElementById("form-event-note").value = "";
    }
}

function closeEventModal() { document.getElementById("modal-event").classList.add("hidden"); }

function saveEventData() {
    const trip = appData.trips.find(t => t.id === currentTripId);
    const id = document.getElementById("form-event-id").value;
    const p = {
        id: id || "ev-" + Date.now(), dayIndex: currentDayIndex,
        hour: document.getElementById("form-event-hour").value,
        min: document.getElementById("form-event-min").value,
        title: document.getElementById("form-event-title-input").value.trim() || "新活動",
        tagId: document.getElementById("form-event-tag").value,
        location: document.getElementById("form-event-location").value.trim(),
        note: document.getElementById("form-event-note").value.trim()
    };
    if(!id) { trip.events.push(p); } else { const idx = trip.events.findIndex(e => e.id === id); if(idx!==-1) trip.events[idx] = p; }
    closeEventModal();
    renderItineraryModule();
}

function deleteEventItem(eventId) {
    triggerConfirmModal("是否確定要刪除這項行程點？", function() {
        const trip = appData.trips.find(t => t.id === currentTripId);
        trip.events = trip.events.filter(e => e.id !== eventId);
        renderItineraryModule();
    });
}

// 自訂分類標籤管理
function openTagManagerModal() { document.getElementById("modal-tag-manager").classList.remove("hidden"); resetTagForm(); renderTagManagerList(); }
function closeTagManagerModal() { document.getElementById("modal-tag-manager").classList.add("hidden"); }
function resetTagForm() { document.getElementById("form-tag-id").value = ""; document.getElementById("form-tag-name").value = ""; selectTagColorId("cls-sky"); }
function renderTagManagerList() {
    const container = document.getElementById("tag-manager-list"); container.innerHTML = "";
    globalTags.forEach(t => {
        const c = COLOR_PALETTE.find(cp => cp.id === t.colorId) || COLOR_PALETTE[0];
        container.innerHTML += `
            <div class="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg">
                <span class="${c.bg} ${c.text} text-xs px-2 py-0.5 rounded font-bold">${t.name}</span>
                <div class="flex space-x-3 text-xs">
                    <button onclick="editTagItem('${t.id}')" class="text-indigo-600">修改</button>
                    <button onclick="deleteTagItem('${t.id}')" class="text-rose-600">刪除</button>
                </div>
            </div>`;
    });
}

function editTagItem(tid) { const tag = globalTags.find(t => t.id === tid); if(!tag) return; document.getElementById("form-tag-id").value = tag.id; document.getElementById("form-tag-name").value = tag.name; selectTagColorId(tag.colorId); }
function saveTagItem() {
    const id = document.getElementById("form-tag-id").value; const name = document.getElementById("form-tag-name").value.trim(); if(!name) return;
    if(!id) { globalTags.push({ id: "tag-" + Date.now(), name, colorId: activeSelectedColorId }); } else { const tag = globalTags.find(t => t.id === id); if(tag) { tag.name = name; tag.colorId = activeSelectedColorId; } }
    resetTagForm(); renderTagManagerList(); renderItineraryModule();
}
function deleteTagItem(tid) { triggerConfirmModal("確定刪除此分類標籤嗎？", function() { globalTags = globalTags.filter(t => t.id !== tid); renderTagManagerList(); renderItineraryModule(); }); }

// 備忘清單
function switchChecklistType(type) { currentChecklistType = type; switchChecklistTypeUI(); renderChecklistModule(); }
function switchChecklistTypeUI() {
    const p = document.getElementById("chk-tab-prep"); const l = document.getElementById("chk-tab-luggage");
    if(currentChecklistType === "prep") { p.className = "border-b-2 border-sky-600 text-sky-600 px-4 py-2 font-medium text-sm transition"; l.className = "border-b-2 border-transparent text-slate-500 px-4 py-2 font-medium text-sm transition"; }
    else { l.className = "border-b-2 border-sky-600 text-sky-600 px-4 py-2 font-medium text-sm transition"; p.className = "border-b-2 border-transparent text-slate-500 px-4 py-2 font-medium text-sm transition"; }
}
function renderChecklistModule() {
    const trip = appData.trips.find(t => t.id === currentTripId); if(!trip) return;
    const container = document.getElementById("checklist-items-container"); container.innerHTML = "";
    let items = trip.checklist.filter(c => c.type === currentChecklistType);
    document.getElementById("checklist-count").innerText = `共 ${items.length} 項`;
    if(items.length === 0) { container.innerHTML = `<div class="text-slate-400 text-xs text-center py-4">目前尚無項目。</div>`; return; }
    items.forEach(item => {
        container.innerHTML += `
            <div class="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <label class="flex items-center space-x-3 cursor-pointer flex-1">
                    <input type="checkbox" onchange="toggleChecklistDone('${item.id}', this.checked)" ${item.done ? 'checked' : ''} class="w-4 h-4 rounded text-sky-600">
                    <span class="text-sm ${item.done ? 'line-through text-slate-400' : 'text-slate-700'}">${item.text}</span>
                </label>
                <div class="flex space-x-3 text-xs pl-2">
                    <button onclick="openChecklistModal('${item.id}')" class="text-indigo-600"><i class="fa-solid fa-pen mr-0.5"></i>編輯</button>
                    <button onclick="deleteChecklistItem('${item.id}')" class="text-rose-600"><i class="fa-solid fa-trash-can mr-0.5"></i>刪除</button>
                </div>
            </div>`;
    });
}

function toggleChecklistDone(id, isChecked) { const trip = appData.trips.find(t => t.id === currentTripId); const item = trip.checklist.find(c => c.id === id); if(item) { item.done = isChecked; renderChecklistModule(); } }
function openChecklistModal(id = null) {
    document.getElementById("modal-checklist").remove && document.getElementById("modal-checklist").classList.remove("hidden");
    if(id) {
        const trip = appData.trips.find(t => t.id === currentTripId); const item = trip.checklist.find(c => c.id === id);
        document.getElementById("form-checklist-id").value = item.id; document.getElementById("form-checklist-text").value = item.text;
    } else { document.getElementById("form-checklist-id").value = ""; document.getElementById("form-checklist-text").value = ""; }
}
function closeChecklistModal() { document.getElementById("modal-checklist").classList.add("hidden"); }
function saveChecklistItem() {
    const trip = appData.trips.find(t => t.id === currentTripId); const id = document.getElementById("form-checklist-id").value; const text = document.getElementById("form-checklist-text").value.trim() || "新增備忘";
    if(!id) { trip.checklist.push({ id: "chk-" + Date.now(), type: currentChecklistType, text, done: false }); } else { const item = trip.checklist.find(c => c.id === id); if(item) item.text = text; }
    closeChecklistModal(); renderChecklistModule();
}
function deleteChecklistItem(id) { triggerConfirmModal("確定刪除清單項目嗎？", function() { const trip = appData.trips.find(t => t.id === currentTripId); trip.checklist = trip.checklist.filter(c => c.id !== id); renderChecklistModule(); }); }

// 憑證管理
function renderVouchersModule() {
    const trip = appData.trips.find(t => t.id === currentTripId); if(!trip) return;
    const container = document.getElementById("vouchers-container"); container.innerHTML = "";
    if(trip.vouchers.length === 0) { container.innerHTML = `<div class="col-span-full text-slate-400 text-xs text-center py-4">目前尚無憑證。</div>`; return; }
    trip.vouchers.forEach(v => {
        container.innerHTML += `
            <div onclick="openViewerModal('${v.name}', \`序號代碼：${v.code}\\n\\n【詳細備註】\\n${v.note || '無'}\`)" class="bg-white border border-slate-200 p-4 rounded-xl hover:border-indigo-300 transition cursor-pointer flex flex-col justify-between space-y-3">
                <div>
                    <div class="flex items-center space-x-2">
                        <div class="p-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm"><i class="fa-solid fa-qrcode"></i></div>
                        <h4 class="font-bold text-slate-800 text-sm">${v.name}</h4>
                    </div>
                    <div class="mt-2 bg-slate-50 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-600 truncate">序號: ${v.code}</div>
                </div>
                <div class="flex justify-end space-x-3 text-xs border-t border-slate-100 pt-2" onclick="event.stopPropagation()">
                    <button onclick="openVoucherModal('${v.id}')" class="text-indigo-600"><i class="fa-solid fa-pen mr-0.5"></i>編輯</button>
                    <button onclick="deleteVoucherItem('${v.id}')" class="text-rose-600"><i class="fa-solid fa-trash-can mr-0.5"></i>刪除</button>
                </div>
            </div>`;
    });
}

function openVoucherModal(id = null) {
    document.getElementById("modal-voucher").classList.remove("hidden");
    if(id) {
        const trip = appData.trips.find(t => t.id === currentTripId); const v = trip.vouchers.find(vo => vo.id === id);
        document.getElementById("form-voucher-id").value = v.id; document.getElementById("form-voucher-name").value = v.name; document.getElementById("form-voucher-code").value = v.code; document.getElementById("form-voucher-note").value = v.note || "";
    } else { document.getElementById("form-voucher-id").value = ""; document.getElementById("form-voucher-name").value = ""; document.getElementById("form-voucher-code").value = ""; document.getElementById("form-voucher-note").value = ""; }
}
function closeVoucherModal() { document.getElementById("modal-voucher").classList.add("hidden"); }
function saveVoucherItem() {
    const trip = appData.trips.find(t => t.id === currentTripId); const id = document.getElementById("form-voucher-id").value;
    const name = document.getElementById("form-voucher-name").value.trim() || "電子憑證"; const code = document.getElementById("form-voucher-code").value.trim() || "無"; const note = document.getElementById("form-voucher-note").value.trim();
    if(!id) { trip.vouchers.push({ id: "vouc-" + Date.now(), name, code, note }); } else { const v = trip.vouchers.find(vo => vo.id === id); if(v) { v.name = name; v.code = code; v.note = note; } }
    closeVoucherModal(); renderVouchersModule();
}
function deleteVoucherItem(id) { triggerConfirmModal("確定要刪除這項重要的票券憑證嗎？", function() { const trip = appData.trips.find(t => t.id === currentTripId); trip.vouchers = trip.vouchers.filter(vo => vo.id !== id); renderVouchersModule(); }); }

// 全局詳細查看彈出框
function openViewerModal(title, text) { document.getElementById("view-modal-title").innerText = title; document.getElementById("view-modal-body").innerText = text; document.getElementById("modal-viewer").classList.remove("hidden"); }
function closeViewerModal() { document.getElementById("modal-viewer").classList.add("hidden"); }