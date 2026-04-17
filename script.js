(() => {
    /* ===== DOM Elements ===== */
    const boardEl = document.getElementById('board');
    const cells = Array.from(document.querySelectorAll('.cell'));
    const statusText = document.getElementById('status-text');
    const statusBar = document.querySelector('.status-bar');
    const winLine = document.getElementById('win-line');
    const winLineSvg = winLine.querySelector('line');
    const restartBtn = document.getElementById('restart-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const drawer = document.getElementById('settings-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');
    const modal = document.getElementById('result-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalIcon = document.getElementById('modal-icon');
    const modalBtn = document.getElementById('modal-btn');
    const scoreXEl = document.getElementById('score-x');
    const scoreOEl = document.getElementById('score-o');
    const scoreDrawEl = document.getElementById('score-draw');
    const modeSwitch = document.getElementById('mode-switch');
    const modeBtns = Array.from(document.querySelectorAll('.mode-btn'));
    const subtitle = document.getElementById('subtitle');
    const aiDifficultyGroup = document.getElementById('ai-difficulty-group');

    // Settings controls
    const langBtns = Array.from(document.querySelectorAll('#lang-segmented .seg-btn'));
    const themeBtns = Array.from(document.querySelectorAll('#theme-segmented .seg-btn'));
    const diffBtns = Array.from(document.querySelectorAll('#difficulty-segmented .seg-btn'));
    const animToggle = document.getElementById('toggle-animations');
    const soundToggle = document.getElementById('toggle-sound');

    const PLAYER_X = 'X';
    const PLAYER_O = 'O';

    /* ===== State ===== */
    let gameBoard = Array(9).fill('');
    let gameActive = true;
    let currentPlayer = PLAYER_X;
    let currentMode = 'pve';
    let scores = { X: 0, O: 0, draw: 0 };
    let aiTimer = null;
    let audioCtx = null;

    const settings = {
        lang: 'zh',
        theme: 'dark',
        animations: true,
        sound: true,
        difficulty: 'hard' // easy | medium | hard
    };

    const i18n = {
        zh: {
            'subtitle-pve': '不可战胜的 AI 对手',
            'subtitle-pvp': '好友本地对战',
            'subtitle-aivsai': '最强 AI 巅峰对决',
            'mode-pve': '人机',
            'mode-pvp': '双人',
            'mode-aivsai': 'AI 对战',
            'label-player-x': '玩家 (X)',
            'label-player-o': 'AI (O)',
            'label-player-x-ai': 'AI (X)',
            'label-player-o-ai': 'AI (O)',
            'label-player-x-pvp': '玩家 1 (X)',
            'label-player-o-pvp': '玩家 2 (O)',
            'label-draw': '平局',
            'status-your-turn': '你的回合',
            'status-ai-thinking': 'AI 思考中...',
            'status-player1-turn': '玩家 1 的回合',
            'status-player2-turn': '玩家 2 的回合',
            'status-ai-x-thinking': 'AI X 思考中...',
            'status-ai-o-thinking': 'AI O 思考中...',
            'status-draw': '平局',
            'btn-restart': '再来一局',
            'btn-play-again': '再来一局',
            'modal-game-over': '游戏结束',
            'modal-win': '恭喜获胜！',
            'modal-ai-x-wins': 'AI X 技高一筹',
            'modal-ai-o-wins': 'AI O 赢得胜利',
            'modal-player1-wins': '玩家 1 大获全胜！',
            'modal-player2-wins': '玩家 2 技高一筹！',
            'modal-you-win': '不可思议，你击败了 AI！',
            'modal-ai-wins': '别气馁，再来一局！',
            'modal-draw-pvp': '旗鼓相当的对手！',
            'modal-draw-aivsai': '两大 AI 势均力敌',
            'settings-title': '设置',
            'setting-language': '语言',
            'setting-theme': '主题',
            'setting-animations': '动画效果',
            'setting-sound': '音效',
            'setting-difficulty': 'AI 难度',
            'theme-dark': '深色',
            'theme-light': '浅色',
            'theme-auto': '自动',
            'diff-easy': '简单',
            'diff-medium': '中等',
            'diff-hard': '困难'
        },
        en: {
            'subtitle-pve': 'Unbeatable AI Opponent',
            'subtitle-pvp': 'Local Two-Player Battle',
            'subtitle-aivsai': 'Ultimate AI Showdown',
            'mode-pve': 'PvE',
            'mode-pvp': 'PvP',
            'mode-aivsai': 'AI vs AI',
            'label-player-x': 'Player (X)',
            'label-player-o': 'AI (O)',
            'label-player-x-ai': 'AI (X)',
            'label-player-o-ai': 'AI (O)',
            'label-player-x-pvp': 'Player 1 (X)',
            'label-player-o-pvp': 'Player 2 (O)',
            'label-draw': 'Draw',
            'status-your-turn': 'Your Turn',
            'status-ai-thinking': 'AI Thinking...',
            'status-player1-turn': "Player 1's Turn",
            'status-player2-turn': "Player 2's Turn",
            'status-ai-x-thinking': 'AI X Thinking...',
            'status-ai-o-thinking': 'AI O Thinking...',
            'status-draw': 'Draw',
            'btn-restart': 'Restart',
            'btn-play-again': 'Play Again',
            'modal-game-over': 'Game Over',
            'modal-win': 'Victory!',
            'modal-ai-x-wins': 'AI X takes the win',
            'modal-ai-o-wins': 'AI O takes the win',
            'modal-player1-wins': 'Player 1 wins big!',
            'modal-player2-wins': 'Player 2 is on fire!',
            'modal-you-win': 'Incredible, you beat the AI!',
            'modal-ai-wins': 'Don\'t give up, try again!',
            'modal-draw-pvp': 'Well matched!',
            'modal-draw-aivsai': 'Two perfect AIs clash',
            'settings-title': 'Settings',
            'setting-language': 'Language',
            'setting-theme': 'Theme',
            'setting-animations': 'Animations',
            'setting-sound': 'Sound Effects',
            'setting-difficulty': 'AI Difficulty',
            'theme-dark': 'Dark',
            'theme-light': 'Light',
            'theme-auto': 'Auto',
            'diff-easy': 'Easy',
            'diff-medium': 'Medium',
            'diff-hard': 'Hard'
        }
    };

    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const xSvg = `<svg class="mark mark-x" viewBox="0 0 100 100"><path d="M25 25 L75 75 M75 25 L25 75" /></svg>`;
    const oSvg = `<svg class="mark mark-o" viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" /></svg>`;

    /* ===== Audio ===== */
    function initAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    function playTone(freq, type, duration, vol = 0.15) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }

    function playMoveSound(player) {
        initAudio();
        if (player === PLAYER_X) playTone(523.25, 'sine', 0.12, 0.12); // C5
        else playTone(392, 'triangle', 0.12, 0.12); // G4
    }

    function playWinSound() {
        initAudio();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            setTimeout(() => playTone(freq, 'sine', 0.25, 0.1), i * 80);
        });
    }

    function playDrawSound() {
        initAudio();
        playTone(261.63, 'triangle', 0.3, 0.1);
        setTimeout(() => playTone(196, 'triangle', 0.3, 0.1), 180);
    }

    /* ===== I18n Helpers ===== */
    function t(key) {
        return i18n[settings.lang][key] || key;
    }

    function applyI18n() {
        document.documentElement.lang = settings.lang === 'zh' ? 'zh-CN' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[settings.lang][key]) el.textContent = t(key);
        });
        updateScoreLabels();
        updateStatus(getTurnText(), currentPlayer === PLAYER_X ? 'x' : 'o');
        // subtitle depends on mode
        if (currentMode === 'pve') subtitle.textContent = t('subtitle-pve');
        else if (currentMode === 'pvp') subtitle.textContent = t('subtitle-pvp');
        else subtitle.textContent = t('subtitle-aivsai');
    }

    /* ===== Init ===== */
    function init() {
        cells.forEach(cell => cell.addEventListener('click', handleCellClick));
        restartBtn.addEventListener('click', resetGame);
        modalBtn.addEventListener('click', resetGame);
        modal.addEventListener('click', e => { if (e.target === modal) resetGame(); });
        modeBtns.forEach(btn => btn.addEventListener('click', () => setMode(btn.dataset.mode)));

        // Settings drawer
        settingsBtn.addEventListener('click', openDrawer);
        drawerClose.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);

        // Settings controls
        langBtns.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
        themeBtns.forEach(btn => btn.addEventListener('click', () => setTheme(btn.dataset.theme)));
        diffBtns.forEach(btn => btn.addEventListener('click', () => setDifficulty(btn.dataset.diff)));
        animToggle.addEventListener('change', e => setAnimations(e.target.checked));
        soundToggle.addEventListener('change', e => setSound(e.target.checked));

        applySettingsUI();
        applyI18n();
        updateStatus(getTurnText(), 'x');
    }

    /* ===== Settings Logic ===== */
    function openDrawer() {
        drawer.classList.add('show');
        drawerOverlay.classList.add('show');
    }
    function closeDrawer() {
        drawer.classList.remove('show');
        drawerOverlay.classList.remove('show');
    }

    function setLang(lang) {
        if (settings.lang === lang) return;
        settings.lang = lang;
        applySettingsUI();
        applyI18n();
    }

    function setTheme(theme) {
        if (settings.theme === theme) return;
        settings.theme = theme;
        applySettingsUI();
        document.documentElement.setAttribute('data-theme', theme);
    }

    function setAnimations(on) {
        settings.animations = on;
        applySettingsUI();
        document.body.classList.toggle('animations-off', !on);
    }

    function setSound(on) {
        settings.sound = on;
        applySettingsUI();
        if (on) initAudio();
    }

    function setDifficulty(diff) {
        if (settings.difficulty === diff) return;
        settings.difficulty = diff;
        applySettingsUI();
        if (currentMode === 'pve') resetGame();
    }

    function applySettingsUI() {
        langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === settings.lang));
        themeBtns.forEach(b => b.classList.toggle('active', b.dataset.theme === settings.theme));
        diffBtns.forEach(b => b.classList.toggle('active', b.dataset.diff === settings.difficulty));
        animToggle.checked = settings.animations;
        soundToggle.checked = settings.sound;
        document.documentElement.setAttribute('data-theme', settings.theme);
        document.body.classList.toggle('animations-off', !settings.animations);
    }

    /* ===== Game Flow ===== */
    function setMode(mode) {
        clearTimeout(aiTimer); aiTimer = null;
        if (currentMode === mode) return;
        currentMode = mode;
        modeBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
        if (currentMode === 'pve') subtitle.textContent = t('subtitle-pve');
        else if (currentMode === 'pvp') subtitle.textContent = t('subtitle-pvp');
        else subtitle.textContent = t('subtitle-aivsai');
        aiDifficultyGroup.style.display = currentMode === 'pve' ? 'flex' : 'none';
        updateScoreLabels();
        resetGame();
    }

    function updateScoreLabels() {
        const labelX = document.querySelector('.score-card.player-x .label');
        const labelO = document.querySelector('.score-card.player-o .label');
        if (currentMode === 'pve') {
            labelX.textContent = t('label-player-x');
            labelO.textContent = t('label-player-o');
        } else if (currentMode === 'pvp') {
            labelX.textContent = t('label-player-x-pvp');
            labelO.textContent = t('label-player-o-pvp');
        } else {
            labelX.textContent = t('label-player-x-ai');
            labelO.textContent = t('label-player-o-ai');
        }
    }

    function getTurnText() {
        if (currentMode === 'aivsai') return currentPlayer === PLAYER_X ? t('status-ai-x-thinking') : t('status-ai-o-thinking');
        if (currentMode === 'pvp') return currentPlayer === PLAYER_X ? t('status-player1-turn') : t('status-player2-turn');
        return currentPlayer === PLAYER_X ? t('status-your-turn') : t('status-ai-thinking');
    }

    function handleCellClick(e) {
        const index = parseInt(e.currentTarget.dataset.index);
        if (!gameActive || gameBoard[index] !== '') return;
        if (currentMode === 'aivsai') return;
        if (currentMode === 'pve' && currentPlayer !== PLAYER_X) return;

        makeMove(index, currentPlayer);

        if (gameActive && currentMode === 'pve') {
            updateStatus(getTurnText(), 'o');
            lockBoard(true);
            const delay = settings.animations ? 400 : 50;
            aiTimer = setTimeout(() => {
                if (!gameActive) return;
                const aiMove = getAiMove(gameBoard, PLAYER_O);
                makeMove(aiMove, PLAYER_O);
                lockBoard(false);
            }, delay);
        }
    }

    function startAiVsAi() {
        if (!gameActive || currentMode !== 'aivsai') return;
        lockBoard(true);
        const delay = settings.animations ? 500 : 50;
        aiTimer = setTimeout(() => {
            if (!gameActive || currentMode !== 'aivsai') return;
            const move = getAiMove(gameBoard, currentPlayer);
            makeMove(move, currentPlayer);
            if (gameActive) {
                startAiVsAi();
            } else {
                const nextDelay = settings.animations ? 1200 : 300;
                aiTimer = setTimeout(() => { if (currentMode === 'aivsai') resetGame(); }, nextDelay);
            }
        }, delay);
    }

    function makeMove(index, player) {
        gameBoard[index] = player;
        cells[index].innerHTML = player === PLAYER_X ? xSvg : oSvg;
        cells[index].classList.add('disabled');
        playMoveSound(player);

        if (checkWin(gameBoard, player)) {
            endGame(false, player);
        } else if (checkDraw(gameBoard)) {
            endGame(true);
        } else {
            currentPlayer = player === PLAYER_X ? PLAYER_O : PLAYER_X;
            const activeClass = currentPlayer === PLAYER_X ? 'x' : 'o';
            updateStatus(getTurnText(), activeClass);
        }
    }

    function lockBoard(lock) {
        cells.forEach(cell => {
            const idx = parseInt(cell.dataset.index);
            if (gameBoard[idx] === '') cell.classList.toggle('disabled', lock);
        });
    }

    function updateStatus(text, activeClass) {
        statusText.textContent = text;
        statusBar.classList.remove('active-x', 'active-o');
        if (activeClass) statusBar.classList.add(`active-${activeClass}`);
    }

    function endGame(draw, winner) {
        gameActive = false;
        lockBoard(true);

        if (draw) {
            scores.draw++;
            animateScore(scoreDrawEl);
            playDrawSound();
            const msg = currentMode === 'aivsai' ? t('modal-draw-aivsai') : t('modal-draw-pvp');
            showModal('🤝', t('status-draw'), msg);
            updateStatus(t('status-draw'), null);
        } else {
            scores[winner]++;
            animateScore(winner === PLAYER_X ? scoreXEl : scoreOEl);
            drawWinLine(winner);
            playWinSound();

            let icon, title, msg;
            if (winner === PLAYER_X) {
                title = getWinnerText(winner);
                icon = currentMode === 'aivsai' ? '⚡' : '🎉';
                if (currentMode === 'aivsai') msg = t('modal-ai-x-wins');
                else if (currentMode === 'pvp') msg = t('modal-player1-wins');
                else msg = t('modal-you-win');
                updateStatus(title, 'x');
            } else {
                title = getWinnerText(winner);
                icon = currentMode === 'aivsai' ? '⚡' : (currentMode === 'pvp' ? '🔥' : '🤖');
                if (currentMode === 'aivsai') msg = t('modal-ai-o-wins');
                else if (currentMode === 'pvp') msg = t('modal-player2-wins');
                else msg = t('modal-ai-wins');
                updateStatus(title, 'o');
            }
            showModal(icon, title, msg);
        }
    }

    function getWinnerText(winner) {
        if (currentMode === 'aivsai') return winner === PLAYER_X ? t('label-player-x-ai') + ' ' + t('modal-win') : t('label-player-o-ai') + ' ' + t('modal-win');
        if (currentMode === 'pvp') return winner === PLAYER_X ? t('modal-player1-wins') : t('modal-player2-wins');
        return winner === PLAYER_X ? t('modal-you-win') : t('modal-ai-wins');
    }

    function animateScore(el) {
        el.classList.add('pop');
        el.textContent = parseInt(el.textContent) + 1;
        setTimeout(() => el.classList.remove('pop'), 200);
    }

    function resetGame() {
        clearTimeout(aiTimer); aiTimer = null;
        gameBoard = Array(9).fill('');
        gameActive = true;
        currentPlayer = PLAYER_X;
        cells.forEach(cell => { cell.innerHTML = ''; cell.classList.remove('disabled'); });
        hideModal();
        hideWinLine();
        updateStatus(getTurnText(), 'x');
        if (currentMode === 'aivsai') startAiVsAi();
    }

    /* ===== Modal ===== */
    function showModal(icon, title, msg) {
        modalIcon.textContent = icon;
        modalTitle.textContent = title;
        modalMessage.textContent = msg;
        modal.classList.add('show');
    }
    function hideModal() { modal.classList.remove('show'); }

    /* ===== Win Line ===== */
    function drawWinLine(winner) {
        const condition = getWinningCondition(gameBoard, winner);
        if (!condition) return;
        const [a, , c] = condition;
        const posA = getCellCenter(a);
        const posB = getCellCenter(c);
        const rect = boardEl.getBoundingClientRect();
        const padding = 12;
        const innerW = rect.width - padding * 2;
        const innerH = rect.height - padding * 2;
        const scaleX = 300 / innerW;
        const scaleY = 300 / innerH;
        winLineSvg.setAttribute('x1', (posA.x - rect.left - padding) * scaleX);
        winLineSvg.setAttribute('y1', (posA.y - rect.top - padding) * scaleY);
        winLineSvg.setAttribute('x2', (posB.x - rect.left - padding) * scaleX);
        winLineSvg.setAttribute('y2', (posB.y - rect.top - padding) * scaleY);
        winLineSvg.setAttribute('stroke', winner === PLAYER_X ? 'var(--x-color)' : 'var(--o-color)');
        winLine.classList.add('show');
    }
    function hideWinLine() { winLine.classList.remove('show'); }
    function getCellCenter(index) {
        const rect = cells[index].getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }

    /* ===== Game Logic ===== */
    function checkWin(board, player) {
        return winConditions.some(cond => cond.every(i => board[i] === player));
    }
    function getWinningCondition(board, player) {
        return winConditions.find(cond => cond.every(i => board[i] === player)) || null;
    }
    function checkDraw(board) { return board.every(cell => cell !== ''); }

    /* ===== AI Move Selector ===== */
    function getAiMove(board, aiPlayer) {
        const humanPlayer = aiPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        const diff = settings.difficulty;
        if (diff === 'hard') return getBestMoveGeneric(board, aiPlayer);
        if (diff === 'easy') return getEasyMove(board, aiPlayer, humanPlayer);
        return getMediumMove(board, aiPlayer, humanPlayer);
    }

    function getEasyMove(board, aiPlayer, humanPlayer) {
        // 1. Win if possible
        for (let i = 0; i < 9; i++) if (board[i] === '') {
            board[i] = aiPlayer;
            const win = checkWin(board, aiPlayer);
            board[i] = '';
            if (win) return i;
        }
        // 2. Block if opponent can win
        for (let i = 0; i < 9; i++) if (board[i] === '') {
            board[i] = humanPlayer;
            const lose = checkWin(board, humanPlayer);
            board[i] = '';
            if (lose) return i;
        }
        // 3. Random valid move
        const empties = board.map((v, i) => v === '' ? i : null).filter(v => v !== null);
        return empties[Math.floor(Math.random() * empties.length)];
    }

    function getMediumMove(board, aiPlayer, humanPlayer) {
        // 50% optimal, 50% easy
        if (Math.random() < 0.5) return getBestMoveGeneric(board, aiPlayer);
        return getEasyMove(board, aiPlayer, humanPlayer);
    }

    function getBestMoveGeneric(board, aiPlayer) {
        const humanPlayer = aiPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        let bestScore = -Infinity, move = -1;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = aiPlayer;
                const score = minimaxGeneric(board, 0, false, aiPlayer, humanPlayer);
                board[i] = '';
                if (score > bestScore) { bestScore = score; move = i; }
            }
        }
        return move;
    }

    function minimaxGeneric(board, depth, isMaximizing, aiPlayer, humanPlayer) {
        if (checkWin(board, aiPlayer)) return 10 - depth;
        if (checkWin(board, humanPlayer)) return depth - 10;
        if (checkDraw(board)) return 0;
        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === '') {
                    board[i] = aiPlayer;
                    bestScore = Math.max(bestScore, minimaxGeneric(board, depth + 1, false, aiPlayer, humanPlayer));
                    board[i] = '';
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === '') {
                    board[i] = humanPlayer;
                    bestScore = Math.min(bestScore, minimaxGeneric(board, depth + 1, true, aiPlayer, humanPlayer));
                    board[i] = '';
                }
            }
            return bestScore;
        }
    }

    init();
})();
