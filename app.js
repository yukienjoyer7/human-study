    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzeFPwtxyBIQMwMxYTahcl6lFnfi1-ajc_UJP6T1DAkm0SLLow_my2FR4NfMZuxX40/exec";
    const CASES = [{"study_id":"H6-001","attribute":"with bangs","source":"assets/H6-001/source.png","A":"assets/H6-001/A.png","B":"assets/H6-001/B.png"},{"study_id":"H6-002","attribute":"double chin","source":"assets/H6-002/source.png","A":"assets/H6-002/A.png","B":"assets/H6-002/B.png"},{"study_id":"H6-003","attribute":"smiling","source":"assets/H6-003/source.png","A":"assets/H6-003/A.png","B":"assets/H6-003/B.png"},{"study_id":"H6-004","attribute":"double chin","source":"assets/H6-004/source.png","A":"assets/H6-004/A.png","B":"assets/H6-004/B.png"},{"study_id":"H6-005","attribute":"smiling","source":"assets/H6-005/source.png","A":"assets/H6-005/A.png","B":"assets/H6-005/B.png"},{"study_id":"H6-006","attribute":"smiling","source":"assets/H6-006/source.png","A":"assets/H6-006/A.png","B":"assets/H6-006/B.png"},{"study_id":"H6-007","attribute":"double chin","source":"assets/H6-007/source.png","A":"assets/H6-007/A.png","B":"assets/H6-007/B.png"},{"study_id":"H6-008","attribute":"smiling","source":"assets/H6-008/source.png","A":"assets/H6-008/A.png","B":"assets/H6-008/B.png"},{"study_id":"H6-009","attribute":"double chin","source":"assets/H6-009/source.png","A":"assets/H6-009/A.png","B":"assets/H6-009/B.png"},{"study_id":"H6-010","attribute":"smiling","source":"assets/H6-010/source.png","A":"assets/H6-010/A.png","B":"assets/H6-010/B.png"},{"study_id":"H6-011","attribute":"double chin","source":"assets/H6-011/source.png","A":"assets/H6-011/A.png","B":"assets/H6-011/B.png"},{"study_id":"H6-012","attribute":"smiling","source":"assets/H6-012/source.png","A":"assets/H6-012/A.png","B":"assets/H6-012/B.png"},{"study_id":"H6-013","attribute":"smiling","source":"assets/H6-013/source.png","A":"assets/H6-013/A.png","B":"assets/H6-013/B.png"},{"study_id":"H6-014","attribute":"smiling","source":"assets/H6-014/source.png","A":"assets/H6-014/A.png","B":"assets/H6-014/B.png"},{"study_id":"H6-015","attribute":"with bangs","source":"assets/H6-015/source.png","A":"assets/H6-015/A.png","B":"assets/H6-015/B.png"},{"study_id":"H6-016","attribute":"double chin","source":"assets/H6-016/source.png","A":"assets/H6-016/A.png","B":"assets/H6-016/B.png"},{"study_id":"H6-017","attribute":"smiling","source":"assets/H6-017/source.png","A":"assets/H6-017/A.png","B":"assets/H6-017/B.png"},{"study_id":"H6-018","attribute":"smiling","source":"assets/H6-018/source.png","A":"assets/H6-018/A.png","B":"assets/H6-018/B.png"},{"study_id":"H6-019","attribute":"double chin","source":"assets/H6-019/source.png","A":"assets/H6-019/A.png","B":"assets/H6-019/B.png"},{"study_id":"H6-020","attribute":"double chin","source":"assets/H6-020/source.png","A":"assets/H6-020/A.png","B":"assets/H6-020/B.png"},{"study_id":"H6-021","attribute":"with bangs","source":"assets/H6-021/source.png","A":"assets/H6-021/A.png","B":"assets/H6-021/B.png"},{"study_id":"H6-022","attribute":"smiling","source":"assets/H6-022/source.png","A":"assets/H6-022/A.png","B":"assets/H6-022/B.png"},{"study_id":"H6-023","attribute":"double chin","source":"assets/H6-023/source.png","A":"assets/H6-023/A.png","B":"assets/H6-023/B.png"},{"study_id":"H6-024","attribute":"smiling","source":"assets/H6-024/source.png","A":"assets/H6-024/A.png","B":"assets/H6-024/B.png"},{"study_id":"H6-025","attribute":"smiling","source":"assets/H6-025/source.png","A":"assets/H6-025/A.png","B":"assets/H6-025/B.png"},{"study_id":"H6-026","attribute":"smiling","source":"assets/H6-026/source.png","A":"assets/H6-026/A.png","B":"assets/H6-026/B.png"},{"study_id":"H6-027","attribute":"double chin","source":"assets/H6-027/source.png","A":"assets/H6-027/A.png","B":"assets/H6-027/B.png"},{"study_id":"H6-028","attribute":"smiling","source":"assets/H6-028/source.png","A":"assets/H6-028/A.png","B":"assets/H6-028/B.png"},{"study_id":"H6-029","attribute":"with bangs","source":"assets/H6-029/source.png","A":"assets/H6-029/A.png","B":"assets/H6-029/B.png"},{"study_id":"H6-030","attribute":"smiling","source":"assets/H6-030/source.png","A":"assets/H6-030/A.png","B":"assets/H6-030/B.png"},{"study_id":"H6-031","attribute":"double chin","source":"assets/H6-031/source.png","A":"assets/H6-031/A.png","B":"assets/H6-031/B.png"},{"study_id":"H6-032","attribute":"double chin","source":"assets/H6-032/source.png","A":"assets/H6-032/A.png","B":"assets/H6-032/B.png"},{"study_id":"H6-033","attribute":"double chin","source":"assets/H6-033/source.png","A":"assets/H6-033/A.png","B":"assets/H6-033/B.png"},{"study_id":"H6-034","attribute":"smiling","source":"assets/H6-034/source.png","A":"assets/H6-034/A.png","B":"assets/H6-034/B.png"},{"study_id":"H6-035","attribute":"smiling","source":"assets/H6-035/source.png","A":"assets/H6-035/A.png","B":"assets/H6-035/B.png"},{"study_id":"H6-036","attribute":"smiling","source":"assets/H6-036/source.png","A":"assets/H6-036/A.png","B":"assets/H6-036/B.png"},{"study_id":"H6-037","attribute":"with bangs","source":"assets/H6-037/source.png","A":"assets/H6-037/A.png","B":"assets/H6-037/B.png"},{"study_id":"H6-038","attribute":"double chin","source":"assets/H6-038/source.png","A":"assets/H6-038/A.png","B":"assets/H6-038/B.png"},{"study_id":"H6-039","attribute":"double chin","source":"assets/H6-039/source.png","A":"assets/H6-039/A.png","B":"assets/H6-039/B.png"},{"study_id":"H6-040","attribute":"with bangs","source":"assets/H6-040/source.png","A":"assets/H6-040/A.png","B":"assets/H6-040/B.png"},{"study_id":"H6-041","attribute":"smiling","source":"assets/H6-041/source.png","A":"assets/H6-041/A.png","B":"assets/H6-041/B.png"},{"study_id":"H6-042","attribute":"with bangs","source":"assets/H6-042/source.png","A":"assets/H6-042/A.png","B":"assets/H6-042/B.png"},{"study_id":"H6-043","attribute":"double chin","source":"assets/H6-043/source.png","A":"assets/H6-043/A.png","B":"assets/H6-043/B.png"},{"study_id":"H6-044","attribute":"smiling","source":"assets/H6-044/source.png","A":"assets/H6-044/A.png","B":"assets/H6-044/B.png"},{"study_id":"H6-045","attribute":"smiling","source":"assets/H6-045/source.png","A":"assets/H6-045/A.png","B":"assets/H6-045/B.png"},{"study_id":"H6-046","attribute":"smiling","source":"assets/H6-046/source.png","A":"assets/H6-046/A.png","B":"assets/H6-046/B.png"},{"study_id":"H6-047","attribute":"with bangs","source":"assets/H6-047/source.png","A":"assets/H6-047/A.png","B":"assets/H6-047/B.png"},{"study_id":"H6-048","attribute":"double chin","source":"assets/H6-048/source.png","A":"assets/H6-048/A.png","B":"assets/H6-048/B.png"},{"study_id":"H6-049","attribute":"double chin","source":"assets/H6-049/source.png","A":"assets/H6-049/A.png","B":"assets/H6-049/B.png"},{"study_id":"H6-050","attribute":"with bangs","source":"assets/H6-050/source.png","A":"assets/H6-050/A.png","B":"assets/H6-050/B.png"},{"study_id":"H6-051","attribute":"smiling","source":"assets/H6-051/source.png","A":"assets/H6-051/A.png","B":"assets/H6-051/B.png"},{"study_id":"H6-052","attribute":"smiling","source":"assets/H6-052/source.png","A":"assets/H6-052/A.png","B":"assets/H6-052/B.png"},{"study_id":"H6-053","attribute":"smiling","source":"assets/H6-053/source.png","A":"assets/H6-053/A.png","B":"assets/H6-053/B.png"},{"study_id":"H6-054","attribute":"double chin","source":"assets/H6-054/source.png","A":"assets/H6-054/A.png","B":"assets/H6-054/B.png"},{"study_id":"H6-055","attribute":"with bangs","source":"assets/H6-055/source.png","A":"assets/H6-055/A.png","B":"assets/H6-055/B.png"},{"study_id":"H6-056","attribute":"double chin","source":"assets/H6-056/source.png","A":"assets/H6-056/A.png","B":"assets/H6-056/B.png"},{"study_id":"H6-057","attribute":"double chin","source":"assets/H6-057/source.png","A":"assets/H6-057/A.png","B":"assets/H6-057/B.png"},{"study_id":"H6-058","attribute":"smiling","source":"assets/H6-058/source.png","A":"assets/H6-058/A.png","B":"assets/H6-058/B.png"},{"study_id":"H6-059","attribute":"double chin","source":"assets/H6-059/source.png","A":"assets/H6-059/A.png","B":"assets/H6-059/B.png"},{"study_id":"H6-060","attribute":"smiling","source":"assets/H6-060/source.png","A":"assets/H6-060/A.png","B":"assets/H6-060/B.png"},{"study_id":"H6-061","attribute":"smiling","source":"assets/H6-061/source.png","A":"assets/H6-061/A.png","B":"assets/H6-061/B.png"},{"study_id":"H6-062","attribute":"with bangs","source":"assets/H6-062/source.png","A":"assets/H6-062/A.png","B":"assets/H6-062/B.png"},{"study_id":"H6-063","attribute":"smiling","source":"assets/H6-063/source.png","A":"assets/H6-063/A.png","B":"assets/H6-063/B.png"},{"study_id":"H6-064","attribute":"with bangs","source":"assets/H6-064/source.png","A":"assets/H6-064/A.png","B":"assets/H6-064/B.png"},{"study_id":"H6-065","attribute":"with bangs","source":"assets/H6-065/source.png","A":"assets/H6-065/A.png","B":"assets/H6-065/B.png"},{"study_id":"H6-066","attribute":"smiling","source":"assets/H6-066/source.png","A":"assets/H6-066/A.png","B":"assets/H6-066/B.png"},{"study_id":"H6-067","attribute":"with bangs","source":"assets/H6-067/source.png","A":"assets/H6-067/A.png","B":"assets/H6-067/B.png"},{"study_id":"H6-068","attribute":"smiling","source":"assets/H6-068/source.png","A":"assets/H6-068/A.png","B":"assets/H6-068/B.png"},{"study_id":"H6-069","attribute":"with bangs","source":"assets/H6-069/source.png","A":"assets/H6-069/A.png","B":"assets/H6-069/B.png"},{"study_id":"H6-070","attribute":"with bangs","source":"assets/H6-070/source.png","A":"assets/H6-070/A.png","B":"assets/H6-070/B.png"},{"study_id":"H6-071","attribute":"double chin","source":"assets/H6-071/source.png","A":"assets/H6-071/A.png","B":"assets/H6-071/B.png"},{"study_id":"H6-072","attribute":"double chin","source":"assets/H6-072/source.png","A":"assets/H6-072/A.png","B":"assets/H6-072/B.png"},{"study_id":"H6-073","attribute":"smiling","source":"assets/H6-073/source.png","A":"assets/H6-073/A.png","B":"assets/H6-073/B.png"},{"study_id":"H6-074","attribute":"smiling","source":"assets/H6-074/source.png","A":"assets/H6-074/A.png","B":"assets/H6-074/B.png"},{"study_id":"H6-075","attribute":"smiling","source":"assets/H6-075/source.png","A":"assets/H6-075/A.png","B":"assets/H6-075/B.png"},{"study_id":"H6-076","attribute":"double chin","source":"assets/H6-076/source.png","A":"assets/H6-076/A.png","B":"assets/H6-076/B.png"},{"study_id":"H6-077","attribute":"double chin","source":"assets/H6-077/source.png","A":"assets/H6-077/A.png","B":"assets/H6-077/B.png"},{"study_id":"H6-078","attribute":"double chin","source":"assets/H6-078/source.png","A":"assets/H6-078/A.png","B":"assets/H6-078/B.png"},{"study_id":"H6-079","attribute":"smiling","source":"assets/H6-079/source.png","A":"assets/H6-079/A.png","B":"assets/H6-079/B.png"},{"study_id":"H6-080","attribute":"double chin","source":"assets/H6-080/source.png","A":"assets/H6-080/A.png","B":"assets/H6-080/B.png"},{"study_id":"H6-081","attribute":"smiling","source":"assets/H6-081/source.png","A":"assets/H6-081/A.png","B":"assets/H6-081/B.png"},{"study_id":"H6-082","attribute":"smiling","source":"assets/H6-082/source.png","A":"assets/H6-082/A.png","B":"assets/H6-082/B.png"},{"study_id":"H6-083","attribute":"smiling","source":"assets/H6-083/source.png","A":"assets/H6-083/A.png","B":"assets/H6-083/B.png"},{"study_id":"H6-084","attribute":"smiling","source":"assets/H6-084/source.png","A":"assets/H6-084/A.png","B":"assets/H6-084/B.png"}];
    const QUESTIONS = [
      ["identity_preference", "Identitas paling mirip source?"],
      ["target_preference", "Atribut target paling jelas?"],
      ["overall_preference", "Overall paling baik?"]
    ];
    const VALUES = ["A", "B", "Tie", "Unclear"];
    const STORE = "blind_ab_face_edit_v1";
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
      return CASES.filter((item) => !complete(item)).map((item) => item.study_id);
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
        box.textContent = `Belum lengkap: ${missing.slice(0, 18).join(", ")}${missing.length > 18 ? " ..." : ""}`;
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

    function submitToSheet() {
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
      const form = document.createElement("form");
      form.method = "POST";
      form.action = GOOGLE_SCRIPT_URL.trim();
      form.target = "sheetSink";
      form.style.display = "none";
      const input = document.createElement("input");
      input.name = "payload";
      input.value = JSON.stringify(payload);
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      form.remove();
      status.textContent = "Submit terkirim.";
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
