    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzeFPwtxyBIQMwMxYTahcl6lFnfi1-ajc_UJP6T1DAkm0SLLow_my2FR4NfMZuxX40/exec";
    const CASES = [{"study_id":"H11-001","attribute":"Big lips","source":"assets/H11-001/source.png","A":"assets/H11-001/A.png","B":"assets/H11-001/B.png"},{"study_id":"H11-002","attribute":"Big lips","source":"assets/H11-002/source.png","A":"assets/H11-002/A.png","B":"assets/H11-002/B.png"},{"study_id":"H11-003","attribute":"Big lips","source":"assets/H11-003/source.png","A":"assets/H11-003/A.png","B":"assets/H11-003/B.png"},{"study_id":"H11-004","attribute":"Big lips","source":"assets/H11-004/source.png","A":"assets/H11-004/A.png","B":"assets/H11-004/B.png"},{"study_id":"H11-005","attribute":"Big lips","source":"assets/H11-005/source.png","A":"assets/H11-005/A.png","B":"assets/H11-005/B.png"},{"study_id":"H11-006","attribute":"Big lips","source":"assets/H11-006/source.png","A":"assets/H11-006/A.png","B":"assets/H11-006/B.png"},{"study_id":"H11-007","attribute":"Big lips","source":"assets/H11-007/source.png","A":"assets/H11-007/A.png","B":"assets/H11-007/B.png"},{"study_id":"H11-008","attribute":"Big lips","source":"assets/H11-008/source.png","A":"assets/H11-008/A.png","B":"assets/H11-008/B.png"},{"study_id":"H11-009","attribute":"Big lips","source":"assets/H11-009/source.png","A":"assets/H11-009/A.png","B":"assets/H11-009/B.png"},{"study_id":"H11-010","attribute":"Big lips","source":"assets/H11-010/source.png","A":"assets/H11-010/A.png","B":"assets/H11-010/B.png"},{"study_id":"H11-011","attribute":"Bushy eyebrows","source":"assets/H11-011/source.png","A":"assets/H11-011/A.png","B":"assets/H11-011/B.png"},{"study_id":"H11-012","attribute":"Bushy eyebrows","source":"assets/H11-012/source.png","A":"assets/H11-012/A.png","B":"assets/H11-012/B.png"},{"study_id":"H11-013","attribute":"Bushy eyebrows","source":"assets/H11-013/source.png","A":"assets/H11-013/A.png","B":"assets/H11-013/B.png"},{"study_id":"H11-014","attribute":"Bushy eyebrows","source":"assets/H11-014/source.png","A":"assets/H11-014/A.png","B":"assets/H11-014/B.png"},{"study_id":"H11-015","attribute":"Bushy eyebrows","source":"assets/H11-015/source.png","A":"assets/H11-015/A.png","B":"assets/H11-015/B.png"},{"study_id":"H11-016","attribute":"Bushy eyebrows","source":"assets/H11-016/source.png","A":"assets/H11-016/A.png","B":"assets/H11-016/B.png"},{"study_id":"H11-017","attribute":"Bushy eyebrows","source":"assets/H11-017/source.png","A":"assets/H11-017/A.png","B":"assets/H11-017/B.png"},{"study_id":"H11-018","attribute":"Bushy eyebrows","source":"assets/H11-018/source.png","A":"assets/H11-018/A.png","B":"assets/H11-018/B.png"},{"study_id":"H11-019","attribute":"Bushy eyebrows","source":"assets/H11-019/source.png","A":"assets/H11-019/A.png","B":"assets/H11-019/B.png"},{"study_id":"H11-020","attribute":"Bushy eyebrows","source":"assets/H11-020/source.png","A":"assets/H11-020/A.png","B":"assets/H11-020/B.png"},{"study_id":"H11-021","attribute":"Mouth open","source":"assets/H11-021/source.png","A":"assets/H11-021/A.png","B":"assets/H11-021/B.png"},{"study_id":"H11-022","attribute":"Mouth open","source":"assets/H11-022/source.png","A":"assets/H11-022/A.png","B":"assets/H11-022/B.png"},{"study_id":"H11-023","attribute":"Mouth open","source":"assets/H11-023/source.png","A":"assets/H11-023/A.png","B":"assets/H11-023/B.png"},{"study_id":"H11-024","attribute":"Mouth open","source":"assets/H11-024/source.png","A":"assets/H11-024/A.png","B":"assets/H11-024/B.png"},{"study_id":"H11-025","attribute":"Mouth open","source":"assets/H11-025/source.png","A":"assets/H11-025/A.png","B":"assets/H11-025/B.png"},{"study_id":"H11-026","attribute":"Mouth open","source":"assets/H11-026/source.png","A":"assets/H11-026/A.png","B":"assets/H11-026/B.png"},{"study_id":"H11-027","attribute":"Mouth open","source":"assets/H11-027/source.png","A":"assets/H11-027/A.png","B":"assets/H11-027/B.png"},{"study_id":"H11-028","attribute":"Mouth open","source":"assets/H11-028/source.png","A":"assets/H11-028/A.png","B":"assets/H11-028/B.png"},{"study_id":"H11-029","attribute":"Mouth open","source":"assets/H11-029/source.png","A":"assets/H11-029/A.png","B":"assets/H11-029/B.png"},{"study_id":"H11-030","attribute":"Mouth open","source":"assets/H11-030/source.png","A":"assets/H11-030/A.png","B":"assets/H11-030/B.png"},{"study_id":"H11-031","attribute":"Wearing hat","source":"assets/H11-031/source.png","A":"assets/H11-031/A.png","B":"assets/H11-031/B.png"},{"study_id":"H11-032","attribute":"Wearing hat","source":"assets/H11-032/source.png","A":"assets/H11-032/A.png","B":"assets/H11-032/B.png"},{"study_id":"H11-033","attribute":"Wearing hat","source":"assets/H11-033/source.png","A":"assets/H11-033/A.png","B":"assets/H11-033/B.png"},{"study_id":"H11-034","attribute":"Wearing hat","source":"assets/H11-034/source.png","A":"assets/H11-034/A.png","B":"assets/H11-034/B.png"},{"study_id":"H11-035","attribute":"Wearing hat","source":"assets/H11-035/source.png","A":"assets/H11-035/A.png","B":"assets/H11-035/B.png"},{"study_id":"H11-036","attribute":"Wearing hat","source":"assets/H11-036/source.png","A":"assets/H11-036/A.png","B":"assets/H11-036/B.png"},{"study_id":"H11-037","attribute":"Wearing hat","source":"assets/H11-037/source.png","A":"assets/H11-037/A.png","B":"assets/H11-037/B.png"},{"study_id":"H11-038","attribute":"Wearing hat","source":"assets/H11-038/source.png","A":"assets/H11-038/A.png","B":"assets/H11-038/B.png"},{"study_id":"H11-039","attribute":"Wearing hat","source":"assets/H11-039/source.png","A":"assets/H11-039/A.png","B":"assets/H11-039/B.png"},{"study_id":"H11-040","attribute":"Wearing hat","source":"assets/H11-040/source.png","A":"assets/H11-040/A.png","B":"assets/H11-040/B.png"}];
    const QUESTIONS = [
      ["identity_preference", "Identitas paling mirip source?"],
      ["target_preference", "Atribut target paling jelas?"],
      ["overall_preference", "Overall paling baik?"]
    ];
    const VALUES = ["A", "B", "Tie", "Unclear"];
    const STORE = "blind_ab_face_edit_h11_v1";
    const params = new URLSearchParams(location.search);

    const state = {
      annotatorId: pickAnnotatorId(),
      nickname: localStorage.getItem(`${STORE}:nickname`) || "",
      current: Number(localStorage.getItem(`${STORE}:current`) || 0),
      answers: {}
    };
    state.answers = readJson(`${STORE}:answers:${state.annotatorId}`, {});
    state.current = Math.min(Math.max(state.current, 0), CASES.length - 1);

    const $ = (id) => document.getElementById(id);
    const on = (id, event, handler) => {
      const el = $(id);
      if (el) el.addEventListener(event, handler);
    };
    let saveTimer;

    function pickAnnotatorId() {
      const fromUrl = params.get("annotator");
      if (fromUrl && /^[A-Za-z0-9_-]{2,32}$/.test(fromUrl)) {
        localStorage.setItem(`${STORE}:annotator_id`, fromUrl);
        return fromUrl;
      }
      const saved = localStorage.getItem(`${STORE}:annotator_id`);
      if (saved) return saved;
      const made = makeId();
      localStorage.setItem(`${STORE}:annotator_id`, made);
      return made;
    }

    function makeId() {
      const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      const bytes = new Uint8Array(7);
      crypto.getRandomValues(bytes);
      return "R" + Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
    }

    function readJson(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) || fallback; }
      catch { return fallback; }
    }

    function save() {
      localStorage.setItem(`${STORE}:annotator_id`, state.annotatorId);
      localStorage.setItem(`${STORE}:nickname`, state.nickname);
      localStorage.setItem(`${STORE}:current`, String(state.current));
      localStorage.setItem(`${STORE}:answers:${state.annotatorId}`, JSON.stringify(state.answers));
      const status = $("saveStatus");
      if (status) {
        status.textContent = "Draft saved";
        status.classList.add("saved");
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => status.classList.remove("saved"), 700);
      }
    }

    function answerFor(studyId) {
      state.answers[studyId] ||= {};
      return state.answers[studyId];
    }

    function complete(item) {
      const ans = state.answers[item.study_id] || {};
      return QUESTIONS.every(([key]) => VALUES.includes(ans[key]));
    }

    function completeCount() {
      return CASES.filter(complete).length;
    }

    function missingCases() {
      return CASES.map((item, index) => [item, index]).filter(([item]) => !complete(item));
    }

    function render() {
      const item = CASES[state.current];
      const ans = state.answers[item.study_id] || {};
      const count = completeCount();
      const pct = Math.round((count / CASES.length) * 100);

      $("annotatorId").textContent = state.annotatorId;
      $("nickname").value = state.nickname;
      $("caseId").textContent = `Target: ${item.attribute}`;
      $("attribute").textContent = "";
      $("caseCounter").textContent = `${state.current + 1} / ${CASES.length}`;
      $("progressPill").textContent = `${count}/${CASES.length} selesai`;
      $("progressText").textContent = `${count} dari ${CASES.length} selesai`;
      $("currentHint").textContent = `${pct}%`;
      $("progressBar").style.width = `${pct}%`;
      $("prevButton").disabled = state.current === 0;
      $("nextButton").disabled = state.current === CASES.length - 1;
      $("submitButton").disabled = count !== CASES.length || !state.nickname.trim();
      $("caseNotes").value = ans.notes || "";

      $("imageGrid").innerHTML = [
        ["Source", item.source],
        ["A", item.A],
        ["B", item.B]
      ].map(([label, src]) => `
        <figure>
          <a class="zoom-link" href="${src}" target="_blank" rel="noopener" data-zoom="${label}">
            <img src="${src}" alt="${label} image" loading="eager">
          </a>
          <figcaption>${label}</figcaption>
        </figure>`).join("");

      $("questions").innerHTML = QUESTIONS.map(([key, label]) => `
        <div class="question">
          <div class="q-label">${label}</div>
          <div class="choices" role="group" aria-label="${label}">
            ${VALUES.map((value) => `
              <button type="button" class="choice" data-choice data-key="${key}" data-value="${value}" aria-pressed="${ans[key] === value}">${value}</button>
            `).join("")}
          </div>
        </div>`).join("");

      $("caseNav").innerHTML = CASES.map((navItem, index) => `
        <button type="button" data-case-index="${index}" class="${complete(navItem) ? "done" : ""} ${index === state.current ? "current" : ""}">
          ${String(index + 1).padStart(2, "0")}
        </button>`).join("");

      renderReview();
    }

    function renderReview() {
      const missing = missingCases();
      const box = $("missingBox");
      const missingButton = $("missingButton");
      const status = $("statusText");
      $("statusText").closest(".review").classList.toggle("complete", !missing.length && !!state.nickname.trim());
      status.className = "status";
      if (missing.length) {
        box.style.display = "block";
        const labels = missing.map(([, index]) => String(index + 1).padStart(2, "0"));
        box.textContent = `Belum lengkap: ${labels.slice(0, 18).join(", ")}${missing.length > 18 ? " ..." : ""}`;
        missingButton.style.display = "inline-block";
        missingButton.textContent = `Review missing only (${missing.length})`;
        status.textContent = `${CASES.length - missing.length}/${CASES.length} complete`;
      } else if (!state.nickname.trim()) {
        box.style.display = "block";
        box.textContent = "Isi nickname atau inisial sebelum submit.";
        missingButton.style.display = "none";
        status.className = "status ready";
        status.textContent = `${CASES.length}/${CASES.length} complete. Add nickname to submit.`;
      } else {
        box.style.display = "none";
        box.textContent = "";
        missingButton.style.display = "none";
        status.className = "status ready";
        status.textContent = `${CASES.length}/${CASES.length} complete. Ready to submit.`;
      }
    }

    function nextMissingIndex() {
      for (let offset = 0; offset < CASES.length; offset++) {
        const index = (state.current + offset) % CASES.length;
        if (!complete(CASES[index])) return index;
      }
      return -1;
    }

    function clearCurrentAnswer() {
      delete state.answers[CASES[state.current].study_id];
      save();
      render();
    }

    function responseRows() {
      const submittedAt = new Date().toISOString();
      return CASES.map((item) => {
        const ans = state.answers[item.study_id] || {};
        const unclear = QUESTIONS.some(([key]) => ans[key] === "Unclear");
        return {
          annotator_id: state.annotatorId,
          study_id: item.study_id,
          identity_preference: ans.identity_preference || "",
          target_preference: ans.target_preference || "",
          overall_preference: ans.overall_preference || "",
          unclear: unclear ? "true" : "false",
          notes: ans.notes || "",
          nickname: state.nickname.trim(),
          submitted_at: submittedAt
        };
      });
    }

    async function submitToSheet() {
      const missing = missingCases();
      const status = $("statusText");
      status.className = "status";
      if (missing.length) {
        status.className = "status warn";
        status.textContent = "Lengkapi semua pilihan sebelum submit.";
        return;
      }
      if (!state.nickname.trim()) {
        status.className = "status warn";
        status.textContent = "Isi nickname atau inisial sebelum submit.";
        return;
      }
      if (!GOOGLE_SCRIPT_URL.trim()) {
        status.className = "status warn";
        status.textContent = "Submit online belum aktif.";
        return;
      }

      const payload = {
        annotator_id: state.annotatorId,
        nickname: state.nickname.trim(),
        rows: responseRows()
      };
      try {
        status.textContent = "Submitting...";
        const response = await fetch(GOOGLE_SCRIPT_URL.trim(), {
          method: "POST",
          body: new URLSearchParams({ payload: JSON.stringify(payload) })
        });
        const result = await response.json();
        if (!result.ok) throw new Error(result.error || "submit failed");
        status.textContent = "Submit terkirim.";
      } catch (err) {
        status.className = "status bad";
        status.textContent = `Submit gagal: ${err.message}`;
      }
    }

    function openZoom(link) {
      $("zoomTitle").textContent = link.dataset.zoom;
      $("zoomImage").src = link.href;
      $("zoomImage").alt = `${link.dataset.zoom} image`;
      $("zoomDialog").showModal();
    }

    document.addEventListener("click", (event) => {
      const zoom = event.target.closest("[data-zoom]");
      if (zoom) {
        event.preventDefault();
        openZoom(zoom);
        return;
      }
      const choice = event.target.closest("[data-choice]");
      if (choice) {
        const item = CASES[state.current];
        answerFor(item.study_id)[choice.dataset.key] = choice.dataset.value;
        save();
        render();
        return;
      }
      const nav = event.target.closest("[data-case-index]");
      if (nav) {
        state.current = Number(nav.dataset.caseIndex);
        save();
        render();
        scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    on("nickname", "input", (event) => {
      state.nickname = event.target.value.slice(0, 60);
      save();
      renderReview();
      $("submitButton").disabled = completeCount() !== CASES.length || !state.nickname.trim();
    });
    on("caseNotes", "input", (event) => {
      answerFor(CASES[state.current].study_id).notes = event.target.value.slice(0, 400);
      save();
    });
    on("prevButton", "click", () => { state.current = Math.max(0, state.current - 1); save(); render(); });
    on("nextButton", "click", () => { state.current = Math.min(CASES.length - 1, state.current + 1); save(); render(); });
    on("clearButton", "click", clearCurrentAnswer);
    on("submitButton", "click", submitToSheet);
    on("missingButton", "click", () => {
      const index = nextMissingIndex();
      if (index < 0) return;
      state.current = index;
      save();
      render();
      scrollTo({ top: 0, behavior: "smooth" });
    });
    on("zoomClose", "click", () => $("zoomDialog").close());
    on("zoomDialog", "click", (event) => {
      if (event.target === $("zoomDialog")) $("zoomDialog").close();
    });
    on("newIdButton", "click", () => {
      if (Object.keys(state.answers).length && !confirm("Mulai draft dengan ID baru di browser ini? Draft ID lama tetap tersimpan di browser.")) return;
      state.annotatorId = makeId();
      state.answers = readJson(`${STORE}:answers:${state.annotatorId}`, {});
      state.current = 0;
      save();
      render();
    });

    render();
