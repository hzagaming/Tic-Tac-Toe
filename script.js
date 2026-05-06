(() => {
    /* ===== DOM Elements ===== */
    const boardEl = document.getElementById('board');
    const connect4Board = document.getElementById('connect4-board');
    const c4CellsContainer = document.getElementById('c4-cells');
    const gomokuBoard = document.getElementById('gomoku-board');
    const gomokuCellsContainer = document.getElementById('gomoku-cells');
    const cells = Array.from(document.querySelectorAll('#board .cell'));
    const statusText = document.getElementById('status-text');
    const statusBar = document.querySelector('.status-bar');
    const winLine = document.getElementById('win-line');
    const winLineSvg = winLine.querySelector('line');
    const c4WinLine = document.getElementById('c4-win-line');
    const c4WinLineSvg = c4WinLine.querySelector('line');
    const gomokuWinLine = document.getElementById('gomoku-win-line');
    const gomokuWinLineSvg = gomokuWinLine.querySelector('line');
    const restartBtn = document.getElementById('restart-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const drawer = document.getElementById('settings-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');
    const modal = document.getElementById('result-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalIcon = document.getElementById('modal-icon');
    const modalElo = document.getElementById('modal-elo');
    const modalBtn = document.getElementById('modal-btn');
    const scoreXEl = document.getElementById('score-x');
    const scoreOEl = document.getElementById('score-o');
    const scoreDrawEl = document.getElementById('score-draw');
    const eloBadge = document.getElementById('elo-badge');
    const eloTierIcon = document.getElementById('elo-tier-icon');
    const eloValue = document.getElementById('elo-value');
    const eloTierName = document.getElementById('elo-tier-name');
    const gameWrapper = document.querySelector('.game-wrapper');
    const modeSwitch = document.getElementById('mode-switch');
    const modeBtns = Array.from(document.querySelectorAll('.mode-btn'));
    const battleSwitch = document.getElementById('battle-switch');
    const battleBtns = Array.from(document.querySelectorAll('.battle-btn'));
    const subtitle = document.getElementById('subtitle');
    const aiDifficultyGroup = document.getElementById('ai-difficulty-group');
    const customGameGroup = document.getElementById('custom-game-group');

    const timerXEl = document.getElementById('timer-x');
    const timerOEl = document.getElementById('timer-o');
    const timerToggle = document.getElementById('toggle-timer');
    const timerPresets = document.getElementById('timer-presets');

    const hotkeyModal = document.getElementById('hotkey-modal');
    const hotkeyClose = document.getElementById('hotkey-close');
    const hotkeyBody = document.getElementById('hotkey-body');

    const animToggle = document.getElementById('toggle-animations');
    const soundToggle = document.getElementById('toggle-sound');
    const toggle3d = document.getElementById('toggle-3d');
    const toggleRipple = document.getElementById('toggle-ripple');
    const toggleElo = document.getElementById('toggle-elo');
    const toggleMisere = document.getElementById('toggle-misere');
    const contrastSlider = document.getElementById('contrast-slider');
    const contrastValue = document.getElementById('contrast-value');
    const customColorInput = document.getElementById('custom-color-input');
    const pitchSlider = document.getElementById('pitch-slider');
    const pitchValue = document.getElementById('pitch-value');
    const durationSlider = document.getElementById('duration-slider');
    const durationValue = document.getElementById('duration-value');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValue = document.getElementById('volume-value');
    const testSoundBtn = document.getElementById('test-sound-btn');

    const customWinLenInput = document.getElementById('custom-win-len');
    const customBoardWInput = document.getElementById('custom-board-w');
    const customBoardHInput = document.getElementById('custom-board-h');

    const changelogBtn = document.getElementById('changelog-btn');
    const changelogModal = document.getElementById('changelog-modal');
    const changelogClose = document.getElementById('changelog-close');
    const changelogBody = document.getElementById('changelog-body');

    const SETTINGS_KEY = 'ttt_settings_v1';
    const a11yAnnouncer = document.getElementById('a11y-announcer');

    const undoBtn = document.getElementById('undo-btn');
    const hintBtn = document.getElementById('hint-btn');
    const historyBtn = document.getElementById('history-btn');
    const historyDrawer = document.getElementById('history-drawer');
    const historyOverlay = document.getElementById('history-overlay');
    const historyClose = document.getElementById('history-close');
    const historyEmpty = document.getElementById('history-empty');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const replayModal = document.getElementById('replay-modal');
    const replayClose = document.getElementById('replay-close');
    const replayBoardWrap = document.getElementById('replay-board-wrap');
    const replayMeta = document.getElementById('replay-meta');
    const replayStepText = document.getElementById('replay-step-text');
    const replayBarFill = document.getElementById('replay-bar-fill');
    const replayReset = document.getElementById('replay-reset');
    const replayPrev = document.getElementById('replay-prev');
    const replayPlay = document.getElementById('replay-play');
    const replayNext = document.getElementById('replay-next');

    const achievementsBtn = document.getElementById('achievements-btn');
    const achievementsDrawer = document.getElementById('achievements-drawer');
    const achievementsOverlay = document.getElementById('achievements-overlay');
    const achievementsClose = document.getElementById('achievements-close');
    const achievementsBody = document.getElementById('achievements-body');
    const toastContainer = document.getElementById('achievement-toast-container');

    const tacticsBtn = document.getElementById('tactics-btn');
    const tacticsDrawer = document.getElementById('tactics-drawer');
    const tacticsOverlay = document.getElementById('tactics-overlay');
    const tacticsClose = document.getElementById('tactics-close');
    const tacticsBody = document.getElementById('tactics-body');
    const tacticsGrid = document.getElementById('tactics-grid');
    const tacticsSummary = document.getElementById('tactics-summary');
    const tacticsFilter = document.getElementById('tactics-filter');
    const tacticsModal = document.getElementById('tactics-modal');
    const tacticsModalClose = document.getElementById('tactics-modal-close');
    const tacticsMeta = document.getElementById('tactics-meta');
    const tacticsInstruction = document.getElementById('tactics-instruction');
    const tacticsBoard = document.getElementById('tactics-board');
    const tacticsFeedback = document.getElementById('tactics-feedback');
    const tacticsSkipBtn = document.getElementById('tactics-skip-btn');
    const tacticsNextBtn = document.getElementById('tactics-next-btn');
    // Daily Challenge elements
    const dailyBtn = document.getElementById('daily-btn');
    const dailyBadge = document.getElementById('daily-badge');
    const dailyModal = document.getElementById('daily-modal');
    const dailyModalClose = document.getElementById('daily-modal-close');
    const dailyMeta = document.getElementById('daily-meta');
    const dailyStreakText = document.getElementById('daily-streak-text');
    const dailyInstruction = document.getElementById('daily-instruction');
    const dailyBoard = document.getElementById('daily-board');
    const dailyFeedback = document.getElementById('daily-feedback');
    const dailySkipBtn = document.getElementById('daily-skip-btn');
    const dailyShareBtn = document.getElementById('daily-share-btn');
    const dailyCells = Array.from(document.querySelectorAll('#daily-board .cell'));
    const tacticCells = Array.from(document.querySelectorAll('#tactics-board .cell'));
    // Puzzle Rush elements
    const rushBtn = document.getElementById('rush-btn');
    const rushModal = document.getElementById('rush-modal');
    const rushModalClose = document.getElementById('rush-modal-close');
    const rushMeta = document.getElementById('rush-meta');
    const rushHud = document.getElementById('rush-hud');
    const rushTimerEl = document.getElementById('rush-timer');
    const rushScoreEl = document.getElementById('rush-score');
    const rushStreakEl = document.getElementById('rush-streak');
    const rushStart = document.getElementById('rush-start');
    const rushStartBtn = document.getElementById('rush-start-btn');
    const rushGame = document.getElementById('rush-game');
    const rushInstruction = document.getElementById('rush-instruction');
    const rushBoard = document.getElementById('rush-board');
    const rushFeedback = document.getElementById('rush-feedback');
    const rushSkipBtn = document.getElementById('rush-skip-btn');
    const rushResult = document.getElementById('rush-result');
    const rushResultScore = document.getElementById('rush-result-score');
    const rushResultStats = document.getElementById('rush-result-stats');
    const rushResultBest = document.getElementById('rush-result-best');
    const rushRestartBtn = document.getElementById('rush-restart-btn');
    const rushCloseBtn = document.getElementById('rush-close-btn');
    const rushCells = Array.from(document.querySelectorAll('#rush-board .cell'));
    // Board Editor elements
    const editorBtn = document.getElementById('editor-btn');
    const editorModal = document.getElementById('editor-modal');
    const editorModalClose = document.getElementById('editor-modal-close');
    const editorBoard = document.getElementById('editor-board');
    const editorPlayerToggle = document.getElementById('editor-player-toggle');
    const editorPlayerMark = document.getElementById('editor-player-mark');
    const editorClearBtn = document.getElementById('editor-clear-btn');
    const editorStartBtn = document.getElementById('editor-start-btn');
    const editorCells = Array.from(document.querySelectorAll('#editor-board .cell'));

    const PLAYER_X = 'X';
    const PLAYER_O = 'O';

    /* ===== State ===== */
    let gameBoard = Array(9).fill('');
    let c4Board = Array(6).fill(null).map(() => Array(7).fill(''));
    let gmkBoard = Array(15).fill(null).map(() => Array(15).fill(''));
    let customBoard = [];
    let gameActive = true;
    let currentPlayer = PLAYER_X;
    let currentMode = 'ttt';
    let battleMode = 'pve';
    let scores = { X: 0, O: 0, draw: 0 };
    let aiTimer = null;
    let audioCtx = null;
    let lastFocusedElement = null;
    let lastTacticCard = null;
    let lastWinData = null;
    let tacticWrongTimer = null;

    // History & Replay state
    let moveHistory = [];
    let gameStartTime = 0;
    let currentMoveStartTime = 0;
    let boardSnapshots = [];
    let playerHistory = [];
    let replayData = null;
    let replayStep = 0;
    let replayTimer = null;
    let replayPlaying = false;
    const HISTORY_KEY = 'ttt_game_history_v1';
    const MAX_HISTORY = 50;

    // Achievement state
    let achievementStats = {};
    let achievementState = {};
    const ACHIEVEMENT_KEY = 'ttt_achievements_v1';
    const ACHIEVEMENT_STATS_KEY = 'ttt_achievement_stats_v1';

    // Custom game config
    let customConfig = { w: 15, h: 15, winLen: 5 };

    let timerInterval = null;
    let timerState = { X: 0, O: 0, running: false, activePlayer: null, lastTick: 0 };
    let lastTickSoundTime = 0;
    let timerTimeoutFlag = false;
    let hintCount = 0;

    // Game Statistics
    let gameStats = createEmptyGameStats();
    const STATS_KEY = 'ttt_game_stats_v1';

    // Tactics Trainer state
    let tacticsProgress = { completed: [], streak: 0, bestStreak: 0 };
    let currentTactic = null;
    let tacticSolved = false;
    // Daily Challenge state
    let dailyProgress = { lastDate: '', streak: 0, bestStreak: 0, history: [] };
    let currentDailyPuzzle = null;
    let dailySolved = false;
    let dailyWrongTimer = null;
    let dailyFocusTimeout = null;
    let dailyShareTimeout = null;
    let dailyResetTimeout = null;
    // Puzzle Rush state
    let rushProgress = { bestScore: 0, bestStreak: 0, totalPlayed: 0 };
    let rushState = { active: false, score: 0, streak: 0, bestStreak: 0, correct: 0, wrong: 0, skipped: 0, timeLeft: 180, currentPuzzle: null, solved: false, usedPuzzles: [] };
    let rushTimerInterval = null;
    let rushWrongTimer = null;
    // Board Editor state
    let editorBoardState = Array(9).fill('');
    let editorPlayer = 'X';
    let editorGame = false;
    // Misère Mode state
    let misereMode = false;
    const TACTICS_KEY = 'ttt_tactics_v1';
    const DAILY_KEY = 'ttt_daily_v1';
    const RUSH_KEY = 'ttt_rush_v1';

    // ELO Rating System
    let eloData = { current: 1200, peak: 1200, history: [], streak: 0 };
    const ELO_KEY = 'ttt_elo_v1';
    const ELO_DEFAULT = 1200;
    const AI_ELO_MAP = { easy: 1000, medium: 1400, hard: 1800 };
    function getKFactor(elo) { return elo < 1400 ? 40 : elo < 1800 ? 20 : 10; }
    function getAiElo(difficulty) { return AI_ELO_MAP[difficulty] || AI_ELO_MAP.medium; }
    function expectedScore(playerElo, opponentElo) { return 1 / (1 + Math.pow(10, (opponentElo - playerElo) / 400)); }
    function computeEloChange(playerElo, opponentElo, result) {
        const k = getKFactor(playerElo);
        const expected = expectedScore(playerElo, opponentElo);
        return Math.round(k * (result - expected));
    }
    function getEloTier(elo) {
        if (elo < 1000) return { id: 'novice', icon: '🌱', color: '#888' };
        if (elo < 1200) return { id: 'apprentice', icon: '🌿', color: '#6b8e6b' };
        if (elo < 1400) return { id: 'bronze', icon: '🥉', color: '#cd7f32' };
        if (elo < 1600) return { id: 'silver', icon: '🥈', color: '#c0c0c0' };
        if (elo < 1800) return { id: 'gold', icon: '🥇', color: '#ffd700' };
        if (elo < 2000) return { id: 'platinum', icon: '💎', color: '#3eb489' };
        if (elo < 2200) return { id: 'diamond', icon: '🔷', color: '#b9f2ff' };
        if (elo < 2400) return { id: 'master', icon: '👑', color: '#e5e4e2' };
        return { id: 'grandmaster', icon: '⭐', color: '#ff6b6b' };
    }
    function saveElo() { try { localStorage.setItem(ELO_KEY, JSON.stringify(eloData)); } catch (e) {} }
    function loadElo() {
        try {
            const raw = localStorage.getItem(ELO_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed.current === 'number' && Number.isFinite(parsed.current) && !Number.isNaN(parsed.current)) {
                    eloData.current = parsed.current;
                    eloData.peak = typeof parsed.peak === 'number' && Number.isFinite(parsed.peak) && !Number.isNaN(parsed.peak) ? parsed.peak : parsed.current;
                    eloData.history = Array.isArray(parsed.history) ? parsed.history : [];
                    eloData.streak = typeof parsed.streak === 'number' && Number.isFinite(parsed.streak) && !Number.isNaN(parsed.streak) ? parsed.streak : 0;
                }
            }
        } catch (e) {}
    }
    function recordEloChange(difficulty, result, change) {
        if (!Number.isFinite(change) || Number.isNaN(change)) change = 0;
        const oldElo = eloData.current;
        eloData.current += change;
        if (eloData.current < 100) eloData.current = 100;
        if (eloData.current > eloData.peak) eloData.peak = eloData.current;
        if (result === 1) eloData.streak = Math.max(0, eloData.streak) + 1;
        else eloData.streak = 0;
        const actualChange = eloData.current - oldElo;
        eloData.history.unshift({ date: Date.now(), difficulty, result, change: actualChange, elo: eloData.current });
        if (eloData.history.length > 50) eloData.history.pop();
        saveElo();
        return actualChange;
    }
    function processEloChange(draw, winner) {
        if (settings.eloEnabled === false) return null;
        if (editorGame) return null;
        const bm = getEffectiveBattleMode();
        if (bm !== 'pve') return null;
        const aiElo = getAiElo(settings.difficulty);
        let result;
        if (draw) result = 0.5;
        else if (winner === PLAYER_X) result = 1;
        else result = 0;
        const change = computeEloChange(eloData.current, aiElo, result);
        const actualChange = recordEloChange(settings.difficulty, result, change);
        updateEloBadge();
        return actualChange;
    }
    function updateEloBadge() {
        if (!eloBadge) return;
        if (settings.eloEnabled === false || getEffectiveBattleMode() !== 'pve') {
            eloBadge.classList.add('hidden');
            return;
        }
        const tier = getEloTier(eloData.current);
        if (eloTierIcon) eloTierIcon.textContent = tier.icon;
        if (eloValue) eloValue.textContent = eloData.current;
        if (eloTierName) eloTierName.textContent = t('elo-tier-' + tier.id);
        eloBadge.classList.remove('hidden');
    }

    const settings = {
        lang: 'zh',
        theme: 'dark',
        accentColor: '#7b68ee',
        customColor: '#7b68ee',
        contrast: 100,
        font: 'inter',
        animations: true,
        animSpeed: 'normal',
        board3d: false,
        sound: true,
        soundStyle: 'classic',
        soundPitch: 0,
        soundDuration: 100,
        soundVolume: 80,
        difficulty: 'hard',
        customBoardSize: 'custom',
        timerEnabled: false,
        timerDuration: 180,
        rippleEnabled: true,
        boardTheme: 'classic',
        eloEnabled: true,
        misereMode: false
    };

    const langMap = {
        zh: '中文', en: 'English', ja: '日本語', ko: '한국어',
        fr: 'Français', de: 'Deutsch', es: 'Español', ru: 'Русский',
        it: 'Italiano', pt: 'Português'
    };

    /* ===== Tactics Trainer Database ===== */
    const tacticsDB = [
        { id: 'ttt_t1', mode: 'ttt', difficulty: 'easy', stars: 1, board: ['X','X','','','O','','','','O'], player: 'X', correctMoves: [2], titleKey: 'tactic_t1_title', descKey: 'tactic_t1_desc' },
        { id: 'ttt_t2', mode: 'ttt', difficulty: 'easy', stars: 1, board: ['O','O','','','X','','','','X'], player: 'X', correctMoves: [2], titleKey: 'tactic_t2_title', descKey: 'tactic_t2_desc' },
        { id: 'ttt_t3', mode: 'ttt', difficulty: 'medium', stars: 2, board: ['X','','O','','X','','','','O'], player: 'X', correctMoves: [6], titleKey: 'tactic_t3_title', descKey: 'tactic_t3_desc' },
        { id: 'ttt_t4', mode: 'ttt', difficulty: 'medium', stars: 2, board: ['','','','','','','','',''], player: 'X', correctMoves: [4], titleKey: 'tactic_t4_title', descKey: 'tactic_t4_desc' }
    ];

    // Daily Challenge puzzle database (30 puzzles, cycled by date hash)
    const dailyPuzzleDB = [
        // Win in One
        { id: 'd01', board: ['X','O','','','X','','','',''],   player: 'X', correctMoves: [8], type: 'win' },
        { id: 'd02', board: ['X','X','','O','O','','','',''],   player: 'X', correctMoves: [2], type: 'win' },
        { id: 'd03', board: ['X','X','','','','','O','O',''],   player: 'X', correctMoves: [2], type: 'win' },
        { id: 'd04', board: ['','X','X','','O','','','',''],   player: 'X', correctMoves: [0], type: 'win' },
        { id: 'd05', board: ['O','O','','X','X','','','',''],   player: 'X', correctMoves: [5], type: 'win' },
        { id: 'd06', board: ['','','','X','X','','O','O',''],   player: 'X', correctMoves: [5], type: 'win' },
        { id: 'd07', board: ['X','O','X','','O','','','',''],   player: 'O', correctMoves: [7], type: 'win' },
        { id: 'd08', board: ['','X','','','O','O','','','X'],   player: 'O', correctMoves: [3], type: 'win' },
        // Block
        { id: 'd09', board: ['O','O','','X','','','','','X'],   player: 'X', correctMoves: [2], type: 'block' },
        { id: 'd10', board: ['O','','','O','X','','','','X'],   player: 'X', correctMoves: [6], type: 'block' },
        { id: 'd11', board: ['','O','O','','X','','X','',''],   player: 'X', correctMoves: [0], type: 'block' },
        { id: 'd12', board: ['X','','','X','O','','','','O'],   player: 'O', correctMoves: [6], type: 'block' },
        { id: 'd13', board: ['','X','','','','X','O','O',''],   player: 'X', correctMoves: [8], type: 'block' },
        { id: 'd14', board: ['O','O','','','X','','','','X'],   player: 'X', correctMoves: [2], type: 'block' },
        // Fork
        { id: 'd15', board: ['X','','','','O','','','','X'],   player: 'X', correctMoves: [2], type: 'fork' },
        { id: 'd16', board: ['','','X','','O','','X','',''],   player: 'X', correctMoves: [8], type: 'fork' },
        { id: 'd17', board: ['','','','','O','X','','','X'],   player: 'X', correctMoves: [6], type: 'fork' },
        { id: 'd18', board: ['X','','','','O','','','',''],    player: 'X', correctMoves: [2], type: 'setup' },
        // Opening
        { id: 'd19', board: ['','','','','','','','',''],       player: 'X', correctMoves: [4], type: 'opening' },
        { id: 'd20', board: ['','','','','X','','','',''],      player: 'O', correctMoves: [0,2,6,8], type: 'opening' },
        { id: 'd21', board: ['X','','','','','','','',''],      player: 'O', correctMoves: [4], type: 'opening' },
        { id: 'd22', board: ['','','','','','','','','X'],      player: 'O', correctMoves: [4], type: 'opening' },
        // Setup
        { id: 'd23', board: ['X','','','','','','','',''],      player: 'X', correctMoves: [8], type: 'setup' },
        { id: 'd24', board: ['','','X','','','','','',''],      player: 'X', correctMoves: [6], type: 'setup' },
        { id: 'd25', board: ['','','','','X','','','',''],      player: 'X', correctMoves: [0], type: 'setup' },
        { id: 'd26', board: ['X','','','','O','','','','X'],    player: 'X', correctMoves: [2,6], type: 'setup' },
        // Misc
        { id: 'd27', board: ['X','','','','O','','','',''],    player: 'X', correctMoves: [8], type: 'setup' },
        { id: 'd28', board: ['','X','','O','','','','',''],    player: 'X', correctMoves: [4], type: 'setup' },
        { id: 'd29', board: ['O','','O','X','X','','','',''],   player: 'X', correctMoves: [5], type: 'win' },
        { id: 'd30', board: ['O','','','O','X','','','','X'],   player: 'X', correctMoves: [6], type: 'block' }
    ];

    const colorPresets = [
        { id: 'violet', hex: '#7b68ee' },
        { id: 'crimson', hex: '#ff4757' },
        { id: 'ocean', hex: '#3498db' },
        { id: 'emerald', hex: '#2ecc71' },
        { id: 'amber', hex: '#f39c12' },
        { id: 'rose', hex: '#e84393' },
        { id: 'lime', hex: '#a3cb38' },
        { id: 'midnight', hex: '#192a56' },
        { id: 'coral', hex: '#ff6b6b' },
        { id: 'cyan', hex: '#00cec9' },
    ];

    const i18n = buildI18n();

    function buildI18n() {
        const c = {
            'subtitle-pve': { zh:'不可战胜的 AI 对手', en:'Unbeatable AI Opponent', ja:'無敵の AI 対戦相手', ko:'무적의 AI 상대', fr:'Adversaire IA imbattable', de:'Unbesiegbarer Gegner', es:'Oponente IA invencible', ru:'Непобедимый ИИ', it:'Avversario AI imbattibile', pt:'Oponente IA invencível' },
            'subtitle-pvp': { zh:'好友本地对战', en:'Local Two-Player Battle', ja:'ローカル対戦', ko:'로컬 2인 대전', fr:'Duel local', de:'Lokaler Zweikampf', es:'Batalla local', ru:'Локальная игра', it:'Sfida locale', pt:'Batalha local' },
            'subtitle-aivsai': { zh:'最强 AI 巅峰对决', en:'Ultimate AI Showdown', ja:'AI 頂上決戦', ko:'최강 AI 대결', fr:'Duel ultime IA', de:'Ultimativer Showdown', es:'Enfrentamiento IA', ru:'Битва ИИ', it:'Scontro finale AI', pt:'Confronto IA supremo' },
            'subtitle-connect4': { zh:'四子连珠 重力对决', en:'Connect Four Gravity Battle', ja:'四目並べ', ko:'사목 대결', fr:'Puissance 4', de:'Vier gewinnt', es:'Conecta 4', ru:'Четыре в ряд', it:'Forza 4', pt:'Ligue 4' },
            'subtitle-gomoku': { zh:'五子连珠 运筹帷幄', en:'Gomoku Strategy Battle', ja:'五目並べ', ko:'오목 대결', fr:'Gomoku', de:'Gomoku', es:'Gomoku', ru:'Гомоку', it:'Gomoku', pt:'Gomoku' },
            'subtitle-custom': { zh:'自定义规则 无限可能', en:'Custom Rules Unlimited', ja:'カスタムルール', ko:'사용자 지정 규칙', fr:'Règles perso', de:'Benutzerdef. Regeln', es:'Reglas personalizadas', ru:'Пользовательские правила', it:'Regole personalizzate', pt:'Regras personalizadas' },
            'mode-pve': { zh:'人机', en:'PvE', ja:'CPU戦', ko:'AI전', fr:'PvE', de:'PvE', es:'PvE', ru:'PvE', it:'PvE', pt:'PvE' },
            'mode-pvp': { zh:'双人', en:'PvP', ja:'対戦', ko:'2인전', fr:'PvP', de:'PvP', es:'PvP', ru:'PvP', it:'PvP', pt:'PvP' },
            'mode-aivsai': { zh:'AI 对战', en:'AI vs AI', ja:'AI対AI', ko:'AI vs AI', fr:'IA vs IA', de:'KI vs KI', es:'IA vs IA', ru:'ИИ vs ИИ', it:'AI vs AI', pt:'IA vs IA' },
            'mode-ttt': { zh:'井字棋', en:'Tic-Tac-Toe', ja:'三目並べ', ko:'틱택토', fr:'Morpion', de:'Tic-Tac-Toe', es:'Tres en raya', ru:'Крестики-нолики', it:'Tris', pt:'Jogo da velha' },
            'mode-connect4': { zh:'四子棋', en:'Connect 4', ja:'四目', ko:'사목', fr:'Puissance 4', de:'Vier', es:'Conecta 4', ru:'4 в ряд', it:'Forza 4', pt:'Ligue 4' },
            'mode-gomoku': { zh:'五子棋', en:'Gomoku', ja:'五目', ko:'오목', fr:'Gomoku', de:'Gomoku', es:'Gomoku', ru:'Гомоку', it:'Gomoku', pt:'Gomoku' },
            'mode-custom': { zh:'自定义', en:'Custom', ja:'カスタム', ko:'사용자 지정', fr:'Perso', de:'Benutzerdef.', es:'Personalizado', ru:'Свой', it:'Personalizzato', pt:'Personalizado' },
            'label-player-x': { zh:'玩家 (X)', en:'Player (X)', ja:'プレイヤー (X)', ko:'플레이어 (X)', fr:'Joueur (X)', de:'Spieler (X)', es:'Jugador (X)', ru:'Игрок (X)', it:'Giocatore (X)', pt:'Jogador (X)' },
            'label-player-o': { zh:'AI (O)', en:'AI (O)', ja:'AI (O)', ko:'AI (O)', fr:'IA (O)', de:'KI (O)', es:'IA (O)', ru:'ИИ (O)', it:'AI (O)', pt:'IA (O)' },
            'label-player-x-pvp': { zh:'玩家 1 (X)', en:'Player 1 (X)', ja:'プレイヤー1 (X)', ko:'플레이어 1 (X)', fr:'Joueur 1 (X)', de:'Spieler 1 (X)', es:'Jugador 1 (X)', ru:'Игрок 1 (X)', it:'Giocatore 1 (X)', pt:'Jogador 1 (X)' },
            'label-player-o-pvp': { zh:'玩家 2 (O)', en:'Player 2 (O)', ja:'プレイヤー2 (O)', ko:'플레이어 2 (O)', fr:'Joueur 2 (O)', de:'Spieler 2 (O)', es:'Jugador 2 (O)', ru:'Игрок 2 (O)', it:'Giocatore 2 (O)', pt:'Jogador 2 (O)' },
            'label-player-x-ai': { zh:'AI (X)', en:'AI (X)', ja:'AI (X)', ko:'AI (X)', fr:'IA (X)', de:'KI (X)', es:'IA (X)', ru:'ИИ (X)', it:'AI (X)', pt:'IA (X)' },
            'label-player-o-ai': { zh:'AI (O)', en:'AI (O)', ja:'AI (O)', ko:'AI (O)', fr:'IA (O)', de:'KI (O)', es:'IA (O)', ru:'ИИ (O)', it:'AI (O)', pt:'IA (O)' },
            'label-draw': { zh:'平局', en:'Draw', ja:'引き分け', ko:'무승부', fr:'Égalité', de:'Unentschieden', es:'Empate', ru:'Ничья', it:'Pareggio', pt:'Empate' },
            'status-your-turn': { zh:'你的回合', en:'Your Turn', ja:'あなたの番', ko:'당신의 턴', fr:'Votre tour', de:'Dein Zug', es:'Tu turno', ru:'Ваш ход', it:'Il tuo turno', pt:'Sua vez' },
            'status-ai-thinking': { zh:'AI 思考中...', en:'AI Thinking...', ja:'AI 思考中...', ko:'AI 생각 중...', fr:'IA réfléchit...', de:'KI denkt...', es:'IA pensando...', ru:'ИИ думает...', it:'AI sta pensando...', pt:'IA pensando...' },
            'status-player1-turn': { zh:'玩家 1 的回合', en:"Player 1's Turn", ja:'プレイヤー1の番', ko:'플레이어 1 턴', fr:'Tour J1', de:'Spieler 1', es:'Turno J1', ru:'Ход Игрока 1', it:'Turno G1', pt:'Vez J1' },
            'status-player2-turn': { zh:'玩家 2 的回合', en:"Player 2's Turn", ja:'プレイヤー2の番', ko:'플레이어 2 턴', fr:'Tour J2', de:'Spieler 2', es:'Turno J2', ru:'Ход Игрока 2', it:'Turno G2', pt:'Vez J2' },
            'status-ai-x-thinking': { zh:'AI X 思考中...', en:'AI X Thinking...', ja:'AI X 思考中...', ko:'AI X 생각 중...', fr:'IA X réfléchit...', de:'KI X denkt...', es:'IA X pensando...', ru:'ИИ X думает...', it:'AI X sta pensando...', pt:'IA X pensando...' },
            'status-ai-o-thinking': { zh:'AI O 思考中...', en:'AI O Thinking...', ja:'AI O 思考中...', ko:'AI O 생각 중...', fr:'IA O réfléchit...', de:'KI O denkt...', es:'IA O pensando...', ru:'ИИ O думает...', it:'AI O sta pensando...', pt:'IA O pensando...' },
            'status-draw': { zh:'平局', en:'Draw', ja:'引き分け', ko:'무승부', fr:'Égalité', de:'Unentschieden', es:'Empate', ru:'Ничья', it:'Pareggio', pt:'Empate' },
            'btn-restart': { zh:'再来一局', en:'Restart', ja:'リスタート', ko:'다시 시작', fr:'Rejouer', de:'Neustart', es:'Reiniciar', ru:'Заново', it:'Ricomincia', pt:'Reiniciar' },
            'btn-play-again': { zh:'再来一局', en:'Play Again', ja:'もう一度', ko:'다시 하기', fr:'Rejouer', de:'Nochmal', es:'Jugar otra vez', ru:'Играть снова', it:'Gioca ancora', pt:'Jogar de novo' },
            'modal-game-over': { zh:'游戏结束', en:'Game Over', ja:'ゲーム終了', ko:'게임 종료', fr:'Fin du jeu', de:'Spielende', es:'Juego terminado', ru:'Игра окончена', it:'Fine partita', pt:'Fim de jogo' },
            'modal-win': { zh:'恭喜获胜！', en:'Victory!', ja:'勝利！', ko:'승리!', fr:'Victoire !', de:'Sieg!', es:'¡Victoria!', ru:'Победа!', it:'Vittoria!', pt:'Vitória!' },
            'modal-ai-x-wins': { zh:'AI X 技高一筹', en:'AI X takes the win', ja:'AI X が勝利', ko:'AI X 승리', fr:'IA X gagne', de:'KI X gewinnt', es:'IA X gana', ru:'ИИ X побеждает', it:'AI X vince', pt:'IA X vence' },
            'modal-ai-o-wins': { zh:'AI O 赢得胜利', en:'AI O takes the win', ja:'AI O が勝利', ko:'AI O 승리', fr:'IA O gagne', de:'KI O gewinnt', es:'IA O gana', ru:'ИИ O побеждает', it:'AI O vince', pt:'IA O vence' },
            'modal-player1-wins': { zh:'玩家 1 大获全胜！', en:'Player 1 wins big!', ja:'プレイヤー1 圧勝！', ko:'플레이어 1 대승!', fr:'Joueur 1 gagne !', de:'Spieler 1 gewinnt!', es:'¡Jugador 1 gana!', ru:'Игрок 1 побеждает!', it:'Giocatore 1 vince!', pt:'Jogador 1 vence!' },
            'modal-player2-wins': { zh:'玩家 2 技高一筹！', en:'Player 2 is on fire!', ja:'プレイヤー2 勝利！', ko:'플레이어 2 승리!', fr:'Joueur 2 gagne !', de:'Spieler 2 gewinnt!', es:'¡Jugador 2 gana!', ru:'Игрок 2 побеждает!', it:'Giocatore 2 vince!', pt:'Jogador 2 vence!' },
            'modal-you-win': { zh:'不可思议，你击败了 AI！', en:'Incredible, you beat the AI!', ja:'AI に勝利！', ko:'AI를 이겼습니다!', fr:'Incroyable, vous battez l\'IA !', de:'Unglaublich, du besiegst die KI!', es:'¡Increíble, venciste a la IA!', ru:'Невероятно, вы победили ИИ!', it:'Incredibile, hai battuto l\'AI!', pt:'Incrível, você venceu a IA!' },
            'modal-ai-wins': { zh:'别气馁，再来一局！', en:'Don\'t give up, try again!', ja:'諦めずにもう一度！', ko:'포기 말고 다시!', fr:'Ne abandonne pas, réessaie !', de:'Gib nicht auf, versuch es nochmal!', es:'¡No te rindas, inténtalo de nuevo!', ru:'Не сдавайся, попробуй ещё!', it:'Non mollare, riprova!', pt:'Não desista, tente de novo!' },
            'modal-draw-pvp': { zh:'旗鼓相当的对手！', en:'Well matched!', ja:'互角の戦い！', ko:'실력이 비슷합니다!', fr:'Bien matchés !', de:'Gut gematcht!', es:'¡Bien emparejados!', ru:'Равная игра!', it:'Ben abbinati!', pt:'Bem equilibrado!' },
            'modal-draw-pve': { zh:'势均力敌，再战一局！', en:'A close game — try again!', ja:'接戦でした、もう一度！', ko:'박빙이었습니다, 다시!', fr:'Match serré — réessaie !', de:'Ein knappes Spiel — nochmal!', es:'Partido reñido — ¡inténtalo de nuevo!', ru:'Близкая игра — попробуй ещё!', it:'Partita equilibrata — riprova!', pt:'Jogo equilibrado — tente de novo!' },
            'modal-draw-aivsai': { zh:'两大 AI 势均力敌', en:'Two perfect AIs clash', ja:'AI 同士の激突', ko:'두 AI의 대결', fr:'Deux IAs parfaites s\'affrontent', de:'Zwei perfekte KIs kollidieren', es:'Dos IAs perfectas chocan', ru:'Столкновение двух ИИ', it:'Scontro tra due AI perfette', pt:'Dois IAs perfeitos colidem' },
            'settings-title': { zh:'设置', en:'Settings', ja:'設定', ko:'설정', fr:'Paramètres', de:'Einstellungen', es:'Ajustes', ru:'Настройки', it:'Impostazioni', pt:'Configurações' },
            'setting-language': { zh:'语言', en:'Language', ja:'言語', ko:'언어', fr:'Langue', de:'Sprache', es:'Idioma', ru:'Язык', it:'Lingua', pt:'Idioma' },
            'setting-theme-color': { zh:'主题色', en:'Accent Color', ja:'アクセント色', ko:'강조 색상', fr:'Couleur', de:'Akzentfarbe', es:'Color de acento', ru:'Цвет акцента', it:'Colore', pt:'Cor de destaque' },
            'setting-custom-color': { zh:'自定义', en:'Custom', ja:'カスタム', ko:'사용자 지정', fr:'Personnalisé', de:'Benutzerdef.', es:'Personalizado', ru:'Свой', it:'Personalizzato', pt:'Personalizado' },
            'setting-contrast': { zh:'对比度', en:'Contrast', ja:'コントラスト', ko:'대비', fr:'Contraste', de:'Kontrast', es:'Contraste', ru:'Контраст', it:'Contrasto', pt:'Contraste' },
            'setting-font': { zh:'字体', en:'Font', ja:'フォント', ko:'글꼴', fr:'Police', de:'Schriftart', es:'Fuente', ru:'Шрифт', it:'Carattere', pt:'Fonte' },
            'setting-theme': { zh:'外观模式', en:'Appearance', ja:'外観モード', ko:'외관 모드', fr:'Apparence', de:'Erscheinung', es:'Apariencia', ru:'Внешний вид', it:'Aspetto', pt:'Aparência' },
            'setting-3d': { zh:'3D 棋盘', en:'3D Board', ja:'3D ボード', ko:'3D 보드', fr:'Plateau 3D', de:'3D-Brett', es:'Tablero 3D', ru:'3D доска', it:'Scacchiera 3D', pt:'Tabuleiro 3D' },
            'setting-board-theme': { zh:'棋盘主题', en:'Board Theme', ja:'ボードテーマ', ko:'보드 테마', fr:'Thème du plateau', de:'Brett-Thema', es:'Tema del tablero', ru:'Тема доски', it:'Tema scacchiera', pt:'Tema do tabuleiro' },
            'theme-classic': { zh:'经典', en:'Classic', ja:'クラシック', ko:'클식', fr:'Classique', de:'Klassisch', es:'Clásico', ru:'Классика', it:'Classico', pt:'Clássico' },
            'theme-neon': { zh:'霓虹', en:'Neon', ja:'ネオン', ko:'네온', fr:'Néon', de:'Neon', es:'Neón', ru:'Неон', it:'Neon', pt:'Neon' },
            'theme-nature': { zh:'自然', en:'Nature', ja:'自然', ko:'자연', fr:'Nature', de:'Natur', es:'Naturaleza', ru:'Природа', it:'Natura', pt:'Natureza' },
            'theme-minimal': { zh:'极简', en:'Minimal', ja:'ミニマル', ko:'미니멀', fr:'Minimal', de:'Minimal', es:'Minimal', ru:'Минимализм', it:'Minimale', pt:'Minimal' },
            'theme-space': { zh:'太空', en:'Space', ja:'宇宙', ko:'우주', fr:'Espace', de:'Weltraum', es:'Espacio', ru:'Космос', it:'Spazio', pt:'Espaço' },
            'setting-animations': { zh:'动画效果', en:'Animations', ja:'アニメーション', ko:'애니메이션', fr:'Animations', de:'Animationen', es:'Animaciones', ru:'Анимации', it:'Animazioni', pt:'Animações' },
            'setting-anim-speed': { zh:'动画速度', en:'Anim Speed', ja:'アニメ速度', ko:'애니메이션 속도', fr:'Vitesse', de:'Geschw.', es:'Velocidad', ru:'Скорость', it:'Velocità', pt:'Velocidade' },
            'setting-sound': { zh:'音效', en:'Sound', ja:'効果音', ko:'효과음', fr:'Son', de:'Ton', es:'Sonido', ru:'Звук', it:'Audio', pt:'Som' },
            'setting-sound-style': { zh:'音效风格', en:'Sound Style', ja:'効果音スタイル', ko:'효과음 스타일', fr:'Style sonore', de:'Tonstil', es:'Estilo de sonido', ru:'Стиль звука', it:'Stile audio', pt:'Estilo de som' },
            'setting-difficulty': { zh:'AI 难度', en:'AI Difficulty', ja:'AI 難易度', ko:'AI 난이도', fr:'Difficulté IA', de:'KI-Schwierigk.', es:'Dificultad IA', ru:'Сложность ИИ', it:'Difficoltà AI', pt:'Dificuldade IA' },
            'setting-custom-game': { zh:'自定义游戏', en:'Custom Game', ja:'カスタムゲーム', ko:'사용자 지정 게임', fr:'Jeu perso', de:'Benutzerdef. Spiel', es:'Juego personalizado', ru:'Своя игра', it:'Gioco personalizzato', pt:'Jogo personalizado' },
            'custom-board-size': { zh:'棋盘大小', en:'Board Size', ja:'ボードサイズ', ko:'보드 크기', fr:'Taille plateau', de:'Brettgröße', es:'Tamaño tablero', ru:'Размер доски', it:'Dimensione', pt:'Tamanho' },
            'custom-win-len': { zh:'连珠数', en:'Win Length', ja:'勝利連続数', ko:'승리 연속 수', fr:'Longueur victoire', de:'Sieg-Länge', es:'Longitud victoria', ru:'Длина победы', it:'Lunghezza vittoria', pt:'Comprimento vitória' },
            'custom-board-w': { zh:'棋盘宽', en:'Board Width', ja:'ボード幅', ko:'보드 너비', fr:'Largeur', de:'Breite', es:'Ancho', ru:'Ширина', it:'Larghezza', pt:'Largura' },
            'custom-board-h': { zh:'棋盘高', en:'Board Height', ja:'ボード高さ', ko:'보드 높이', fr:'Hauteur', de:'Höhe', es:'Alto', ru:'Высота', it:'Altezza', pt:'Altura' },
            'custom-size': { zh:'自定', en:'Custom', ja:'カスタム', ko:'사용자 지정', fr:'Perso', de:'Benutzerdef.', es:'Perso', ru:'Свой', it:'Perso', pt:'Perso' },
            'theme-dark': { zh:'深色', en:'Dark', ja:'ダーク', ko:'다크', fr:'Sombre', de:'Dunkel', es:'Oscuro', ru:'Тёмная', it:'Scuro', pt:'Escuro' },
            'theme-light': { zh:'浅色', en:'Light', ja:'ライト', ko:'라이트', fr:'Clair', de:'Hell', es:'Claro', ru:'Светлая', it:'Chiaro', pt:'Claro' },
            'theme-auto': { zh:'自动', en:'Auto', ja:'自動', ko:'자동', fr:'Auto', de:'Auto', es:'Auto', ru:'Авто', it:'Auto', pt:'Auto' },
            'font-inter': { zh:'Inter', en:'Inter', ja:'Inter', ko:'Inter', fr:'Inter', de:'Inter', es:'Inter', ru:'Inter', it:'Inter', pt:'Inter' },
            'font-serif': { zh:'衬线', en:'Serif', ja:'明朝', ko:'세리프', fr:'Serif', de:'Serif', es:'Serif', ru:'С засечками', it:'Serif', pt:'Serif' },
            'font-mono': { zh:'等宽', en:'Mono', ja:'等幅', ko:'모노', fr:'Mono', de:'Mono', es:'Mono', ru:'Моношир.', it:'Mono', pt:'Mono' },
            'font-rounded': { zh:'圆体', en:'Rounded', ja:'丸ゴ', ko:'둥근', fr:'Arrondi', de:'Rund', es:'Redondeada', ru:'Округлый', it:'Arrotondato', pt:'Arredondada' },
            'speed-slow': { zh:'慢', en:'Slow', ja:'遅い', ko:'느림', fr:'Lent', de:'Langsam', es:'Lento', ru:'Медл.', it:'Lenta', pt:'Lento' },
            'speed-normal': { zh:'中', en:'Normal', ja:'普通', ko:'보통', fr:'Normal', de:'Normal', es:'Normal', ru:'Норм.', it:'Normale', pt:'Normal' },
            'speed-fast': { zh:'快', en:'Fast', ja:'速い', ko:'빠름', fr:'Rapide', de:'Schnell', es:'Rápido', ru:'Быстр.', it:'Veloce', pt:'Rápido' },
            'sound-classic': { zh:'经典', en:'Classic', ja:'クラシック', ko:'클식', fr:'Classique', de:'Klassisch', es:'Clásico', ru:'Классика', it:'Classico', pt:'Clássico' },
            'sound-electronic': { zh:'电子', en:'Electronic', ja:'エレクトロ', ko:'일렉트로닉', fr:'Électronique', de:'Elektronisch', es:'Electrónico', ru:'Электро', it:'Elettronico', pt:'Eletrônico' },
            'sound-retro': { zh:'复古', en:'Retro', ja:'レトロ', ko:'레트로', fr:'Rétro', de:'Retro', es:'Retro', ru:'Ретро', it:'Retrò', pt:'Retrô' },
            'sound-wood': { zh:'木琴', en:'Wood', ja:'木琴', ko:'목금', fr:'Bois', de:'Holz', es:'Madera', ru:'Ксилофон', it:'Legno', pt:'Madeira' },
            'sound-bell': { zh:'铃铛', en:'Bell', ja:'ベル', ko:'벨', fr:'Cloche', de:'Glocke', es:'Campana', ru:'Колокол', it:'Campana', pt:'Sino' },
            'sound-space': { zh:'太空', en:'Space', ja:'宇宙', ko:'우주', fr:'Espace', de:'Weltraum', es:'Espacio', ru:'Космос', it:'Spazio', pt:'Espaço' },
            'sound-drum': { zh:'鼓点', en:'Drum', ja:'ドラム', ko:'드럼', fr:'Tambour', de:'Trommel', es:'Tambor', ru:'Барабан', it:'Tamburo', pt:'Tambor' },
            'sound-piano': { zh:'钢琴', en:'Piano', ja:'ピアノ', ko:'피아노', fr:'Piano', de:'Klavier', es:'Piano', ru:'Фортепиано', it:'Pianoforte', pt:'Piano' },
            'sound-synth': { zh:'合成器', en:'Synth', ja:'シンセ', ko:'신스', fr:'Synthé', de:'Synthesizer', es:'Sintetizador', ru:'Синтезатор', it:'Synth', pt:'Sintetizador' },
            'sound-chiptune': { zh:'芯片', en:'Chiptune', ja:'チップチューン', ko:'칩튠', fr:'Chiptune', de:'Chiptune', es:'Chiptune', ru:'Чиптюн', it:'Chiptune', pt:'Chiptune' },
            'sound-pluck': { zh:'弹拨', en:'Pluck', ja:'プラック', ko:'플럭', fr:'Pincé', de:'Zupf', es:'Pizzicato', ru:'Щипок', it:'Pizzicato', pt:'Pluck' },
            'sound-crystal': { zh:'水晶', en:'Crystal', ja:'クリスタル', ko:'크리스탈', fr:'Cristal', de:'Kristall', es:'Cristal', ru:'Кристалл', it:'Cristallo', pt:'Cristal' },
            'sound-pitch': { zh:'音高', en:'Pitch', ja:'ピッチ', ko:'피치', fr:'Hauteur', de:'Tonhöhe', es:'Tono', ru:'Высота', it:'Altezza', pt:'Tom' },
            'sound-duration': { zh:'音长', en:'Duration', ja:'音長', ko:'지속', fr:'Durée', de:'Dauer', es:'Duración', ru:'Длительность', it:'Durata', pt:'Duração' },
            'sound-volume': { zh:'音量', en:'Volume', ja:'音量', ko:'볼륨', fr:'Volume', de:'Lautstärke', es:'Volumen', ru:'Громкость', it:'Volume', pt:'Volume' },
            'sound-test': { zh:'试听', en:'Test', ja:'試聴', ko:'시청', fr:'Tester', de:'Testen', es:'Probar', ru:'Тест', it:'Prova', pt:'Testar' },
            'diff-easy': { zh:'简单', en:'Easy', ja:'簡単', ko:'쉬움', fr:'Facile', de:'Einfach', es:'Fácil', ru:'Легко', it:'Facile', pt:'Fácil' },
            'diff-medium': { zh:'中等', en:'Medium', ja:'普通', ko:'보통', fr:'Moyen', de:'Mittel', es:'Medio', ru:'Средне', it:'Medio', pt:'Médio' },
            'diff-hard': { zh:'困难', en:'Hard', ja:'難しい', ko:'어려움', fr:'Difficile', de:'Schwer', es:'Difícil', ru:'Сложно', it:'Difficile', pt:'Difícil' },
            'changelog-title': { zh:'更新公告', en:'Changelog', ja:'更新履歴', ko:'업데이트 공지', fr:'Mises à jour', de:'Änderungen', es:'Actualizaciones', ru:'Обновления', it:'Aggiornamenti', pt:'Atualizações' },
            'setting-about': { zh:'关于', en:'About', ja:'について', ko:'정보', fr:'À propos', de:'Über', es:'Acerca de', ru:'О приложении', it:'Informazioni', pt:'Sobre' },
            'about-repo': { zh:'仓库地址', en:'Repository', ja:'リポジトリ', ko:'저장소', fr:'Dépôt', de:'Repository', es:'Repositorio', ru:'Репозиторий', it:'Repository', pt:'Repositório' },
            'about-github': { zh:'GitHub 主页', en:'GitHub Profile', ja:'GitHub プロフィール', ko:'GitHub 프로필', fr:'Profil GitHub', de:'GitHub-Profil', es:'Perfil GitHub', ru:'Профиль GitHub', it:'Profilo GitHub', pt:'Perfil GitHub' },
            'about-haazar': { zh:'haazargames.com', en:'haazargames.com', ja:'haazargames.com', ko:'haazargames.com', fr:'haazargames.com', de:'haazargames.com', es:'haazargames.com', ru:'haazargames.com', it:'haazargames.com', pt:'haazargames.com' },
            'btn-back-to-lobby': { zh:'回到大厅', en:'Back to Lobby', ja:'ロビーに戻る', ko:'로비로 돌아가기', fr:'Retour au lobby', de:'Zurück zur Lobby', es:'Volver al lobby', ru:'Вернуться в лобби', it:'Torna alla lobby', pt:'Voltar ao lobby' },
            'app-title': { zh:'井字棋', en:'Tic Tac Toe', ja:'三目並べ', ko:'틱택토', fr:'Morpion', de:'Tic-Tac-Toe', es:'Tres en raya', ru:'Крестики-нолики', it:'Tris', pt:'Jogo da velha' },
            'aria-settings': { zh:'设置', en:'Settings', ja:'設定', ko:'설정', fr:'Paramètres', de:'Einstellungen', es:'Ajustes', ru:'Настройки', it:'Impostazioni', pt:'Configurações' },
            'aria-changelog': { zh:'更新公告', en:'Changelog', ja:'更新履歴', ko:'업데이트 공지', fr:'Journal', de:'Änderungen', es:'Actualizaciones', ru:'Обновления', it:'Aggiornamenti', pt:'Atualizações' },
            'aria-close': { zh:'关闭', en:'Close', ja:'閉じる', ko:'닫기', fr:'Fermer', de:'Schließen', es:'Cerrar', ru:'Закрыть', it:'Chiudi', pt:'Fechar' },
            'aria-cell-empty': { zh:'空单元格，按 Enter 或空格下棋', en:'Empty cell, press Enter or Space to play', ja:'空のマス、Enterまたはスペースで着手', ko:'빈 칸, Enter 또는 스페이스로 플레이', fr:'Cellule vide, appuyez sur Entrée ou Espace pour jouer', de:'Leere Zelle, Enter oder Leertaste zum Spielen', es:'Celda vacía, presiona Enter o Espacio para jugar', ru:'Пустая ячейка, нажмите Enter или Пробел для хода', it:'Cella vuota, premi Invio o Spazio per giocare', pt:'Célula vazia, pressione Enter ou Espaço para jogar' },
            'cell-x': { zh:'X 棋子', en:'X piece', ja:'Xの駒', ko:'X 돌', fr:'Jeton X', de:'X-Stein', es:'Ficha X', ru:'Фишка X', it:'Pedina X', pt:'Peça X' },
            'cell-o': { zh:'O 棋子', en:'O piece', ja:'Oの駒', ko:'O 돌', fr:'Jeton O', de:'O-Stein', es:'Ficha O', ru:'Фишка O', it:'Pedina O', pt:'Peça O' },
            'custom-win-label': { zh:'子连珠', en:' in a row', ja:'子連珠', ko:'목', fr:' alignés', de:' in einer Reihe', es:' en línea', ru:' в ряд', it:' in fila', pt:' em linha' },
            'aria-history': { zh:'对局历史', en:'History', ja:'対局履歴', ko:'대국 기록', fr:'Historique', de:'Verlauf', es:'Historial', ru:'История', it:'Cronologia', pt:'Histórico' },
            'history-title': { zh:'对局历史', en:'Game History', ja:'対局履歴', ko:'대국 기록', fr:'Historique', de:'Spielverlauf', es:'Historial', ru:'История игр', it:'Cronologia', pt:'Histórico' },
            'history-empty': { zh:'暂无对局记录', en:'No games yet', ja:'記録がありません', ko:'기록 없음', fr:'Aucune partie', de:'Noch keine Spiele', es:'Sin partidas', ru:'Нет записей', it:'Nessuna partita', pt:'Sem jogos' },
            'history-empty-sub': { zh:'完成一局游戏后，记录将自动保存', en:'Records are saved automatically after each game', ja:'ゲーム終了後に自動保存されます', ko:'게임 종료 후 자동 저장', fr:'Enregistré auto. après chaque partie', de:'Autom. nach jedem Spiel gespeichert', es:'Se guarda automáticamente', ru:'Сохраняется автоматически', it:'Salvato automaticamente', pt:'Salvo automaticamente' },
            'btn-clear-history': { zh:'清空记录', en:'Clear All', ja:'すべて削除', ko:'기록 삭제', fr:'Tout effacer', de:'Alle löschen', es:'Borrar todo', ru:'Очистить', it:'Cancella tutto', pt:'Limpar tudo' },
            'history-replay': { zh:'回放', en:'Replay', ja:'再生', ko:'재생', fr:'Revoir', de:'Wiederholung', es:'Repetición', ru:'Повтор', it:'Replay', pt:'Repetir' },
            'history-delete': { zh:'删除', en:'Delete', ja:'削除', ko:'삭제', fr:'Supprimer', de:'Löschen', es:'Eliminar', ru:'Удалить', it:'Elimina', pt:'Excluir' },
            'history-moves': { zh:'步', en:'moves', ja:'手', ko:'수', fr:'coups', de:'Züge', es:'jugadas', ru:'ходов', it:'mosse', pt:'jogadas' },
            'replay-title': { zh:'回放中', en:'Replay', ja:'再生中', ko:'재생 중', fr:'Relecture', de:'Wiedergabe', es:'Repetición', ru:'Повтор', it:'Replay', pt:'Repetição' },
            'replay-winner': { zh:'获胜', en:'wins', ja:'勝利', ko:'승리', fr:'gagne', de:'gewinnt', es:'gana', ru:'побеждает', it:'vince', pt:'vence' },
            'replay-draw': { zh:'平局', en:'Draw', ja:'引き分け', ko:'무승부', fr:'Égalité', de:'Unentschieden', es:'Empate', ru:'Ничья', it:'Pareggio', pt:'Empate' },
            'replay-reset': { zh:'重置', en:'Reset', ja:'最初', ko:'처음', fr:'Début', de:'Anfang', es:'Inicio', ru:'Сброс', it:'Inizio', pt:'Início' },
            'replay-prev': { zh:'上一步', en:'Previous', ja:'前', ko:'이전', fr:'Précédent', de:'Zurück', es:'Anterior', ru:'Назад', it:'Indietro', pt:'Anterior' },
            'replay-play': { zh:'播放', en:'Play', ja:'再生', ko:'재생', fr:'Lecture', de:'Abspielen', es:'Reproducir', ru:'Играть', it:'Riproduci', pt:'Reproduzir' },
            'replay-pause': { zh:'暂停', en:'Pause', ja:'一時停止', ko:'일시정지', fr:'Pause', de:'Pause', es:'Pausa', ru:'Пауза', it:'Pausa', pt:'Pausar' },
            'replay-next': { zh:'下一步', en:'Next', ja:'次', ko:'다음', fr:'Suivant', de:'Weiter', es:'Siguiente', ru:'Вперёд', it:'Avanti', pt:'Próximo' },
            'replay-finished': { zh:'回放结束', en:'Replay finished', ja:'再生終了', ko:'재생 종료', fr:'Fin de la relecture', de:'Wiedergabe beendet', es:'Repetición terminada', ru:'Повтор завершён', it:'Replay finito', pt:'Repetição concluída' },
            'history-confirm-clear': { zh:'确定要清空所有对局记录吗？此操作无法撤销。', en:'Clear all game history? This cannot be undone.', ja:'すべての記録を削除しますか？', ko:'모든 기록을 삭제하시겠습니까?', fr:'Effacer tout l\'historique ?', de:'Gesamten Verlauf löschen?', es:'¿Borrar todo el historial?', ru:'Очистить всю историю?', it:'Cancellare tutta la cronologia?', pt:'Limpar todo o histórico?' },
            'history-confirm-delete': { zh:'确定要删除这条对局记录吗？', en:'Delete this game record?', ja:'この記録を削除しますか？', ko:'이 기록을 삭제하시겠습니까?', fr:'Supprimer cette partie ?', de:'Diesen Eintrag löschen?', es:'¿Eliminar esta partida?', ru:'Удалить эту запись?', it:'Eliminare questa partita?', pt:'Excluir este registro?' },
            'aria-daily-cell': { zh:'每日挑战格子', en:'Daily challenge cell', ja:'デイリーチャレンジのマス', ko:'데일리 챌린지 칸', fr:'Case du défi quotidien', de:'Tägliche Herausforderungs-Zelle', es:'Celda del desafío diario', ru:'Ячейка ежедневного вызова', it:'Cella della sfida quotidiana', pt:'Célula do desafio diário' },
            'aria-undo': { zh:'悔棋', en:'Undo', ja:'待った', ko:'무르기', fr:'Annuler', de:'Rückgängig', es:'Deshacer', ru:'Отменить', it:'Annulla', pt:'Desfazer' },
            'undo-tooltip': { zh:'可撤销 {count} 步', en:'Undo {count} moves', ja:'{count} 手待った可能', ko:'{count} 수 무르기 가능', fr:'Annuler {count} coups', de:'{count} Züge rückgängig', es:'Deshacer {count} movimientos', ru:'Отменить {count} ходов', it:'Annulla {count} mosse', pt:'Desfazer {count} jogadas' },
            'aria-hint': { zh:'提示', en:'Hint', ja:'ヒント', ko:'힌트', fr:'Indice', de:'Tipp', es:'Pista', ru:'Подсказка', it:'Suggerimento', pt:'Dica' },
            'hint-shown': { zh:'已显示提示', en:'Hint shown', ja:'ヒントを表示しました', ko:'힌트 표시됨', fr:'Indice affiché', de:'Tipp angezeigt', es:'Pista mostrada', ru:'Подсказка показана', it:'Suggerimento mostrato', pt:'Dica mostrada' },
            'aria-achievements': { zh:'成就', en:'Achievements', ja:'実績', ko:'업적', fr:'Succès', de:'Erfolge', es:'Logros', ru:'Достижения', it:'Obiettivi', pt:'Conquistas' },
            'aria-tactics': { zh:'战术训练', en:'Tactics', ja:'戦術', ko:'전술', fr:'Tactique', de:'Taktik', es:'Táctica', ru:'Тактика', it:'Tattica', pt:'Tática' },
            'achievements-title': { zh:'成就', en:'Achievements', ja:'実績', ko:'업적', fr:'Succès', de:'Erfolge', es:'Logros', ru:'Достижения', it:'Obiettivi', pt:'Conquistas' },
            'achievement-unlocked': { zh:'成就解锁', en:'Achievement Unlocked', ja:'実績解除', ko:'업적 해제', fr:'Succès débloqué', de:'Erfolg freigeschaltet', es:'Logro desbloqueado', ru:'Достижение разблокировано', it:'Obiettivo sbloccato', pt:'Conquista desbloqueada' },
            'achievements-total': { zh:'总成就', en:'Total', ja:'総数', ko:'총 업적', fr:'Total', de:'Gesamt', es:'Total', ru:'Всего', it:'Totale', pt:'Total' },
            'achievements-completed': { zh:'已完成', en:'Completed', ja:'達成', ko:'완료', fr:'Complétés', de:'Abgeschlossen', es:'Completados', ru:'Выполнено', it:'Completati', pt:'Concluídas' },
            'cat-victory': { zh:'胜利之路', en:'Victory', ja:'勝利', ko:'승리', fr:'Victoire', de:'Sieg', es:'Victoria', ru:'Победа', it:'Vittoria', pt:'Vitória' },
            'cat-explorer': { zh:'探索者', en:'Explorer', ja:'探検家', ko:'탐험가', fr:'Explorateur', de:'Entdecker', es:'Explorador', ru:'Исследователь', it:'Esploratore', pt:'Explorador' },
            'cat-master': { zh:'大师', en:'Master', ja:'マスター', ko:'마스터', fr:'Maître', de:'Meister', es:'Maestro', ru:'Мастер', it:'Maestro', pt:'Mestre' },
            'ach-first-win-ttt': { zh:'井字棋首胜', en:'TTT First Win', ja:'三目初勝利', ko:'틱택토 첫 승리', fr:'Première victoire Morpion', de:'Erster TTT-Sieg', es:'Primera victoria TTT', ru:'Первая победа в Крестики-нолики', it:'Prima vittoria Tris', pt:'Primeira vitória Jogo da velha' },
            'ach-first-win-ttt-desc': { zh:'在井字棋人机模式中取得首胜', en:'Win your first Tic-Tac-Toe match against AI', ja:'三目並べ CPU戦で初勝利', ko:'틱택토 AI전에서 첫 승리', fr:'Gagnez votre première partie de Morpion contre l\'IA', de:'Gewinnen Sie Ihr erstes Tic-Tac-Toe-Spiel gegen die KI', es:'Gana tu primera partida de Tres en raya contra la IA', ru:'Победите в первой партии в Крестики-нолики против ИИ', it:'Vinci la tua prima partita a Tris contro l\'AI', pt:'Vença sua primeira partida de Jogo da velha contra a IA' },
            'ach-first-win-c4': { zh:'四子棋首胜', en:'Connect 4 First Win', ja:'四目初勝利', ko:'사목 첫 승리', fr:'Première victoire Puissance 4', de:'Erster Vier-gewinnt-Sieg', es:'Primera victoria Conecta 4', ru:'Первая победа в 4 в ряд', it:'Prima vittoria Forza 4', pt:'Primeira vitória Ligue 4' },
            'ach-first-win-c4-desc': { zh:'在四子棋人机模式中取得首胜', en:'Win your first Connect Four match against AI', ja:'四目並べ CPU戦で初勝利', ko:'사목 AI전에서 첫 승리', fr:'Gagnez votre première partie de Puissance 4 contre l\'IA', de:'Gewinnen Sie Ihr erstes Vier-gewinnt-Spiel gegen die KI', es:'Gana tu primera partida de Conecta 4 contra la IA', ru:'Победите в первой партии в 4 в ряд против ИИ', it:'Vinci la tua prima partita a Forza 4 contro l\'AI', pt:'Vença sua primeira partida de Ligue 4 contra a IA' },
            'ach-first-win-gmk': { zh:'五子棋首胜', en:'Gomoku First Win', ja:'五目初勝利', ko:'오목 첫 승리', fr:'Première victoire Gomoku', de:'Erster Gomoku-Sieg', es:'Primera victoria Gomoku', ru:'Первая победа в Гомоку', it:'Prima vittoria Gomoku', pt:'Primeira vitória Gomoku' },
            'ach-first-win-gmk-desc': { zh:'在五子棋人机模式中取得首胜', en:'Win your first Gomoku match against AI', ja:'五目並べ CPU戦で初勝利', ko:'오목 AI전에서 첫 승리', fr:'Gagnez votre première partie de Gomoku contre l\'IA', de:'Gewinnen Sie Ihr erstes Gomoku-Spiel gegen die KI', es:'Gana tu primera partida de Gomoku contra la IA', ru:'Победите в первой партии в Гомоку против ИИ', it:'Vinci la tua prima partita a Gomoku contro l\'AI', pt:'Vença sua primeira partida de Gomoku contra a IA' },
            'ach-first-win-custom': { zh:'自定义首胜', en:'Custom First Win', ja:'カスタム初勝利', ko:'사용자 지정 첫 승리', fr:'Première victoire Perso', de:'Erster Benutzerdef.-Sieg', es:'Primera victoria Personalizado', ru:'Первая победа в Своя игра', it:'Prima vittoria Personalizzato', pt:'Primeira vitória Personalizado' },
            'ach-first-win-custom-desc': { zh:'在自定义模式人机对战中取得首胜', en:'Win your first Custom match against AI', ja:'カスタム CPU戦で初勝利', ko:'사용자 지정 AI전에서 첫 승리', fr:'Gagnez votre première partie Perso contre l\'IA', de:'Gewinnen Sie Ihr erstes Benutzerdef.-Spiel gegen die KI', es:'Gana tu primera partida Personalizada contra la IA', ru:'Победите в первой партии в Своя игра против ИИ', it:'Vinci la tua prima partita Personalizzata contro l\'AI', pt:'Vença sua primeira partida Personalizada contra a IA' },
            'ach-beat-hard': { zh:'击败困难AI', en:'Hard Mode Conqueror', ja:'難しいAI撃破', ko:'어려움 AI 격파', fr:'Vainqueur Difficile', de:'Harter Gegner besiegt', es:'Conquistador Difícil', ru:'Покоритель сложности', it:'Conquistatore Difficile', pt:'Conquistador Difícil' },
            'ach-beat-hard-desc': { zh:'在任意模式的困难难度下击败AI', en:'Beat the AI on Hard difficulty in any mode', ja:'任意モードの難易度「難しい」でAIに勝利', ko:'임의 모드 어려움 난이도에서 AI 격파', fr:'Battez l\'IA en Difficile dans n\'importe quel mode', de:'Besiegen Sie die KI auf Schwer in beliebigem Modus', es:'Vence a la IA en Difícil en cualquier modo', ru:'Победите ИИ на Сложно в любом режиме', it:'Batti l\'AI in Difficile in qualsiasi modalità', pt:'Vença a IA no Difícil em qualquer modo' },
            'ach-streak-3': { zh:'三连胜', en:'Triple Threat', ja:'3連勝', ko:'3연승', fr:'Série de 3', de:'Dreifache Bedrohung', es:'Amenaza Triple', ru:'Тройная угроза', it:'Tripla Minaccia', pt:'Ameaça Tripla' },
            'ach-streak-3-desc': { zh:'人机模式下取得3连胜', en:'Win 3 consecutive PvE matches', ja:'CPU戦で3連勝', ko:'AI전에서 3연승', fr:'3 victoires consécutives en PvE', de:'3 aufeinanderfolgende PvE-Siege', es:'3 victorias consecutivas en PvE', ru:'3 победы подряд в PvE', it:'3 vittorie consecutive in PvE', pt:'3 vitórias consecutivas em PvE' },
            'ach-streak-5': { zh:'五连胜', en:'Unstoppable', ja:'5連勝', ko:'5연승', fr:'Irrésistible', de:'Unaufhaltsam', es:'Imparable', ru:'Неостановимый', it:'Imprendibile', pt:'Imparável' },
            'ach-streak-5-desc': { zh:'人机模式下取得5连胜', en:'Win 5 consecutive PvE matches', ja:'CPU戦で5連勝', ko:'AI전에서 5연승', fr:'5 victoires consécutives en PvE', de:'5 aufeinanderfolgende PvE-Siege', es:'5 victorias consecutivas en PvE', ru:'5 побед подряд в PvE', it:'5 vittorie consecutive in PvE', pt:'5 vitórias consecutivas em PvE' },
            'ach-streak-10': { zh:'十连胜', en:'Legendary Streak', ja:'10連勝', ko:'10연승', fr:'Série légendaire', de:'Legendäre Serie', es:'Racha legendaria', ru:'Легендарная серия', it:'Serie leggendaria', pt:'Sequência lendária' },
            'ach-streak-10-desc': { zh:'人机模式下取得10连胜', en:'Win 10 consecutive PvE matches', ja:'CPU戦で10連勝', ko:'AI전에서 10연승', fr:'10 victoires consécutives en PvE', de:'10 aufeinanderfolgende PvE-Siege', es:'10 victorias consecutivas en PvE', ru:'10 побед подряд в PvE', it:'10 vittorie consecutive in PvE', pt:'10 vitórias consecutivas em PvE' },
            'ach-draw-master': { zh:'平局大师', en:'Draw Master', ja:'引き分けマスター', ko:'무승부 마스터', fr:'Maître des égalités', de:'Remis-Meister', es:'Maestro del Empate', ru:'Мастер ничьих', it:'Maestro del Pareggio', pt:'Mestre do Empate' },
            'ach-draw-master-desc': { zh:'累计达成10场平局', en:'Reach 10 draws in total', ja:'累計10回の引き分けを達成', ko:'총 10회 무승부 달성', fr:'Atteignez 10 égalités au total', de:'Erreichen Sie insgesamt 10 Remis', es:'Alcanza 10 empates en total', ru:'Достигните 10 ничьих всего', it:'Raggiungi 10 pareggi in totale', pt:'Alcance 10 empates no total' },
            'ach-pvp-first': { zh:'双人首胜', en:'PvP Victor', ja:'対戦初勝利', ko:'2인전 첫 승리', fr:'Première victoire PvP', de:'PvP-Sieger', es:'Victoria PvP', ru:'Первый победитель PvP', it:'Vittoria PvP', pt:'Vitória PvP' },
            'ach-pvp-first-desc': { zh:'在双人模式中作为玩家1获胜', en:'Win as Player 1 in a PvP match', ja:'対戦モードでプレイヤー1として勝利', ko:'2인전 모드에서 플레이어 1으로 승리', fr:'Gagnez en tant que Joueur 1 en PvP', de:'Gewinnen Sie als Spieler 1 in einem PvP-Spiel', es:'Gana como Jugador 1 en una partida PvP', ru:'Победите как Игрок 1 в PvP', it:'Vinci come Giocatore 1 in PvP', pt:'Vença como Jogador 1 em PvP' },
            'ach-aivsai-first': { zh:'AI观战者', en:'AI Spectator', ja:'AI観戦者', ko:'AI 관전자', fr:'Spectateur IA', de:'KI-Zuschauer', es:'Espectador IA', ru:'Наблюдатель за ИИ', it:'Spettatore AI', pt:'Espectador IA' },
            'ach-aivsai-first-desc': { zh:'观看一局AI对战', en:'Watch an AI vs AI match', ja:'AI対AIの対戦を観戦', ko:'AI 대 AI 경기 관전', fr:'Regardez une partie IA vs IA', de:'Sehen Sie sich ein KI-vs-KI-Spiel an', es:'Observa una partida IA vs IA', ru:'Посмотрите партию ИИ против ИИ', it:'Guarda una partita AI vs AI', pt:'Assista a uma partida IA vs IA' },
            'ach-all-languages': { zh:'环球旅行者', en:'Globetrotter', ja:'环球旅行者', ko:'글로벌 여행자', fr:'Globetrotter', de:'Weltenbummler', es:'Trotamundos', ru:'Глобтроттер', it:'Giramondo', pt:'Girotondo' },
            'ach-all-languages-desc': { zh:'尝试过所有10种语言', en:'Try all 10 languages', ja:'10言語すべてを試す', ko:'10개 언어 모두 사용', fr:'Essayez les 10 langues', de:'Probieren Sie alle 10 Sprachen aus', es:'Prueba los 10 idiomas', ru:'Попробуйте все 10 языков', it:'Prova tutte le 10 lingue', pt:'Experimente os 10 idiomas' },
            'ach-all-colors': { zh:'色彩大师', en:'Color Master', ja:'色彩マスター', ko:'색상 마스터', fr:'Maître des couleurs', de:'Farb-Meister', es:'Maestro del Color', ru:'Мастер цвета', it:'Maestro del Colore', pt:'Mestre da Cor' },
            'ach-all-colors-desc': { zh:'使用过所有预设主题色', en:'Use all preset accent colors', ja:'全プリセットアクセント色を使用', ko:'모든 프리셋 강조색 사용', fr:'Utilisez toutes les couleurs prédéfinies', de:'Verwenden Sie alle voreingestellten Akzentfarben', es:'Usa todos los colores de acento preestablecidos', ru:'Используйте все предустановленные цвета акцента', it:'Usa tutti i colori accento preimpostati', pt:'Use todas as cores de destaque predefinidas' },
            'ach-all-sounds': { zh:'音效收藏家', en:'Sound Collector', ja:'効果音コレクター', ko:'효과음 수집가', fr:'Collectionneur de sons', de:'Sammler von Klängen', es:'Coleccionista de Sonidos', ru:'Коллекционер звуков', it:'Collezionista di Suoni', pt:'Colecionador de Sons' },
            'ach-all-sounds-desc': { zh:'尝试过所有12种音效风格', en:'Try all 12 sound styles', ja:'12種類の効果音スタイルすべてを試す', ko:'12가지 효과음 스타일 모두 사용', fr:'Essayez les 12 styles sonores', de:'Probieren Sie alle 12 Tonstile aus', es:'Prueba los 12 estilos de sonido', ru:'Попробуйте все 12 стилей звука', it:'Prova tutti i 12 stili audio', pt:'Experimente os 12 estilos de som' },
            'ach-all-modes': { zh:'模式探索者', en:'Mode Explorer', ja:'モード探検家', ko:'모드 탐험가', fr:'Explorateur de modes', de:'Modus-Entdecker', es:'Explorador de Modos', ru:'Исследователь режимов', it:'Esploratore di Modalità', pt:'Explorador de Modos' },
            'ach-all-modes-desc': { zh:'玩过全部4种游戏模式', en:'Play all 4 game modes', ja:'4つのゲームモードすべてをプレイ', ko:'4가지 게임 모드 모두 플레이', fr:'Jouez les 4 modes de jeu', de:'Spielen Sie alle 4 Spielmodi', es:'Juega los 4 modos de juego', ru:'Сыграйте во все 4 режима', it:'Gioca tutte le 4 modalità', pt:'Jogue os 4 modos de jogo' },
            'ach-all-battles': { zh:'对战专家', en:'Battle Expert', ja:'対戦エキスパート', ko:'대전 전문가', fr:'Expert en combats', de:'Kampf-Experte', es:'Experto en Batallas', ru:'Эксперт по боям', it:'Esperto di Battaglie', pt:'Especialista em Batalhas' },
            'ach-all-battles-desc': { zh:'玩过全部3种对战方式', en:'Play all 3 battle modes', ja:'3つの対戦方式すべてをプレイ', ko:'3가지 대전 방식 모두 플레이', fr:'Jouez les 3 modes de combat', de:'Spielen Sie alle 3 Kampfarten', es:'Juega los 3 modos de batalla', ru:'Сыграйте во все 3 режима боя', it:'Gioca tutti i 3 modi di battaglia', pt:'Jogue os 3 modos de batalha' },
            'ach-ttt-master': { zh:'井字棋大师', en:'TTT Master', ja:'三目マスター', ko:'틱택토 마스터', fr:'Maître du Morpion', de:'TTT-Meister', es:'Maestro del TTT', ru:'Мастер Крестики-нолики', it:'Maestro del Tris', pt:'Mestre do Jogo da velha' },
            'ach-ttt-master-desc': { zh:'在井字棋模式中累计获胜50场', en:'Win 50 Tic-Tac-Toe matches', ja:'三目並べで累計50勝', ko:'틱택토에서 총 50승', fr:'50 victoires au Morpion', de:'50 Tic-Tac-Toe-Siege', es:'50 victorias en Tres en raya', ru:'50 побед в Крестики-нолики', it:'50 vittorie a Tris', pt:'50 vitórias no Jogo da velha' },
            'ach-c4-master': { zh:'四子棋大师', en:'Connect 4 Master', ja:'四目マスター', ko:'사목 마스터', fr:'Maître du Puissance 4', de:'Vier-gewinnt-Meister', es:'Maestro del Conecta 4', ru:'Мастер 4 в ряд', it:'Maestro del Forza 4', pt:'Mestre do Ligue 4' },
            'ach-c4-master-desc': { zh:'在四子棋模式中累计获胜50场', en:'Win 50 Connect Four matches', ja:'四目並べで累計50勝', ko:'사목에서 총 50승', fr:'50 victoires au Puissance 4', de:'50 Vier-gewinnt-Siege', es:'50 victorias en Conecta 4', ru:'50 побед в 4 в ряд', it:'50 vittorie a Forza 4', pt:'50 vitórias no Ligue 4' },
            'ach-gmk-master': { zh:'五子棋大师', en:'Gomoku Master', ja:'五目マスター', ko:'오목 마스터', fr:'Maître du Gomoku', de:'Gomoku-Meister', es:'Maestro del Gomoku', ru:'Мастер Гомоку', it:'Maestro del Gomoku', pt:'Mestre do Gomoku' },
            'ach-gmk-master-desc': { zh:'在五子棋模式中累计获胜50场', en:'Win 50 Gomoku matches', ja:'五目並べで累計50勝', ko:'오목에서 총 50승', fr:'50 victoires au Gomoku', de:'50 Gomoku-Siege', es:'50 victorias en Gomoku', ru:'50 побед в Гомоку', it:'50 vittorie a Gomoku', pt:'50 vitórias no Gomoku' },
            'ach-custom-master': { zh:'自定义大师', en:'Custom Master', ja:'カスタムマスター', ko:'사용자 지정 마스터', fr:'Maître du Perso', de:'Benutzerdef.-Meister', es:'Maestro del Personalizado', ru:'Мастер Своя игра', it:'Maestro del Personalizzato', pt:'Mestre do Personalizado' },
            'ach-custom-master-desc': { zh:'在自定义模式中累计获胜50场', en:'Win 50 Custom matches', ja:'カスタムで累計50勝', ko:'사용자 지정에서 총 50승', fr:'50 victoires en Perso', de:'50 Benutzerdef.-Siege', es:'50 victorias en Personalizado', ru:'50 побед в Своя игра', it:'50 vittorie in Personalizzato', pt:'50 vitórias no Personalizado' },
            'ach-speed-run': { zh:'速战速决', en:'Speed Run', ja:'速戦速決', ko:'속전속결', fr:'Course rapide', de:'Schnelllauf', es:'Carrera rápida', ru:'Скоростной забег', it:'Corsa veloce', pt:'Corrida rápida' },
            'ach-speed-run-desc': { zh:'在30秒内击败AI', en:'Beat the AI within 30 seconds', ja:'30秒以内にAIを倒す', ko:'30초 이내에 AI 격파', fr:'Battez l\'IA en 30 secondes', de:'Besiegen Sie die KI in 30 Sekunden', es:'Vence a la IA en 30 segundos', ru:'Победите ИИ за 30 секунд', it:'Batti l\'AI in 30 secondi', pt:'Vença a IA em 30 segundos' },
            'ach-perfect-opening': { zh:'完美开局', en:'Perfect Opening', ja:'完璧な開始', ko:'완벽한 시작', fr:'Ouverture parfaite', de:'Perfekte Eröffnung', es:'Apertura perfecta', ru:'Идеальное начало', it:'Apertura perfetta', pt:'Abertura perfeita' },
            'ach-perfect-opening-desc': { zh:'在井字棋人机模式中首步走中心并获胜', en:'Win a TTT match with center as first move', ja:'三目並べで中央に最初の手を打って勝利', ko:'틱택토에서 중앙에 첫 수를 두고 승리', fr:'Gagnez au Morpion avec le centre comme premier coup', de:'Gewinnen Sie TTT mit der Mitte als erstem Zug', es:'Gana en TTT con el centro como primer movimiento', ru:'Победите в Крестики-нолики с центром как первый ход', it:'Vinci a Tris con il centro come prima mossa', pt:'Vença no Jogo da velha com o centro como primeiro movimento' },
            'ach-centurion': { zh:'百折不挠', en:'Centurion', ja:'百折不撓', ko:'백절불굴', fr:'Centurion', de:'Zenturio', es:'Centurión', ru:'Центурион', it:'Centurione', pt:'Centurião' },
            'ach-centurion-desc': { zh:'累计进行100局游戏', en:'Play 100 games in total', ja:'累計100局ゲームをプレイ', ko:'총 100판 게임 진행', fr:'Jouez 100 parties au total', de:'Spielen Sie insgesamt 100 Spiele', es:'Juega 100 partidas en total', ru:'Сыграйте 100 партий всего', it:'Gioca 100 partite in totale', pt:'Jogue 100 partidas no total' },
            'ach-grandmaster': { zh:'全能冠军', en:'Grandmaster', ja:'グランドマスター', ko:'그랜드마스터', fr:'Grand Maître', de:'Großmeister', es:'Gran Maestro', ru:'Гроссмейстер', it:'Gran Maestro', pt:'Grão-Mestre' },
            'ach-grandmaster-desc': { zh:'在所有4种模式的困难难度下击败AI', en:'Beat Hard AI in all 4 modes', ja:'4つのモードすべての難易度「難しい」でAIに勝利', ko:'4가지 모드 모두 어려움 난이도에서 AI 격파', fr:'Battez l\'IA en Difficile dans les 4 modes', de:'Besiegen Sie die KI auf Schwer in allen 4 Modi', es:'Vence a la IA en Difícil en los 4 modos', ru:'Победите ИИ на Сложно во всех 4 режимах', it:'Batti l\'AI in Difficile in tutte e 4 le modalità', pt:'Vença a IA no Difícil em todos os 4 modos' },
            'ach-tactic-first': { zh:'战术入门', en:'Tactic Novice', ja:'戦術入門', ko:'전술 입문', fr:'Novice tactique', de:'Taktik-Anfänger', es:'Novicio táctico', ru:'Тактический новичок', it:'Tattico principiante', pt:'Novato tático' },
            'ach-tactic-first-desc': { zh:'完成第一道战术题', en:'Complete your first tactic puzzle', ja:'初めての戦術問題を解く', ko:'첫 전술 문제 완료', fr:'Complétez votre première énigme tactique', de:'Lösen Sie Ihr erstes Taktik-Rätsel', es:'Completa tu primer puzzle táctico', ru:'Решите первую тактическую задачу', it:'Completa il tuo primo puzzle tattico', pt:'Complete seu primeiro quebra-cabeça tático' },
            'ach-tactic-all-easy': { zh:'简单征服者', en:'Easy Conqueror', ja:'簡単征服者', ko:'쉬움 정복자', fr:'Conquérant Facile', de:'Einfach-Eroberer', es:'Conquistador Fácil', ru:'Покоритель лёгких', it:'Conquistatore Facile', pt:'Conquistador Fácil' },
            'ach-tactic-all-easy-desc': { zh:'完成所有简单难度的战术题', en:'Complete all Easy tactic puzzles', ja:'全ての簡単な戦術問題を解く', ko:'모든 쉬움 전술 문제 완료', fr:'Complétez toutes les énigmes tactiques Faciles', de:'Lösen Sie alle einfachen Taktik-Rätsel', es:'Completa todos los puzzles tácticos Fáciles', ru:'Решите все лёгкие тактические задачи', it:'Completa tutti i puzzle tattici Facili', pt:'Complete todos os quebra-cabeças táticos Fáceis' },
            'ach-tactic-streak-3': { zh:'战术连胜', en:'Tactic Streak', ja:'戦術連勝', ko:'전술 연승', fr:'Série tactique', de:'Taktik-Serie', es:'Racha táctica', ru:'Тактическая серия', it:'Serie tattica', pt:'Sequência tática' },
            'ach-tactic-streak-3-desc': { zh:'连续答对3道战术题', en:'Correctly solve 3 tactic puzzles in a row', ja:'連続で3つの戦術問題を正解する', ko:'전술 문제 3개 연속 정답', fr:'Résolvez correctement 3 énigmes tactiques de suite', de:'Lösen Sie 3 Taktik-Rätsel hintereinander richtig', es:'Resuelve correctamente 3 puzzles tácticos seguidos', ru:'Правильно решите 3 тактические задачи подряд', it:'Risolvi correttamente 3 puzzle tattici di fila', pt:'Resolva corretamente 3 quebra-cabeças táticos seguidos' },
            'elo-tier-novice': { zh:'新手', en:'Novice', ja:'初心者', ko:'초보자', fr:'Novice', de:'Novize', es:'Novato', ru:'Новичок', it:'Novizio', pt:'Novato' },
            'elo-tier-apprentice': { zh:'学徒', en:'Apprentice', ja:'見習い', ko:'견습생', fr:'Apprenti', de:'Lehrling', es:'Aprendiz', ru:'Ученик', it:'Apprendista', pt:'Aprendiz' },
            'elo-tier-bronze': { zh:'青铜', en:'Bronze', ja:'ブロンズ', ko:'브론즈', fr:'Bronze', de:'Bronze', es:'Bronce', ru:'Бронза', it:'Bronzo', pt:'Bronze' },
            'elo-tier-silver': { zh:'白银', en:'Silver', ja:'シルバー', ko:'실버', fr:'Argent', de:'Silber', es:'Plata', ru:'Серебро', it:'Argento', pt:'Prata' },
            'elo-tier-gold': { zh:'黄金', en:'Gold', ja:'ゴールド', ko:'골드', fr:'Or', de:'Gold', es:'Oro', ru:'Золото', it:'Oro', pt:'Ouro' },
            'elo-tier-platinum': { zh:'铂金', en:'Platinum', ja:'プラチナ', ko:'플래티넘', fr:'Platine', de:'Platin', es:'Platino', ru:'Платина', it:'Platino', pt:'Platina' },
            'elo-tier-diamond': { zh:'钻石', en:'Diamond', ja:'ダイヤモンド', ko:'다이아몬드', fr:'Diamant', de:'Diamant', es:'Diamante', ru:'Алмаз', it:'Diamante', pt:'Diamante' },
            'elo-tier-master': { zh:'大师', en:'Master', ja:'マスター', ko:'마스터', fr:'Maître', de:'Meister', es:'Maestro', ru:'Мастер', it:'Maestro', pt:'Mestre' },
            'elo-tier-grandmaster': { zh:'宗师', en:'Grandmaster', ja:'グランドマスター', ko:'그랜드마스터', fr:'Grand Maître', de:'Großmeister', es:'Gran Maestro', ru:'Гроссмейстер', it:'Gran Maestro', pt:'Grão-Mestre' },
            'elo-change': { zh:'ELO {change} ({elo})', en:'ELO {change} ({elo})', ja:'ELO {change} ({elo})', ko:'ELO {change} ({elo})', fr:'ELO {change} ({elo})', de:'ELO {change} ({elo})', es:'ELO {change} ({elo})', ru:'ELO {change} ({elo})', it:'ELO {change} ({elo})', pt:'ELO {change} ({elo})' },
            'ach-elo-1400': { zh:'青铜之路', en:'Bronze Road', ja:'ブロンズへの道', ko:'브론즈의 길', fr:'Route du Bronze', de:'Bronze-Weg', es:'Camino del Bronce', ru:'Путь Бронзы', it:'Strada del Bronzo', pt:'Caminho do Bronze' },
            'ach-elo-1400-desc': { zh:'ELO 达到 1400', en:'Reach 1400 ELO', ja:'ELO 1400 に到達', ko:'ELO 1400 달성', fr:'Atteindre 1400 ELO', de:'Erreiche 1400 ELO', es:'Alcanza 1400 ELO', ru:'Достигните 1400 ELO', it:'Raggiungi 1400 ELO', pt:'Alcance 1400 ELO' },
            'ach-elo-1800': { zh:'黄金段位', en:'Gold Tier', ja:'ゴールド段位', ko:'골드 티어', fr:'Niveau Or', de:'Gold-Stufe', es:'Nivel Oro', ru:'Золотой уровень', it:'Livello Oro', pt:'Nível Ouro' },
            'ach-elo-1800-desc': { zh:'ELO 达到 1800', en:'Reach 1800 ELO', ja:'ELO 1800 に到達', ko:'ELO 1800 달성', fr:'Atteindre 1800 ELO', de:'Erreiche 1800 ELO', es:'Alcanza 1800 ELO', ru:'Достигните 1800 ELO', it:'Raggiungi 1800 ELO', pt:'Alcance 1800 ELO' },
            'ach-elo-2200': { zh:'大师之路', en:'Master Road', ja:'マスターへの道', ko:'마스터의 길', fr:'Route du Maître', de:'Meister-Weg', es:'Camino del Maestro', ru:'Путь Мастера', it:'Strada del Maestro', pt:'Caminho do Mestre' },
            'ach-elo-2200-desc': { zh:'ELO 达到 2200', en:'Reach 2200 ELO', ja:'ELO 2200 に到達', ko:'ELO 2200 달성', fr:'Atteindre 2200 ELO', de:'Erreiche 2200 ELO', es:'Alcanza 2200 ELO', ru:'Достигните 2200 ELO', it:'Raggiungi 2200 ELO', pt:'Alcance 2200 ELO' },
            'ach-elo-streak-5': { zh:'连胜风暴', en:'Winning Streak', ja:'連勝ストーム', ko:'연승 폭풍', fr:'Série victorieuse', de:'Siegesserie', es:'Racha ganadora', ru:'Победная серия', it:'Striscia vincente', pt:'Sequência vitoriosa' },
            'ach-elo-streak-5-desc': { zh:'ELO 对局连胜 5 场', en:'Win 5 ELO matches in a row', ja:'ELO 対戦で5連勝', ko:'ELO 대전 5연승', fr:'Gagnez 5 matchs ELO de suite', de:'Gewinne 5 ELO-Spiele in Folge', es:'Gana 5 partidas ELO seguidas', ru:'Выиграйте 5 ELO-матчей подряд', it:'Vinci 5 partite ELO di fila', pt:'Vença 5 partidas ELO seguidas' },
            'ach-misere-first': { zh:'反向初体验', en:'Misère Initiate', ja:'ミゼール入門', ko:'미제르 입문', fr:'Initié Misère', de:'Misère-Anfänger', es:'Iniciado Misère', ru:'Новичок Мизер', it:'Iniziato Misère', pt:'Iniciante Misère' },
            'ach-misere-first-desc': { zh:'在反向规则模式下首次获胜', en:'Win your first Misère match', ja:'ミゼールモードで初勝利', ko:'미제르 모드에서 첫 승리', fr:'Gagnez votre premier match Misère', de:'Gewinne dein erstes Misère-Spiel', es:'Gana tu primera partida Misère', ru:'Победите в первом матче Мизер', it:'Vinci la tua prima partita Misère', pt:'Vença sua primeira partida Misère' },
            'ach-misere-streak-3': { zh:'反向连胜', en:'Misère Streak', ja:'ミゼール連勝', ko:'미제르 연승', fr:'Série Misère', de:'Misère-Serie', es:'Racha Misère', ru:'Серия Мизер', it:'Serie Misère', pt:'Sequência Misère' },
            'ach-misere-streak-3-desc': { zh:'反向规则模式下连胜 3 场', en:'Win 3 Misère matches in a row', ja:'ミゼールモードで3連勝', ko:'미제르 모드 3연승', fr:'Gagnez 3 matchs Misère de suite', de:'Gewinne 3 Misère-Spiele in Folge', es:'Gana 3 partidas Misère seguidas', ru:'Выиграйте 3 матча Мизер подряд', it:'Vinci 3 partite Misère di fila', pt:'Vença 3 partidas Misère seguidas' },
            'ach-misere-all-modes': { zh:'反向全能', en:'Misère Master', ja:'ミゼールマスター', ko:'미제르 마스터', fr:'Maître Misère', de:'Misère-Meister', es:'Maestro Misère', ru:'Мастер Мизер', it:'Maestro Misère', pt:'Mestre Misère' },
            'ach-misere-all-modes-desc': { zh:'在所有模式的反向规则下各赢一场', en:'Win a Misère match in all 4 modes', ja:'全モードのミゼールで勝利', ko:'모든 모드의 미제르에서 승리', fr:'Gagnez en Misère dans les 4 modes', de:'Gewinne in allen 4 Modi Misère', es:'Gana en Misère en los 4 modos', ru:'Победите в Мизер во всех 4 режимах', it:'Vinci in Misère in tutte e 4 le modalità', pt:'Vença em Misère em todos os 4 modos' },
            'ach-misere-hard': { zh:'反向地狱', en:'Misère Hell', ja:'ミゼール地獄', ko:'미제르 지옥', fr:'Enfer Misère', de:'Misère-Hölle', es:'Infierno Misère', ru:'Ад Мизер', it:'Inferno Misère', pt:'Inferno Misère' },
            'ach-misere-hard-desc': { zh:'在困难难度的反向规则下获胜', en:'Win a Hard Misère match', ja:'難易度「難しい」のミゼールで勝利', ko:'어려움 난이도 미제르에서 승리', fr:'Gagnez en Misère Difficile', de:'Gewinne Misère auf Schwer', es:'Gana en Misère Difícil', ru:'Победите в Мизер на Сложно', it:'Vinci in Misère Difficile', pt:'Vença em Misère no Difícil' },
            'setting-elo': { zh:'ELO 等级分', en:'ELO Rating', ja:'ELO レーティング', ko:'ELO 레이팅', fr:'Classement ELO', de:'ELO-Wertung', es:'Clasificación ELO', ru:'Рейтинг ELO', it:'Classifica ELO', pt:'Classificação ELO' },
            'setting-elo-toggle': { zh:'显示 ELO', en:'Show ELO', ja:'ELO を表示', ko:'ELO 표시', fr:'Afficher ELO', de:'ELO anzeigen', es:'Mostrar ELO', ru:'Показать ELO', it:'Mostra ELO', pt:'Mostrar ELO' },
            'setting-elo-desc': { zh:'基于对局结果动态调整的等级分系统，仅在人机对战中生效。', en:'Dynamic rating system based on match results, only active in PvE.', ja:'対戦結果に基づく動的レーティングシステム、PvEのみ有効。', ko:'대전 결과 기반 동적 레이팅 시스템, PvE에서만 활성화.', fr:'Système de classement dynamique basé sur les résultats, actif uniquement en PvE.', de:'Dynamisches Bewertungssystem basierend auf Spielergebnissen, nur im PvE aktiv.', es:'Sistema de clasificación dinámico basado en resultados, solo activo en PvE.', ru:'Динамическая система рейтинга на основе результатов, только в PvE.', it:'Sistema di rating dinamico basato sui risultati, attivo solo in PvE.', pt:'Sistema de classificação dinâmico baseado em resultados, ativo apenas em PvE.' },
            'setting-misere': { zh:'反向规则', en:'Misère Mode', ja:'ミゼールモード', ko:'미제르 모드', fr:'Mode Misère', de:'Misère-Modus', es:'Modo Misère', ru:'Режим Мизер', it:'Modalità Misère', pt:'Modo Misère' },
            'setting-misere-toggle': { zh:'连成线者输', en:'Line = Loss', ja:'ライン完成=敗北', ko:'줄 완성=패배', fr:'Ligne = Défaite', de:'Linie = Verlust', es:'Línea = Derrota', ru:'Линия = Поражение', it:'Linea = Sconfitta', pt:'Linha = Derrota' },
            'setting-misere-desc': { zh:'经典变体规则：连成线的一方输。策略完全反转！', en:'Classic variant: forming a line makes you lose. Strategy is completely inverted!', ja:'古典的変則：ラインを作ると負け。戦略が完全に逆転！', ko:'클식 변형: 줄을 완성하면 패배. 전략이 완전히 반전!', fr:'Variante classique : former une ligne vous fait perdre. Stratégie inversée !', de:'Klassische Variante: Linie bilden = Verlust. Strategie komplett umgekehrt!', es:'Variante clásica: formar línea = perder. ¡Estrategia invertida!', ru:'Классический вариант: линия = поражение. Стратегия полностью инвертирована!', it:'Variante classica: formare una linea = sconfitta. Strategia invertita!', pt:'Variante clássica: formar linha = derrota. Estratégia invertida!' },
            'misere-indicator': { zh:'反向规则 · 连成线者输', en:'Misère · Line = Loss', ja:'ミゼール · ライン完成=敗北', ko:'미제르 · 줄 완성=패배', fr:'Misère · Ligne = Défaite', de:'Misère · Linie = Verlust', es:'Misère · Línea = Derrota', ru:'Мизер · Линия = Поражение', it:'Misère · Linea = Sconfitta', pt:'Misère · Linha = Derrota' },
            'modal-misere-you-win': { zh:'对手被迫连线，你赢了！', en:'Opponent was forced to connect — you win!', ja:'相手がラインを完成させたので勝利！', ko:'상대가 줄을 완성하여 승리!', fr:'L’adversaire a été forcé — vous gagnez !', de:'Gegner gezwungen — Sie gewinnen!', es:'¡El oponente se vio forzado — ganas!', ru:'Соперник вынужден — вы победили!', it:'L’avversario è stato costretto — vinci!', pt:'Oponente forçado — você vence!' },
            'modal-misere-ai-wins': { zh:'你被迫连线，输了！', en:'You were forced to connect — you lose!', ja:'あなたがラインを完成させたので敗北！', ko:'당신이 줄을 완성하여 패배!', fr:'Vous avez été forcé — vous perdez !', de:'Sie wurden gezwungen — Sie verlieren!', es:'¡Fuiste forzado — pierdes!', ru:'Вы вынуждены — вы проиграли!', it:'Sei stato costretto — perdi!', pt:'Você foi forçado — perde!' },
            'modal-misere-draw': { zh:'棋盘已满，平局！', en:'Board full — it\'s a draw!', ja:'盤面が一杯で引き分け！', ko:'보드가 가득 차 무승부!', fr:'Plateau plein — égalité !', de:'Brett voll — Unentschieden!', es:'¡Tablero lleno — empate!', ru:'Доска заполнена — ничья!', it:'Tabella piena — pareggio!', pt:'Tabuleiro cheio — empate!' },
            'setting-timer': { zh:'对战计时器', en:'Battle Timer', ja:'対戦タイマー', ko:'대전 타이머', fr:'Chronomètre', de:'Zeituhr', es:'Cronómetro', ru:'Таймер', it:'Timer', pt:'Cronômetro' },
            'setting-timer-toggle': { zh:'启用计时', en:'Enable Timer', ja:'タイマー有効', ko:'타이머 활성화', fr:'Activer', de:'Aktivieren', es:'Activar', ru:'Включить', it:'Attiva', pt:'Ativar' },
            'setting-timer-duration': { zh:'每方时长', en:'Time per Player', ja:'双方の持ち時間', ko:'각자 시간', fr:'Temps par joueur', de:'Zeit pro Spieler', es:'Tiempo por jugador', ru:'Время на игрока', it:'Tempo a giocatore', pt:'Tempo por jogador' },
            'timer-1m': { zh:'1分', en:'1m', ja:'1分', ko:'1분', fr:'1m', de:'1m', es:'1m', ru:'1м', it:'1m', pt:'1m' },
            'timer-3m': { zh:'3分', en:'3m', ja:'3分', ko:'3분', fr:'3m', de:'3m', es:'3m', ru:'3м', it:'3m', pt:'3m' },
            'timer-5m': { zh:'5分', en:'5m', ja:'5分', ko:'5분', fr:'5m', de:'5m', es:'5m', ru:'5м', it:'5m', pt:'5m' },
            'timer-10m': { zh:'10分', en:'10m', ja:'10分', ko:'10분', fr:'10m', de:'10m', es:'10m', ru:'10м', it:'10m', pt:'10m' },
            'timer-out': { zh:'时间到', en:'Time Out', ja:'時間切れ', ko:'시간 초과', fr:'Temps écoulé', de:'Zeit abgelaufen', es:'Se acabó el tiempo', ru:'Время вышло', it:'Tempo scaduto', pt:'Tempo esgotado' },
            'hotkey-title': { zh:'键盘快捷键', en:'Keyboard Shortcuts', ja:'キーボードショートカット', ko:'키보드 단축키', fr:'Raccourcis clavier', de:'Tastenkürzel', es:'Atajos de teclado', ru:'Горячие клавиши', it:'Scorciatoie da tastiera', pt:'Atalhos do teclado' },
            'hotkey-gameplay': { zh:'对局操作', en:'Gameplay', ja:'ゲームプレイ', ko:'게임플레이', fr:'Jeu', de:'Spiel', es:'Juego', ru:'Игровой процесс', it:'Gameplay', pt:'Jogabilidade' },
            'hotkey-global': { zh:'全局快捷键', en:'Global Shortcuts', ja:'グローバルショートカット', ko:'전역 단축키', fr:'Raccourcis globaux', de:'Globale Kürzel', es:'Atajos globales', ru:'Глобальные клавиши', it:'Scorciatoie globali', pt:'Atalhos globais' },
            'hotkey-nav': { zh:'方向键', en:'Arrow Keys', ja:'方向キー', ko:'방향키', fr:'Flèches', de:'Pfeiltasten', es:'Flechas', ru:'Стрелки', it:'Frecce', pt:'Setas' },
            'hotkey-nav-desc': { zh:'在棋盘格子间移动焦点', en:'Move focus across board cells', ja:'盤面のマス間でフォーカス移動', ko:'보드 칸 간 포커스 이동', fr:'Déplacer le focus entre les cellules', de:'Fokus über Zellen bewegen', es:'Mover foco entre celdas', ru:'Перемещать фокус по ячейкам', it:'Sposta il fuoco tra le celle', pt:'Mover foco entre células' },
            'hotkey-enter': { zh:'回车 / 空格', en:'Enter / Space', ja:'Enter / スペース', ko:'Enter / 스페이스', fr:'Entrée / Espace', de:'Eingabe / Leertaste', es:'Intro / Espacio', ru:'Enter / Пробел', it:'Invio / Spazio', pt:'Enter / Espaço' },
            'hotkey-enter-desc': { zh:'在焦点格落子', en:'Play at focused cell', ja:'フォーカスのマスに着手', ko:'포커스 칸에 플레이', fr:'Jouer sur la cellule focus', de:'Auf fokussierter Zelle spielen', es:'Jugar en celda enfocada', ru:'Сходить в ячейку с фокусом', it:'Gioca sulla cella a fuoco', pt:'Jogar na célula em foco' },
            'hotkey-numbers': { zh:'数字键 1-9', en:'Number Keys 1-9', ja:'数字キー 1-9', ko:'숫자 키 1-9', fr:'Chiffres 1-9', de:'Ziffern 1-9', es:'Números 1-9', ru:'Цифры 1-9', it:'Numeri 1-9', pt:'Números 1-9' },
            'hotkey-numbers-desc': { zh:'快速选择对应格子（井字棋/四子棋）', en:'Quick select cell (TTT / Connect 4)', ja:'対応マスを選択（三目/四目）', ko:'해당 칸 빠르게 선택 (틱택토/사목)', fr:'Sélection rapide (Morpion / Puissance 4)', de:'Schnellauswahl (TTT / Vier gewinnt)', es:'Selección rápida (TTT / Conecta 4)', ru:'Быстрый выбор ячейки', it:'Selezione rapida (Tris / Forza 4)', pt:'Seleção rápida (Jogo da velha / Ligue 4)' },
            'hotkey-r': { zh:'R', en:'R', ja:'R', ko:'R', fr:'R', de:'R', es:'R', ru:'R', it:'R', pt:'R' },
            'hotkey-r-desc': { zh:'重新开始对局', en:'Restart game', ja:'ゲームをリスタート', ko:'게임 다시 시작', fr:'Rejouer', de:'Neustart', es:'Reiniciar', ru:'Заново', it:'Ricomincia', pt:'Reiniciar' },
            'hotkey-u': { zh:'U', en:'U', ja:'U', ko:'U', fr:'U', de:'U', es:'U', ru:'U', it:'U', pt:'U' },
            'hotkey-u-desc': { zh:'悔棋', en:'Undo move', ja:'待った', ko:'무르기', fr:'Annuler', de:'Rückgängig', es:'Deshacer', ru:'Отменить', it:'Annulla', pt:'Desfazer' },
            'hotkey-h': { zh:'H', en:'H', ja:'H', ko:'H', fr:'H', de:'H', es:'H', ru:'H', it:'H', pt:'H' },
            'hotkey-h-desc': { zh:'提示（人机井字棋可用时）/ 对局历史', en:'Hint (PvE TTT when available) / Open game history', ja:'ヒント（CPU三目並べ利用可能時）/ 対局履歴を開く', ko:'힌트(AI 틱택토 가능 시) / 대국 기록 열기', fr:'Indice (PvE Morpion si disponible) / Ouvrir l\'historique', de:'Tipp (TTT-KI wenn verfügbar) / Verlauf öffnen', es:'Pista (TTT PvE si disponible) / Abrir historial', ru:'Подсказка (PvE Крестики-нолики если доступно) / Открыть историю', it:'Suggerimento (PvE Tris se disponibile) / Apri cronologia', pt:'Dica (PvE Jogo da velha se disponível) / Abrir histórico' },
            'hotkey-a': { zh:'A', en:'A', ja:'A', ko:'A', fr:'A', de:'A', es:'A', ru:'A', it:'A', pt:'A' },
            'hotkey-a-desc': { zh:'打开成就面板', en:'Open achievements', ja:'実績を開く', ko:'업적 열기', fr:'Ouvrir les succès', de:'Erfolge öffnen', es:'Abrir logros', ru:'Открыть достижения', it:'Apri obiettivi', pt:'Abrir conquistas' },
            'hotkey-c': { zh:'C', en:'C', ja:'C', ko:'C', fr:'C', de:'C', es:'C', ru:'C', it:'C', pt:'C' },
            'hotkey-c-desc': { zh:'打开更新公告', en:'Open changelog', ja:'更新履歴を開く', ko:'업데이트 공지 열기', fr:'Ouvrir le journal', de:'Änderungen öffnen', es:'Abrir actualizaciones', ru:'Открыть обновления', it:'Apri aggiornamenti', pt:'Abrir atualizações' },
            'hotkey-s': { zh:'S', en:'S', ja:'S', ko:'S', fr:'S', de:'S', es:'S', ru:'S', it:'S', pt:'S' },
            'hotkey-s-desc': { zh:'打开设置', en:'Open settings', ja:'設定を開く', ko:'설정 열기', fr:'Ouvrir les paramètres', de:'Einstellungen öffnen', es:'Abrir ajustes', ru:'Открыть настройки', it:'Apri impostazioni', pt:'Abrir configurações' },
            'hotkey-question': { zh:'?', en:'?', ja:'?', ko:'?', fr:'?', de:'?', es:'?', ru:'?', it:'?', pt:'?' },
            'hotkey-question-desc': { zh:'打开此快捷键帮助', en:'Open this help panel', ja:'このヘルプを開く', ko:'이 도움말 열기', fr:'Ouvrir ce panneau d\'aide', de:'Dieses Hilfefenster öffnen', es:'Abrir este panel de ayuda', ru:'Открыть эту справку', it:'Apri questo pannello aiuto', pt:'Abrir este painel de ajuda' },
            'hotkey-t': { zh:'T', en:'T', ja:'T', ko:'T', fr:'T', de:'T', es:'T', ru:'T', it:'T', pt:'T' },
            'hotkey-t-desc': { zh:'打开战术训练', en:'Open Tactics Trainer', ja:'戦術トレーニングを開く', ko:'전술 훈련 열기', fr:'Ouvrir entraînement tactique', de:'Taktik-Training öffnen', es:'Abrir entrenamiento táctico', ru:'Открыть тактический тренажер', it:'Apri allenamento tattico', pt:'Abrir treinamento tático' },
            'hotkey-d': { zh:'D', en:'D', ja:'D', ko:'D', fr:'D', de:'D', es:'D', ru:'D', it:'D', pt:'D' },
            'hotkey-d-desc': { zh:'打开每日挑战', en:'Open Daily Challenge', ja:'デイリーチャレンジを開く', ko:'데일리 챌린지 열기', fr:'Ouvrir le défi quotidien', de:'Tägliche Herausforderung öffnen', es:'Abrir desafío diario', ru:'Открыть ежедневный вызов', it:'Apri sfida quotidiana', pt:'Abrir desafio diário' },
            'hotkey-p': { zh:'P', en:'P', ja:'P', ko:'P', fr:'P', de:'P', es:'P', ru:'P', it:'P', pt:'P' },
            'hotkey-p-desc': { zh:'打开闪电谜题', en:'Open Puzzle Rush', ja:'パズルラッシュを開く', ko:'퍼즐 러시 열기', fr:'Ouvrir Puzzle Rush', de:'Puzzle-Rush öffnen', es:'Abrir Puzzle Rush', ru:'Открыть Puzzle Rush', it:'Apri Puzzle Rush', pt:'Abrir Puzzle Rush' },
            'hotkey-z': { zh:'Z', en:'Z', ja:'Z', ko:'Z', fr:'Z', de:'Z', es:'Z', ru:'Z', it:'Z', pt:'Z' },
            'hotkey-z-desc': { zh:'打开摆盘工坊', en:'Open Board Editor', ja:'エディタを開く', ko:'에디터 열기', fr:'Ouvrir l\'éditeur', de:'Editor öffnen', es:'Abrir editor', ru:'Открыть редактор', it:'Apri editor', pt:'Abrir editor' },
            'aria-editor': { zh:'摆盘工坊', en:'Board Editor', ja:'エディタ', ko:'에디터', fr:'Éditeur', de:'Editor', es:'Editor', ru:'Редактор', it:'Editor', pt:'Editor' },
            'aria-editor-cell': { zh:'编辑格子', en:'Editor cell', ja:'エディタのマス', ko:'에디터 칸', fr:'Case de l\'éditeur', de:'Editor-Zelle', es:'Celda del editor', ru:'Ячейка редактора', it:'Cella dell\'editor', pt:'Célula do editor' },
            'aria-editor-toggle': { zh:'切换当前玩家', en:'Toggle current player', ja:'手番を切り替え', ko:'현재 플레이어 전환', fr:'Changer de joueur', de:'Spieler wechseln', es:'Cambiar jugador', ru:'Сменить игрока', it:'Cambia giocatore', pt:'Alternar jogador' },
            'aria-tactics-cell': { zh:'战术格子', en:'Tactics cell', ja:'戦術のマス', ko:'전술 칸', fr:'Case tactique', de:'Taktik-Zelle', es:'Celda táctica', ru:'Тактическая ячейка', it:'Cella tattica', pt:'Célula tática' },
            'editor-modal-title': { zh:'摆盘工坊', en:'Board Editor', ja:'ボードエディタ', ko:'보드 에디터', fr:'Éditeur de plateau', de:'Brett-Editor', es:'Editor de tablero', ru:'Редактор доски', it:'Editor di scacchiera', pt:'Editor de tabuleiro' },
            'editor-meta': { zh:'自由设置局面，然后开始对战', en:'Set up any position, then play', ja:'好きな局面を作って対戦しよう', ko:'원하는 국면을 설정하고 대전하세요', fr:'Créez une position, puis jouez', de:'Beliebige Position aufbauen', es:'Crea cualquier posición y juega', ru:'Создайте любую позицию и играйте', it:'Crea una posizione e gioca', pt:'Crie qualquer posição e jogue' },
            'editor-player-label': { zh:'当前回合', en:'To Move', ja:'手番', ko:'현재 턴', fr:'À jouer', de:'Am Zug', es:'Turno', ru:'Ход', it:'Turno', pt:'Vez' },
            'editor-clear': { zh:'清空', en:'Clear', ja:'クリア', ko:'초기화', fr:'Vider', de:'Leeren', es:'Vaciar', ru:'Очистить', it:'Cancella', pt:'Limpar' },
            'editor-start': { zh:'开始游戏', en:'Start Game', ja:'ゲーム開始', ko:'게임 시작', fr:'Commencer', de:'Spiel starten', es:'Iniciar juego', ru:'Начать игру', it:'Inizia partita', pt:'Iniciar jogo' },
            'editor-invalid': { zh:'局面无效：同一玩家已有三连', en:'Invalid: three in a row already', ja:'無効：すでに三連', ko:'무효: 이미 3연속', fr:'Invalide : trois alignés', de:'Ungültig: Dreierreihe', es:'Inválido: tres en línea', ru:'Недопустимо: три в ряд', it:'Non valido: tris', pt:'Inválido: três em linha' },
            'ach-editor-first': { zh:'造物主', en:'Creator', ja:'創造主', ko:'창조자', fr:'Créateur', de:'Schöpfer', es:'Creador', ru:'Создатель', it:'Creatore', pt:'Criador' },
            'ach-editor-first-desc': { zh:'第一次使用摆盘工坊', en:'Use the Board Editor for the first time', ja:'初めてエディタを使う', ko:'처음으로 에디터 사용', fr:'Utilisez l\'éditeur pour la première fois', de:'Verwenden Sie den Editor zum ersten Mal', es:'Usa el editor por primera vez', ru:'Используйте редактор впервые', it:'Usa l\'editor per la prima volta', pt:'Use o editor pela primeira vez' },
            'ach-first-hint': { zh:'灵光一闪', en:'Lightbulb Moment', ja:'閃き', ko:'아이디어', fr:'Éclair de génie', de:'Aha-Moment', es:'Momento de inspiración', ru:'Озарение', it:'Momento di ispirazione', pt:'Momento de inspiração' },
            'ach-first-hint-desc': { zh:'第一次使用提示功能', en:'Use the Hint button for the first time', ja:'初めてヒントを使う', ko:'처음으로 힌트 사용', fr:'Utilisez l\'indice pour la première fois', de:'Verwenden Sie den Tipp zum ersten Mal', es:'Usa la pista por primera vez', ru:'Используйте подсказку впервые', it:'Usa il suggerimento per la prima volta', pt:'Use a dica pela primeira vez' },
            'hotkey-esc': { zh:'Esc', en:'Esc', ja:'Esc', ko:'Esc', fr:'Esc', de:'Esc', es:'Esc', ru:'Esc', it:'Esc', pt:'Esc' },
            'hotkey-esc-desc': { zh:'关闭弹窗/抽屉', en:'Close modal or drawer', ja:'ポップアップ/ドロワーを閉じる', ko:'팝업/서랍 닫기', fr:'Fermer la modale/le tiroir', de:'Modal/Drawer schließen', es:'Cerrar modal o cajón', ru:'Закрыть модалку/панель', it:'Chiudi modale o cassetto', pt:'Fechar modal ou gaveta' },
            'hotkey-ctrl-z': { zh:'Ctrl + Z', en:'Ctrl + Z', ja:'Ctrl + Z', ko:'Ctrl + Z', fr:'Ctrl + Z', de:'Ctrl + Z', es:'Ctrl + Z', ru:'Ctrl + Z', it:'Ctrl + Z', pt:'Ctrl + Z' },
            'hotkey-ctrl-z-desc': { zh:'悔棋', en:'Undo move', ja:'待った', ko:'무르기', fr:'Annuler', de:'Rückgängig', es:'Deshacer', ru:'Отменить', it:'Annulla', pt:'Desfazer' },
            'setting-stats': { zh:'游戏统计', en:'Statistics', ja:'ゲーム統計', ko:'게임 통계', fr:'Statistiques', de:'Statistiken', es:'Estadísticas', ru:'Статистика', it:'Statistiche', pt:'Estatísticas' },
            'stats-reset': { zh:'重置', en:'Reset', ja:'リセット', ko:'초기화', fr:'Réinitialiser', de:'Zurücksetzen', es:'Restablecer', ru:'Сбросить', it:'Reimposta', pt:'Redefinir' },
            'stats-total': { zh:'总对局', en:'Total', ja:'総対局', ko:'총 대국', fr:'Total', de:'Gesamt', es:'Total', ru:'Всего', it:'Totale', pt:'Total' },
            'stats-wins': { zh:'胜场', en:'Wins', ja:'勝利', ko:'승리', fr:'Victoires', de:'Siege', es:'Victorias', ru:'Победы', it:'Vittorie', pt:'Vitórias' },
            'stats-losses': { zh:'败场', en:'Losses', ja:'敗北', ko:'패배', fr:'Défaites', de:'Niederlagen', es:'Derrotas', ru:'Поражения', it:'Sconfitte', pt:'Derrotas' },
            'stats-draws': { zh:'平局', en:'Draws', ja:'引分', ko:'무승부', fr:'Nuls', de:'Remis', es:'Empates', ru:'Ничьи', it:'Pareggi', pt:'Empates' },
            'stats-streak': { zh:'连胜', en:'Streak', ja:'連勝', ko:'연승', fr:'Série', de:'Serie', es:'Racha', ru:'Серия', it:'Serie', pt:'Sequência' },
            'stats-losing-streak': { zh:'连败', en:'Losing Streak', ja:'連敗', ko:'연패', fr:'Série de défaites', de:'Niederlagenserie', es:'Racha de derrotas', ru:'Серия поражений', it:'Seria di sconfitte', pt:'Sequência de derrotas' },
            'stats-best-streak': { zh:'最高连胜', en:'Best Streak', ja:'最高連勝', ko:'최고 연승', fr:'Meilleure série', de:'Beste Serie', es:'Mejor racha', ru:'Лучшая серия', it:'Migliore serie', pt:'Melhor sequência' },
            'stats-by-mode': { zh:'各模式', en:'By Mode', ja:'モード別', ko:'모드별', fr:'Par mode', de:'Nach Modus', es:'Por modo', ru:'По режиму', it:'Per modalità', pt:'Por modo' },
            'stats-by-diff': { zh:'各难度 (PvE)', en:'By Difficulty', ja:'難易度別', ko:'난이도별', fr:'Par difficulté', de:'Nach Schwierigkeit', es:'Por dificultad', ru:'По сложности', it:'Per difficoltà', pt:'Por dificuldade' },
            'stats-moves': { zh:'总步数', en:'Total Moves', ja:'総手数', ko:'총 수', fr:'Coups totaux', de:'Gesamtzüge', es:'Movimientos totales', ru:'Всего ходов', it:'Mosse totali', pt:'Movimentos totais' },
            'stats-fastest': { zh:'最快胜利', en:'Fastest Win', ja:'最短勝利', ko:'최단 승리', fr:'Victoire rapide', de:'Schnellster Sieg', es:'Victoria más rápida', ru:'Самая быстрая победа', it:'Vittoria più veloce', pt:'Vitória mais rápida' },
            'stats-longest': { zh:'最长对局', en:'Longest Game', ja:'最長対局', ko:'최장 대국', fr:'Partie la plus longue', de:'Längstes Spiel', es:'Partida más larga', ru:'Самая долгая игра', it:'Partita più lunga', pt:'Jogo mais longo' },
            'stats-time': { zh:'总时长', en:'Total Time', ja:'総時間', ko:'총 시간', fr:'Temps total', de:'Gesamtzeit', es:'Tiempo total', ru:'Общее время', it:'Tempo totale', pt:'Tempo total' },
            'stats-reset-confirm': { zh:'确定要重置所有统计数据吗？此操作不可撤销。', en:'Reset all statistics? This cannot be undone.', ja:'統計をリセットしますか？元に戻せません。', ko:'통계를 초기화하시겠습니까? 되돌릴 수 없습니다.', fr:'Réinitialiser les statistiques ? Irréversible.', de:'Statistiken zurücksetzen? Nicht rückgängig.', es:'¿Restablecer estadísticas? No se puede deshacer.', ru:'Сбросить статистику? Нельзя отменить.', it:'Reimpostare le statistiche? Irreversibile.', pt:'Redefinir estatísticas? Não pode ser desfeito.' },
            'setting-ripple': { zh:'落子波纹', en:'Move Ripple', ja:'着手リップル', ko:'돌 리플', fr:'Onde de placement', de:'Zug-Ripple', es:'Onda al colocar', ru:'Рипл хода', it:'Ondata mossa', pt:'Onda de jogada' },
            'setting-data': { zh:'数据管理', en:'Data Management', ja:'データ管理', ko:'데이터 관리', fr:'Gestion des données', de:'Datenverwaltung', es:'Gestión de datos', ru:'Управление данными', it:'Gestione dati', pt:'Gerenciamento de dados' },
            'data-export': { zh:'导出数据', en:'Export', ja:'エクスポート', ko:'낸 내기', fr:'Exporter', de:'Exportieren', es:'Exportar', ru:'Экспорт', it:'Esporta', pt:'Exportar' },
            'data-import': { zh:'导入数据', en:'Import', ja:'インポート', ko:'가져오기', fr:'Importer', de:'Importieren', es:'Importar', ru:'Импорт', it:'Importa', pt:'Importar' },
            'data-copy': { zh:'复制', en:'Copy', ja:'コピー', ko:'복사', fr:'Copier', de:'Kopieren', es:'Copiar', ru:'Копировать', it:'Copia', pt:'Copiar' },
            'data-import-confirm': { zh:'确认导入', en:'Confirm Import', ja:'インポート確認', ko:'가져오기 확인', fr:'Confirmer import', de:'Import bestätigen', es:'Confirmar importación', ru:'Подтвердить импорт', it:'Conferma importazione', pt:'Confirmar importação' },
            'data-import-placeholder': { zh:'在此处粘贴导出的 JSON 数据...', en:'Paste exported JSON data here...', ja:'エクスポートしたJSONをここに貼り付け...', ko:'낸 JSON 데이터를 여기에 붙여넣기...', fr:'Collez les données JSON ici...', de:'Exportierte JSON-Daten hier einfügen...', es:'Pegue los datos JSON exportados aquí...', ru:'Вставьте экспортированные JSON-данные сюда...', it:'Incolla i dati JSON esportati qui...', pt:'Cole os dados JSON exportados aqui...' },
            'data-import-invalid': { zh:'数据格式无效，请检查 JSON 内容。', en:'Invalid data format. Please check the JSON content.', ja:'データ形式が無効です。JSONを確認してください。', ko:'데이터 형식이 잘못되었습니다. JSON을 확인하세요.', fr:'Format de données invalide. Vérifiez le contenu JSON.', de:'Ungültiges Datenformat. Bitte JSON-Inhalt prüfen.', es:'Formato de datos inválido. Verifique el contenido JSON.', ru:'Неверный формат данных. Проверьте содержимое JSON.', it:'Formato dati non valido. Controlla il contenuto JSON.', pt:'Formato de dados inválido. Verifique o conteúdo JSON.' },
            'data-import-confirm-msg': { zh:'导入将覆盖当前所有本地数据（设置、历史、成就、统计），确定继续吗？', en:'Import will overwrite all current local data (settings, history, achievements, stats). Continue?', ja:'インポートは現在のローカルデータを上書きします。続行しますか？', ko:'가져오기는 현재 모든 로컬 데이터를 덮어씁니다. 계속하시겠습니까?', fr:'L\'import écrasera toutes les données locales. Continuer ?', de:'Import überschreibt alle lokalen Daten. Fortfahren?', es:'La importación sobrescribirá todos los datos locales. ¿Continuar?', ru:'Импорт перезапишет все локальные данные. Продолжить?', it:'L\'importazione sovrascriverà tutti i dati locali. Continuare?', pt:'A importação substituirá todos os dados locais. Continuar?' },
            'data-import-success': { zh:'导入成功！页面即将刷新。', en:'Import successful! Page will refresh.', ja:'インポート成功！ページを更新します。', ko:'가져오기 성공! 페이지를 새로고침합니다.', fr:'Import réussi ! La page va se rafraîchir.', de:'Import erfolgreich! Seite wird aktualisiert.', es:'¡Importación exitosa! La página se actualizará.', ru:'Импорт успешен! Страница будет обновлена.', it:'Importazione riuscita! La pagina verrà aggiornata.', pt:'Importação bem-sucedida! A página será atualizada.' },
            'data-import-fail': { zh:'导入失败，数据可能已损坏。', en:'Import failed. Data may be corrupted.', ja:'インポート失敗。データが破損している可能性があります。', ko:'가져오기 실패. 데이터가 손상되었을 수 있습니다.', fr:'Échec de l\'import. Les données peuvent être corrompues.', de:'Import fehlgeschlagen. Daten möglicherweise beschädigt.', es:'Importación fallida. Los datos pueden estar corruptos.', ru:'Импорт не удался. Данные могут быть повреждены.', it:'Importazione fallita. I dati potrebbero essere corrotti.', pt:'Importação falhou. Os dados podem estar corrompidos.' },
            'data-copy-success': { zh:'已复制', en:'Copied', ja:'コピー済', ko:'복사 완료', fr:'Copié', de:'Kopiert', es:'Copiado', ru:'Скопировано', it:'Copiato', pt:'Copiado' },
            'data-export-empty': { zh:'暂无数据可导出。请先进行几局游戏。', en:'No data to export yet. Play a few games first.', ja:'エクスポートするデータがありません。', ko:'낸 내용이 없습니다.', fr:'Aucune donnée à exporter.', de:'Keine Daten zum Exportieren.', es:'Sin datos para exportar.', ru:'Нет данных для экспорта.', it:'Nessun dato da esportare.', pt:'Sem dados para exportar.' },
            'data-import-too-large': { zh:'导入数据过大（超过 2MB），请检查数据内容。', en:'Import data too large (over 2MB). Please check the data.', ja:'インポートデータが大きすぎます（2MB超）。', ko:'가져오기 데이터가 너무 큽니다(2MB 초과).', fr:'Données d\'import trop volumineuses (> 2 Mo).', de:'Importdaten zu groß (> 2 MB).', es:'Datos de importación demasiado grandes (> 2 MB).', ru:'Данные для импорта слишком большие (> 2 МБ).', it:'Dati di importazione troppo grandi (> 2 MB).', pt:'Dados de importação muito grandes (> 2 MB).' },
            'tactics-title': { zh:'战术训练', en:'Tactics Trainer', ja:'戦術トレーニング', ko:'전술 훈련', fr:'Entraînement tactique', de:'Taktik-Training', es:'Entrenamiento táctico', ru:'Тактический тренажер', it:'Allenamento tattico', pt:'Treinamento tático' },
            'tactics-modal-title': { zh:'战术挑战', en:'Tactic Challenge', ja:'戦術チャレンジ', ko:'전술 도전', fr:'Défi tactique', de:'Taktik-Herausforderung', es:'Desafío táctico', ru:'Тактическая задача', it:'Sfida tattica', pt:'Desafio tático' },
            'tactics-filter-all': { zh:'全部', en:'All', ja:'すべて', ko:'전체', fr:'Tout', de:'Alle', es:'Todo', ru:'Все', it:'Tutti', pt:'Todos' },
            'tactics-filter-easy': { zh:'简单', en:'Easy', ja:'簡単', ko:'쉬움', fr:'Facile', de:'Einfach', es:'Fácil', ru:'Легкий', it:'Facile', pt:'Fácil' },
            'tactics-filter-medium': { zh:'中等', en:'Medium', ja:'普通', ko:'보통', fr:'Moyen', de:'Mittel', es:'Medio', ru:'Средний', it:'Medio', pt:'Médio' },
            'tactics-filter-hard': { zh:'困难', en:'Hard', ja:'難しい', ko:'어려움', fr:'Difficile', de:'Schwer', es:'Difícil', ru:'Сложный', it:'Difficile', pt:'Difícil' },
            'tactics-skip': { zh:'跳过', en:'Skip', ja:'スキップ', ko:'걍 넘기기', fr:'Passer', de:'Überspringen', es:'Saltar', ru:'Пропустить', it:'Salta', pt:'Pular' },
            'tactics-next': { zh:'下一题', en:'Next', ja:'次へ', ko:'다음', fr:'Suivant', de:'Weiter', es:'Siguiente', ru:'Далее', it:'Avanti', pt:'Próximo' },
            'tactics-correct': { zh:'回答正确！', en:'Correct!', ja:'正解！', ko:'정답!', fr:'Correct !', de:'Richtig!', es:'¡Correcto!', ru:'Верно!', it:'Corretto!', pt:'Correto!' },
            'tactics-wrong': { zh:'回答错误，请再试一次。', en:'Incorrect. Try again.', ja:'不正解。もう一度挑戦してください。', ko:'오답. 다시 시도하세요.', fr:'Incorrect. Réessayez.', de:'Falsch. Versuchen Sie es erneut.', es:'Incorrecto. Inténtalo de nuevo.', ru:'Неверно. Попробуйте ещё.', it:'Sbagliato. Riprova.', pt:'Incorreto. Tente novamente.' },
            'tactics-completed': { zh:'已完成', en:'Completed', ja:'完了', ko:'완료', fr:'Terminé', de:'Abgeschlossen', es:'Completado', ru:'Выполнено', it:'Completato', pt:'Concluído' },
            'tactics-empty': { zh:'暂无战术题', en:'No tactics available', ja:'利用可能な戦術問題がありません', ko:'이용 가능한 전술 문제 없음', fr:'Aucune énigme tactique disponible', de:'Keine Taktik-Rätsel verfügbar', es:'No hay puzzles tácticos disponibles', ru:'Нет доступных тактических задач', it:'Nessun puzzle tattico disponibile', pt:'Nenhum quebra-cabeça tático disponível' },
            'tactics-streak': { zh:'连胜', en:'Streak', ja:'連勝', ko:'연승', fr:'Série', de:'Serie', es:'Racha', ru:'Серия', it:'Serie', pt:'Sequência' },
            'tactics-best-streak': { zh:'最高连胜', en:'Best Streak', ja:'最高連勝', ko:'최고 연승', fr:'Meilleure série', de:'Beste Serie', es:'Mejor racha', ru:'Лучшая серия', it:'Migliore serie', pt:'Melhor sequência' },
            'daily-modal-title': { zh:'每日挑战', en:'Daily Challenge', ja:'デイリーチャレンジ', ko:'데일리 챌린지', fr:'Défi quotidien', de:'Tägliche Herausforderung', es:'Desafío diario', ru:'Ежедневный вызов', it:'Sfida quotidiana', pt:'Desafio diário' },
            'daily-meta-date': { zh:'今日', en:'Today', ja:'今日', ko:'오늘', fr:"Aujourd'hui", de:'Heute', es:'Hoy', ru:'Сегодня', it:'Oggi', pt:'Hoje' },
            'daily-streak': { zh:'连胜', en:'Streak', ja:'連勝', ko:'연승', fr:'Série', de:'Serie', es:'Racha', ru:'Серия', it:'Serie', pt:'Sequência' },
            'daily-type-win': { zh:'一步制胜', en:'Win in One', ja:'一撃必勝', ko:'한 방에 승리', fr:'Gagner en un', de:'Sieg in einem', es:'Ganar en uno', ru:'Победа за ход', it:'Vittoria in uno', pt:'Vitória em um' },
            'daily-type-block': { zh:'必须阻挡', en:'Must Block', ja:'ブロック必須', ko:'반드시 차단', fr:'Doit bloquer', de:'Muss blocken', es:'Debe bloquear', ru:'Должен блокировать', it:'Deve bloccare', pt:'Deve bloquear' },
            'daily-type-fork': { zh:'制造双杀', en:'Create Fork', ja:'フォークを作る', ko:'포크 만들기', fr:'Créer un fork', de:'Fork erstellen', es:'Crear tenedor', ru:'Создать вилку', it:'Creare una forchetta', pt:'Criar garfo' },
            'daily-type-opening': { zh:'最佳开局', en:'Best Opening', ja:'最善の開始', ko:'최고의 시작', fr:'Meilleure ouverture', de:'Beste Eröffnung', es:'Mejor apertura', ru:'Лучшее начало', it:'Migliore apertura', pt:'Melhor abertura' },
            'daily-type-setup': { zh:'布局准备', en:'Setup', ja:'セットアップ', ko:'준비', fr:'Mise en place', de:'Aufbau', es:'Preparación', ru:'Подготовка', it:'Preparazione', pt:'Preparação' },
            'daily-desc-win': { zh:'{player} 的回合，找出制胜的一步。', en:'{player} to move. Find the winning move.', ja:'{player} の番。勝利の一手を見つけよう。', ko:'{player} 턴. 승리의 수를 찾으세요.', fr:'{player} joue. Trouvez le coup gagnant.', de:'{player} ist am Zug. Finden Sie den Gewinnzug.', es:'{player} juega. Encuentra el movimiento ganador.', ru:'{player} ходит. Найдите победный ход.', it:'{player} gioca. Trova la mossa vincente.', pt:'{player} joga. Encontre o movimento vencedor.' },
            'daily-desc-block': { zh:'{player} 的回合，对手即将获胜，必须阻挡。', en:'{player} to move. The opponent is about to win. You must block.', ja:'{player} の番。相手が勝ちそう。ブロックしよう。', ko:'{player} 턴. 상대가 곧 승리합니다. 차단하세요.', fr:'{player} joue. L\'adversaire va gagner. Bloquez.', de:'{player} ist am Zug. Der Gegner gewinnt gleich. Blocken.', es:'{player} juega. El oponente va a ganar. Bloquea.', ru:'{player} ходит. Противник почти победил. Блокируйте.', it:'{player} gioca. L\'avversario sta per vincere. Blocca.', pt:'{player} joga. O oponente vai ganhar. Bloqueie.' },
            'daily-desc-fork': { zh:'{player} 的回合，制造一个对手无法同时防守的双威胁。', en:'{player} to move. Create a fork that the opponent cannot defend both threats.', ja:'{player} の番。相手が防ぎきれないフォークを作ろう。', ko:'{player} 턴. 상대가 동시에 막을 수 없는 포크를 만드세요.', fr:'{player} joue. Créez un fork que l\'adversaire ne peut pas défendre.', de:'{player} ist am Zug. Erstellen Sie einen Fork, den der Gegner nicht blocken kann.', es:'{player} juega. Crea un tenedor que el oponente no pueda defender.', ru:'{player} ходит. Создайте вилку, которую противник не сможет защитить.', it:'{player} gioca. Crea una forchetta che l\'avversario non possa difendere.', pt:'{player} joga. Crie um garfo que o oponente não possa defender.' },
            'daily-desc-opening': { zh:'{player} 的回合，这是开局阶段，选择最佳走法。', en:'{player} to move. This is the opening phase. Choose the best move.', ja:'{player} の番。序盤です。最善手を選ぼう。', ko:'{player} 턴. 오프닝 단계입니다. 최고의 수를 선택하세요.', fr:'{player} joue. C\'est l\'ouverture. Choisissez le meilleur coup.', de:'{player} ist am Zug. Eröffnungsphase. Wählen Sie den besten Zug.', es:'{player} juega. Es la apertura. Elige el mejor movimiento.', ru:'{player} ходит. Это дебют. Выберите лучший ход.', it:'{player} gioca. È l\'apertura. Scegli la mossa migliore.', pt:'{player} joga. É a abertura. Escolha a melhor jogada.' },
            'daily-desc-setup': { zh:'{player} 的回合，为下一步创造有利局面。', en:'{player} to move. Set up a favorable position for the next move.', ja:'{player} の番。次の手のために有利な局面を作ろう。', ko:'{player} 턴. 다음 수를 위해 유리한 국면을 만드세요.', fr:'{player} joue. Préparez une position favorable pour le prochain coup.', de:'{player} ist am Zug. Bereiten Sie eine günstige Position für den nächsten Zug vor.', es:'{player} juega. Prepara una posición favorable para el siguiente movimiento.', ru:'{player} ходит. Создайте выгодную позицию для следующего хода.', it:'{player} gioca. Prepara una posizione favorevole per la prossima mossa.', pt:'{player} joga. Prepare uma posição favorável para a próxima jogada.' },
            'daily-correct': { zh:'回答正确！今日挑战已完成。', en:"Correct! Today's challenge is complete.", ja:'正解！今日のチャレンジ完了。', ko:'정답! 오늘의 챌린지 완료.', fr:'Correct ! Le défi du jour est terminé.', de:'Richtig! Die heutige Herausforderung ist geschafft.', es:'¡Correcto! El desafío de hoy está completo.', ru:'Верно! Сегодняшний вызов выполнен.', it:'Corretto! La sfida di oggi è completata.', pt:'Correto! O desafio de hoje está completo.' },
            'daily-wrong': { zh:'回答错误，请再试一次。', en:'Incorrect. Try again.', ja:'不正解。もう一度挑戦してください。', ko:'오답. 다시 시도하세요.', fr:'Incorrect. Réessayez.', de:'Falsch. Versuchen Sie es erneut.', es:'Incorrecto. Inténtalo de nuevo.', ru:'Неверно. Попробуйте ещё.', it:'Sbagliato. Riprova.', pt:'Incorreto. Tente novamente.' },
            'daily-skip': { zh:'跳过', en:'Skip', ja:'スキップ', ko:'걍 넘기기', fr:'Passer', de:'Überspringen', es:'Saltar', ru:'Пропустить', it:'Salta', pt:'Pular' },
            'daily-share': { zh:'分享', en:'Share', ja:'共有', ko:'공유', fr:'Partager', de:'Teilen', es:'Compartir', ru:'Поделиться', it:'Condividi', pt:'Compartilhar' },
            'daily-copied': { zh:'已复制', en:'Copied', ja:'コピー済', ko:'복사 완료', fr:'Copié', de:'Kopiert', es:'Copiado', ru:'Скопировано', it:'Copiato', pt:'Copiado' },
            'daily-already-done': { zh:'你已完成今日挑战！', en:"You have already completed today's challenge!", ja:'今日のチャレンジは既に完了しています！', ko:'오늘의 챌린지를 이미 완료했습니다!', fr:'Vous avez déjà terminé le défi du jour !', de:'Sie haben die heutige Herausforderung bereits geschafft!', es:'¡Ya has completado el desafío de hoy!', ru:'Вы уже выполнили сегодняшний вызов!', it:'Hai già completato la sfida di oggi!', pt:'Você já completou o desafio de hoje!' },
            'daily-share-text': { zh:'📅 每日挑战 {date} | 类型：{type} | 连胜：{streak} 🔥', en:'📅 Daily Challenge {date} | Type: {type} | Streak: {streak} 🔥', ja:'📅 デイリーチャレンジ {date} | タイプ：{type} | 連勝：{streak} 🔥', ko:'📅 데일리 챌린지 {date} | 유형: {type} | 연승: {streak} 🔥', fr:'📅 Défi quotidien {date} | Type : {type} | Série : {streak} 🔥', de:'📅 Tägliche Herausforderung {date} | Typ: {type} | Serie: {streak} 🔥', es:'📅 Desafío diario {date} | Tipo: {type} | Racha: {streak} 🔥', ru:'📅 Ежедневный вызов {date} | Тип: {type} | Серия: {streak} 🔥', it:'📅 Sfida quotidiana {date} | Tipo: {type} | Serie: {streak} 🔥', pt:'📅 Desafio diário {date} | Tipo: {type} | Sequência: {streak} 🔥' },
            'aria-daily': { zh:'每日挑战', en:'Daily Challenge', ja:'デイリーチャレンジ', ko:'데일리 챌린지', fr:'Défi quotidien', de:'Tägliche Herausforderung', es:'Desafío diario', ru:'Ежедневный вызов', it:'Sfida quotidiana', pt:'Desafio diário' },
            'aria-rush': { zh:'闪电谜题', en:'Puzzle Rush', ja:'パズルラッシュ', ko:'퍼즐 러시', fr:'Puzzle Rush', de:'Puzzle-Rush', es:'Puzzle Rush', ru:'Puzzle Rush', it:'Puzzle Rush', pt:'Puzzle Rush' },
            'aria-rush-cell': { zh:'闪电谜题格子', en:'Puzzle Rush cell', ja:'パズルラッシュのマス', ko:'퍼즐 러시 칸', fr:'Case du Puzzle Rush', de:'Puzzle-Rush-Zelle', es:'Celda del Puzzle Rush', ru:'Ячейка Puzzle Rush', it:'Cella del Puzzle Rush', pt:'Célula do Puzzle Rush' },
            'rush-modal-title': { zh:'闪电谜题', en:'Puzzle Rush', ja:'パズルラッシュ', ko:'퍼즐 러시', fr:'Puzzle Rush', de:'Puzzle-Rush', es:'Puzzle Rush', ru:'Puzzle Rush', it:'Puzzle Rush', pt:'Puzzle Rush' },
            'rush-time': { zh:'时间', en:'Time', ja:'時間', ko:'시간', fr:'Temps', de:'Zeit', es:'Tiempo', ru:'Время', it:'Tempo', pt:'Tempo' },
            'rush-score': { zh:'得分', en:'Score', ja:'スコア', ko:'점수', fr:'Score', de:'Punkte', es:'Puntuación', ru:'Счёт', it:'Punteggio', pt:'Pontuação' },
            'rush-streak': { zh:'连击', en:'Streak', ja:'連勝', ko:'연승', fr:'Série', de:'Serie', es:'Racha', ru:'Серия', it:'Serie', pt:'Sequência' },
            'rush-start-desc': { zh:'在3分钟内尽可能多地解答战术谜题！', en:'Solve as many tactic puzzles as you can in 3 minutes!', ja:'3分以内にできるだけ多くの戦術問題を解こう！', ko:'3분 안에 최대한 많은 전술 문제를 풀어보세요!', fr:'Résolvez autant d\'énigmes tactiques que possible en 3 minutes !', de:'Lösen Sie so viele Taktik-Rätsel wie möglich in 3 Minuten!', es:'¡Resuelve tantos puzzles tácticos como puedas en 3 minutos!', ru:'Решите как можно больше тактических задач за 3 минуты!', it:'Risolvi più puzzle tattici che puoi in 3 minuti!', pt:'Resolva o máximo de quebra-cabeças táticos em 3 minutos!' },
            'rush-rule-1': { zh:'答对 +1 分', en:'Correct: +1 point', ja:'正解で +1 ポイント', ko:'정답 +1점', fr:'Correct : +1 point', de:'Richtig: +1 Punkt', es:'Correcto: +1 punto', ru:'Верно: +1 очко', it:'Corretto: +1 punto', pt:'Correto: +1 ponto' },
            'rush-rule-2': { zh:'答错 -1 分', en:'Wrong: -1 point', ja:'不正解で -1 ポイント', ko:'오답 -1점', fr:'Faux : -1 point', de:'Falsch: -1 Punkt', es:'Incorrecto: -1 punto', ru:'Неверно: -1 очко', it:'Sbagliato: -1 punto', pt:'Errado: -1 ponto' },
            'rush-rule-3': { zh:'连续答对获得连击奖励', en:'Build a streak for bonus momentum', ja:'連続正解でボーナス', ko:'연속 정답으로 병너스 획득', fr:'Enchaînez pour un bonus', de:'Serien bringen Bonus', es:'Racha para bonificación', ru:'Серия даёт бонус', it:'Serie per bonus', pt:'Sequência para bônus' },
            'rush-start-btn': { zh:'开始挑战', en:'Start Challenge', ja:'チャレンジ開始', ko:'도전 시작', fr:'Commencer', de:'Herausforderung starten', es:'Iniciar desafío', ru:'Начать вызов', it:'Inizia sfida', pt:'Iniciar desafio' },
            'rush-skip': { zh:'跳过', en:'Skip', ja:'スキップ', ko:'걍 넘기기', fr:'Passer', de:'Überspringen', es:'Saltar', ru:'Пропустить', it:'Salta', pt:'Pular' },
            'rush-correct': { zh:'正确！', en:'Correct!', ja:'正解！', ko:'정답!', fr:'Correct !', de:'Richtig!', es:'¡Correcto!', ru:'Верно!', it:'Corretto!', pt:'Correto!' },
            'rush-wrong': { zh:'错误！', en:'Wrong!', ja:'不正解！', ko:'오답!', fr:'Faux !', de:'Falsch!', es:'¡Incorrecto!', ru:'Неверно!', it:'Sbagliato!', pt:'Errado!' },
            'rush-result-label': { zh:'最终得分', en:'Final Score', ja:'最終スコア', ko:'최종 점수', fr:'Score final', de:'Endpunktzahl', es:'Puntuación final', ru:'Итоговый счёт', it:'Punteggio finale', pt:'Pontuação final' },
            'rush-restart-btn': { zh:'再玩一次', en:'Play Again', ja:'もう一度', ko:'다시 하기', fr:'Rejouer', de:'Nochmal spielen', es:'Jugar de nuevo', ru:'Играть снова', it:'Gioca ancora', pt:'Jogar novamente' },
            'rush-close-btn': { zh:'关闭', en:'Close', ja:'閉じる', ko:'닫기', fr:'Fermer', de:'Schließen', es:'Cerrar', ru:'Закрыть', it:'Chiudi', pt:'Fechar' },
            'rush-stat-correct': { zh:'正确', en:'Correct', ja:'正解', ko:'정답', fr:'Correct', de:'Richtig', es:'Correcto', ru:'Верно', it:'Corretto', pt:'Correto' },
            'rush-stat-wrong': { zh:'错误', en:'Wrong', ja:'不正解', ko:'오답', fr:'Faux', de:'Falsch', es:'Incorrecto', ru:'Неверно', it:'Sbagliato', pt:'Errado' },
            'rush-stat-skipped': { zh:'跳过', en:'Skipped', ja:'スキップ', ko:'걍 넘김', fr:'Passé', de:'Übersprungen', es:'Saltado', ru:'Пропущено', it:'Saltato', pt:'Pulado' },
            'rush-stat-best-streak': { zh:'最高连击', en:'Best Streak', ja:'最高連勝', ko:'최고 연승', fr:'Meilleure série', de:'Beste Serie', es:'Mejor racha', ru:'Лучшая серия', it:'Migliore serie', pt:'Melhor sequência' },
            'rush-new-record': { zh:'🎉 新纪录！', en:'🎉 New Record!', ja:'🎉 新記録！', ko:'🎉 신기록!', fr:'🎉 Nouveau record !', de:'🎉 Neuer Rekord!', es:'🎉 ¡Nuevo récord!', ru:'🎉 Новый рекорд!', it:'🎉 Nuovo record!', pt:'🎉 Novo recorde!' },
            'rush-best-score': { zh:'历史最佳：{score}', en:'Best: {score}', ja:'ベスト：{score}', ko:'최고 점수: {score}', fr:'Meilleur : {score}', de:'Beste: {score}', es:'Mejor: {score}', ru:'Лучший: {score}', it:'Migliore: {score}', pt:'Melhor: {score}' },
            'ach-rush-first': { zh:'闪电新手', en:'Rush Rookie', ja:'ラッシュ新人', ko:'러시 루키', fr:'Rush Rookie', de:'Rush-Neuling', es:'Rush Novato', ru:'Новичок Rush', it:'Rush Rookie', pt:'Rush Novato' },
            'ach-rush-first-desc': { zh:'第一次玩闪电谜题', en:'Play Puzzle Rush for the first time', ja:'初めてパズルラッシュをプレイする', ko:'처음으로 퍼즐 러시 플레이', fr:'Jouez à Puzzle Rush pour la première fois', de:'Spielen Sie Puzzle-Rush zum ersten Mal', es:'Juega Puzzle Rush por primera vez', ru:'Сыграйте в Puzzle Rush впервые', it:'Gioca a Puzzle Rush per la prima volta', pt:'Jogue Puzzle Rush pela primeira vez' },
            'ach-rush-score-10': { zh:'闪电达人', en:'Rush Pro', ja:'ラッシュプロ', ko:'러시 프로', fr:'Rush Pro', de:'Rush-Profi', es:'Rush Pro', ru:'Puzzle Rush Pro', it:'Rush Pro', pt:'Rush Pro' },
            'ach-rush-score-10-desc': { zh:'闪电谜题得分达到10分', en:'Score 10 points in Puzzle Rush', ja:'パズルラッシュで10ポイント獲得', ko:'퍼즐 러시에서 10점 달성', fr:'Marquez 10 points en Puzzle Rush', de:'Erreichen Sie 10 Punkte im Puzzle-Rush', es:'Consigue 10 puntos en Puzzle Rush', ru:'Наберите 10 очков в Puzzle Rush', it:'Segna 10 punti in Puzzle Rush', pt:'Pontue 10 no Puzzle Rush' },
            'ach-rush-score-20': { zh:'闪电大师', en:'Rush Master', ja:'ラッシュマスター', ko:'러시 마스터', fr:'Rush Master', de:'Rush-Meister', es:'Rush Master', ru:'Мастер Puzzle Rush', it:'Rush Master', pt:'Rush Mestre' },
            'ach-rush-score-20-desc': { zh:'闪电谜题得分达到20分', en:'Score 20 points in Puzzle Rush', ja:'パズルラッシュで20ポイント獲得', ko:'퍼즐 러시에서 20점 달성', fr:'Marquez 20 points en Puzzle Rush', de:'Erreichen Sie 20 Punkte im Puzzle-Rush', es:'Consigue 20 puntos en Puzzle Rush', ru:'Наберите 20 очков в Puzzle Rush', it:'Segna 20 punti in Puzzle Rush', pt:'Pontue 20 no Puzzle Rush' },
            'ach-rush-streak-5': { zh:'连击之王', en:'Streak King', ja:'連勝キング', ko:'연승의 왕', fr:'Roi de la série', de:'Serienkönig', es:'Rey de la racha', ru:'Король серий', it:'Re della serie', pt:'Rei da sequência' },
            'ach-rush-streak-5-desc': { zh:'闪电谜题连击达到5', en:'Reach a streak of 5 in Puzzle Rush', ja:'パズルラッシュで連勝5を達成', ko:'퍼즐 러시에서 연승 5 달성', fr:'Atteignez une série de 5 en Puzzle Rush', de:'Erreichen Sie eine Serie von 5 im Puzzle-Rush', es:'Alcanza una racha de 5 en Puzzle Rush', ru:'Достигните серии из 5 в Puzzle Rush', it:'Raggiungi una serie di 5 in Puzzle Rush', pt:'Alcance uma sequência de 5 no Puzzle Rush' },
            'ach-daily-first': { zh:'初出茅庐', en:'First Steps', ja:'初挑戦', ko:'첫 도전', fr:'Premiers pas', de:'Erste Schritte', es:'Primeros pasos', ru:'Первые шаги', it:'Primi passi', pt:'Primeiros passos' },
            'ach-daily-first-desc': { zh:'完成第一个每日挑战', en:'Complete your first daily challenge', ja:'初めてのデイリーチャレンジを完了する', ko:'첫 데일리 챌린지 완료', fr:'Terminez votre premier défi quotidien', de:'Schließen Sie Ihre erste tägliche Herausforderung ab', es:'Completa tu primer desafío diario', ru:'Выполните свой первый ежедневный вызов', it:'Completa la tua prima sfida quotidiana', pt:'Complete seu primeiro desafio diário' },
            'ach-daily-streak-7': { zh:'持之以恒', en:'Weekly Warrior', ja:'週間戦士', ko:'주간 전사', fr:'Guerrier hebdomadaire', de:'Wöchentlicher Krieger', es:'Guerrero semanal', ru:'Еженедельный воин', it:'Guerriero settimanale', pt:'Guerreiro semanal' },
            'ach-daily-streak-7-desc': { zh:'连续7天完成每日挑战', en:'Complete daily challenges 7 days in a row', ja:'7日連続でデイリーチャレンジを完了する', ko:'7일 연속 데일리 챌린지 완료', fr:'Terminez les défis quotidiens 7 jours de suite', de:'Schließen Sie tägliche Herausforderungen 7 Tage hintereinander ab', es:'Completa desafíos diarios 7 días seguidos', ru:'Выполняйте ежедневные вызовы 7 дней подряд', it:'Completa le sfide quotidiane per 7 giorni di fila', pt:'Complete desafios diários por 7 dias seguidos' },
            'ach-daily-streak-30': { zh:'月度冠军', en:'Monthly Master', ja:'月間マスター', ko:'월간 마스터', fr:'Maître du mois', de:'Monatlicher Meister', es:'Maestro mensual', ru:'Мастер месяца', it:'Maestro del mese', pt:'Mestre mensal' },
            'ach-daily-streak-30-desc': { zh:'连续30天完成每日挑战', en:'Complete daily challenges 30 days in a row', ja:'30日連続でデイリーチャレンジを完了する', ko:'30일 연속 데일리 챌린지 완료', fr:'Terminez les défis quotidiens 30 jours de suite', de:'Schließen Sie tägliche Herausforderungen 30 Tage hintereinander ab', es:'Completa desafíos diarios 30 días seguidos', ru:'Выполняйте ежедневные вызовы 30 дней подряд', it:'Completa le sfide quotidiane per 30 giorni di fila', pt:'Complete desafios diários por 30 dias seguidos' },
            'tactic_t1_title': { zh:'一步获胜', en:'Win in One', ja:'一撃必勝', ko:'한 방에 승리', fr:'Gagner en un', de:'Sieg in einem', es:'Ganar en uno', ru:'Победа за ход', it:'Vittoria in uno', pt:'Vitória em um' },
            'tactic_t1_desc': { zh:'X的回合，找出制胜的一步。', en:'X to move. Find the winning move.', ja:'X no turn', ko:'X turn', fr:'X plays', de:'X turn', es:'X turn', ru:'X turn', it:'X turn', pt:'X turn' },
            'tactic_t2_title': { zh:'阻止对手', en:'Block', ja:'Block', ko:'Block', fr:'Block', de:'Block', es:'Block', ru:'Block', it:'Block', pt:'Block' },
            'tactic_t2_desc': { zh:'O即将获胜，X必须阻止。', en:'O is about to win. Block them!', ja:'Block desc', ko:'Block desc', fr:'Block desc', de:'Block desc', es:'Block desc', ru:'Block desc', it:'Block desc', pt:'Block desc' },
            'tactic_t3_title': { zh:'制造双杀', en:'Fork', ja:'Fork', ko:'Fork', fr:'Fork', de:'Fork', es:'Fork', ru:'Fork', it:'Fork', pt:'Fork' },
            'tactic_t3_desc': { zh:'制造两条制胜线，让O无法同时防守。', en:'Create two threats at once.', ja:'Fork desc', ko:'Fork desc', fr:'Fork desc', de:'Fork desc', es:'Fork desc', ru:'Fork desc', it:'Fork desc', pt:'Fork desc' },
            'tactic_t4_title': { zh:'控制中心', en:'Center', ja:'Center', ko:'Center', fr:'Center', de:'Center', es:'Center', ru:'Center', it:'Center', pt:'Center' },
            'tactic_t4_desc': { zh:'空盘开局，最佳第一步在哪里？', en:'Best opening move on an empty board.', ja:'Center desc', ko:'Center desc', fr:'Center desc', de:'Center desc', es:'Center desc', ru:'Center desc', it:'Center desc', pt:'Center desc' },
        };
        const out = {};
        for (const [key, langs] of Object.entries(c)) {
            for (const [lang, text] of Object.entries(langs)) {
                if (!out[lang]) out[lang] = {};
                out[lang][key] = text;
            }
        }
        return out;
    }

    const tttWinConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const C4_ROWS = 6;
    const C4_COLS = 7;

    const GMK_SIZE = 15;

    function createMarkSvg(player) {
        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('class', 'mark mark-' + player.toLowerCase());
        svg.setAttribute('viewBox', '0 0 100 100');
        if (player === PLAYER_X) {
            const path = document.createElementNS(svgNS, 'path');
            path.setAttribute('d', 'M25 25 L75 75 M75 25 L25 75');
            svg.appendChild(path);
        } else {
            const circle = document.createElementNS(svgNS, 'circle');
            circle.setAttribute('cx', '50');
            circle.setAttribute('cy', '50');
            circle.setAttribute('r', '35');
            svg.appendChild(circle);
        }
        return svg;
    }

    /* ===== Changelog Data ===== */
    const changelogData = [
        {
            version: '0.14.0',
            date: { zh:'2026-04-29', en:'Apr 29, 2026', ja:'2026年4月29日', ko:'2026년 4월 29일', fr:'29 avr. 2026', de:'29. Apr. 2026', es:'29 abr. 2026', ru:'29 апр. 2026', it:'29 apr. 2026', pt:'29 de abr. de 2026' },
            items: {
                zh: ['新增走子提示系统：人机对战（井字棋）时，点击提示按钮可高亮显示最佳落子位置', '提示功能仅在玩家回合可用，且仅在标准井字棋人机模式下显示', '提示按钮支持键盘快捷键 H 触发', '新增「灵光一闪」成就：第一次使用提示功能'],
                en: ['Added Move Hint System: in PvE Tic-Tac-Toe, click the hint button to highlight the best move', 'Hint only available during player turn, and only shown in standard TTT PvE mode', 'Hint button supports H keyboard shortcut', 'Added "Lightbulb Moment" achievement: use the Hint button for the first time'],
                ja: ['着手ヒントシステム追加：CPU戦（三目並べ）でヒントボタンを押すと最善手がハイライト','ヒントはプレイヤーの番のみ使用可能、標準三目並べCPU戦のみ表示','ヒントボタンはHキーショートカット対応','「閃き」実績追加：初めてヒントを使う'],
                ko: ['수 힌트 시스템 추가: AI전(틱택토)에서 힌트 버튼 클릭 시 최선의 수 하이라이트','힌트는 플레이어 턴에만 사용 가능, 표준 틱택토 AI전에서만 표시','힌트 버튼 H 키보드 단축키 지원','「아이디어」업적 추가: 처음으로 힌트 사용'],
                fr: ['Système d\'indice ajouté : en PvE Morpion, cliquez sur le bouton indice pour surligner le meilleur coup','Indice disponible uniquement pendant votre tour, uniquement en Morpion PvE standard','Bouton indice supporte le raccourci H','Succès "Éclair de génie" ajouté : utilisez l\'indice pour la première fois'],
                de: ['Zug-Tipp-System hinzugefügt: Im TTT-KI-Spiel wird der beste Zug durch Tipp hervorgehoben','Tipp nur am Zug des Spielers verfügbar, nur im Standard-TTT-KI-Modus','Tipp-Taste unterstützt H-Tastenkürzel','"Aha-Moment"-Erfolg hinzugefügt: Tipp zum ersten Mal verwenden'],
                es: ['Sistema de pistas añadido: en TTT PvE, haz clic en el botón de pista para resaltar el mejor movimiento','Pista solo disponible durante tu turno, solo en modo TTT PvE estándar','Botón de pista admite atajo de teclado H','Logro "Momento de inspiración" añadido: usa la pista por primera vez'],
                ru: ['Добавлена система подсказок: в PvE Крестики-нолики нажмите кнопку подсказки для выделения лучшего хода','Подсказка доступна только во время хода игрока, только в стандартном режиме','Кнопка подсказки поддерживает горячую клавишу H','Добавлено достижение "Озарение": используйте подсказку впервые'],
                it: ['Sistema di suggerimenti aggiunto: in PvE Tris, clicca il pulsante suggerimento per evidenziare la mossa migliore','Suggerimento disponibile solo durante il turno del giocatore, solo in modalità Tris PvE standard','Pulsante suggerimento supporta scorciatoia H','Obiettivo "Momento di ispirazione" aggiunto: usa il suggerimento per la prima volta'],
                pt: ['Sistema de dicas adicionado: em PvE Jogo da velha, clique no botão de dica para destacar a melhor jogada','Dica disponível apenas durante seu turno, apenas no modo PvE padrão','Botão de dica suporta atalho de teclado H','Conquista "Momento de inspiração" adicionada: use a dica pela primeira vez'],
            }
        },
        {
            version: '0.8.3',
            date: { zh:'2026-04-29', en:'Apr 29, 2026', ja:'2026年4月29日', ko:'2026년 4월 29일', fr:'29 avr. 2026', de:'29. Apr. 2026', es:'29 abr. 2026', ru:'29 апр. 2026', it:'29 apr. 2026', pt:'29 de abr. de 2026' },
            items: {
                zh: ['修复 i18n 键冲突：data-import-confirm 重复定义导致导入按钮显示长文本而非标签', '修复 TTT 落子波纹被 makeMove 的 innerHTML 瞬间销毁的问题；修复键盘/数字键触发时坐标为 NaN 的 bug', '修复 C4/Gmk 棋盘 overflow:hidden 裁剪波纹的问题：ripple 改为 fixed 定位附在 body 上', '修复 undo 在游戏结束后仍可操作导致统计重复计数的严重 bug', '修复 renderStats 15 处 DOM 元素缺乏 null 检查可能崩溃的问题', '修复 fastestWin 哨兵值 0 被 0ms 胜利破坏的 bug；修复 loadGameStats 允许负数损坏统计', '修复数据导入不验证字段类型可能写入 [object Object] 的 bug；修复 clipboard API 无 fallback 且 Promise 未处理', '统计 load 增加 byMode/byDifficulty 子字段非负校验'],
                en: ['Fixed i18n key collision: duplicate data-import-confirm caused import button to show full sentence instead of label', 'Fixed TTT ripple destroyed instantly by makeMove innerHTML; fixed NaN coordinates on keyboard/synthetic triggers', 'Fixed C4/Gmk board overflow:hidden clipping ripple: ripple now uses fixed positioning on body', 'Fixed critical bug where undo after game end caused duplicate stat counting', 'Fixed renderStats lacking null checks on 15 DOM elements', 'Fixed fastestWin sentinel 0 broken by 0ms win; fixed loadGameStats accepting negative values', 'Fixed import not validating field types (could write [object Object]); fixed clipboard missing fallback and unhandled Promise', 'Added non-negative validation for byMode/byDifficulty sub-fields in stats load'],
                ja: ['i18n キー衝突修正：重複 data-import-confirm でボタンが長文表示','TTT リップルが makeMove innerHTML で即破壊される問題を修正、キーボード時の NaN 座標を修正','C4/Gmk overflow:hidden でリップルが切れる問題を修正（fixed 定位）','ゲーム終了後の待ちで統計が重複カウントされる重大バグを修正','renderStats の DOM null チェック不足を修正','fastestWin 哨兵値 0 の問題と loadGameStats の負数許容を修正','インポート時の型検証と clipboard fallback を修正','byMode/byDifficulty 子フィールドの非負検証を追加'],
                ko: ['i18n 키 충돌 수정: 중복 data-import-confirm 로 버튼에 긴 문장 표시','TTT 리플이 makeMove innerHTML 에 의해 즉시 파괴 수정, 키보드 NaN 좌표 수정','C4/Gmk overflow:hidden 리플 잘림 수정(fixed 위치)','게임 종료 후 무르기로 통계 중복 카운트 심각한 버그 수정','renderStats DOM null 체크 부족 수정','fastestWin 초기값 0 문제와 loadGameStats 음수 허용 수정','가져오기 시 타입 검증과 clipboard fallback 수정','byMode/byDifficulty 하위 필드 비음수 검증 추가'],
                fr: ['Correction collision clé i18n data-import-confirm','Correction ripple TTT détruit par innerHTML + coordonnées NaN clavier','Correction overflow:hidden C4/Gmk coupant le ripple','Correction undo après fin de partie comptant stats en double','Correction null checks manquants dans renderStats','Correction sentinel fastestWin 0 et valeurs négatives loadGameStats','Correction validation types import + fallback clipboard','Validation non-négative sous-champs byMode/byDifficulty'],
                de: ['Korrigiert i18n-Schlüsselkonflikt data-import-confirm','Korrigiert TTT-Ripple durch innerHTML zerstört + NaN-Tastatur','Korrigiert overflow:hidden C4/Gmk schneidet Ripple','Korrigiert Undo nach Spielende doppelte Statistik-Zählung','Korrigiert fehlende null-Checks in renderStats','Korrigiert fastestWin-Sentinel 0 und negative Werte loadGameStats','Korrigiert Import-Typvalidierung + Clipboard-Fallback','Nicht-negative Validierung byMode/byDifficulty-Unterfelder'],
                es: ['Corregida colisión clave i18n data-import-confirm','Corregido ripple TTT destruido por innerHTML + coordenadas NaN teclado','Corregido overflow:hidden C4/Gmk recortando ripple','Corregido undo tras final duplicando estadísticas','Corregidas comprobaciones nulas faltantes en renderStats','Corregido sentinel fastestWin 0 y valores negativos loadGameStats','Corregida validación tipos import + fallback clipboard','Validación no negativa subcampos byMode/byDifficulty'],
                ru: ['Исправлен конфликт ключа i18n data-import-confirm','Исправлено: ripple TTT уничтожается innerHTML + NaN координаты клавиатуры','Исправлено: overflow:hidden C4/Gmk обрезает ripple','Исправлено: undo после окончания игры дублирует статистику','Исправлены отсутствующие проверки null в renderStats','Исправлен sentinel fastestWin 0 и отрицательные значения loadGameStats','Исправлена валидация типов импорта + fallback буфера обмена','Добавлена неотрицательная валидация подполей byMode/byDifficulty'],
                it: ['Corretto conflitto chiave i18n data-import-confirm','Corretto ripple TTT distrutto da innerHTML + coordinate NaN tastiera','Corretto overflow:hidden C4/Gmk che taglia ripple','Corretto undo dopo fine partita che duplica statistiche','Corretti controlli null mancanti in renderStats','Corretto sentinel fastestWin 0 e valori negativi loadGameStats','Corretta validazione tipi import + fallback clipboard','Validazione non negativa sottocampi byMode/byDifficulty'],
                pt: ['Corrigido conflito chave i18n data-import-confirm','Corrigido ripple TTT destruído por innerHTML + coordenadas NaN teclado','Corrigido overflow:hidden C4/Gmk cortando ripple','Corrigido undo após fim do jogo duplicando estatísticas','Corrigidas verificações nulas ausentes em renderStats','Corrigido sentinel fastestWin 0 e valores negativos loadGameStats','Corrigida validação tipos import + fallback clipboard','Validação não negativa subcampos byMode/byDifficulty'],
            }
        },
        {
            version: '0.8.2',
            date: { zh:'2026-04-29', en:'Apr 29, 2026', ja:'2026年4月29日', ko:'2026년 4월 29일', fr:'29 avr. 2026', de:'29. Apr. 2026', es:'29 abr. 2026', ru:'29 апр. 2026', it:'29 apr. 2026', pt:'29 de abr. de 2026' },
            items: {
                zh: ['新增数据备份与迁移功能：一键导出所有本地数据（设置/历史/成就/统计）为 JSON', '支持导入 JSON 数据恢复游戏进度，换设备或防丢失一键搞定', '导入时完整验证数据格式与版本，覆盖前弹出确认对话框，导入成功后自动刷新页面', 'i18n 系统新增 placeholder 国际化支持，所有提示文本完整支持 10 语言'],
                en: ['Added Data Backup & Migration: one-click export all local data (settings, history, achievements, stats) as JSON', 'Import JSON to restore game progress across devices or after data loss', 'Full validation on import with version check, confirmation dialog before overwrite, auto page refresh on success', 'i18n system now supports placeholder internationalization, all hint text fully supports 10 languages'],
                ja: ['データバックアップ・移行機能追加：設定/履歴/実績/統計をJSONで一括エクスポート','JSONインポートでゲーム進行を復元、機種変更やデータ消失時に対応','インポート時に形式とバージョンを検証、上書き前に確認ダイアログ、成功後自動更新','placeholder の国際化対応追加、全ヒントテキストが10言語対応'],
                ko: ['데이터 백업 및 마이그레이션 추가: 설정/기록/업적/통계를 JSON으로 일괄 낸 내기','JSON 가져오기로 게임 진행 복원, 기기 변경 및 데이터 유실 대응','가져오기 시 형식과 버전 검증, 덮어쓰기 전 확인 대화상자, 성공 후 자동 새로고침','placeholder 국제화 지원 추가, 모든 힌트 텍스트 10개 언어 지원'],
                fr: ['Sauvegarde et migration ajoutées : export JSON en un clic (paramètres, historique, succès, stats)','Import JSON pour restaurer la progression sur un autre appareil','Validation complète à l\'import, dialogue de confirmation, rafraîchissement auto','Support placeholder i18n, tous les textes d\'aide en 10 langues'],
                de: ['Datensicherung & Migration hinzugefügt: Ein-Klick-Export aller Daten als JSON','JSON-Import zur Wiederherstellung auf anderem Gerät','Vollständige Validierung beim Import, Bestätigungsdialog, Auto-Aktualisierung','Placeholder-Internationalisierung, alle Hinweistexte in 10 Sprachen'],
                es: ['Respaldo y migración añadidos: exportar todos los datos como JSON en un clic','Importar JSON para restaurar el progreso en otro dispositivo','Validación completa al importar, diálogo de confirmación, actualización automática','Soporte placeholder i18n, todos los textos de ayuda en 10 idiomas'],
                ru: ['Добавлено резервное копирование и миграция: экспорт всех данных в JSON одним кликом','Импорт JSON для восстановления прогресса на другом устройстве','Полная валидация при импорте, диалог подтверждения, автообновление','Поддержка placeholder i18n, все подсказки на 10 языках'],
                it: ['Backup e migrazione aggiunti: esportazione JSON con un clic di tutti i dati','Importazione JSON per ripristinare i progressi su un altro dispositivo','Validazione completa all\'importazione, dialogo di conferma, aggiornamento automatico','Supporto placeholder i18n, tutti i testi di aiuto in 10 lingue'],
                pt: ['Backup e migração adicionados: exportar todos os dados como JSON em um clique','Importar JSON para restaurar o progresso em outro dispositivo','Validação completa na importação, caixa de diálogo de confirmação, atualização automática','Suporte a placeholder i18n, todos os textos de ajuda em 10 idiomas'],
            }
        },
        {
            version: '0.8.1',
            date: { zh:'2026-04-29', en:'Apr 29, 2026', ja:'2026年4月29日', ko:'2026년 4월 29일', fr:'29 avr. 2026', de:'29. Apr. 2026', es:'29 abr. 2026', ru:'29 апр. 2026', it:'29 apr. 2026', pt:'29 de abr. de 2026' },
            items: {
                zh: ['新增落子波纹反馈：点击棋盘任意格子时，从点击位置产生扩散的圆形波纹，颜色与当前玩家匹配', '波纹动画速度与全局动画速度联动（慢/中/快），动画关闭时自动禁用', '设置面板新增「落子波纹」独立开关，可单独控制而不影响其他动画'],
                en: ['Added Move Ripple Effect: circular ripple expands from click position on any board cell, color matches current player', 'Ripple animation speed syncs with global animation speed (slow/normal/fast), auto-disabled when animations are off', 'Settings drawer added independent "Move Ripple" toggle, can be controlled separately from other animations'],
                ja: ['着手リップル追加：盤面クリック時にクリック位置から円形リップルが拡散、色は手番と一致','リップル速度は全局アニメ速度と連動（遅/中/速）、アニメOFF時は自動無効','設定に「着手リップル」独立トグル追加、他アニメと個別制御可能'],
                ko: ['돌 리플 효과 추가: 보드 클릭 시 클릭 위치에서 원형 리플 확산, 색상은 현재 플레이어와 일치','리플 속도는 전역 애니메이션 속도와 연동(느림/보통/빠름), 애니메이션 OFF 시 자동 비활성화','설정에 「돌 리플」독립 토글 추가, 다른 애니메이션과 별도 제어 가능'],
                fr: ['Effet onde de placement ajouté : onde circulaire depuis la position du clic, couleur correspond au joueur','Vitesse synchronisée avec vitesse animation globale, auto-désactivé si animations désactivées','Toggle indépendant "Onde de placement" dans les paramètres'],
                de: ['Zug-Ripple-Effekt hinzugefügt: kreisförmiges Ripple ab Klickposition, Farbe passt zum Spieler','Geschwindigkeit synchronisiert mit globaler Animationsgeschwindigkeit, auto-deaktiviert','Unabhängiger "Zug-Ripple"-Schalter in Einstellungen'],
                es: ['Efecto onda al colocar añadido: onda circular desde posición del clic, color coincide con jugador','Velocidad sincronizada con velocidad animación global, auto-desactivado','Interruptor independiente "Onda al colocar" en ajustes'],
                ru: ['Добавлен эффект рипла хода: круглый рипл от позиции клика, цвет соответствует игроку','Скорость синхронизирована с глобальной скоростью анимации, автоотключение','Независимый переключатель "Рипл хода" в настройках'],
                it: ['Effetto ondata mossa aggiunto: onda circolare dalla posizione del clic, colore corrisponde al giocatore','Velocità sincronizzata con velocità animazione globale, auto-disattivato','Interruttore indipendente "Ondata mossa" nelle impostazioni'],
                pt: ['Efeito onda de jogada adicionado: onda circular da posição do clique, cor corresponde ao jogador','Velocidade sincronizada com velocidade animação global, auto-desativado','Interruptor independente "Onda de jogada" nas configurações'],
            }
        },
        {
            version: '0.8.0',
            date: { zh:'2026-04-29', en:'Apr 29, 2026', ja:'2026年4月29日', ko:'2026년 4월 29일', fr:'29 avr. 2026', de:'29. Apr. 2026', es:'29 abr. 2026', ru:'29 апр. 2026', it:'29 apr. 2026', pt:'29 de abr. de 2026' },
            items: {
                zh: ['新增游戏统计面板：实时记录总对局、胜/败/平、胜率条、连胜记录，数据持久化到 localStorage', '支持按模式（井字棋/四子棋/五子棋/自定义）和按难度（简单/中等/困难）分别统计胜率', '显示最快胜利、最长对局、总步数、总游戏时间等详细数据', '统计面板支持一键重置（带确认对话框），完整支持 10 种语言', '统计面板 UI 采用卡片+进度条设计，适配移动端响应式布局'],
                en: ['Added Game Statistics Dashboard: tracks total games, wins/losses/draws, win-rate bar, streak records with localStorage persistence', 'Per-mode stats (TTT/Connect4/Gomoku/Custom) and per-difficulty stats (Easy/Medium/Hard) with win-rate bars', 'Displays fastest win, longest game, total moves, total play time', 'One-click reset with confirmation dialog, full 10-language support', 'Dashboard UI uses cards + progress bars, responsive mobile layout'],
                ja: ['ゲーム統計パネル追加：総対局、勝敗、胜率バー、連勝記録を localStorage に永続保存','モード別（三目/四目/五目/カスタム）と難易度別（簡単/普通/難しい）統計対応','最短勝利、最長対局、総手数、総時間を表示','確認ダイアログ付きリセット、10言語対応','カード+プログレスバー UI、モバイル対応'],
                ko: ['게임 통계 패널 추가: 총 대국, 승패, 승률 바, 연승 기록을 localStorage 에 영구 저장','모드별(틱택토/사목/오목/사용자 지정)과 난이도별(쉬움/보통/어려움) 통계','최단 승리, 최장 대국, 총 수, 총 시간 표시','확인 대화상자 포함 초기화, 10개 언어 지원','카드+진행 막대 UI, 모바일 반응형'],
                fr: ['Panneau statistiques ajouté : parties totales, victoires/défaites/nuls, barre taux victoire, séries persistantes','Stats par mode et par difficulté avec barres taux','Victoire la plus rapide, partie la plus longue, coups totaux, temps total','Réinitialisation avec confirmation, 10 langues','UI cartes + barres de progression, responsive mobile'],
                de: ['Statistik-Dashboard hinzugefügt: Spiele gesamt, Siege/Niederlagen/Remis, Siegquote, Serien lokal gespeichert','Statistiken nach Modus und Schwierigkeit','Schnellster Sieg, längstes Spiel, Züge gesamt, Zeit gesamt','Zurücksetzen mit Bestätigung, 10 Sprachen','Karten + Fortschrittsbalken UI, responsive'],
                es: ['Panel estadísticas añadido: partidas totales, victorias/derrotas/empates, barra porcentaje, rachas persistentes','Estadísticas por modo y dificultad','Victoria más rápida, partida más larga, movimientos totales, tiempo total','Restablecimiento con confirmación, 10 idiomas','UI tarjetas + barras progreso, responsive móvil'],
                ru: ['Добавлена панель статистики: всего игр, победы/поражения/ничьи, полоса побед, серии с сохранением','Статистика по режимам и сложности','Самая быстрая победа, самая долгая игра, всего ходов, общее время','Сброс с подтверждением, 10 языков','UI карточки + прогресс-бары, адаптивный'],
                it: ['Pannello statistiche aggiunto: partite totali, vittorie/sconfitte/pareggi, barra percentuale, serie persistenti','Statistiche per modalità e difficoltà','Vittoria più veloce, partita più lunga, mosse totali, tempo totale','Reimpostazione con conferma, 10 lingue','UI schede + barre progresso, responsive mobile'],
                pt: ['Painel estatísticas adicionado: jogos totais, vitórias/derrotas/empates, barra taxa, sequências persistentes','Estatísticas por modo e dificuldade','Vitória mais rápida, jogo mais longo, movimentos totais, tempo total','Redefinição com confirmação, 10 idiomas','UI cartões + barras progresso, responsivo móvel'],
            }
        },
        {
            version: '0.7.1',
            date: { zh:'2026-04-29', en:'Apr 29, 2026', ja:'2026年4月29日', ko:'2026년 4월 29일', fr:'29 avr. 2026', de:'29. Apr. 2026', es:'29 abr. 2026', ru:'29 апр. 2026', it:'29 apr. 2026', pt:'29 de abr. de 2026' },
            items: {
                zh: ['修复 Tab 焦点陷阱遗漏成就面板的问题，确保成就抽屉打开时焦点不会逃逸', '修复计时器回合切换后滴答声首次延迟的 bug（lastTickSoundTime 未重置）', '清理 CSS 中重复的 cell:focus-visible 规则，统一为增强版键盘导航焦点环'],
                en: ['Fixed Tab focus trap missing achievements drawer, ensuring focus stays inside when open', 'Fixed timer tick sound first-delay bug after turn switch (lastTickSoundTime not reset)', 'Cleaned up duplicate cell:focus-visible CSS rules, unified to enhanced keyboard nav focus ring'],
                ja: ['Tab フォーカストラップが実績ドロワーを見落とす問題を修正、開いた時にフォーカスが外れないように','ターン切替後のタイマー tick 音初回遅延バグを修正（lastTickSoundTime 未リセット）','CSS の重複 cell:focus-visible ルールを整理、キーボードナビ用フォーカスリングを統一'],
                ko: ['Tab 포커스 트랩이 업적 서랍을 누락한 문제 수정, 열릴 때 포커스가 탈출하지 않도록','턴 전환 후 타이머 tick 소리 첫 지연 버그 수정(lastTickSoundTime 미초기화)','CSS 중복 cell:focus-visible 규칙 정리, 키보드 낵용 포커스 링 통일'],
                fr: ['Correction piège focus Tab manquant pour tiroir succès, empêche fuite du focus','Correction délai premier tick minuteur après changement tour (lastTickSoundTime non réinitialisé)','Nettoyage règles CSS cell:focus-visible dupliquées, unifié en anneau focus nav. clavier renforcé'],
                de: ['Korrigiert: Tab-Fokusfalle verpasst Erfolgs-Schublade, Fokus bleibt beim Öffnen','Korrigiert: Timer-Tick-Verzögerung nach Zugwechsel (lastTickSoundTime nicht zurückgesetzt)','Bereinigung doppelter CSS cell:focus-visible-Regeln, vereinheitlicht zu Tastaturnav.-Fokusring'],
                es: ['Corregido trampa foco Tab omitiendo cajón logros, evitando fuga de foco','Corregido retardo primer tick temporizador tras cambio turno (lastTickSoundTime no reiniciado)','Limpieza reglas CSS cell:focus-visible duplicadas, unificadas a anillo foco nav. teclado'],
                ru: ['Исправлено: ловушка фокуса Tab пропускала панель достижений, фокус больше не уходит','Исправлена задержка первого тика таймера после смены хода (lastTickSoundTime не сбрасывался)','Очищены дублирующие CSS-правила cell:focus-visible, унифицированы в усиленное кольцо фокуса'],
                it: ['Corretto trappola fuoco Tab che saltava cassetto obiettivi, fuoco non fugge più','Corretto ritardo primo tick timer dopo cambio turno (lastTickSoundTime non reimpostato)','Pulizia regole CSS cell:focus-visible duplicate, unificate ad anello fuoco nav. tastiera'],
                pt: ['Corrigido armadilha foco Tab ignorando gaveta conquistas, foco não escapa mais','Corrigido atraso primeiro tick temporizador após troca turno (lastTickSoundTime não redefinido)','Limpeza regras CSS cell:focus-visible duplicadas, unificadas em anel foco nav. teclado'],
            }
        },
        {
            version: '0.7.0',
            date: { zh:'2026-04-29', en:'Apr 29, 2026', ja:'2026年4月29日', ko:'2026년 4월 29일', fr:'29 avr. 2026', de:'29. Apr. 2026', es:'29 abr. 2026', ru:'29 апр. 2026', it:'29 apr. 2026', pt:'29 de abr. de 2026' },
            items: {
                zh: ['新增全局键盘快捷键系统：R/U/H/A/C/S/? 快速操作，? 打开快捷键帮助面板', '新增棋盘键盘导航：方向键移动焦点，Enter/Space 落子，数字键快速选格（TTT/C4）', '新增快捷键帮助弹窗，分类展示所有快捷键，支持 10 语言', 'Esc 支持层级栈式关闭所有弹窗/抽屉，Tab 焦点陷阱覆盖所有面板'],
                en: ['Added global keyboard shortcuts: R/U/H/A/C/S/? for quick actions, ? opens help panel', 'Added board keyboard navigation: arrow keys move focus, Enter/Space to play, number keys quick-select (TTT/C4)', 'Added hotkey help modal with categorized shortcuts, supports 10 languages', 'Esc now closes modals/drawers in stacked order, Tab focus trap covers all panels'],
                ja: ['グローバルキーボードショートカット追加：R/U/H/A/C/S/? クイック操作、? でヘルプ','盤面キーボードナビ追加：方向キー移動、Enter/Space 着手、数字キー選択（三目/四目）','キーボードショートカットヘルプ追加、分類表示、10言語対応','Esc で全モーダル/ドロワーを階層的に閉じる、Tab フォーカストラップが全パネルに対応'],
                ko: ['전역 키보드 단축키 추가: R/U/H/A/C/S/? 빠른 조작, ? 로 도움말','보드 키보드 낵 추가: 방향키 이동, Enter/스페이스 플레이, 숫자키 선택(틱택토/사목)','키보드 단축키 도움말 추가, 분류 표시, 10개 언어 지원','Esc 로 모든 팝업/서랍 계층적 닫기, Tab 포커스 트랩이 모든 패널 지원'],
                fr: ['Raccourcis clavier globaux : R/U/H/A/C/S/? actions rapides, ? ouvre l\'aide','Navigation clavier plateau : flèches déplacent focus, Entrée/Espace joue, chiffres sélection rapide','Panneau d\'aide raccourcis avec catégories, 10 langues','Esc ferme modales/tiroirs en pile, piège focus Tab couvre tous panneaux'],
                de: ['Globale Tastenkürzel: R/U/H/A/C/S/? schnelle Aktionen, ? öffnet Hilfe','Tastaturnavigation Brett: Pfeile bewegen Fokus, Eingabe/Leertaste spielen, Ziffern schnellwahl','Tastenkürzel-Hilfefenster mit Kategorien, 10 Sprachen','Esc schließt Modale/Drawer gestapelt, Tab-Fokusfalle für alle Panels'],
                es: ['Atajos globales: R/U/H/A/C/S/? acciones rápidas, ? abre ayuda','Navegación teclado tablero: flechas mueven foco, Intro/Espacio juega, números selección rápida','Panel ayuda atajos categorizado, 10 idiomas','Esc cierra modales/cajones apilados, trampa foco Tab cubre todos paneles'],
                ru: ['Глобальные горячие клавиши: R/U/H/A/C/S/? быстрые действия, ? открывает справку','Навигация клавиатурой по доске: стрелки двигают фокус, Enter/Пробел ход, цифры выбор','Панель справки по горячим клавишам с категориями, 10 языков','Esc закрывает модалки/панели по стеку, ловушка фокуса Tab охватывает все панели'],
                it: ['Scorciatoie globali: R/U/H/A/C/S/? azioni rapide, ? apre aiuto','Navigazione tastiera scacchiera: frecce spostano fuoco, Invio/Spazio gioca, numeri selezione','Pannello aiuto scorciatoie categorizzato, 10 lingue','Esc chiude modali/cassetti a stack, trappola fuoco Tab copre tutti i pannelli'],
                pt: ['Atalhos globais: R/U/H/A/C/S/? ações rápidas, ? abre ajuda','Navegação teclado tabuleiro: setas movem foco, Enter/Espaço joga, números seleção','Painel ajuda atalhos categorizado, 10 idiomas','Esc fecha modais/gavetas empilhados, armadilha foco Tab cobre todos painéis'],
            }
        },
        {
            version: '0.6.3',
            date: { zh:'2026-04-29', en:'Apr 29, 2026', ja:'2026年4月29日', ko:'2026년 4월 29일', fr:'29 avr. 2026', de:'29. Apr. 2026', es:'29 abr. 2026', ru:'29 апр. 2026', it:'29 apr. 2026', pt:'29 de abr. de 2026' },
            items: {
                zh: ['新增对战计时器系统：支持 1/3/5/10 分钟四档预设，PVE 仅计玩家时间', '计时器支持 active/danger/paused 状态与脉冲动画，10 秒以下播放滴答警示音', '超时自动判负并播放特殊音效，弹窗显示 ⏰「时间到」标题', '设置面板新增计时器开关与时长分段选择，完整支持 10 语言'],
                en: ['Added battle timer: 1/3/5/10 min presets, PVE only counts player time','Timer supports active/danger/paused states with pulse animation, tick warning under 10s','Auto-forfeit on timeout with special sound effect, modal shows ⏰ "Time Out" title','Settings drawer added timer toggle and duration segmented picker, full 10-language support'],
                ja: ['対戦タイマー追加：1/3/5/10 分プリセット、PvE はプレイヤー時間のみ','タイマーは active/danger/paused 状態とパルスアニメーション、10秒以下で警告音','時間切れで自動負け、特殊効果音、モーダルに ⏰「時間切れ」表示','設定にタイマーON/OFFと時間選択追加、10言語対応'],
                ko: ['대전 타이머 추가: 1/3/5/10분 프리셋, PvE 는 플레이어 시간만','타이머 active/danger/paused 상태 및 펄스 애니메이션, 10초 이하 경고음','시간 초과 시 자동 패배, 특수 효과음, 모달에 ⏰「시간 초과」표시','설정에 타이머 토글과 시간 선택 추가, 10개 언어 지원'],
                fr: ['Chronomètre ajouté : préréglages 1/3/5/10 min, PvE compte temps joueur uniquement','Minuteur active/danger/paused avec animation pulsation, bip avertissement sous 10 s','Forfait auto. temps écoulé + effet sonore spécial, modale affiche ⏰ "Temps écoulé"','Paramètres : toggle chronomètre et sélecteur durée, support 10 langues'],
                de: ['Zeituhr hinzugefügt: Voreinstellungen 1/3/5/10 min, PvE zählt nur Spielerzeit','Zeituhr active/danger/paused mit Pulsanimation, Warnung unter 10 s','Automatische Niederlage bei Zeitablauf + Spezialeffekt, Modal zeigt ⏰ "Zeit abgelaufen"','Einstellungen: Zeituhr-Umschaltung und Dauer-Auswahl, 10 Sprachen'],
                es: ['Cronómetro añadido: preajustes 1/3/5/10 min, PvE solo cuenta tiempo jugador','Temporizador active/danger/paused con animación pulso, aviso bajo 10 s','Derrota automática al acabarse tiempo + efecto especial, modal muestra ⏰ "Se acabó"','Ajustes: interruptor cronómetro y selector duración, 10 idiomas'],
                ru: ['Добавлен таймер: предустановки 1/3/5/10 мин, PvE считает только время игрока','Таймер active/danger/paused с пульсирующей анимацией, предупреждение менее 10 с','Автоматическое поражение при истечении + спецэффект, модалка показывает ⏰ "Время вышло"','Настройки: переключатель таймера и выбор длительности, 10 языков'],
                it: ['Timer aggiunto: preset 1/3/5/10 min, PvE conta solo tempo giocatore','Timer active/danger/paused con animazione pulsazione, avviso sotto 10 s','Sconfitta automatica al tempo scaduto + effetto speciale, modale mostra ⏰ "Tempo scaduto"','Impostazioni: interruttore timer e selettore durata, 10 lingue'],
                pt: ['Cronômetro adicionado: predefinições 1/3/5/10 min, PvE conta apenas tempo jogador','Temporizador active/danger/paused com animação pulso, aviso abaixo de 10 s','Derrota automática no tempo esgotado + efeito especial, modal mostra ⏰ "Tempo esgotado"','Configurações: interruptor cronômetro e seletor duração, 10 idiomas'],
            }
        },
        {
            version: '0.6.2',
            date: { zh:'2026-04-28', en:'Apr 28, 2026', ja:'2026年4月28日', ko:'2026년 4월 28일', fr:'28 avr. 2026', de:'28. Apr. 2026', es:'28 abr. 2026', ru:'28 апр. 2026', it:'28 apr. 2026', pt:'28 de abr. de 2026' },
            items: {
                zh: ['修复 init() 未调用 resetGame() 导致首步无法悔棋、首步耗时统计异常的问题', '修复 openHistory() 未关闭回放弹窗导致的面板层级冲突', '修复 CSS 未定义 --surface-hover 导致「关于」链接悬停效果失效的问题', '新增 Ctrl+Z / Cmd+Z 键盘悔棋快捷键，输入框内自动屏蔽', '新增设置持久化：所有设置（语言/主题/音效/难度/自定义规则等）刷新后自动恢复', '修复 applySettingsUI() 未同步自定义棋盘输入框值的问题', '单条历史记录删除前新增确认对话框，防止误删', '优化历史抽屉初始 DOM 状态，空记录时列表与清空按钮默认隐藏'],
                en: ['Fixed init() not calling resetGame() causing undo broken on first move and incorrect move timing', 'Fixed openHistory() not closing replay modal causing panel z-index conflict', 'Fixed missing CSS --surface-hover breaking About link hover effect', 'Added Ctrl+Z / Cmd+Z keyboard undo shortcut, auto-disabled inside input fields', 'Added settings persistence: all settings (language, theme, sound, difficulty, custom rules, etc.) restore after refresh', 'Fixed applySettingsUI() not syncing custom board input values', 'Added confirmation dialog before single history deletion to prevent accidents', 'Optimized history drawer initial DOM state: list and clear button hidden by default when empty'],
                ja: ['init() が resetGame() を呼ばず、初手の待ち不可と時間統計異常を修正','openHistory() が再生モーダルを閉じず、パネル衝突を修正','CSS --surface-hover 未定義で「About」リンクホバーが効かない問題を修正','Ctrl+Z / Cmd+Z キーボード待ちショートカット追加、入力欄では自動無効','設定永続化追加：言語/テーマ/効果音/難易度/カスタムルールなど更新後も復元','applySettingsUI() がカスタムボード入力値を同期しない問題を修正','個別記録削除前に確認ダイアログ追加、誤削除防止','履歴ドロワーの初期 DOM 状態を最適化：空時はリストと削除ボタンを非表示'],
                ko: ['init() 이 resetGame() 을 호출하지 않아 첫 수 무르기 불가 및 시간 통계 오류 수정','openHistory() 이 재생 모달을 닫지 않아 패널 충돌 수정','CSS --surface-hover 미정의로 About 링크 호버 효과 실패 수정','Ctrl+Z / Cmd+Z 키보드 무르기 단축키 추가, 입력창에서는 자동 비활성화','설정 영구 저장 추가: 언어/테마/효과음/난이도/사용자 지정 규칙 등 새로고침 후 자동 복원','applySettingsUI() 이 사용자 지정 보드 입력값을 동기화하지 않는 문제 수정','개별 기록 삭제 전 확인 대화상자 추가, 오삭제 방지','기록 서랍 초기 DOM 상태 최적화: 빈 기록 시 목록과 전체 삭제 버튼 기본 숨김'],
                fr: ['Correction init() n\'appelant pas resetGame() empêchant l\'annulation du premier coup et timing erroné','Correction openHistory() ne fermant pas la relecture causant un conflit de z-index','Correction --surface-hover CSS manquant cassant le survol des liens À propos','Raccourci clavier Ctrl+Z / Cmd+Z pour annuler, auto-désactivé dans les champs','Persistance des paramètres : langue, thème, son, difficulté, règles perso. restaurés après refresh','Correction applySettingsUI() ne synchronisant pas les valeurs des champs plateau perso.','Dialogue de confirmation avant suppression individuelle pour éviter les accidents','État DOM initial du tiroir optimisé : liste et bouton effacer masqués par défaut si vide'],
                de: ['Korrigiert: init() ruft resetGame() nicht auf, wodurch Rückgängig beim ersten Zug und Zeitmessung fehlschlagen','Korrigiert: openHistory() schließt Wiederholung nicht, was z-index-Konflikte verursacht','Korrigiert: Fehlende CSS-Variable --surface-hover bricht Hover-Effekt bei Über-Links','Tastenkürzel Ctrl+Z / Cmd+Z für Rückgängig, in Eingabefeldern automatisch deaktiviert','Einstellungen werden dauerhaft gespeichert: Sprache, Theme, Ton, Schwierigkeit, benutzerdef. Regeln usw.','Korrigiert: applySettingsUI() synchronisiert benutzerdef. Brett-Eingabewerte nicht','Bestätigungsdialog vor einzelnem Löschen zum Verhindern von Fehlbedienungen','Anfänglicher DOM-Zustand der Historie optimiert: Liste und Löschen-Button standardmäßig ausgeblendet'],
                es: ['Corregido: init() no llama a resetGame() rompiendo deshacer en primer movimiento y tiempo erróneo','Corregido: openHistory() no cierra repetición causando conflicto de z-index','Corregido: falta CSS --surface-hover rompiendo hover de enlaces Acerca de','Atajo de teclado Ctrl+Z / Cmd+Z para deshacer, auto-desactivado en campos de entrada','Persistencia de ajustes: idioma, tema, sonido, dificultad, reglas personalizadas, etc. se restauran','Corregido: applySettingsUI() no sincroniza valores de entrada de tablero personalizado','Diálogo de confirmación antes de eliminar una partida para evitar accidentes','Estado DOM inicial del cajón optimizado: lista y botón borrar ocultos por defecto cuando está vacío'],
                ru: ['Исправлено: init() не вызывает resetGame(), ломая отмену первого хода и статистику времени','Исправлено: openHistory() не закрывает повтор, вызывая конфликт z-index','Исправлено: отсутствие CSS --surface-hover ломает эффект наведения на ссылки О приложении','Горячая клавиша Ctrl+Z / Cmd+Z для отмены хода, автоматически отключается в полях ввода','Постоянное сохранение настроек: язык, тема, звук, сложность, пользовательские правила и др.','Исправлено: applySettingsUI() не синхронизирует значения полей пользовательской доски','Диалог подтверждения перед удалением отдельной записи для предотвращения случайных действий','Оптимизировано начальное состояние DOM панели истории: список и кнопка очистки скрыты по умолчанию'],
                it: ['Corretto: init() non chiama resetGame() rompendo annulla alla prima mossa e tempistica','Corretto: openHistory() non chiude replay causando conflitto z-index','Corretto: CSS --surface-hover mancante rompendo hover link Informazioni','Scorciatoia da tastiera Ctrl+Z / Cmd+Z per annulla, auto-disabilitata nei campi di input','Persistenza impostazioni: lingua, tema, audio, difficoltà, regole personalizzate ripristinate al refresh','Corretto: applySettingsUI() non sincronizza i valori dei campi scacchiera personalizzata','Conferma prima dell\'eliminazione singola per prevenire cancellazioni accidentali','Stato DOM iniziale del cassetto ottimizzato: lista e pulsante cancella nascosti di default se vuoto'],
                pt: ['Corrigido: init() não chama resetGame() quebrando desfazer na primeira jogada e tempo incorreto','Corrigido: openHistory() não fecha repetição causando conflito de z-index','Corrigido: CSS --surface-hover ausente quebrando hover de links Sobre','Atalho de teclado Ctrl+Z / Cmd+Z para desfazer, auto-desativado em campos de entrada','Persistência de configurações: idioma, tema, som, dificuldade, regras personalizadas restauradas','Corrigido: applySettingsUI() não sincroniza valores de entrada do tabuleiro personalizado','Diálogo de confirmação antes de excluir um registro para evitar acidentes','Estado DOM inicial da gaveta otimizado: lista e botão limpar ocultos por padrão quando vazio'],
            }
        },
        {
            version: '0.6.1',
            date: { zh:'2026-04-28', en:'Apr 28, 2026', ja:'2026年4月28日', ko:'2026년 4월 28일', fr:'28 avr. 2026', de:'28. Apr. 2026', es:'28 abr. 2026', ru:'28 апр. 2026', it:'28 apr. 2026', pt:'28 de abr. de 2026' },
            items: {
                zh: ['新增悔棋系统：PvE 模式下可撤销玩家与 AI 各一步，PvP 模式下可撤销上一步，AI 对战模式不可用', '悔棋按钮根据当前游戏状态智能启用/禁用，支持鼠标与键盘无障碍操作', '悔棋后完整恢复棋盘状态、回合顺序、赢线与模态框，时间戳重新计算'],
                en: ['Added Undo System: undo both player and AI moves in PvE, undo last move in PvP, disabled in AI vs AI', 'Undo button intelligently enables/disables based on game state, supports mouse and keyboard accessibility', 'Full board state restoration after undo including turn order, win lines and modal cleanup, timestamp recalculation'],
                ja: ['待ったシステム追加：PvE はプレイヤーと AI 双方を待った、PvP は1手待った、AI対AI は不可', '待ったボタンはゲーム状態に応じて自動有効/無効、マウスとキーボードのアクセシビリティ対応', '待った後に盤面状態、手番、勝利線、モーダルを完全復元、タイムスタンプ再計算'],
                ko: ['무르기 시스템 추가: PvE 는 플레이어와 AI 각각 무르기, PvP 는 한 수 무르기, AI 대 AI 는 불가', '무르기 버튼은 게임 상태에 따라 자동 활성화/비활성화, 마우스 및 키보드 접근성 지원', '무르기 후 보드 상태, 턴 순서, 승리 선, 모달 완전 복원, 타임스탬프 재계산'],
                fr: ['Système d\'annulation : annule joueur + IA en PvE, dernier coup en PvP, désactivé en IA vs IA', 'Bouton Annulation s\'active/désactive intelligemment, accessible souris et clavier', 'Restauration complète après annulation : plateau, tour, lignes victoire, modal, recalcul horodatage'],
                de: ['Rückgängig-System: Spieler + KI in PvE, letzter Zug in PvP, deaktiviert in KI vs KI', 'Rückgängig-Button aktiviert/deaktiviert sich intelligent, Maus- und Tastatur-Barrierefreiheit', 'Vollständige Wiederherstellung nach Rückgängig: Brett, Zug, Sieglinien, Modal, Zeitstempel-Neuberechnung'],
                es: ['Sistema de deshacer: deshacer jugador + IA en PvE, última jugada en PvP, desactivado en IA vs IA', 'Botón Deshacer se activa/desactiva inteligentemente, accesible con ratón y teclado', 'Restauración completa después de deshacer: tablero, turno, líneas victoria, modal, recálculo de marca temporal'],
                ru: ['Система отмены хода: отмена игрока и ИИ в PvE, последнего хода в PvP, отключено в ИИ vs ИИ', 'Кнопка отмены интеллектуально включается/выключается, доступна мышью и клавиатурой', 'Полное восстановление после отмены: доска, ход, линии победы, модалка, пересчёт временной метки'],
                it: ['Sistema Annulla: annulla giocatore + AI in PvE, ultima mossa in PvP, disabilitato in AI vs AI', 'Pulsante Annulla si attiva/disattiva intelligentemente, accessibile mouse e tastiera', 'Ripristino completo dopo annulla: scacchiera, turno, linee vittoria, modale, ricalcolo timestamp'],
                pt: ['Sistema de desfazer: desfazer jogador + IA em PvE, última jogada em PvP, desativado em IA vs IA', 'Botão Desfazer ativa/desativa inteligentemente, acessível com mouse e teclado', 'Restauração completa após desfazer: tabuleiro, turno, linhas vitória, modal, recálculo de carimbo de tempo'],
            }
        },
        {
            version: '0.6.0',
            date: { zh:'2026-04-28', en:'Apr 28, 2026', ja:'2026年4月28日', ko:'2026년 4월 28일', fr:'28 avr. 2026', de:'28. Apr. 2026', es:'28 abr. 2026', ru:'28 апр. 2026', it:'28 apr. 2026', pt:'28 de abr. de 2026' },
            items: {
                zh: ['新增对局历史记录系统：自动保存每局游戏，支持查看模式、对战方式、胜负、步数与时间', '新增回放系统：可逐步回放任意历史对局，支持播放/暂停/上一步/下一步/重置控制', '历史记录支持本地持久化存储，最多保留 50 条，支持单条删除与一键清空（带确认对话框）', '历史记录与回放系统完整支持 10 种语言与无障碍访问（焦点陷阱、键盘导航、ARIA 动态标签）'],
                en: ['Added Game History: auto-saves every match with mode, battle type, winner, move count and timestamp', 'Added Replay System: step-by-step replay of any historical match with play/pause/step/reset controls', 'History supports local persistent storage (max 50 entries), single deletion and clear-all with confirmation dialog', 'History and Replay fully support 10 languages and accessibility (focus trap, keyboard nav, dynamic ARIA labels)'],
                ja: ['対局履歴システム追加：モード、対戦方式、勝敗、手数、日時を自動保存', '再生システム追加：任意の対局をステップ再生、再生/一時停止/前/次/リセット対応', 'ローカル保存対応（最大50件）、個別削除と一括削除（確認ダイアログ付き）', '10言語対応とアクセシビリティ完全対応（フォーカストラップ、キーボード操作、ARIA動的ラベル）'],
                ko: ['대국 기록 시스템 추가: 모드, 대전 방식, 승패, 수, 시간 자동 저장', '재생 시스템 추가: 임의의 대국을 단계별 재생, 재생/일시정지/이전/다음/리셋 지원', '로컬 저장 지원(최대 50건), 개별 삭제 및 일괄 삭제(확인 대화상자 포함)', '10개 언어 지원 및 접근성 완벽 지원(포커스 트랩, 키보드 낵, ARIA 동적 라벨)'],
                fr: ['Historique des parties : sauvegarde auto. avec mode, type, vainqueur, coups et horodatage', 'Système de relecture : revoir pas à pas n\'importe quelle partie, lecture/pause/précédent/suivant/réinitialisation', 'Stockage local (max 50), suppression individuelle et totale avec dialogue de confirmation', 'Support complet 10 langues et accessibilité (piège focus, nav. clavier, étiquettes ARIA dynamiques)'],
                de: ['Spielverlauf: automat. Speicherung mit Modus, Kampfart, Sieger, Zügen und Zeitstempel', 'Wiederholungssystem: schrittweise Wiedergabe beliebiger Partien, Abspielen/Pause/Zurück/Weiter/Reset', 'Lokale Speicherung (max. 50), Einzel- und Gesamtlöschung mit Bestätigungsdialog', 'Vollständige 10-Sprachen-Unterstützung und Barrierefreiheit (Fokusfalle, Tastaturnav., dynamische ARIA-Labels)'],
                es: ['Historial de partidas: guardado automático con modo, tipo, ganador, jugadas y marca temporal', 'Sistema de repetición: reproducción paso a paso con reproducción/pausa/anterior/siguiente/reinicio', 'Almacenamiento local (máx. 50), eliminación individual y total con diálogo de confirmación', 'Soporte completo 10 idiomas y accesibilidad (trampa de foco, navegación teclado, etiquetas ARIA dinámicas)'],
                ru: ['История игр: автосохранение с режимом, типом боя, победителем, ходами и временем', 'Система повтора: пошаговый просмотр любой партии, воспроизведение/пауза/назад/вперёд/сброс', 'Локальное хранилище (макс. 50), удаление по одному и полная очистка с подтверждением', 'Полная поддержка 10 языков и доступность (ловушка фокуса, навигация клавиатурой, динамические метки ARIA)'],
                it: ['Cronologia partite: salvataggio automatico con modalità, tipo, vincitore, mosse e orario', 'Sistema replay: riproduzione passo-passo con riproduci/pausa/indietro/avanti/reset', 'Archiviazione locale (max 50), eliminazione singola e totale con dialogo di conferma', 'Supporto completo 10 lingue e accessibilità (trappola fuoco, nav. tastiera, etichette ARIA dinamiche)'],
                pt: ['Histórico de jogos: salvamento automático com modo, tipo, vencedor, jogadas e horário', 'Sistema de repetição: reprodução passo a passo com reproduzir/pausar/anterior/próximo/reiniciar', 'Armazenamento local (máx. 50), exclusão individual e total com caixa de diálogo de confirmação', 'Suporte completo 10 idiomas e acessibilidade (armadilha de foco, navegação teclado, rótulos ARIA dinâmicos)'],
            }
        },
        {
            version: '0.5.5',
            date: { zh:'2026-04-22', en:'Apr 22, 2026', ja:'2026年4月22日', ko:'2026년 4월 22일', fr:'22 avr. 2026', de:'22. Apr. 2026', es:'22 abr. 2026', ru:'22 апр. 2026', it:'22 apr. 2026', pt:'22 de abr. de 2026' },
            items: {
                zh: ['Pointer Events 路径补充 window.blur 监听，防止切出浏览器后 3D 拖拽状态卡死'],
                en: ['Pointer Events path now listens to window.blur to prevent stuck 3D drag state when switching away from browser'],
                ja: ['Pointer Events パスに window.blur リスナーを追加し、ブラウザ切り替え後の 3D ドラッグ状態の固着を防止'],
                ko: ['Pointer Events 경로에 window.blur 리스너 추가, 브라우저 전환 후 3D 드래그 상태 고정 방지'],
                fr: ['Chemin Pointer Events écoute désormais window.blur pour éviter le blocage du drag 3D en quittant le navigateur'],
                de: ['Pointer Events-Pfad hört jetzt auf window.blur, um hängenden 3D-Drag beim Verlassen des Browsers zu verhindern'],
                es: ['Ruta Pointer Events ahora escucha window.blur para evitar bloqueo de arrastre 3D al cambiar de navegador'],
                ru: ['Путь Pointer Events теперь слушает window.blur для предотвращения зависшего состояния 3D-перетаскивания при переключении из браузера'],
                it: ['Percorso Pointer Events ora ascolta window.blur per prevenire il blocco del trascinamento 3D quando si esce dal browser'],
                pt: ['Caminho Pointer Events agora escuta window.blur para evitar travamento do arrasto 3D ao sair do navegador'],
            }
        },
        {
            version: '0.5.3',
            date: { zh:'2026-04-20', en:'Apr 20, 2026', ja:'2026年4月20日', ko:'2026년 4월 20일', fr:'20 avr. 2026', de:'20. Apr. 2026', es:'20 abr. 2026', ru:'20 апр. 2026', it:'20 apr. 2026', pt:'20 de abr. de 2026' },
            items: {
                zh: ['彻底修复 3D 棋盘转动视角：改用 Pointer Events API（setPointerCapture + pointermove/up/cancel），完全阻断浏览器手势劫持；回退设备保留 touchstart preventDefault + changedTouches 精确坐标', '设置面板新增「关于」区域：仓库地址 / GitHub 主页 / haazargames.com / 回到大厅', '修复 lockC4Board 误清除已下棋 cell 的 disabled 状态', '统一 endGame 中 battleMode 的获取方式'],
                en: ['Thoroughly fixed 3D board rotation: switched to Pointer Events API (setPointerCapture + pointermove/up/cancel) to fully block browser gesture hijacking; fallback devices keep touchstart preventDefault + changedTouches for precise coords', 'Settings drawer added "About" section: repo / GitHub profile / haazargames.com / back to lobby', 'Fixed lockC4Board incorrectly clearing disabled on occupied cells', 'Unified endGame battleMode access via getEffectiveBattleMode()'],
                ja: ['3Dボード回転を根本修正：Pointer Events API（setPointerCapture + pointermove/up/cancel）に移行し、ブラウザジェスチャー介入を完全遮断；フォールバック端末は touchstart preventDefault + changedTouches 正確座標を維持','設定に「About」エリア追加：リポジトリ / GitHub / haazargames.com / ロビーに戻る','lockC4Board の occupied cell disabled 誤解除を修正','endGame の battleMode 取得を getEffectiveBattleMode() に統一'],
                ko: ['3D 보드 회전 근본 수정: Pointer Events API(setPointerCapture + pointermove/up/cancel)로 전환하여 브라우저 제스처 개입 완전 차단; 폰백 기기는 touchstart preventDefault + changedTouches 정확한 좌표 유지','설정에 "About" 영역 추가: 저장소 / GitHub / haazargames.com / 로비로 돌아가기','lockC4Board 의 occupied cell disabled 오해제 수정','endGame battleMode 접근을 getEffectiveBattleMode() 로 통일'],
                fr: ['Correction complète rotation plateau 3D : passage à Pointer Events API (setPointerCapture + pointermove/up/cancel) pour bloquer totalement le détournement des gestes navigateur ; appareils de secours conservent touchstart preventDefault + changedTouches pour coords précises','Ajout section "À propos" : dépôt / profil GitHub / haazargames.com / retour lobby','Correction lockC4Board ne retire plus disabled sur cellules occupées','Uniformisation endGame battleMode via getEffectiveBattleMode()'],
                de: ['3D-Brett-Rotation gründlich korrigiert: Umstieg auf Pointer Events API (setPointerCapture + pointermove/up/cancel), um Browser-Geste-Übernahme vollständig zu blockieren; Fallback-Geräte behalten touchstart preventDefault + changedTouches für exakte Koordinaten','"Über"-Bereich hinzugefügt: Repository / GitHub-Profil / haazargames.com / Zurück zur Lobby','lockC4Board korrigiert: disabled nicht mehr auf besetzte Zellen entfernt','endGame battleMode auf getEffectiveBattleMode() vereinheitlicht'],
                es: ['Corregida completamente rotación tablero 3D: migración a Pointer Events API (setPointerCapture + pointermove/up/cancel) para bloquear totalmente secuestro de gestos del navegador; dispositivos fallback conservan touchstart preventDefault + changedTouches para coords precisas','Sección "Acerca de" añadida: repositorio / perfil GitHub / haazargames.com / volver al lobby','lockC4Board corregido: no limpia disabled en celdas ocupadas','endGame battleMode unificado con getEffectiveBattleMode()'],
                ru: ['Коренное исправление вращения 3D-доски: переход на Pointer Events API (setPointerCapture + pointermove/up/cancel) для полной блокировки перехвата жестов браузера; резервные устройства сохраняют touchstart preventDefault + changedTouches для точных координат','Добавлен раздел "О приложении": репозиторий / профиль GitHub / haazargames.com / вернуться в лобби','Исправлено lockC4Board: не снимает disabled с занятых ячеек','endGame battleMode унифицирован через getEffectiveBattleMode()'],
                it: ['Corretto completamente rotazione scacchiera 3D: passaggio a Pointer Events API (setPointerCapture + pointermove/up/cancel) per bloccare totalmente il dirottamento dei gesti browser; dispositivi fallback mantengono touchstart preventDefault + changedTouches per coordinate precise','Aggiunta sezione "Informazioni": repository / profilo GitHub / haazargames.com / torna alla lobby','lockC4Board corretto: non rimuove disabled su celle occupate','endGame battleMode uniformato con getEffectiveBattleMode()'],
                pt: ['Corrigida completamente rotação tabuleiro 3D: migração para Pointer Events API (setPointerCapture + pointermove/up/cancel) para bloquear totalmente sequestro de gestos do navegador; dispositivos fallback mantêm touchstart preventDefault + changedTouches para coords precisas','Seção "Sobre" adicionada: repositório / perfil GitHub / haazargames.com / voltar ao lobby','lockC4Board corrigido: não limpa disabled em células ocupadas','endGame battleMode unificado com getEffectiveBattleMode()'],
            }
        },
        {
            version: '0.5.2',
            date: { zh:'2026-04-20', en:'Apr 20, 2026', ja:'2026年4月20日', ko:'2026년 4월 20일', fr:'20 avr. 2026', de:'20. Apr. 2026', es:'20 abr. 2026', ru:'20 апр. 2026', it:'20 apr. 2026', pt:'20 de abr. de 2026' },
            items: {
                zh: ['统一 handleCellClick 中 battleMode 的获取方式，改用 getEffectiveBattleMode() 与 C4/Gomoku 保持一致'],
                en: ['Unified battleMode access in handleCellClick to use getEffectiveBattleMode() for consistency with C4/Gomoku'],
                ja: ['handleCellClick の battleMode 取得を getEffectiveBattleMode() に統一（C4/Gomoku と一致）'],
                ko: ['handleCellClick 의 battleMode 접근을 getEffectiveBattleMode() 로 통일 (C4/Gomoku 와 일치)'],
                fr: ['Uniformisation de battleMode dans handleCellClick via getEffectiveBattleMode() (cohérence C4/Gomoku)'],
                de: ['battleMode in handleCellClick auf getEffectiveBattleMode() vereinheitlicht (Konsistenz mit C4/Gomoku)'],
                es: ['Unificado acceso a battleMode en handleCellClick con getEffectiveBattleMode() (consistencia C4/Gomoku)'],
                ru: ['Унифицирован доступ к battleMode в handleCellClick через getEffectiveBattleMode() (согласованность с C4/Gomoku)'],
                it: ['Uniformato accesso battleMode in handleCellClick con getEffectiveBattleMode() (coerenza C4/Gomoku)'],
                pt: ['Unificado acesso a battleMode em handleCellClick com getEffectiveBattleMode() (consistência C4/Gomoku)'],
            }
        },
        {
            version: '0.5.1',
            date: { zh:'2026-04-20', en:'Apr 20, 2026', ja:'2026年4月20日', ko:'2026년 4월 20일', fr:'20 avr. 2026', de:'20. Apr. 2026', es:'20 abr. 2026', ru:'20 апр. 2026', it:'20 apr. 2026', pt:'20 de abr. de 2026' },
            items: {
                zh: ['修复 3D 拖拽在触屏设备上阻断棋盘点击的问题', '修复 getBoardRot 未设置 CSS 变量时返回 0 导致首次拖拽跳变', '修复 onDragMove 中 e.touches 为空数组时的潜在异常', '修复 12 处 parseInt 缺少 radix 参数的问题'],
                en: ['Fixed 3D drag blocking board clicks on touch devices', 'Fixed getBoardRot returning 0 when CSS vars unset causing jump on first drag', 'Fixed potential crash when e.touches is empty in onDragMove', 'Fixed 12 missing radix parameters in parseInt calls'],
                ja: ['3Dドラッグがタッチデバイスで盤面クリックを遮断する問題を修正','getBoardRot が CSS 変数未設定時に 0 を返し最初のドラッグが跳ねる問題を修正','onDragMove で e.touches が空の場合の潜在的クラッシュを修正','12 箇所の parseInt radix 不足を修正'],
                ko: ['3D 드래그가 터치 기기에서 보드 클릭을 차단하는 문제 수정','getBoardRot 이 CSS 변수 미설정 시 0을 반환하여 첫 드래그가 튀는 문제 수정','onDragMove 에서 e.touches 가 빈 경우 잠재적 충돌 수정','12개 parseInt radix 누락 수정'],
                fr: ['Correction glisser-déposer 3D bloquant les clics sur écran tactile','Correction getBoardRot retournant 0 sans variable CSS causant un saut','Correction crash potentiel si e.touches vide dans onDragMove','Correction 12 paramètres radix manquants dans parseInt'],
                de: ['3D-Ziehen blockiert Tippen auf Touch-Geräten korrigiert','getBoardRot gibt 0 zurück wenn CSS-Variablen nicht gesetzt – korrigiert','Potenzieller Absturz bei leerem e.touches in onDragMove korrigiert','12 fehlende radix-Parameter in parseInt korrigiert'],
                es: ['Corregido arrastre 3D bloqueando clics en dispositivos táctiles','Corregido getBoardRot devolviendo 0 sin vars CSS causando salto','Corregido posible crash si e.touches vacío en onDragMove','Corregidos 12 parámetros radix faltantes en parseInt'],
                ru: ['Исправлено: 3D-перетаскивание блокирует нажатия на сенсорных устройствах','Исправлено: getBoardRot возвращает 0 при незаданных CSS-переменных','Исправлен потенциальный сбой при пустом e.touches в onDragMove','Исправлены 12 отсутствующих параметров radix в parseInt'],
                it: ['Corretto trascinamento 3D che blocca i tocchi su dispositivi touch','Corretto getBoardRot che restituisce 0 senza variabili CSS','Corretto potenziale crash con e.touches vuoto in onDragMove','Corretti 12 parametri radix mancanti in parseInt'],
                pt: ['Corrigido arrasto 3D bloqueando toques em dispositivos touch','Corrigido getBoardRot retornando 0 sem vars CSS causando pulo','Corrigido possível crash com e.touches vazio em onDragMove','Corrigidos 12 parâmetros radix ausentes em parseInt'],
            }
        },
        {
            version: '0.5.0',
            date: { zh:'2026-04-20', en:'Apr 20, 2026', ja:'2026年4月20日', ko:'2026년 4월 20일', fr:'20 avr. 2026', de:'20. Apr. 2026', es:'20 abr. 2026', ru:'20 апр. 2026', it:'20 apr. 2026', pt:'20 de abr. de 2026' },
            items: {
                zh: ['统一对战栏：所有游戏（井字棋/四子棋/五子棋/自定义）都支持人机/双人/AI对战切换', '3D 棋盘支持鼠标拖拽旋转视角', 'Connect Four AI 搜索深度从 3 提升到 5，评估函数增强', '五子棋/自定义 AI 引入 Minimax + Alpha-Beta 剪枝（2 层搜索）', '新增 4 种音效风格：合成器/芯片/弹拨/水晶'],
                en: ['Unified battle bar: all games (TTT/C4/Gomoku/Custom) support PvE/PvP/AIvsAI switching', '3D board now supports mouse-drag rotation', 'Connect Four AI search depth increased from 3 to 5 with enhanced evaluation', 'Gomoku/Custom AI now uses Minimax + Alpha-Beta pruning (2-ply search)', 'Added 4 sound styles: Synth, Chiptune, Pluck, Crystal'],
                ja: ['対戦バー統一：すべてのゲームでPvE/PvP/AI対AI切替に対応','3Dボードがマウスドラッグ回転に対応','四目並べ AI の探索深度を3から5に向上、評価関数強化','五目並べ/カスタム AI にMinimax+Alpha-Beta剪枝（2層探索）を導入','4種類の効果音スタイル追加：シンセ/チップチューン/プラック/クリスタル'],
                ko: ['대전 바 통일: 모든 게임에서 PvE/PvP/AI 대 AI 전환 지원','3D 보드 마우스 드래그 회전 지원','사목 AI 탐색 깊이 3에서 5로 증가, 평가 함수 강화','오목/사용자 지정 AI 에 Minimax+Alpha-Beta 가지치기(2층 탐색) 도입','4가지 효과음 스타일 추가: 신스/칩튠/플럭/크리스탈'],
                fr: ['Barre de combat unifiée : tous les jeux supportent PvE/PvP/IA vs IA','Plateau 3D rotatif par glisser-déposer','IA Puissance 4 : profondeur 3→5, évaluation renforcée','IA Gomoku/Perso : Minimax + élagage αβ (2 couches)','4 styles sonores ajoutés : Synthé, Chiptune, Pincé, Cristal'],
                de: ['Einheitliche Kampfleiste: alle Spiele unterstützen PvE/PvP/KI vs KI','3D-Brett mit Mauszieh-Rotation','Vier-gewinnt-KI: Tiefe 3→5, verbesserte Bewertung','Gomoku/Benutzerdef. KI: Minimax + Alpha-Beta (2 Ebenen)','4 Tonstile hinzugefügt: Synthesizer, Chiptune, Zupf, Kristall'],
                es: ['Barra de batalla unificada: todos los juegos soportan PvE/PvP/IA vs IA','Tablero 3D con rotación por arrastre','IA Conecta 4: profundidad 3→5, evaluación mejorada','IA Gomoku/Personalizado: Minimax + poda αβ (2 niveles)','4 estilos de sonido añadidos: Sintetizador, Chiptune, Pizzicato, Cristal'],
                ru: ['Единая панель боя: все игры поддерживают PvE/PvP/ИИ vs ИИ','3D доска с вращением перетаскиванием','ИИ 4 в ряд: глубина 3→5, улучшенная оценка','ИИ Гомоку/Своя: Minimax + альфа-бета отсечение (2 уровня)','4 стиля звука добавлено: Синтезатор, Чиптюн, Щипок, Кристалл'],
                it: ['Barra battaglia unificata: tutti i giochi supportano PvE/PvP/AI vs AI','Scacchiera 3D rotabile con trascinamento','IA Forza 4: profondità 3→5, valutazione migliorata','IA Gomoku/Personalizzato: Minimax + potatura αβ (2 livelli)','4 stili audio aggiunti: Synth, Chiptune, Pizzicato, Cristallo'],
                pt: ['Barra de batalha unificada: todos os jogos suportam PvE/PvP/IA vs IA','Tabuleiro 3D com rotação por arrasto','IA Ligue 4: profundidade 3→5, avaliação melhorada','IA Gomoku/Personalizado: Minimax + poda αβ (2 níveis)','4 estilos de som adicionados: Sintetizador, Chiptune, Pluck, Cristal'],
            }
        },
        {
            version: '0.4.2',
            date: { zh:'2026-04-20', en:'Apr 20, 2026', ja:'2026年4月20日', ko:'2026년 4월 20일', fr:'20 avr. 2026', de:'20. Apr. 2026', es:'20 abr. 2026', ru:'20 апр. 2026', it:'20 apr. 2026', pt:'20 de abr. de 2026' },
            items: {
                zh: ['所有棋盘格子支持键盘操作（Tab 聚焦、Enter/Space 下棋）与屏幕阅读器', '弹窗与抽屉新增焦点陷阱，关闭后自动恢复焦点', '赢线在窗口缩放后自动重新计算位置', '自定义非正方形棋盘比例修复，棋子保持正圆', '五子棋 AI 去重赢线计分，评估更准确', 'SVG 标记改用安全的 DOM API 创建', '主题色输入增加格式校验，防止非法值崩溃'],
                en: ['All board cells now keyboard-accessible (Tab focus, Enter/Space to play) and screen-reader friendly', 'Added focus trap to modals and drawer; focus restores on close', 'Win lines now recalculate correctly on window resize', 'Fixed non-square custom board aspect ratio; pieces stay circular', 'Fixed duplicate win-line scoring in Gomoku AI for better evaluation', 'SVG marks now created via safe DOM API instead of innerHTML', 'Added hex color input validation to prevent crash on malformed values'],
                ja: ['すべてのマスがキーボード操作（Tab、Enter/Space）とスクリーンリーダーに対応','モーダルとドロワーにフォーカストラップ追加、閉じたらフォーカス復元','ウィンドウリサイズ後に勝利線が再計算されるように修正','非正方形カスタムボードの比率を修正、駒が正円を保つ','五目並べ AI の重複勝利線スコアリングを修正','SVG マークを安全な DOM API で作成','テーマ色入力にバリデーション追加'],
                ko: ['모든 칸 키보드 조작(Tab, Enter/스페이스) 및 스크린리더 지원','모달과 서랍에 포커스 트랩 추가, 닫으면 포커스 복원','창 크기 조정 후 승리 선 자동 재계산','비정방형 사용자 지정 보드 비율 수정, 돌이 원형 유지','오목 AI 중복 승리 선 점수 수정','SVG 마크를 안전한 DOM API로 생성','테마색 입력에 유효성 검사 추가'],
                fr: ['Toutes les cellules accessibles au clavier (Tab, Entrée/Espace) et lecteurs d\'écran','Piège de focus ajouté aux modales et au tiroir, restauration à la fermeture','Ligne victoire recalculée automatiquement au redimensionnement','Ratio plateau perso non-carré corrigé, pièces restent circulaires','Comptage double ligne victoire Gomoku IA corrigé','Marques SVG créées via API DOM sécurisée','Validation entrée couleur hexadécimale ajoutée'],
                de: ['Alle Zellen tastaturzugänglich (Tab, Enter/Leertaste) und screenreader-freundlich','Fokusfalle für Modal und Drawer hinzugefügt, Fokus wird wiederhergestellt','Sieglinie wird bei Fenstergrößenänderung neu berechnet','Nicht-quadratisches benutzerdef. Brett-Verhältnis korrigiert, Steine bleiben rund','Doppelte Sieglinienzählung Gomoku-KI korrigiert','SVG-Markierungen über sichere DOM-API erstellt','Hex-Farbeneingabe-Validierung hinzugefügt'],
                es: ['Todas las celdas accesibles por teclado (Tab, Enter/Espacio) y lectores de pantalla','Trampa de foco añadida a modales y cajón, restauración al cerrar','Línea victoria recalculada automáticamente al redimensionar ventana','Proporción tablero personalizado no cuadrado corregida, piezas circulares','Conteo duplicado línea victoria IA Gomoku corregido','Marcas SVG creadas mediante API DOM segura','Validación entrada color hexadecimal añadida'],
                ru: ['Все ячейки доступны с клавиатуры (Tab, Enter/Пробел) и для экранных дикторов','Добавлена ловушка фокуса для модалок и панели, восстановление при закрытии','Победная линия пересчитывается при изменении размера окна','Исправлено соотношение сторон не-квадратной доски, фишки остаются круглыми','Исправлено дублирование подсчёта победных линий в ИИ Гомоку','SVG-метки создаются через безопасный DOM API','Добавлена валидация ввода hex-цвета'],
                it: ['Tutte le celle accessibili da tastiera (Tab, Invio/Spazio) e screen reader','Aggiunta trappola del fuoco a modali e cassetto, ripristino alla chiusura','Linea vittoria ricalcolata automaticamente al ridimensionamento','Rapporto scacchiera personalizzata non quadrata corretto, pedine rotonde','Corretto punteggio linee vittoria duplicate IA Gomoku','Marcatori SVG creati tramite API DOM sicura','Aggiunta validazione input colore esadecimale'],
                pt: ['Todas as células acessíveis por teclado (Tab, Enter/Espaço) e leitores de tela','Armadilha de foco adicionada a modais e gaveta, restauração ao fechar','Linha vitória recalculada automaticamente ao redimensionar janela','Proporção tabuleiro personalizado não quadrado corrigida, peças circulares','Corrigida pontuação duplicada linha vitória IA Gomoku','Marcas SVG criadas via API DOM segura','Adicionada validação entrada cor hexadecimal'],
            }
        },
        {
            version: '0.4.1',
            date: { zh:'2026-04-20', en:'Apr 20, 2026', ja:'2026年4月20日', ko:'2026년 4월 20일', fr:'20 avr. 2026', de:'20. Apr. 2026', es:'20 abr. 2026', ru:'20 апр. 2026', it:'20 apr. 2026', pt:'20 de abr. de 2026' },
            items: {
                zh: ['修复无障碍标签（aria-label）国际化支持', '修复 AI 对战模式下状态栏不显示当前思考方的问题', '修复四子棋/五子棋赢线颜色可能显示错误的问题', '修复自定义游戏输入框的边界校验与 NaN 处理', '修复切换模式时可能产生的竞态条件', '修复 PvP 模式下重置游戏后状态栏未更新的问题', '修复五子棋棋盘在小屏幕上比例失调的问题', '优化层级堆叠（z-index）与 battle-switch 动画'],
                en: ['Fixed aria-label internationalization for accessibility', 'Fixed missing turn indicator in AI vs AI mode', 'Fixed win line color bug in Connect Four and Gomoku', 'Fixed custom game input validation and NaN handling', 'Fixed race condition when switching modes', 'Fixed missing status update after reset in PvP mode', 'Fixed Gomoku board aspect ratio on small screens', 'Optimized z-index stacking and battle-switch animation'],
                ja: ['aria-label の多言語対応を修正','AI対AIモードの手番表示を修正','四目/五目の勝利線の色を修正','カスタムゲーム入力のバリデーションとNaN処理を修正','モード切替時の競合を修正','PvPリセット後のステータス更新を修正','五目のボード比率を修正','z-index と battle-switch アニメーションを最適化'],
                ko: ['aria-label 다국어 지원 수정','AI 대 AI 모드 턴 표시 수정','사목/오목 승리 선 색상 수정','사용자 지정 게임 입력 검증 및 NaN 처리 수정','모드 전환 시 경쟁 조건 수정','PvP 리셋 후 상태 업데이트 수정','오목 보드 비율 수정','z-index 및 battle-switch 애니메이션 최적화'],
                fr: ['Internationalisation aria-label corrigée','Indicateur de tour en IA vs IA corrigé','Couleur ligne victoire Puissance 4/Gomoku corrigée','Validation entrée perso et gestion NaN corrigées','Condition course mode corrigée','Mise à jour statut PvP reset corrigée','Ratio plateau Gomoku corrigé','z-index et animation battle-switch optimisés'],
                de: ['Aria-label Internationalisierung korrigiert','Zuganzeige KI vs KI korrigiert','Sieglinienfarbe Vier/Gomoku korrigiert','Eingabevalidierung benutzerdef. und NaN korrigiert','Race-Condition Moduswechsel korrigiert','Status-Update PvP-Reset korrigiert','Gomoku-Brett-Verhältnis korrigiert','z-index und battle-switch Animation optimiert'],
                es: ['Internacionalización aria-label corregida','Indicador de turno IA vs IA corregido','Color línea victoria Conecta 4/Gomoku corregido','Validación entrada personalizada y NaN corregida','Condición carrera cambio modo corregida','Actualización estado PvP reinicio corregida','Proporción tablero Gomoku corregida','z-index y animación battle-switch optimizados'],
                ru: ['Интернационализация aria-label исправлена','Индикатор хода ИИ vs ИИ исправлен','Цвет победной линии 4 в ряд/Гомоку исправлен','Валидация ввода своя игра и NaN исправлены','Состояние гонки при смене режима исправлено','Обновление статуса PvP сброс исправлено','Соотношение сторон Гомоку исправлено','z-index и анимация battle-switch оптимизированы'],
                it: ['Internazionalizzazione aria-label corretta','Indicatore turno AI vs AI corretto','Colore linea vittoria Forza 4/Gomoku corretto','Validazione input personalizzato e NaN corretta','Condizione corsa cambio modalità corretta','Aggiornamento stato PvP reset corretto','Rapporto scacchiera Gomoku corretto','z-index e animazione battle-switch ottimizzati'],
                pt: ['Internacionalização aria-label corrigida','Indicador de turno IA vs IA corrigido','Cor linha vitória Ligue 4/Gomoku corrigida','Validação entrada personalizada e NaN corrigida','Condição corrida troca modo corrigida','Atualização estado PvP reinício corrigida','Proporção tabuleiro Gomoku corrigida','z-index e animação battle-switch otimizados'],
            }
        },
        {
            version: '0.4.0',
            date: { zh:'2026-04-20', en:'Apr 20, 2026', ja:'2026年4月20日', ko:'2026년 4월 20일', fr:'20 avr. 2026', de:'20. Apr. 2026', es:'20 abr. 2026', ru:'20 апр. 2026', it:'20 apr. 2026', pt:'20 de abr. de 2026' },
            items: {
                zh: ['五子棋、四子棋、自定义模式新增 PvP 和 AI 对战方式', '新增 battle-switch 对战方式切换栏', 'AI 算法适配 AI vs AI 模式（支持 X/O 双方自动对弈）', '所有对战模式支持 10 种语言同步'],
                en: ['Added PvP and AI vs AI modes to Gomoku, Connect Four and Custom', 'Added battle-switch sub-mode toggle bar', 'AI algorithms adapted for AI vs AI (both X and O sides)', 'All battle modes synced with 10 languages'],
                ja: ['五目/四目/カスタムにPvP・AI対AIモード追加','battle-switch サブモード切替追加','AI対AIに対応（X/O双方自動対戦）','10言語対応'],
                ko: ['오목/사목/사용자 지정에 PvP 및 AI 대 AI 추가','battle-switch 서브 모드 전환 추가','AI 대 AI 지원 (X/O 양측 자동 대전)','10개 언어 동기화'],
                fr: ['Ajout PvP et IA vs IA pour Gomoku, Puissance 4 et Perso','Ajout barre battle-switch','IA adaptée pour IA vs IA (X et O)','10 langues synchronisées'],
                de: ['PvP und KI vs KI für Gomoku, Vier gewinnt und Benutzerdef.','battle-switch Untermodus hinzugefügt','KI angepasst für KI vs KI (X und O)','10 Sprachen synchronisiert'],
                es: ['PvP e IA vs IA para Gomoku, Conecta 4 y Personalizado','Barra battle-switch añadida','IA adaptada para IA vs IA (X y O)','10 idiomas sincronizados'],
                ru: ['PvP и ИИ vs ИИ для Гомоку, 4 в ряд и Своя игра','Добавлена панель battle-switch','ИИ адаптирован для ИИ vs ИИ (X и O)','10 языков синхронизированы'],
                it: ['PvP e AI vs AI per Gomoku, Forza 4 e Personalizzato','Aggiunta barra battle-switch','IA adattata per AI vs AI (X e O)','10 lingue sincronizzate'],
                pt: ['PvP e IA vs IA para Gomoku, Ligue 4 e Personalizado','Barra battle-switch adicionada','IA adaptada para IA vs IA (X e O)','10 idiomas sincronizados'],
            }
        },
        {
            version: '0.3.0',
            date: { zh:'2026-04-17', en:'Apr 17, 2026', ja:'2026年4月17日', ko:'2026년 4월 17일', fr:'17 avr. 2026', de:'17. Apr. 2026', es:'17 abr. 2026', ru:'17 апр. 2026', it:'17 apr. 2026', pt:'17 de abr. de 2026' },
            items: {
                zh: ['新增五子棋（Gomoku）15×15 模式，含启发式 AI', '新增自定义游戏模式：可自由设置棋盘大小（3~20）和连珠数', '自定义模式支持 PvE / PvP / AI 对战', '五子棋 AI 采用威胁检测 + 局部搜索 + 启发式评估', '所有新模式 UI/UX 与 10 种语言同步'],
                en: ['Added Gomoku 15×15 mode with heuristic AI', 'Added Custom Game mode: free board size (3~20) and win length', 'Custom mode supports PvE / PvP / AI vs AI', 'Gomoku AI uses threat detection + local search + heuristic eval', 'All new modes synced with 10 languages'],
                ja: ['五目並べ 15×15 モード追加','カスタムゲームモード追加：ボードサイズ自由設定','カスタムモードは PvE/PvP/AI対AI 対応','五目並べ AI は脅威検出 + 局所探索','10言語対応'],
                ko: ['오목 15×15 모드 추가','사용자 지정 게임 모드 추가: 보드 크기 자유 설정','사용자 지정 모드는 PvE/PvP/AI 대 AI 지원','오목 AI 는 위협 탐지 + 국부 탐색','10개 언어 동기화'],
                fr: ['Gomoku 15×15 avec IA heuristique','Mode personnalisé : taille libre et longueur victoire','Perso supporte PvE/PvP/IA vs IA','IA Gomoku : détection menaces + recherche locale','10 langues synchronisées'],
                de: ['Gomoku 15×15 mit heuristischer KI','Benutzerdef. Spiel: freie Brettgröße','Benutzerdef. unterstützt PvE/PvP/KI vs KI','Gomoku-KI: Bedrohungserkennung + lokale Suche','10 Sprachen synchronisiert'],
                es: ['Gomoku 15×15 con IA heurística','Juego personalizado: tamaño libre','Personalizado soporta PvE/PvP/IA vs IA','IA Gomoku: detección de amenazas + búsqueda local','10 idiomas sincronizados'],
                ru: ['Гомоку 15×15 с эвристическим ИИ','Своя игра: свободный размер доски','Своя игра поддерживает PvE/PvP/ИИ vs ИИ','ИИ Гомоку: обнаружение угроз + локальный поиск','10 языков синхронизированы'],
                it: ['Gomoku 15×15 con IA euristica','Gioco personalizzato: dimensione libera','Personalizzato supporta PvE/PvP/AI vs AI','IA Gomoku: rilevamento minacce + ricerca locale','10 lingue sincronizzate'],
                pt: ['Gomoku 15×15 com IA heurística','Jogo personalizado: tamanho livre','Personalizado suporta PvE/PvP/IA vs IA','IA Gomoku: detecção de ameaças + busca local','10 idiomas sincronizados'],
            }
        },
        {
            version: '0.2.0',
            date: { zh:'2026-04-17', en:'Apr 17, 2026', ja:'2026年4月17日', ko:'2026년 4월 17일', fr:'17 avr. 2026', de:'17. Apr. 2026', es:'17 abr. 2026', ru:'17 апр. 2026', it:'17 apr. 2026', pt:'17 de abr. de 2026' },
            items: {
                zh: ['新增四子棋（Connect Four）游戏模式', '新增 3D 棋盘视觉效果', '音效系统全面升级：支持音高/音长/音量自定义', '新增 4 种音效风格（铃铛/太空/鼓点/钢琴）', '音效支持实时试听'],
                en: ['Added Connect Four mode', 'Added 3D board effect', 'Upgraded sound: customizable pitch/duration/volume', 'Added 4 sound styles (Bell/Space/Drum/Piano)', 'Real-time sound test'],
                ja: ['四目並べモード追加','3D ボード追加','効果音カスタマイズ追加','4種類の効果音スタイル追加','効果音試聴機能追加'],
                ko: ['사목 모드 추가','3D 보드 추가','효과음 커스터마이징 추가','4가지 효과음 스타일 추가','효과음 시청 기능 추가'],
                fr: ['Mode Puissance 4','Plateau 3D','Personnalisation sonore','4 styles sonores','Test sonore'],
                de: ['Vier-gewinnt-Modus','3D-Brett','Klang-Anpassung','4 Tonstile','Klang-Test'],
                es: ['Modo Conecta 4','Tablero 3D','Personalización de sonido','4 estilos de sonido','Prueba de sonido'],
                ru: ['Режим 4 в ряд','3D доска','Настройка звука','4 стиля звука','Тест звука'],
                it: ['Modalità Forza 4','Scacchiera 3D','Personalizzazione audio','4 stili audio','Test audio'],
                pt: ['Modo Ligue 4','Tabuleiro 3D','Personalização de som','4 estilos de som','Teste de som'],
            }
        },
        {
            version: '0.1.2',
            date: { zh:'2026-04-17', en:'Apr 17, 2026', ja:'2026年4月17日', ko:'2026년 4월 17일', fr:'17 avr. 2026', de:'17. Apr. 2026', es:'17 abr. 2026', ru:'17 апр. 2026', it:'17 apr. 2026', pt:'17 de abr. de 2026' },
            items: {
                zh: ['扩展至 10 种语言支持', '新增 10 种主题色 + 自定义颜色选择器', '新增对比度调节滑块', '新增 4 种字体切换', '新增动画速度调节', '新增 4 种音效风格', '新增公告 / 更新日志弹窗系统'],
                en: ['Extended to 10 languages', 'Added 10 accent colors + custom color picker', 'Added contrast slider', 'Added 4 font options', 'Added animation speed control', 'Added 4 sound styles', 'Added changelog modal'],
                ja: ['10言語対応拡張','10色アクセント+カスタムカラー','コントラスト調整','4フォント切替','アニメ速度調整','4効果音スタイル','更新履歴ポップアップ'],
                ko: ['10개 언어 지원 확장','10가지 테마색 + 사용자 지정 색상','대비 조절 슬라이더','4가지 글꼴 전환','애니메이션 속도 조절','4가지 효과음 스타일','업데이트 공지 팝업'],
                fr: ['10 langues','10 couleurs + personnalisé','Curseur contraste','4 polices','Vitesse animation','4 styles sonores','Fenêtre mises à jour'],
                de: ['10 Sprachen','10 Farben + benutzerdef.','Kontrastschieber','4 Schriftarten','Animationsgeschw.','4 Tonstile','Änderungsprotokoll'],
                es: ['10 idiomas','10 colores + personalizado','Control contraste','4 fuentes','Velocidad animación','4 estilos sonido','Ventana actualizaciones'],
                ru: ['10 языков','10 цветов + свой','Ползунок контраста','4 шрифта','Скорость анимации','4 стиля звука','Окно обновлений'],
                it: ['10 lingue','10 colori + personalizzato','Cursore contrasto','4 font','Velocità animazione','4 stili audio','Finestra aggiornamenti'],
                pt: ['10 idiomas','10 cores + personalizada','Controle contraste','4 fontes','Velocidade animação','4 estilos som','Janela atualizações'],
            }
        },
        {
            version: '0.1.1',
            date: { zh:'2026-04-17', en:'Apr 17, 2026', ja:'2026年4月17日', ko:'2026년 4월 17일', fr:'17 avr. 2026', de:'17. Apr. 2026', es:'17 abr. 2026', ru:'17 апр. 2026', it:'17 apr. 2026', pt:'17 de abr. de 2026' },
            items: {
                zh: ['新增设置面板', '支持语言切换（中/英）', '支持深色 / 浅色 / 自动主题', '支持动画开关', '支持音效开关', '支持 AI 难度调节'],
                en: ['Added settings panel', 'Language switching (EN/ZH)', 'Dark/Light/Auto theme', 'Animation toggle', 'Sound toggle', 'AI difficulty'],
                ja: ['設定パネル追加','言語切替','ダーク/ライト/自動テーマ','アニメーションON/OFF','効果音ON/OFF','AI難易度'],
                ko: ['설정 패널 추가','언어 전환','다크/라이트/자동 테마','애니메이션 ON/OFF','효과음 ON/OFF','AI 난이도'],
                fr: ['Panneau paramètres','Changement langue','Thème Sombre/Clair/Auto','Animations','Son','Difficulté IA'],
                de: ['Einstellungsfenster','Sprachwechsel','Dunkel/Hell/Auto','Animationen','Ton','KI-Schwierigkeit'],
                es: ['Panel ajustes','Cambio idioma','Tema oscuro/claro/auto','Animaciones','Sonido','Dificultad IA'],
                ru: ['Панель настроек','Смена языка','Тёмная/светлая/авто','Анимации','Звук','Сложность ИИ'],
                it: ['Pannello impostazioni','Cambio lingua','Tema scuro/chiaro/auto','Animazioni','Audio','Difficoltà AI'],
                pt: ['Painel configurações','Troca idioma','Tema escuro/claro/auto','Animações','Som','Dificuldade IA'],
            }
        },
        {
            version: '0.1.0',
            date: { zh:'2026-04-17', en:'Apr 17, 2026', ja:'2026年4月17日', ko:'2026년 4월 17일', fr:'17 avr. 2026', de:'17. Apr. 2026', es:'17 abr. 2026', ru:'17 апр. 2026', it:'17 apr. 2026', pt:'17 de abr. de 2026' },
            items: {
                zh: ['新增双人对战模式', '新增 AI 对战模式', '新增胜利连线动画', '新增分数统计系统'],
                en: ['Added local PvP mode', 'Added AI vs AI mode', 'Added win line animation', 'Added score tracking'],
                ja: ['対戦モード追加','AI対戦モード追加','勝利ラインアニメ追加','スコア統計追加'],
                ko: ['2인 대전 모드 추가','AI 대전 모드 추가','승리 연결 애니메이션 추가','점수 통계 추가'],
                fr: ['Mode PvP local','Mode IA vs IA','Animation ligne victorieuse','Suivi scores'],
                de: ['Lokaler PvP-Modus','KI vs KI','Sieglinien-Animation','Punktverfolgung'],
                es: ['Modo PvP local','Modo IA vs IA','Animación línea victoriosa','Seguimiento puntos'],
                ru: ['Локальный PvP','ИИ vs ИИ','Анимация линии победы','Подсчёт очков'],
                it: ['Modalità PvP locale','Modalità AI vs AI','Animazione linea vittoria','Tracciamento punteggio'],
                pt: ['Modo PvP local','Modo IA vs IA','Animação linha vencedora','Acompanhamento pontos'],
            }
        },
        {
            version: '0.0.0',
            date: { zh:'2026-04-17', en:'Apr 17, 2026', ja:'2026年4月17日', ko:'2026년 4월 17일', fr:'17 avr. 2026', de:'17. Apr. 2026', es:'17 abr. 2026', ru:'17 апр. 2026', it:'17 apr. 2026', pt:'17 de abr. de 2026' },
            items: {
                zh: ['项目初始化', '基础井字棋功能', '人机对战（不可战胜 AI）'],
                en: ['Project initialization', 'Basic Tic-Tac-Toe', 'Player vs Unbeatable AI'],
                ja: ['プロジェクト初期化','基礎機能','プレイヤー vs 無敵AI'],
                ko: ['프로젝트 초기화','기본 기능','플레이어 vs 무적 AI'],
                fr: ['Initialisation','Tic-Tac-Toe de base','Joueur vs IA imbattable'],
                de: ['Projektinitialisierung','Basis-Tic-Tac-Toe','Spieler vs unbesiegbarer KI'],
                es: ['Inicialización','Tres en raya básico','Jugador vs IA invencible'],
                ru: ['Инициализация','Базовые крестики-нолики','Игрок vs непобедимый ИИ'],
                it: ['Inizializzazione','Tris base','Giocatore vs AI imbattibile'],
                pt: ['Inicialização','Jogo da velha básico','Jogador vs IA invencível'],
            }
        }
    ];

    /* ===== I18n Helpers ===== */
    function t(key) {
        return (i18n[settings.lang] && i18n[settings.lang][key]) || key;
    }
    function tr(key) {
        const v = i18n[settings.lang] && i18n[settings.lang][key];
        return v || '';
    }

    function updateCellAriaLabels() {
        const label = t('aria-cell-empty');
        cells.forEach(cell => {
            const mark = cell.querySelector('.mark');
            if (!mark) {
                cell.setAttribute('aria-label', label);
                cell.setAttribute('tabindex', '0');
            } else {
                const player = mark.classList.contains('x') ? PLAYER_X : PLAYER_O;
                cell.setAttribute('aria-label', player === PLAYER_X ? t('cell-x') : t('cell-o'));
                cell.setAttribute('tabindex', '-1');
            }
        });
        document.querySelectorAll('.c4-cell').forEach(cell => {
            const piece = cell.querySelector('.c4-piece');
            if (!piece) {
                cell.setAttribute('aria-label', label);
                cell.setAttribute('tabindex', '0');
            } else {
                const player = piece.classList.contains('x-piece') ? PLAYER_X : PLAYER_O;
                cell.setAttribute('aria-label', player === PLAYER_X ? t('cell-x') : t('cell-o'));
                cell.setAttribute('tabindex', '-1');
            }
        });
        document.querySelectorAll('.gomoku-cell').forEach(cell => {
            const piece = cell.querySelector('.gomoku-piece');
            if (!piece) {
                cell.setAttribute('aria-label', label);
                cell.setAttribute('tabindex', '0');
            } else {
                const player = piece.classList.contains('x-piece') ? PLAYER_X : PLAYER_O;
                cell.setAttribute('aria-label', player === PLAYER_X ? t('cell-x') : t('cell-o'));
                cell.setAttribute('tabindex', '-1');
            }
        });
    }

    function applyI18n() {
        document.documentElement.lang = settings.lang === 'zh' ? 'zh-CN' : settings.lang;
        document.title = t('app-title');
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const tr = t(key);
            if (tr) el.textContent = tr;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const translated = tr(key);
            if (translated) el.setAttribute('aria-label', translated);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const tr = t(key);
            if (tr) el.setAttribute('placeholder', tr);
        });
        updateCellAriaLabels();
        updateScoreLabels();
        updateStatus(getTurnText(), currentPlayer === PLAYER_X ? 'x' : 'o');
        const bm = getEffectiveBattleMode();
        if (currentMode === 'ttt') subtitle.textContent = bm === 'pvp' ? t('subtitle-pvp') : bm === 'aivsai' ? t('subtitle-aivsai') : t('subtitle-pve');
        else if (currentMode === 'connect4') subtitle.textContent = bm === 'pvp' ? t('subtitle-connect4') + ' — ' + t('subtitle-pvp') : bm === 'aivsai' ? t('subtitle-connect4') + ' — ' + t('subtitle-aivsai') : t('subtitle-connect4');
        else if (currentMode === 'gomoku') subtitle.textContent = bm === 'pvp' ? t('subtitle-gomoku') + ' — ' + t('subtitle-pvp') : bm === 'aivsai' ? t('subtitle-gomoku') + ' — ' + t('subtitle-aivsai') : t('subtitle-gomoku');
        else subtitle.textContent = bm === 'pvp' ? getCustomSubtitle() + ' — ' + t('subtitle-pvp') : bm === 'aivsai' ? getCustomSubtitle() + ' — ' + t('subtitle-aivsai') : getCustomSubtitle();
        renderChangelog();
        if (tacticsDrawer && tacticsDrawer.classList.contains('show')) renderTacticsList();
        if (dailyModal && dailyModal.classList.contains('show') && currentDailyPuzzle) {
            if (dailyMeta) dailyMeta.textContent = t('daily-meta-date') + ' · #' + currentDailyPuzzle.displayNum + ' · ' + t('daily-type-' + currentDailyPuzzle.type);
            if (dailyInstruction) dailyInstruction.textContent = t('daily-desc-' + currentDailyPuzzle.type).replace('{player}', currentDailyPuzzle.player);
            if (dailyStreakText) dailyStreakText.textContent = t('daily-streak') + ': ' + dailyProgress.streak + ' 🔥';
            if (dailyFeedback) {
                if (!dailySolved) {
                    dailyFeedback.textContent = '';
                    dailyFeedback.className = 'daily-feedback';
                } else {
                    dailyFeedback.textContent = t('daily-correct');
                    dailyFeedback.className = 'daily-feedback correct';
                }
            }
        }
        updateDailyBadge();
    }

    /* ===== Settings UI Builders ===== */
    function buildLangGrid() {
        const grid = document.getElementById('lang-grid');
        grid.innerHTML = '';
        Object.entries(langMap).forEach(([code, name]) => {
            const btn = document.createElement('button');
            btn.className = 'lang-btn' + (settings.lang === code ? ' active' : '');
            btn.textContent = name;
            btn.addEventListener('click', () => setLang(code));
            grid.appendChild(btn);
        });
    }

    function buildColorPicker() {
        const picker = document.getElementById('color-picker');
        picker.innerHTML = '';
        colorPresets.forEach(p => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch' + (settings.accentColor === p.hex ? ' active' : '');
            swatch.style.background = p.hex;
            swatch.addEventListener('click', () => setAccentColor(p.hex));
            picker.appendChild(swatch);
        });
    }

    /* ===== Init ===== */
    function loadSettings() {
        try {
            const raw = localStorage.getItem(SETTINGS_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') return;
            if (parsed.settings && typeof parsed.settings === 'object') {
                const s = parsed.settings;
                if (langMap[s.lang]) settings.lang = s.lang;
                if (['dark','light','auto'].includes(s.theme)) settings.theme = s.theme;
                if (/^#[0-9A-Fa-f]{6}$/.test(s.accentColor)) settings.accentColor = s.accentColor;
                if (/^#[0-9A-Fa-f]{6}$/.test(s.customColor)) settings.customColor = s.customColor;
                if (typeof s.contrast === 'number' && s.contrast >= 80 && s.contrast <= 130) settings.contrast = s.contrast;
                if (['inter','serif','mono','rounded'].includes(s.font)) settings.font = s.font;
                if (typeof s.animations === 'boolean') settings.animations = s.animations;
                if (['slow','normal','fast'].includes(s.animSpeed)) settings.animSpeed = s.animSpeed;
                if (typeof s.board3d === 'boolean') settings.board3d = s.board3d;
                if (typeof s.sound === 'boolean') settings.sound = s.sound;
                const validStyles = ['classic','electronic','retro','wood','bell','space','drum','piano','synth','chiptune','pluck','crystal'];
                if (validStyles.includes(s.soundStyle)) settings.soundStyle = s.soundStyle;
                if (typeof s.soundPitch === 'number' && s.soundPitch >= -12 && s.soundPitch <= 12) settings.soundPitch = s.soundPitch;
                if (typeof s.soundDuration === 'number' && s.soundDuration >= 50 && s.soundDuration <= 200) settings.soundDuration = s.soundDuration;
                if (typeof s.soundVolume === 'number' && s.soundVolume >= 0 && s.soundVolume <= 100) settings.soundVolume = s.soundVolume;
                if (['easy','medium','hard'].includes(s.difficulty)) settings.difficulty = s.difficulty;
                if (['3','5','7','10','15','custom'].includes(s.customBoardSize)) settings.customBoardSize = s.customBoardSize;
                if (typeof s.timerEnabled === 'boolean') settings.timerEnabled = s.timerEnabled;
                if (typeof s.timerDuration === 'number' && [60, 180, 300, 600].includes(s.timerDuration)) settings.timerDuration = s.timerDuration;
                if (typeof s.rippleEnabled === 'boolean') settings.rippleEnabled = s.rippleEnabled;
                if (typeof s.eloEnabled === 'boolean') settings.eloEnabled = s.eloEnabled;
                if (typeof s.misereMode === 'boolean') settings.misereMode = s.misereMode;
                const validBoardThemes = ['classic','neon','nature','minimal','space'];
                if (validBoardThemes.includes(s.boardTheme)) settings.boardTheme = s.boardTheme;
            }
            if (parsed.customConfig && typeof parsed.customConfig === 'object') {
                const c = parsed.customConfig;
                if (typeof c.w === 'number' && c.w >= 3 && c.w <= 20) customConfig.w = c.w;
                if (typeof c.h === 'number' && c.h >= 3 && c.h <= 20) customConfig.h = c.h;
                if (typeof c.winLen === 'number' && c.winLen >= 3 && c.winLen <= 20) customConfig.winLen = c.winLen;
                const minDim = Math.min(customConfig.w, customConfig.h);
                if (customConfig.winLen > minDim) customConfig.winLen = minDim;
            }
        } catch (e) {}
    }

    function saveSettings() {
        try {
            const payload = { settings: { ...settings }, customConfig: { ...customConfig } };
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(payload));
        } catch (e) {}
    }

    function createEmptyGameStats() {
        return {
            totalGames: 0, wins: 0, losses: 0, draws: 0,
            totalMoves: 0, totalTime: 0,
            fastestWin: -1, longestGame: 0,
            currentStreak: 0, bestStreak: 0,
            byMode: {
                ttt: { games: 0, wins: 0, losses: 0, draws: 0 },
                connect4: { games: 0, wins: 0, losses: 0, draws: 0 },
                gomoku: { games: 0, wins: 0, losses: 0, draws: 0 },
                custom: { games: 0, wins: 0, losses: 0, draws: 0 }
            },
            byDifficulty: {
                easy: { games: 0, wins: 0, losses: 0, draws: 0 },
                medium: { games: 0, wins: 0, losses: 0, draws: 0 },
                hard: { games: 0, wins: 0, losses: 0, draws: 0 }
            }
        };
    }

    function loadGameStats() {
        try {
            const raw = localStorage.getItem(STATS_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') return;
            const empty = createEmptyGameStats();
            gameStats.totalGames = typeof parsed.totalGames === 'number' && parsed.totalGames >= 0 ? parsed.totalGames : empty.totalGames;
            gameStats.wins = typeof parsed.wins === 'number' && parsed.wins >= 0 ? parsed.wins : empty.wins;
            gameStats.losses = typeof parsed.losses === 'number' && parsed.losses >= 0 ? parsed.losses : empty.losses;
            gameStats.draws = typeof parsed.draws === 'number' && parsed.draws >= 0 ? parsed.draws : empty.draws;
            gameStats.totalMoves = typeof parsed.totalMoves === 'number' && parsed.totalMoves >= 0 ? parsed.totalMoves : empty.totalMoves;
            gameStats.totalTime = typeof parsed.totalTime === 'number' && parsed.totalTime >= 0 ? parsed.totalTime : empty.totalTime;
            gameStats.fastestWin = typeof parsed.fastestWin === 'number' && parsed.fastestWin >= -1 ? parsed.fastestWin : empty.fastestWin;
            gameStats.longestGame = typeof parsed.longestGame === 'number' && parsed.longestGame >= 0 ? parsed.longestGame : empty.longestGame;
            gameStats.currentStreak = typeof parsed.currentStreak === 'number' && parsed.currentStreak >= -999 ? parsed.currentStreak : empty.currentStreak;
            gameStats.bestStreak = typeof parsed.bestStreak === 'number' && parsed.bestStreak >= 0 ? parsed.bestStreak : empty.bestStreak;
            if (parsed.byMode && typeof parsed.byMode === 'object') {
                for (const k of Object.keys(empty.byMode)) {
                    if (parsed.byMode[k] && typeof parsed.byMode[k] === 'object') {
                        const vg = parsed.byMode[k].games, vw = parsed.byMode[k].wins, vl = parsed.byMode[k].losses, vd = parsed.byMode[k].draws;
                        gameStats.byMode[k].games = typeof vg === 'number' && vg >= 0 ? vg : 0;
                        gameStats.byMode[k].wins = typeof vw === 'number' && vw >= 0 ? vw : 0;
                        gameStats.byMode[k].losses = typeof vl === 'number' && vl >= 0 ? vl : 0;
                        gameStats.byMode[k].draws = typeof vd === 'number' && vd >= 0 ? vd : 0;
                    }
                }
            }
            if (parsed.byDifficulty && typeof parsed.byDifficulty === 'object') {
                for (const k of Object.keys(empty.byDifficulty)) {
                    if (parsed.byDifficulty[k] && typeof parsed.byDifficulty[k] === 'object') {
                        const vg = parsed.byDifficulty[k].games, vw = parsed.byDifficulty[k].wins, vl = parsed.byDifficulty[k].losses, vd = parsed.byDifficulty[k].draws;
                        gameStats.byDifficulty[k].games = typeof vg === 'number' && vg >= 0 ? vg : 0;
                        gameStats.byDifficulty[k].wins = typeof vw === 'number' && vw >= 0 ? vw : 0;
                        gameStats.byDifficulty[k].losses = typeof vl === 'number' && vl >= 0 ? vl : 0;
                        gameStats.byDifficulty[k].draws = typeof vd === 'number' && vd >= 0 ? vd : 0;
                    }
                }
            }
        } catch (e) {}
    }

    function saveGameStats() {
        try { localStorage.setItem(STATS_KEY, JSON.stringify(gameStats)); } catch (e) {}
    }

    function exportGameData() {
        const dataExportArea = document.getElementById('data-export-area');
        if (!dataExportArea) return;
        const payload = {
            version: 'ttt-backup-v1',
            exportedAt: new Date().toISOString()
        };
        try { const v = localStorage.getItem(SETTINGS_KEY); if (v) payload.settings = v; } catch (e) {}
        try { const v = localStorage.getItem(HISTORY_KEY); if (v) payload.history = v; } catch (e) {}
        try { const v = localStorage.getItem(ACHIEVEMENT_KEY); if (v) payload.achievements = v; } catch (e) {}
        try { const v = localStorage.getItem(ACHIEVEMENT_STATS_KEY); if (v) payload.achievementStats = v; } catch (e) {}
        try { const v = localStorage.getItem(STATS_KEY); if (v) payload.stats = v; } catch (e) {}
        try { const v = localStorage.getItem(TACTICS_KEY); if (v) payload.tactics = v; } catch (e) {}
        try { const v = localStorage.getItem(DAILY_KEY); if (v) payload.daily = v; } catch (e) {}
        try { const v = localStorage.getItem(ELO_KEY); if (v) payload.elo = v; } catch (e) {}
        if (Object.keys(payload).length <= 2) {
            dataExportArea.value = t('data-export-empty');
            return;
        }
        const json = JSON.stringify(payload, null, 2);
        dataExportArea.value = json;
        dataExportArea.select();
    }

    function copyExportData() {
        const dataExportArea = document.getElementById('data-export-area');
        if (!dataExportArea) return;
        dataExportArea.select();
        const btn = document.getElementById('data-copy-btn');
        const showCheck = () => { if (btn) { const orig = btn.textContent; btn.textContent = t('data-copy-success'); setTimeout(() => btn.textContent = orig, 1200); } };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(dataExportArea.value).then(showCheck).catch(() => {
                try { document.execCommand('copy'); showCheck(); } catch (e2) {}
            });
        } else {
            try { document.execCommand('copy'); showCheck(); } catch (e) {}
        }
    }

    function importGameData() {
        const dataImportArea = document.getElementById('data-import-area');
        if (!dataImportArea) return;
        const raw = dataImportArea.value.trim();
        if (!raw) return;
        if (raw.length > 2_000_000) { alert(t('data-import-too-large')); return; }
        let payload;
        try {
            payload = JSON.parse(raw);
        } catch (e) { alert(t('data-import-invalid')); return; }
        if (!payload || typeof payload !== 'object') { alert(t('data-import-invalid')); return; }
        if (payload.version !== 'ttt-backup-v1') { alert(t('data-import-invalid')); return; }
        if (!confirm(t('data-import-confirm-msg'))) return;
        const validString = v => typeof v === 'string' && v.length > 0;
        if (payload.settings && !validString(payload.settings)) { alert(t('data-import-invalid')); return; }
        if (payload.history && !validString(payload.history)) { alert(t('data-import-invalid')); return; }
        if (payload.achievements && !validString(payload.achievements)) { alert(t('data-import-invalid')); return; }
        if (payload.achievementStats && !validString(payload.achievementStats)) { alert(t('data-import-invalid')); return; }
        if (payload.stats && !validString(payload.stats)) { alert(t('data-import-invalid')); return; }
        if (payload.tactics && !validString(payload.tactics)) { alert(t('data-import-invalid')); return; }
        if (payload.daily && !validString(payload.daily)) { alert(t('data-import-invalid')); return; }
        if (payload.elo && !validString(payload.elo)) { alert(t('data-import-invalid')); return; }
        try {
            if (payload.settings) localStorage.setItem(SETTINGS_KEY, payload.settings);
            if (payload.history) localStorage.setItem(HISTORY_KEY, payload.history);
            if (payload.achievements) localStorage.setItem(ACHIEVEMENT_KEY, payload.achievements);
            if (payload.achievementStats) localStorage.setItem(ACHIEVEMENT_STATS_KEY, payload.achievementStats);
            if (payload.stats) localStorage.setItem(STATS_KEY, payload.stats);
            if (payload.tactics) localStorage.setItem(TACTICS_KEY, payload.tactics);
            if (payload.daily) localStorage.setItem(DAILY_KEY, payload.daily);
            if (payload.elo) localStorage.setItem(ELO_KEY, payload.elo);
            alert(t('data-import-success'));
            window.location.reload();
        } catch (e) { alert(t('data-import-fail')); }
    }

    function init() {
        loadSettings();
        loadGameStats();
        loadElo();
        updateEloBadge();
        misereMode = settings.misereMode === true;
        updateMisereIndicator();
        buildLangGrid();
        buildColorPicker();
        buildC4Cells();
        buildGomokuCells();
        cells.forEach(cell => {
            cell.setAttribute('tabindex', '0');
            cell.setAttribute('role', 'button');
            cell.addEventListener('click', handleCellClick);
            cell.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCellClick(e);
                }
            });
        });
        restartBtn.addEventListener('click', resetGame);
        modalBtn.addEventListener('click', resetGame);
        modal.addEventListener('click', e => { if (e.target === modal) resetGame(); });
        modeBtns.forEach(btn => btn.addEventListener('click', () => setMode(btn.dataset.mode)));
        battleBtns.forEach(btn => btn.addEventListener('click', () => setBattleMode(btn.dataset.battle)));

        settingsBtn.addEventListener('click', openDrawer);
        drawerClose.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);

        document.querySelectorAll('#font-segmented .seg-btn').forEach(btn =>
            btn.addEventListener('click', () => setFont(btn.dataset.font)));
        document.querySelectorAll('#theme-segmented .seg-btn').forEach(btn =>
            btn.addEventListener('click', () => setTheme(btn.dataset.theme)));
        document.querySelectorAll('#anim-speed-segmented .seg-btn').forEach(btn =>
            btn.addEventListener('click', () => setAnimSpeed(btn.dataset.speed)));
        document.querySelectorAll('#sound-style-segmented .seg-btn').forEach(btn =>
            btn.addEventListener('click', () => setSoundStyle(btn.dataset.sound)));
        document.querySelectorAll('#difficulty-segmented .seg-btn').forEach(btn =>
            btn.addEventListener('click', () => setDifficulty(btn.dataset.diff)));
        document.querySelectorAll('#board-size-segmented .seg-btn').forEach(btn =>
            btn.addEventListener('click', () => setCustomBoardSize(btn.dataset.size)));
        document.querySelectorAll('#board-theme-segmented .seg-btn').forEach(btn =>
            btn.addEventListener('click', () => setBoardTheme(btn.dataset.theme)));

        animToggle.addEventListener('change', e => { setAnimations(e.target.checked); saveSettings(); });
        soundToggle.addEventListener('change', e => { setSound(e.target.checked); saveSettings(); });
        toggle3d.addEventListener('change', e => { set3d(e.target.checked); saveSettings(); });
        if (toggleRipple) toggleRipple.addEventListener('change', e => { settings.rippleEnabled = e.target.checked; saveSettings(); });
        contrastSlider.addEventListener('input', e => setContrast(e.target.value));
        contrastSlider.addEventListener('change', () => saveSettings());
        customColorInput.addEventListener('input', e => setAccentColor(e.target.value, true));
        customColorInput.addEventListener('change', () => saveSettings());

        pitchSlider.addEventListener('input', e => { settings.soundPitch = parseInt(e.target.value, 10); pitchValue.textContent = (settings.soundPitch > 0 ? '+' : '') + settings.soundPitch; });
        pitchSlider.addEventListener('change', () => saveSettings());
        durationSlider.addEventListener('input', e => { settings.soundDuration = parseInt(e.target.value, 10); durationValue.textContent = settings.soundDuration + '%'; });
        durationSlider.addEventListener('change', () => saveSettings());
        volumeSlider.addEventListener('input', e => { settings.soundVolume = parseInt(e.target.value, 10); volumeValue.textContent = settings.soundVolume + '%'; });
        volumeSlider.addEventListener('change', () => saveSettings());
        testSoundBtn.addEventListener('click', () => { initAudio(); playMoveSound(PLAYER_X); });

        function validateCustomConfig() {
            const minDim = Math.min(customConfig.w, customConfig.h);
            if (customConfig.winLen > minDim) {
                customConfig.winLen = minDim;
                customWinLenInput.value = minDim;
            }
        }
        customWinLenInput.addEventListener('change', e => { const v = parseInt(e.target.value, 10); customConfig.winLen = clamp(isNaN(v) ? 5 : v, 3, 20); validateCustomConfig(); saveSettings(); if (currentMode === 'custom') { subtitle.textContent = getCustomSubtitle(); resetGame(); } });
        customBoardWInput.addEventListener('change', e => { const v = parseInt(e.target.value, 10); customConfig.w = clamp(isNaN(v) ? 15 : v, 3, 20); validateCustomConfig(); customBoardWInput.value = customConfig.w; saveSettings(); if (currentMode === 'custom') { subtitle.textContent = getCustomSubtitle(); resetGame(); } });
        customBoardHInput.addEventListener('change', e => { const v = parseInt(e.target.value, 10); customConfig.h = clamp(isNaN(v) ? 15 : v, 3, 20); validateCustomConfig(); customBoardHInput.value = customConfig.h; saveSettings(); if (currentMode === 'custom') { subtitle.textContent = getCustomSubtitle(); resetGame(); } });

        timerToggle.addEventListener('change', e => { setTimerEnabled(e.target.checked); });
        if (toggleElo) toggleElo.addEventListener('change', e => { setEloEnabled(e.target.checked); });
        if (toggleMisere) toggleMisere.addEventListener('change', e => { setMisereMode(e.target.checked); });
        document.querySelectorAll('#timer-segmented .seg-btn').forEach(btn =>
            btn.addEventListener('click', () => setTimerDuration(parseInt(btn.dataset.timer, 10))));

        changelogBtn.addEventListener('click', openChangelog);
        changelogClose.addEventListener('click', closeChangelog);
        changelogModal.addEventListener('click', e => { if (e.target === changelogModal) closeChangelog(); });

        undoBtn.addEventListener('click', undoMove);
        if (hintBtn) hintBtn.addEventListener('click', getHint);
        historyBtn.addEventListener('click', openHistory);
        historyClose.addEventListener('click', closeHistory);
        historyOverlay.addEventListener('click', closeHistory);
        clearHistoryBtn.addEventListener('click', clearHistory);

        replayClose.addEventListener('click', closeReplay);
        replayModal.addEventListener('click', e => { if (e.target === replayModal) closeReplay(); });
        replayReset.addEventListener('click', resetReplay);
        replayPrev.addEventListener('click', stepReplayBackward);
        replayPlay.addEventListener('click', toggleReplayPlay);
        replayNext.addEventListener('click', stepReplayForward);

        achievementsBtn.addEventListener('click', openAchievements);
        achievementsClose.addEventListener('click', closeAchievements);
        achievementsOverlay.addEventListener('click', closeAchievements);

        if (tacticsBtn) tacticsBtn.addEventListener('click', openTactics);
        if (tacticsClose) tacticsClose.addEventListener('click', closeTactics);
        if (tacticsOverlay) tacticsOverlay.addEventListener('click', closeTactics);
        if (tacticsModalClose) tacticsModalClose.addEventListener('click', () => { tacticsModal.classList.remove('show'); resetTacticModalState(); });
        if (tacticsModal) tacticsModal.addEventListener('click', e => { if (e.target === tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); } });
        if (tacticsSkipBtn) tacticsSkipBtn.addEventListener('click', () => { tacticsModal.classList.remove('show'); resetTacticModalState(); });
        if (dailyBtn) dailyBtn.addEventListener('click', openDaily);
        if (dailyModalClose) dailyModalClose.addEventListener('click', closeDaily);
        if (dailyModal) dailyModal.addEventListener('click', e => { if (e.target === dailyModal) closeDaily(); });
        if (dailySkipBtn) dailySkipBtn.addEventListener('click', closeDaily);
        if (dailyCells) dailyCells.forEach((cell, i) => {
            cell.addEventListener('click', () => validateDailyMove(i));
            cell.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); validateDailyMove(i); } });
        });
        if (rushBtn) rushBtn.addEventListener('click', openRush);
        if (rushModalClose) rushModalClose.addEventListener('click', closeRush);
        if (rushModal) rushModal.addEventListener('click', e => { if (e.target === rushModal) closeRush(); });
        if (rushStartBtn) rushStartBtn.addEventListener('click', startRushGame);
        if (rushRestartBtn) rushRestartBtn.addEventListener('click', startRushGame);
        if (rushCloseBtn) rushCloseBtn.addEventListener('click', closeRush);
        if (rushSkipBtn) rushSkipBtn.addEventListener('click', skipRushPuzzle);
        if (rushCells) rushCells.forEach((cell, i) => {
            cell.addEventListener('click', () => validateRushMove(i));
            cell.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); validateRushMove(i); } });
        });
        if (editorBtn) editorBtn.addEventListener('click', openEditor);
        if (editorModalClose) editorModalClose.addEventListener('click', closeEditor);
        if (editorModal) editorModal.addEventListener('click', e => { if (e.target === editorModal) closeEditor(); });
        if (editorClearBtn) editorClearBtn.addEventListener('click', clearEditorBoard);
        if (editorStartBtn) editorStartBtn.addEventListener('click', startGameFromEditor);
        if (editorPlayerToggle) editorPlayerToggle.addEventListener('click', toggleEditorPlayer);
        if (editorCells) editorCells.forEach((cell, i) => {
            cell.addEventListener('click', () => toggleEditorCell(i));
            cell.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleEditorCell(i); } });
        });
        if (tacticsFilter) {
            tacticsFilter.querySelectorAll('.tactics-filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    tacticsFilter.querySelectorAll('.tactics-filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
                    btn.classList.add('active');
                    btn.setAttribute('aria-pressed', 'true');
                    renderTacticsList(btn.dataset.filter);
                });
            });
        }
        tacticCells.forEach(cell => {
            cell.addEventListener('click', () => {
                const idx = parseInt(cell.dataset.index, 10);
                validateTacticMove(idx);
            });
        });

        hotkeyClose.addEventListener('click', closeHotkeyModal);
        hotkeyModal.addEventListener('click', e => { if (e.target === hotkeyModal) closeHotkeyModal(); });

        const backToLobbyBtn = document.getElementById('back-to-lobby-btn');
        if (backToLobbyBtn) backToLobbyBtn.addEventListener('click', () => { window.location.href = 'https://haazargames.com'; });
        const statsResetBtn = document.getElementById('stats-reset-btn');
        if (statsResetBtn) statsResetBtn.addEventListener('click', resetGameStats);
        const dataExportBtn = document.getElementById('data-export-btn');
        const dataImportBtn = document.getElementById('data-import-btn');
        const dataExportWrap = document.getElementById('data-export-wrap');
        const dataImportWrap = document.getElementById('data-import-wrap');
        const dataExportArea = document.getElementById('data-export-area');
        const dataImportArea = document.getElementById('data-import-area');
        const dataCopyBtn = document.getElementById('data-copy-btn');
        const dataImportConfirmBtn = document.getElementById('data-import-confirm-btn');
        if (dataExportBtn) dataExportBtn.addEventListener('click', () => { dataImportWrap.classList.remove('show'); dataExportWrap.classList.add('show'); exportGameData(); });
        if (dataImportBtn) dataImportBtn.addEventListener('click', () => { dataExportWrap.classList.remove('show'); dataImportWrap.classList.add('show'); dataImportArea.focus(); });
        if (dataCopyBtn) dataCopyBtn.addEventListener('click', copyExportData);
        if (dataImportConfirmBtn) dataImportConfirmBtn.addEventListener('click', importGameData);

        window.addEventListener('resize', () => {
            if (!lastWinData) return;
            if (lastWinData.mode === 'ttt') {
                if (winLine.classList.contains('show')) drawWinLine(lastWinData.winner);
            } else if (lastWinData.mode === 'c4') {
                if (c4WinLine.classList.contains('show')) drawC4WinLine(lastWinData.winCells, lastWinData.winner);
            } else if (lastWinData.mode === 'gmk') {
                if (gomokuWinLine.classList.contains('show')) drawGmkWinLine(lastWinData.winCells, lastWinData.winner);
            }
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                if (editorModal && editorModal.classList.contains('show')) { closeEditor(); }
                else if (rushModal && rushModal.classList.contains('show')) { closeRush(); }
                else if (dailyModal && dailyModal.classList.contains('show')) { closeDaily(); }
                else if (tacticsModal && tacticsModal.classList.contains('show')) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
                else if (hotkeyModal && hotkeyModal.classList.contains('show')) { closeHotkeyModal(); }
                else if (replayModal && replayModal.classList.contains('show')) { closeReplay(); }
                else if (tacticsDrawer && tacticsDrawer.classList.contains('show')) { closeTactics(); }
                else if (achievementsDrawer && achievementsDrawer.classList.contains('show')) { closeAchievements(); }
                else if (historyDrawer && historyDrawer.classList.contains('show')) { closeHistory(); }
                else if (drawer && drawer.classList.contains('show')) { closeDrawer(); }
                else if (changelogModal && changelogModal.classList.contains('show')) { closeChangelog(); }
                else if (modal && modal.classList.contains('show')) { hideModal(); }
            }
            if (e.key === 'Tab') {
                const activeModal = (editorModal && editorModal.classList.contains('show')) ? editorModal :
                    (rushModal && rushModal.classList.contains('show')) ? rushModal :
                    (dailyModal && dailyModal.classList.contains('show')) ? dailyModal :
                    (tacticsModal && tacticsModal.classList.contains('show')) ? tacticsModal :
                    (replayModal && replayModal.classList.contains('show')) ? replayModal :
                    (tacticsDrawer && tacticsDrawer.classList.contains('show')) ? tacticsDrawer :
                    (achievementsDrawer && achievementsDrawer.classList.contains('show')) ? achievementsDrawer :
                    (historyDrawer && historyDrawer.classList.contains('show')) ? historyDrawer :
                    (modal && modal.classList.contains('show')) ? modal :
                    (drawer && drawer.classList.contains('show')) ? drawer :
                    (changelogModal && changelogModal.classList.contains('show')) ? changelogModal :
                    (hotkeyModal && hotkeyModal.classList.contains('show')) ? hotkeyModal : null;
                if (!activeModal) return;
                const focusable = Array.from(activeModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey) {
                    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
                } else {
                    if (document.activeElement === last) { e.preventDefault(); first.focus(); }
                }
            }
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
                if (isAnyModalOpen()) return;
                const tag = document.activeElement.tagName.toLowerCase();
                if (tag === 'input' || tag === 'textarea' || document.activeElement.isContentEditable) return;
                e.preventDefault();
                undoMove();
            }
            // Number keys work inside daily/tactics modals too
            if (e.key >= '1' && e.key <= '9') {
                if (isInputFocused()) return;
                handleNumberKey(parseInt(e.key, 10), e);
                return;
            }
            // Global shortcuts (only when no input/modal is active)
            if (isInputFocused() || isAnyModalOpen()) return;
            if (e.key === 'r' || e.key === 'R') { e.preventDefault(); resetGame(); }
            else if (e.key === 'u' || e.key === 'U') { e.preventDefault(); undoMove(); }
            else if (e.key === 'h' || e.key === 'H') {
                if (e.ctrlKey || e.altKey || e.metaKey) return;
                e.preventDefault();
                const canHint = getEffectiveBattleMode() === 'pve' && currentMode === 'ttt' && gameActive && currentPlayer === PLAYER_X;
                if (canHint) { getHint(); }
                else { openHistory(); }
            }
            else if (e.key === 'a' || e.key === 'A') { e.preventDefault(); openAchievements(); }
            else if (e.key === 't' || e.key === 'T') { e.preventDefault(); openTactics(); }
            else if (e.key === 'd' || e.key === 'D') { e.preventDefault(); openDaily(); }
            else if (e.key === 'p' || e.key === 'P') { e.preventDefault(); openRush(); }
            else if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); openEditor(); }
            else if (e.key === 'c' || e.key === 'C') { e.preventDefault(); openChangelog(); }
            else if (e.key === 's' || e.key === 'S') { e.preventDefault(); openDrawer(); }
            else if (e.key === '?') { e.preventDefault(); openHotkeyModal(); }
            // Arrow keys — board navigation (works inside modals too)
            if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
                if (isInputFocused()) return;
                const dir = e.key.replace('Arrow', '').toLowerCase();
                if (rushModal && rushModal.classList.contains('show')) {
                    e.preventDefault();
                    navigateRushBoard(dir);
                } else if (dailyModal && dailyModal.classList.contains('show')) {
                    e.preventDefault();
                    navigateGridCells(dailyCells, dir, 3);
                } else if (tacticsModal && tacticsModal.classList.contains('show')) {
                    e.preventDefault();
                    navigateGridCells(tacticCells, dir, 3);
                } else if (!isAnyModalOpen()) {
                    e.preventDefault();
                    navigateBoard(dir);
                }
            }
        });

        applySettingsUI();
        applyI18n();
        resetGame();
        initAchievements();
        loadTacticsProgress();
        checkTacticAchievements();
        loadDailyProgress();
        updateDailyBadge();
        checkDailyAchievements();
        loadRushProgress();
        updateRushBestDisplay();
    }

    function buildC4Cells() {
        c4CellsContainer.innerHTML = '';
        for (let r = 0; r < C4_ROWS; r++) {
            for (let c = 0; c < C4_COLS; c++) {
                const cell = document.createElement('div');
                cell.className = 'c4-cell';
                cell.setAttribute('tabindex', '0');
                cell.setAttribute('role', 'button');
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.addEventListener('click', handleC4CellClick);
                cell.addEventListener('keydown', e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleC4CellClick(e);
                    }
                });
                c4CellsContainer.appendChild(cell);
            }
        }
    }

    function buildGomokuCells() {
        gomokuCellsContainer.innerHTML = '';
        gomokuCellsContainer.style.gridTemplateColumns = `repeat(${GMK_SIZE}, 1fr)`;
        gomokuCellsContainer.style.gridTemplateRows = `repeat(${GMK_SIZE}, 1fr)`;
        gomokuBoard.style.aspectRatio = `${GMK_SIZE} / ${GMK_SIZE}`;
        for (let r = 0; r < GMK_SIZE; r++) {
            for (let c = 0; c < GMK_SIZE; c++) {
                const cell = document.createElement('div');
                cell.className = 'gomoku-cell';
                cell.setAttribute('tabindex', '0');
                cell.setAttribute('role', 'button');
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.addEventListener('click', handleGmkCellClick);
                cell.addEventListener('keydown', e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleGmkCellClick(e);
                    }
                });
                gomokuCellsContainer.appendChild(cell);
            }
        }
    }

    function rebuildCustomBoard() {
        gomokuCellsContainer.innerHTML = '';
        gomokuCellsContainer.style.gridTemplateColumns = `repeat(${customConfig.w}, 1fr)`;
        gomokuCellsContainer.style.gridTemplateRows = `repeat(${customConfig.h}, 1fr)`;
        gomokuBoard.style.aspectRatio = `${customConfig.w} / ${customConfig.h}`;
        for (let r = 0; r < customConfig.h; r++) {
            for (let c = 0; c < customConfig.w; c++) {
                const cell = document.createElement('div');
                cell.className = 'gomoku-cell';
                cell.setAttribute('tabindex', '0');
                cell.setAttribute('role', 'button');
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.addEventListener('click', handleGmkCellClick);
                cell.addEventListener('keydown', e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleGmkCellClick(e);
                    }
                });
                gomokuCellsContainer.appendChild(cell);
            }
        }
    }

    /* ===== Settings Logic ===== */
    function openDrawer() {
        stopTimer();
        closeChangelog(); closeHistory(); closeReplay(); closeEditor(); closeRush(); closeDaily(); closeAchievements(); closeHotkeyModal();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        if (tacticsDrawer) { closeTactics(); }
        lastFocusedElement = document.activeElement;
        drawer.classList.add('show');
        drawerOverlay.classList.add('show');
        renderStats();
        setTimeout(() => {
            const focusable = drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length) focusable[0].focus();
        }, 50);
    }
    function closeDrawer() {
        drawer.classList.remove('show');
        drawerOverlay.classList.remove('show');
        resumeTimerIfGameActive();
        const dew = document.getElementById('data-export-wrap');
        const diw = document.getElementById('data-import-wrap');
        if (dew) dew.classList.remove('show');
        if (diw) diw.classList.remove('show');
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
    }

    function setLang(lang) {
        if (settings.lang === lang) return;
        settings.lang = lang;
        buildLangGrid();
        applyI18n();
        saveSettings();
        updateUndoButton();
        updateEloBadge();
        updateMisereIndicator();
    }

    function setTheme(theme) {
        if (settings.theme === theme) return;
        settings.theme = theme;
        applySettingsUI();
        document.documentElement.setAttribute('data-theme', theme);
        saveSettings();
    }

    function setAccentColor(hex, isCustom = false) {
        settings.accentColor = hex;
        if (isCustom) settings.customColor = hex;
        const rgb = hexToRgb(hex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        document.documentElement.style.setProperty('--accent-h', hsl.h);
        document.documentElement.style.setProperty('--accent-s', hsl.s + '%');
        document.documentElement.style.setProperty('--accent-l', hsl.l + '%');
        if (!isCustom) customColorInput.value = hex;
        buildColorPicker();
        saveSettings();
    }

    function setContrast(val) {
        settings.contrast = val;
        contrastValue.textContent = val + '%';
        document.documentElement.style.setProperty('--contrast', val / 100);
        saveSettings();
    }

    function setFont(font) {
        if (settings.font === font) return;
        settings.font = font;
        applySettingsUI();
        document.body.setAttribute('data-font', font);
        saveSettings();
    }

    function setAnimations(on) {
        settings.animations = on;
        applySettingsUI();
        document.body.classList.toggle('animations-off', !on);
        saveSettings();
    }

    function setAnimSpeed(speed) {
        if (settings.animSpeed === speed) return;
        settings.animSpeed = speed;
        applySettingsUI();
        const scale = speed === 'slow' ? 1.8 : speed === 'fast' ? 0.4 : 1;
        document.documentElement.style.setProperty('--anim-scale', scale);
        saveSettings();
    }

    function setSound(on) {
        settings.sound = on;
        applySettingsUI();
        if (on) initAudio();
        saveSettings();
    }

    function setSoundStyle(style) {
        if (settings.soundStyle === style) return;
        settings.soundStyle = style;
        applySettingsUI();
        saveSettings();
    }

    function set3d(on) {
        settings.board3d = on;
        applySettingsUI();
        boardEl.classList.toggle('is-3d', on);
        connect4Board.classList.toggle('is-3d', on);
        gomokuBoard.classList.toggle('is-3d', on);
        if (on) {
            setBoardRot(boardEl, defaultRot.ttt.x, defaultRot.ttt.y);
            setBoardRot(connect4Board, defaultRot.c4.x, defaultRot.c4.y);
            setBoardRot(gomokuBoard, defaultRot.gmk.x, defaultRot.gmk.y);
        } else {
            boardEl.style.removeProperty('--rot-x'); boardEl.style.removeProperty('--rot-y');
            connect4Board.style.removeProperty('--rot-x'); connect4Board.style.removeProperty('--rot-y');
            gomokuBoard.style.removeProperty('--rot-x'); gomokuBoard.style.removeProperty('--rot-y');
        }
        saveSettings();
    }

    /* ===== 3D Board Drag Rotation ===== */
    const defaultRot = { ttt: { x: 15, y: -5 }, c4: { x: 12, y: -3 }, gmk: { x: 10, y: -4 } };
    const rotState = { active: false, startX: 0, startY: 0, startRotX: 0, startRotY: 0, board: null, moved: false };

    function getBoardDefaultRot(board) {
        if (board === boardEl) return defaultRot.ttt;
        if (board === connect4Board) return defaultRot.c4;
        return defaultRot.gmk;
    }

    function getBoardRot(board) {
        const rawX = board.style.getPropertyValue('--rot-x');
        const rawY = board.style.getPropertyValue('--rot-y');
        const def = getBoardDefaultRot(board);
        const x = rawX ? parseFloat(rawX) : def.x;
        const y = rawY ? parseFloat(rawY) : def.y;
        return { x, y };
    }

    function setBoardRot(board, x, y) {
        board.style.setProperty('--rot-x', clamp(x, -60, 60) + 'deg');
        board.style.setProperty('--rot-y', clamp(y, -60, 60) + 'deg');
    }

    function onDragStart(e, board) {
        if (!settings.board3d) return;
        if (e.type === 'mousedown' && e.button !== 0) return;
        const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;
        rotState.active = true;
        rotState.moved = false;
        rotState.startX = clientX;
        rotState.startY = clientY;
        rotState.board = board;
        const rot = getBoardRot(board);
        rotState.startRotX = rot.x;
        rotState.startRotY = rot.y;
        board.classList.add('dragging');
    }

    function onDragMove(e) {
        if (!rotState.active || !rotState.board) return;
        if (e.type === 'mousemove' && e.buttons !== 1) { onDragEnd(); return; }
        const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;
        const dx = clientX - rotState.startX;
        const dy = clientY - rotState.startY;
        if (!rotState.moved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
            rotState.moved = true;
        }
        if (rotState.moved) {
            setBoardRot(rotState.board, rotState.startRotX - dy * 0.4, rotState.startRotY + dx * 0.4);
        }
    }

    function onDragEnd() {
        if (!rotState.active || !rotState.board) return;
        rotState.board.classList.remove('dragging');
        rotState.active = false;
        rotState.moved = false;
        rotState.board = null;
    }

    const hasPointerEvents = 'PointerEvent' in window;
    [boardEl, connect4Board, gomokuBoard].forEach(board => {
        if (hasPointerEvents) {
            board.addEventListener('pointerdown', e => {
                if (!settings.board3d || e.button !== 0) return;
                board.setPointerCapture(e.pointerId);
                onDragStart(e, board);
            });
            board.addEventListener('pointermove', e => {
                if (!rotState.active || rotState.board !== board) return;
                onDragMove(e);
            });
            board.addEventListener('pointerup', e => {
                if (rotState.board === board) onDragEnd();
            });
            board.addEventListener('pointercancel', e => {
                if (rotState.board === board) onDragEnd();
            });
        } else {
            board.addEventListener('mousedown', e => onDragStart(e, board));
            board.addEventListener('touchstart', e => onDragStart(e, board), { passive: false });
        }
    });
    if (hasPointerEvents) {
        window.addEventListener('blur', onDragEnd);
    } else {
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('touchmove', onDragMove, { passive: false });
        document.addEventListener('mouseup', onDragEnd);
        document.addEventListener('touchend', onDragEnd);
        window.addEventListener('blur', onDragEnd);
    }

    function setDifficulty(diff) {
        if (settings.difficulty === diff) return;
        settings.difficulty = diff;
        applySettingsUI();
        saveSettings();
        if (getEffectiveBattleMode() !== 'pvp') resetGame();
    }

    function setCustomBoardSize(size) {
        settings.customBoardSize = size;
        if (size === '3') { customConfig = { w: 3, h: 3, winLen: 3 }; }
        else if (size === '5') { customConfig = { w: 5, h: 5, winLen: 4 }; }
        else if (size === '7') { customConfig = { w: 7, h: 7, winLen: 4 }; }
        else if (size === '10') { customConfig = { w: 10, h: 10, winLen: 5 }; }
        else if (size === '15') { customConfig = { w: 15, h: 15, winLen: 5 }; }
        validateCustomConfig();
        applySettingsUI();
        customWinLenInput.value = customConfig.winLen;
        customBoardWInput.value = customConfig.w;
        customBoardHInput.value = customConfig.h;
        saveSettings();
        if (currentMode === 'custom') { subtitle.textContent = getCustomSubtitle(); resetGame(); }
    }
    function setBoardTheme(theme) {
        if (settings.boardTheme === theme) return;
        settings.boardTheme = theme;
        applySettingsUI();
        saveSettings();
        if (achievementStats && achievementStats.boardThemesUsed) {
            trackAchievementSetting('theme', theme);
        }
    }
    function checkThemeAchievements() {
        if (achievementStats && achievementStats.boardThemesUsed && achievementStats.boardThemesUsed.length >= 5) {
            checkSingleAchievement('theme_explorer');
        }
    }

    function applySettingsUI() {
        document.querySelectorAll('#font-segmented .seg-btn').forEach(b => b.classList.toggle('active', b.dataset.font === settings.font));
        document.querySelectorAll('#theme-segmented .seg-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === settings.theme));
        document.querySelectorAll('#anim-speed-segmented .seg-btn').forEach(b => b.classList.toggle('active', b.dataset.speed === settings.animSpeed));
        document.querySelectorAll('#sound-style-segmented .seg-btn').forEach(b => b.classList.toggle('active', b.dataset.sound === settings.soundStyle));
        document.querySelectorAll('#difficulty-segmented .seg-btn').forEach(b => b.classList.toggle('active', b.dataset.diff === settings.difficulty));
        document.querySelectorAll('#board-size-segmented .seg-btn').forEach(b => b.classList.toggle('active', b.dataset.size === settings.customBoardSize));
        document.querySelectorAll('#board-theme-segmented .seg-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === settings.boardTheme));
        animToggle.checked = settings.animations;
        soundToggle.checked = settings.sound;
        toggle3d.checked = settings.board3d;
        contrastSlider.value = settings.contrast;
        contrastValue.textContent = settings.contrast + '%';
        customColorInput.value = settings.customColor;
        pitchSlider.value = settings.soundPitch;
        pitchValue.textContent = (settings.soundPitch > 0 ? '+' : '') + settings.soundPitch;
        durationSlider.value = settings.soundDuration;
        durationValue.textContent = settings.soundDuration + '%';
        volumeSlider.value = settings.soundVolume;
        volumeValue.textContent = settings.soundVolume + '%';
        customWinLenInput.value = customConfig.winLen;
        customBoardWInput.value = customConfig.w;
        customBoardHInput.value = customConfig.h;
        aiDifficultyGroup.style.display = getEffectiveBattleMode() !== 'pvp' ? 'flex' : 'none';
        customGameGroup.style.display = currentMode === 'custom' ? 'flex' : 'none';
        document.documentElement.setAttribute('data-theme', settings.theme);
        document.body.setAttribute('data-font', settings.font);
        document.body.setAttribute('data-board-theme', settings.boardTheme);
        document.body.classList.toggle('animations-off', !settings.animations);
        boardEl.classList.toggle('is-3d', settings.board3d);
        connect4Board.classList.toggle('is-3d', settings.board3d);
        gomokuBoard.classList.toggle('is-3d', settings.board3d);
        const scale = settings.animSpeed === 'slow' ? 1.8 : settings.animSpeed === 'fast' ? 0.4 : 1;
        document.documentElement.style.setProperty('--anim-scale', scale);
        document.documentElement.style.setProperty('--contrast', settings.contrast / 100);
        const rgb = hexToRgb(settings.accentColor);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        document.documentElement.style.setProperty('--accent-h', hsl.h);
        document.documentElement.style.setProperty('--accent-s', hsl.s + '%');
        document.documentElement.style.setProperty('--accent-l', hsl.l + '%');
        if (timerToggle) timerToggle.checked = settings.timerEnabled;
        if (timerPresets) timerPresets.style.display = settings.timerEnabled ? 'block' : 'none';
        document.querySelectorAll('#timer-segmented .seg-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.timer, 10) === settings.timerDuration));
        if (toggleRipple) toggleRipple.checked = settings.rippleEnabled;
        if (toggleElo) toggleElo.checked = settings.eloEnabled !== false;
        if (toggleMisere) toggleMisere.checked = settings.misereMode === true;
    }

    let activeRipples = 0;
    const MAX_RIPPLES = 6;
    function createRipple(e, player) {
        if (!settings.rippleEnabled || !settings.animations) return;
        const cell = e.currentTarget;
        if (!cell) return;
        const cellRect = cell.getBoundingClientRect();
        const hasRealCoords = e instanceof MouseEvent && e.clientX > 0 && e.clientY > 0;
        const x = hasRealCoords ? e.clientX : cellRect.left + cellRect.width / 2;
        const y = hasRealCoords ? e.clientY : cellRect.top + cellRect.height / 2;
        if (activeRipples >= MAX_RIPPLES) return;
        activeRipples++;
        const ripple = document.createElement('span');
        ripple.className = 'ripple ' + (player === PLAYER_X ? 'x-ripple' : 'o-ripple');
        ripple.style.position = 'fixed';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        document.body.appendChild(ripple);
        const scale = settings.animSpeed === 'slow' ? 1.8 : settings.animSpeed === 'fast' ? 0.4 : 1;
        setTimeout(() => { if (ripple.parentNode) ripple.remove(); activeRipples = Math.max(0, activeRipples - 1); }, 650 * scale);
    }

    function formatDuration(ms) {
        if (ms === null || ms === undefined || ms < 0) return '--';
        if (ms === 0) return '0s';
        const totalSeconds = Math.floor(ms / 1000);
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        if (h > 0) return h + 'h ' + m + 'm';
        if (m > 0) return m + 'm ' + s + 's';
        return s + 's';
    }

    function recordGameStats(draw, winner) {
        if (!gameStats) return;
        if (moveHistory.length === 0) return;
        const elapsed = Math.max(0, Date.now() - gameStartTime);
        const mode = currentMode;
        const bm = getEffectiveBattleMode();
        const diff = settings.difficulty;
        const moves = moveHistory.length;

        gameStats.totalGames++;
        gameStats.totalTime += elapsed;
        gameStats.totalMoves += moves;

        if (draw) {
            gameStats.draws++;
            gameStats.currentStreak = 0;
        } else if (winner === PLAYER_X) {
            gameStats.wins++;
            gameStats.currentStreak = gameStats.currentStreak >= 0 ? gameStats.currentStreak + 1 : 1;
            if (gameStats.currentStreak > gameStats.bestStreak) gameStats.bestStreak = gameStats.currentStreak;
            if (gameStats.fastestWin < 0 || elapsed < gameStats.fastestWin) gameStats.fastestWin = elapsed;
        } else {
            gameStats.losses++;
            gameStats.currentStreak = gameStats.currentStreak <= 0 ? gameStats.currentStreak - 1 : -1;
        }
        if (elapsed > gameStats.longestGame) gameStats.longestGame = elapsed;

        if (gameStats.byMode[mode]) {
            gameStats.byMode[mode].games++;
            if (draw) gameStats.byMode[mode].draws++;
            else if (winner === PLAYER_X) gameStats.byMode[mode].wins++;
            else gameStats.byMode[mode].losses++;
        }
        if (bm === 'pve' && gameStats.byDifficulty[diff]) {
            gameStats.byDifficulty[diff].games++;
            if (draw) gameStats.byDifficulty[diff].draws++;
            else if (winner === PLAYER_X) gameStats.byDifficulty[diff].wins++;
            else gameStats.byDifficulty[diff].losses++;
        }
        saveGameStats();
    }

    function renderStats() {
        const totalEl = document.getElementById('stats-total');
        const winsEl = document.getElementById('stats-wins');
        const lossesEl = document.getElementById('stats-losses');
        const drawsEl = document.getElementById('stats-draws');
        const barWins = document.getElementById('stats-bar-wins');
        const barLosses = document.getElementById('stats-bar-losses');
        const barDraws = document.getElementById('stats-bar-draws');
        const winrateEl = document.getElementById('stats-winrate');
        const streakEl = document.getElementById('stats-streak');
        const streakLabelEl = document.getElementById('stats-streak-label');
        const bestStreakEl = document.getElementById('stats-best-streak');
        const modeList = document.getElementById('stats-mode-list');
        const diffList = document.getElementById('stats-diff-list');
        const modeTitle = document.getElementById('stats-mode-title');
        const diffTitle = document.getElementById('stats-diff-title');
        const detailDivider = document.getElementById('stats-detail-divider');
        const detailGrid = document.getElementById('stats-detail-grid');
        const totalMovesEl = document.getElementById('stats-total-moves');
        const fastestEl = document.getElementById('stats-fastest');
        const longestEl = document.getElementById('stats-longest');
        const totalTimeEl = document.getElementById('stats-total-time');
        if (!totalEl || !winsEl || !lossesEl || !drawsEl || !barWins || !barLosses || !barDraws || !winrateEl || !streakEl || !bestStreakEl || !modeList || !diffList || !totalMovesEl || !fastestEl || !longestEl || !totalTimeEl) return;

        const s = gameStats;
        totalEl.textContent = s.totalGames;
        winsEl.textContent = s.wins;
        lossesEl.textContent = s.losses;
        drawsEl.textContent = s.draws;

        const total = s.totalGames || 1;
        const winPct = Math.round(s.wins / total * 1000) / 10;
        const lossPct = Math.round(s.losses / total * 1000) / 10;
        barWins.style.width = winPct + '%';
        barLosses.style.width = lossPct + '%';
        barDraws.style.width = Math.max(0, 100 - winPct - lossPct) + '%';

        const winRate = s.totalGames > 0 ? Math.round(s.wins / s.totalGames * 1000) / 10 : 0;
        winrateEl.textContent = winRate + '%';

        streakEl.textContent = Math.abs(s.currentStreak);
        if (streakLabelEl) streakLabelEl.textContent = s.currentStreak < 0 ? t('stats-losing-streak') : t('stats-streak');
        bestStreakEl.textContent = s.bestStreak;

        const modeNames = { ttt: t('mode-ttt'), connect4: t('mode-connect4'), gomoku: t('mode-gomoku'), custom: t('mode-custom') };
        let modeHtml = '';
        for (const [key, data] of Object.entries(s.byMode)) {
            if (data.games === 0) continue;
            const rate = Math.round(data.wins / data.games * 100);
            modeHtml += `<div class="stats-list-row">
                <span class="stats-list-name">${modeNames[key] || key}</span>
                <div class="stats-list-bar-wrap"><div class="stats-list-bar-fill" style="width:${rate}%"></div></div>
                <span class="stats-list-rate">${rate}%</span>
            </div>`;
        }
        modeList.innerHTML = modeHtml || `<div class="stats-list-row"><span class="stats-list-name" style="color:var(--text-muted)">${t('history-empty')}</span></div>`;

        const diffNames = { easy: t('diff-easy'), medium: t('diff-medium'), hard: t('diff-hard') };
        let diffHtml = '';
        for (const [key, data] of Object.entries(s.byDifficulty)) {
            if (data.games === 0) continue;
            const rate = Math.round(data.wins / data.games * 100);
            diffHtml += `<div class="stats-list-row">
                <span class="stats-list-name">${diffNames[key] || key}</span>
                <div class="stats-list-bar-wrap"><div class="stats-list-bar-fill" style="width:${rate}%"></div></div>
                <span class="stats-list-rate">${rate}%</span>
            </div>`;
        }
        diffList.innerHTML = diffHtml || `<div class="stats-list-row"><span class="stats-list-name" style="color:var(--text-muted)">${t('history-empty')}</span></div>`;

        const hasGames = s.totalGames > 0;
        if (modeTitle) modeTitle.style.display = hasGames ? '' : 'none';
        if (diffTitle) diffTitle.style.display = hasGames ? '' : 'none';
        if (detailDivider) detailDivider.style.display = hasGames ? '' : 'none';
        if (detailGrid) detailGrid.style.display = hasGames ? '' : 'none';

        totalMovesEl.textContent = s.totalMoves;
        fastestEl.textContent = formatDuration(s.fastestWin);
        longestEl.textContent = formatDuration(s.longestGame);
        totalTimeEl.textContent = formatDuration(s.totalTime);
    }

    function resetGameStats() {
        if (!confirm(t('stats-reset-confirm'))) return;
        gameStats = createEmptyGameStats();
        saveGameStats();
        renderStats();
    }

    /* ===== Tactics Trainer Core ===== */
    function loadTacticsProgress() {
        try {
            const raw = localStorage.getItem(TACTICS_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === 'object') {
                    tacticsProgress.completed = Array.isArray(parsed.completed) ? parsed.completed : [];
                    tacticsProgress.streak = typeof parsed.streak === 'number' ? parsed.streak : 0;
                    tacticsProgress.bestStreak = typeof parsed.bestStreak === 'number' ? parsed.bestStreak : 0;
                }
            }
        } catch (e) {}
    }
    function saveTacticsProgress() {
        try { localStorage.setItem(TACTICS_KEY, JSON.stringify(tacticsProgress)); } catch (e) {}
    }
    function openTactics() {
        stopTimer();
        clearTimeout(aiTimer); aiTimer = null;
        closeDrawer(); closeChangelog(); closeHistory(); closeReplay(); closeAchievements(); closeHotkeyModal(); closeEditor(); closeRush(); closeDaily();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        lastFocusedElement = document.activeElement;
        if (tacticsFilter) {
            tacticsFilter.querySelectorAll('.tactics-filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
            const allBtn = tacticsFilter.querySelector('[data-filter="all"]');
            if (allBtn) { allBtn.classList.add('active'); allBtn.setAttribute('aria-pressed', 'true'); }
        }
        renderTacticsList();
        tacticsDrawer.classList.add('show');
        tacticsOverlay.classList.add('show');
        setTimeout(() => {
            const focusable = Array.from(tacticsDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
            if (focusable.length) focusable[0].focus();
        }, 50);
    }
    function closeTactics() {
        tacticsDrawer.classList.remove('show');
        tacticsOverlay.classList.remove('show');
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }
    function resetTacticModalState() {
        if (tacticWrongTimer) { clearTimeout(tacticWrongTimer); tacticWrongTimer = null; }
        currentTactic = null;
        tacticSolved = false;
        if (tacticsFeedback) { tacticsFeedback.textContent = ''; tacticsFeedback.className = 'tactics-feedback'; }
        if (tacticsSkipBtn) tacticsSkipBtn.style.display = 'inline-block';
        if (tacticsNextBtn) { tacticsNextBtn.style.display = 'none'; tacticsNextBtn.onclick = null; }
        tacticCells.forEach(cell => { cell.classList.remove('hint-correct', 'hint-wrong'); });
        if (lastTacticCard) { lastTacticCard.focus(); lastTacticCard = null; }
    }
    function renderTacticsList(filter) {
        if (!tacticsGrid || !tacticsSummary) return;
        const completed = tacticsProgress.completed || [];
        const total = tacticsDB.length;
        const done = completed.length;
        tacticsSummary.innerHTML = `<div class="tactics-summary-card"><div class="value">${done}/${total}</div><div class="label">${t('tactics-completed')}</div></div><div class="tactics-summary-card"><div class="value">${tacticsProgress.streak}</div><div class="label">${t('tactics-streak')}</div></div><div class="tactics-summary-card"><div class="value">${tacticsProgress.bestStreak}</div><div class="label">${t('tactics-best-streak')}</div></div>`;
        let items = tacticsDB;
        if (filter && filter !== 'all') items = items.filter(t => t.difficulty === filter);
        let html = '';
        for (const puzzle of items) {
            const isDone = completed.includes(puzzle.id);
            const diffLabel = puzzle.difficulty === 'easy' ? t('tactics-filter-easy') : puzzle.difficulty === 'medium' ? t('tactics-filter-medium') : t('tactics-filter-hard');
            let stars = '';
            for (let i = 1; i <= 3; i++) stars += `<span class="star ${i <= puzzle.stars ? 'active' : ''}">★</span>`;
            html += `<div class="tactics-card ${isDone ? 'completed' : ''}" data-id="${puzzle.id}" tabindex="0" role="button" aria-pressed="false"><div class="tactics-card-difficulty">${stars}</div><div class="tactics-card-title">${t(puzzle.titleKey)}</div><div class="tactics-card-desc">${t(puzzle.descKey)}</div><div class="tactics-card-mode">${diffLabel}</div></div>`;
        }
        tacticsGrid.innerHTML = html || `<div style="color:var(--text-muted);text-align:center;padding:2rem 0;">${t('tactics-empty')}</div>`;
        tacticsGrid.querySelectorAll('.tactics-card').forEach(card => {
            card.addEventListener('click', () => startTactic(card.dataset.id));
            card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); startTactic(card.dataset.id); } });
        });
    }
    function startTactic(id) {
        const tactic = tacticsDB.find(t => t.id === id);
        if (!tactic) return;
        lastTacticCard = document.activeElement;
        currentTactic = tactic;
        tacticSolved = false;
        if (tacticsMeta) tacticsMeta.textContent = t(tactic.titleKey) + ' · ' + (tactic.difficulty === 'easy' ? t('tactics-filter-easy') : tactic.difficulty === 'medium' ? t('tactics-filter-medium') : t('tactics-filter-hard'));
        if (tacticsInstruction) tacticsInstruction.textContent = t(tactic.descKey);
        if (tacticsFeedback) { tacticsFeedback.textContent = ''; tacticsFeedback.className = 'tactics-feedback'; }
        if (tacticsSkipBtn) tacticsSkipBtn.style.display = 'inline-block';
        if (tacticsNextBtn) tacticsNextBtn.style.display = 'none';
        renderTacticBoard();
        stopTimer();
        clearTimeout(aiTimer); aiTimer = null;
        tacticsModal.classList.add('show');
        setTimeout(() => {
            const firstEmpty = tacticCells.find(c => !c.classList.contains('disabled'));
            if (firstEmpty) firstEmpty.focus();
            else if (tacticsSkipBtn) tacticsSkipBtn.focus();
        }, 50);
    }
    function renderTacticBoard() {
        if (!currentTactic || !tacticsBoard) return;
        tacticCells.forEach((cell, i) => {
            cell.innerHTML = '';
            cell.classList.remove('disabled', 'hint-correct', 'hint-wrong');
            const mark = currentTactic.board[i];
            if (mark === 'X' || mark === 'O') {
                cell.appendChild(createMarkSvg(mark));
                cell.classList.add('disabled');
                cell.setAttribute('tabindex', '-1');
            }
        });
    }
    function validateTacticMove(index) {
        if (!currentTactic || tacticSolved) return;
        const cell = tacticCells[index];
        if (!cell || cell.classList.contains('disabled')) return;
        if (currentTactic.correctMoves.includes(index)) {
            tacticSolved = true;
            cell.appendChild(createMarkSvg(currentTactic.player));
            cell.classList.add('hint-correct');
            if (tacticsFeedback) { tacticsFeedback.textContent = t('tactics-correct'); tacticsFeedback.className = 'tactics-feedback correct'; }
            if (!tacticsProgress.completed.includes(currentTactic.id)) {
                tacticsProgress.completed.push(currentTactic.id);
                tacticsProgress.streak++;
                if (tacticsProgress.streak > tacticsProgress.bestStreak) tacticsProgress.bestStreak = tacticsProgress.streak;
                saveTacticsProgress();
                checkTacticAchievements();
            }
            if (tacticsSkipBtn) tacticsSkipBtn.style.display = 'none';
            if (tacticsNextBtn) {
                const nextIdx = tacticsDB.findIndex(t => t.id === currentTactic.id) + 1;
                tacticsNextBtn.style.display = nextIdx < tacticsDB.length ? 'inline-block' : 'none';
                tacticsNextBtn.onclick = () => { tacticsModal.classList.remove('show'); setTimeout(() => startTactic(tacticsDB[nextIdx].id), 300); };
            }
            playWinSound();
        } else {
            cell.classList.add('hint-wrong');
            if (tacticsFeedback) { tacticsFeedback.textContent = t('tactics-wrong'); tacticsFeedback.className = 'tactics-feedback wrong'; }
            playErrorSound();
            if (tacticsProgress.streak !== 0) {
                tacticsProgress.streak = 0;
                saveTacticsProgress();
            }
            tacticWrongTimer = setTimeout(() => { cell.classList.remove('hint-wrong'); tacticWrongTimer = null; }, 600);
        }
    }
    function checkTacticAchievements() {
        const completed = tacticsProgress.completed || [];
        if (completed.length >= 1) checkSingleAchievement('tactic_first');
        const easyIds = tacticsDB.filter(t => t.difficulty === 'easy').map(t => t.id);
        const allEasyDone = easyIds.every(id => completed.includes(id));
        if (allEasyDone) checkSingleAchievement('tactic_all_easy');
        if (tacticsProgress.bestStreak >= 3) checkSingleAchievement('tactic_streak_3');
    }
    function checkSingleAchievement(id) {
        const def = achievementDefs.find(d => d.id === id);
        if (!def) return;
        const state = achievementState[id] || { unlocked: false, progress: 0, unlockedAt: null };
        if (state.unlocked) return;
        state.unlocked = true; state.progress = def.target; state.unlockedAt = Date.now();
        achievementState[id] = state; saveAchievements();
        showAchievementToast(def);
    }

    /* ===== Daily Challenge ===== */
    function getDailyDateStr() {
        const d = new Date();
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }
    function hashDate(dateStr) {
        let h = 0;
        for (let i = 0; i < dateStr.length; i++) {
            h = ((h << 5) - h) + dateStr.charCodeAt(i);
            h |= 0;
        }
        return Math.abs(h);
    }
    function getDailyPuzzle() {
        const dateStr = getDailyDateStr();
        const hash = hashDate(dateStr);
        const idx = hash % dailyPuzzleDB.length;
        const puzzle = JSON.parse(JSON.stringify(dailyPuzzleDB[idx]));
        puzzle.dateStr = dateStr;
        puzzle.displayNum = (hash % 999) + 1;
        return puzzle;
    }
    function loadDailyProgress() {
        try {
            const raw = localStorage.getItem(DAILY_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === 'object') {
                    if (Array.isArray(parsed.history)) {
                        dailyProgress.history = parsed.history.slice(-365);
                    }
                    if (typeof parsed.bestStreak === 'number') {
                        dailyProgress.bestStreak = Math.max(0, Math.min(parsed.bestStreak, 9999));
                    }
                    // streak logic: if lastDate is yesterday, keep streak; otherwise reset
                    const today = getDailyDateStr();
                    const yesterday = new Date(Date.now() - 86400000);
                    const yestStr = yesterday.getFullYear() + '-' + String(yesterday.getMonth() + 1).padStart(2, '0') + '-' + String(yesterday.getDate()).padStart(2, '0');
                    if (parsed.lastDate === today) {
                        dailyProgress.lastDate = parsed.lastDate;
                        dailyProgress.streak = typeof parsed.streak === 'number' ? Math.max(0, Math.min(parsed.streak, 9999)) : 0;
                    } else if (parsed.lastDate === yestStr) {
                        dailyProgress.lastDate = parsed.lastDate;
                        dailyProgress.streak = typeof parsed.streak === 'number' ? Math.max(0, Math.min(parsed.streak, 9999)) : 0;
                    } else {
                        dailyProgress.lastDate = '';
                        dailyProgress.streak = 0;
                    }
                }
            }
        } catch (e) {}
    }
    function saveDailyProgress() {
        try { localStorage.setItem(DAILY_KEY, JSON.stringify(dailyProgress)); } catch (e) {}
    }
    function openDaily() {
        if (!dailyModal) return;
        if (dailyModal.classList.contains('show')) return;
        if (dailyResetTimeout) { clearTimeout(dailyResetTimeout); dailyResetTimeout = null; }
        closeDrawer(); closeChangelog(); closeHistory(); closeReplay(); closeAchievements(); closeHotkeyModal(); closeEditor(); closeRush();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        if (tacticsDrawer) { closeTactics(); }
        clearTimeout(aiTimer); aiTimer = null;
        stopTimer();
        resetDailyModalState();
        lastFocusedElement = document.activeElement;
        const puzzle = getDailyPuzzle();
        currentDailyPuzzle = puzzle;
        dailySolved = false;
        if (dailyMeta) dailyMeta.textContent = t('daily-meta-date') + ' · #' + puzzle.displayNum + ' · ' + t('daily-type-' + puzzle.type);
        if (dailyInstruction) dailyInstruction.textContent = t('daily-desc-' + puzzle.type).replace('{player}', puzzle.player);
        if (dailyStreakText) dailyStreakText.textContent = t('daily-streak') + ': ' + dailyProgress.streak + ' 🔥';
        if (dailyFeedback) { dailyFeedback.textContent = ''; dailyFeedback.className = 'daily-feedback'; }
        if (dailySkipBtn) dailySkipBtn.style.display = 'inline-block';
        if (dailyShareBtn) dailyShareBtn.style.display = 'none';
        renderDailyBoard();
        // Check if already completed today
        const today = getDailyDateStr();
        if (dailyProgress.lastDate === today) {
            dailySolved = true;
            if (dailySkipBtn) dailySkipBtn.style.display = 'none';
            if (dailyShareBtn) dailyShareBtn.style.display = 'inline-block';
            if (dailyFeedback) { dailyFeedback.textContent = t('daily-already-done'); dailyFeedback.className = 'daily-feedback correct'; }
            dailyCells.forEach((cell, i) => {
                cell.classList.add('disabled');
                cell.setAttribute('tabindex', '-1');
                if (puzzle.correctMoves.includes(i) && !cell.querySelector('svg')) {
                    cell.appendChild(createMarkSvg(puzzle.player));
                    cell.classList.add('hint-correct');
                }
            });
        }
        dailyModal.classList.add('show');
        dailyFocusTimeout = setTimeout(() => {
            dailyFocusTimeout = null;
            if (dailySolved) {
                if (dailyShareBtn) dailyShareBtn.focus();
                else if (dailyModalClose) dailyModalClose.focus();
            } else {
                const firstEmpty = dailyCells.find(c => !c.classList.contains('disabled'));
                if (firstEmpty) firstEmpty.focus();
                else if (dailySkipBtn) dailySkipBtn.focus();
            }
        }, 50);
    }
    function closeDaily() {
        if (dailyModal) dailyModal.classList.remove('show');
        if (dailyFocusTimeout) { clearTimeout(dailyFocusTimeout); dailyFocusTimeout = null; }
        if (dailyResetTimeout) clearTimeout(dailyResetTimeout);
        dailyResetTimeout = setTimeout(() => { dailyResetTimeout = null; resetDailyModalState(); }, 350);
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }
    function resetDailyModalState() {
        if (dailyWrongTimer) { clearTimeout(dailyWrongTimer); dailyWrongTimer = null; }
        if (dailyFocusTimeout) { clearTimeout(dailyFocusTimeout); dailyFocusTimeout = null; }
        if (dailyShareTimeout) { clearTimeout(dailyShareTimeout); dailyShareTimeout = null; }
        currentDailyPuzzle = null;
        dailySolved = false;
        if (dailyFeedback) { dailyFeedback.textContent = ''; dailyFeedback.className = 'daily-feedback'; }
        if (dailySkipBtn) dailySkipBtn.style.display = 'inline-block';
        if (dailyShareBtn) { dailyShareBtn.style.display = 'none'; dailyShareBtn.onclick = null; }
        dailyCells.forEach(cell => { cell.classList.remove('hint-correct', 'hint-wrong', 'disabled'); cell.innerHTML = ''; cell.setAttribute('tabindex', '0'); });
    }
    function renderDailyBoard() {
        if (!currentDailyPuzzle || !dailyBoard) return;
        dailyCells.forEach((cell, i) => {
            cell.innerHTML = '';
            cell.classList.remove('disabled', 'hint-correct', 'hint-wrong');
            cell.setAttribute('tabindex', '0');
            const mark = currentDailyPuzzle.board[i];
            if (mark === 'X' || mark === 'O') {
                cell.appendChild(createMarkSvg(mark));
                cell.classList.add('disabled');
                cell.setAttribute('tabindex', '-1');
            }
        });
    }
    function validateDailyMove(index) {
        if (!currentDailyPuzzle || dailySolved) return;
        const cell = dailyCells[index];
        if (!cell || cell.classList.contains('disabled')) return;
        if (currentDailyPuzzle.correctMoves.includes(index)) {
            dailySolved = true;
            cell.appendChild(createMarkSvg(currentDailyPuzzle.player));
            cell.classList.add('hint-correct', 'disabled');
            cell.setAttribute('tabindex', '-1');
            if (dailyFeedback) { dailyFeedback.textContent = t('daily-correct'); dailyFeedback.className = 'daily-feedback correct'; }
            const today = getDailyDateStr();
            if (dailyProgress.lastDate !== today) {
                // Update streak
                const yesterday = new Date(Date.now() - 86400000);
                const yestStr = yesterday.getFullYear() + '-' + String(yesterday.getMonth() + 1).padStart(2, '0') + '-' + String(yesterday.getDate()).padStart(2, '0');
                if (dailyProgress.lastDate === yestStr || dailyProgress.lastDate === '') {
                    dailyProgress.streak++;
                } else {
                    dailyProgress.streak = 1;
                }
                dailyProgress.lastDate = today;
                if (dailyProgress.streak > dailyProgress.bestStreak) dailyProgress.bestStreak = dailyProgress.streak;
                if (!dailyProgress.history) dailyProgress.history = [];
                dailyProgress.history.push({ date: today, puzzleId: currentDailyPuzzle.id, solved: true });
                if (dailyProgress.history.length > 365) dailyProgress.history = dailyProgress.history.slice(-365);
                saveDailyProgress();
                checkDailyAchievements();
                if (dailyStreakText) dailyStreakText.textContent = t('daily-streak') + ': ' + dailyProgress.streak + ' 🔥';
            }
            if (dailySkipBtn) dailySkipBtn.style.display = 'none';
            if (dailyShareBtn) {
                dailyShareBtn.style.display = 'inline-block';
                dailyShareBtn.onclick = shareDailyResult;
            }
            playDailyWinSound();
            updateDailyBadge();
        } else {
            if (dailyWrongTimer) { clearTimeout(dailyWrongTimer); dailyWrongTimer = null; }
            cell.classList.add('hint-wrong');
            if (dailyFeedback) { dailyFeedback.textContent = t('daily-wrong'); dailyFeedback.className = 'daily-feedback wrong'; }
            playErrorSound();
            dailyWrongTimer = setTimeout(() => { cell.classList.remove('hint-wrong'); dailyWrongTimer = null; }, 600);
        }
    }
    function checkDailyAchievements() {
        if ((dailyProgress.history || []).length >= 1) checkSingleAchievement('daily_first');
        if (dailyProgress.streak >= 7) checkSingleAchievement('daily_streak_7');
        if (dailyProgress.streak >= 30) checkSingleAchievement('daily_streak_30');
    }
    function updateDailyBadge() {
        if (!dailyBadge) return;
        const today = getDailyDateStr();
        if (dailyProgress.lastDate === today) {
            dailyBadge.textContent = '✓';
            dailyBadge.classList.add('completed');
        } else {
            const d = new Date();
            dailyBadge.textContent = d.getDate();
            dailyBadge.classList.remove('completed');
        }
    }
    function shareDailyResult() {
        if (!currentDailyPuzzle) return;
        const today = getDailyDateStr();
        const streak = dailyProgress.streak || 0;
        const typeLabel = t('daily-type-' + currentDailyPuzzle.type);
        const text = t('daily-share-text')
            .replace('{date}', today)
            .replace('{type}', typeLabel)
            .replace('{streak}', streak);
        const onCopied = () => {
            if (dailyShareBtn) {
                const orig = t('daily-share');
                dailyShareBtn.textContent = t('daily-copied');
                if (dailyShareTimeout) clearTimeout(dailyShareTimeout);
                dailyShareTimeout = setTimeout(() => { dailyShareBtn.textContent = orig; dailyShareTimeout = null; }, 1500);
            }
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(onCopied).catch(() => {
                fallbackCopy(text, onCopied);
            });
        } else {
            fallbackCopy(text, onCopied);
        }
    }
    function fallbackCopy(text, onDone) {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            if (ok && onDone) onDone();
        } catch (e) {}
    }

    /* ===== Puzzle Rush ===== */
    function loadRushProgress() {
        try {
            const raw = localStorage.getItem(RUSH_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === 'object') {
                    rushProgress.bestScore = typeof parsed.bestScore === 'number' ? Math.max(0, parsed.bestScore) : 0;
                    rushProgress.bestStreak = typeof parsed.bestStreak === 'number' ? Math.max(0, parsed.bestStreak) : 0;
                    rushProgress.totalPlayed = typeof parsed.totalPlayed === 'number' ? Math.max(0, parsed.totalPlayed) : 0;
                }
            }
        } catch (e) {}
    }
    function saveRushProgress() {
        try { localStorage.setItem(RUSH_KEY, JSON.stringify(rushProgress)); } catch (e) {}
    }
    function openRush() {
        if (!rushModal) return;
        if (rushModal.classList.contains('show')) return;
        closeDrawer(); closeChangelog(); closeHistory(); closeReplay(); closeAchievements(); closeHotkeyModal(); closeEditor();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        if (tacticsDrawer) { closeTactics(); }
        if (dailyModal) { closeDaily(); }
        clearTimeout(aiTimer); aiTimer = null;
        stopTimer();
        stopRushGame();
        resetRushState();
        resetRushUI();
        updateRushBestDisplay();
        lastFocusedElement = document.activeElement;
        rushModal.classList.add('show');
        setTimeout(() => { if (rushStartBtn && rushStartBtn.offsetParent !== null) rushStartBtn.focus(); }, 50);
    }
    function closeRush() {
        if (!rushModal) return;
        rushModal.classList.remove('show');
        stopRushGame();
        rushState.active = false;
        if (rushWrongTimer) { clearTimeout(rushWrongTimer); rushWrongTimer = null; }
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }
    function resetRushState() {
        if (rushWrongTimer) { clearTimeout(rushWrongTimer); rushWrongTimer = null; }
        if (rushTimerInterval) { clearInterval(rushTimerInterval); rushTimerInterval = null; }
        rushState = { active: false, score: 0, streak: 0, bestStreak: 0, correct: 0, wrong: 0, skipped: 0, timeLeft: 180, currentPuzzle: null, solved: false, usedPuzzles: [] };
    }
    function resetRushUI() {
        if (rushHud) rushHud.style.display = 'none';
        if (rushStart) rushStart.style.display = 'flex';
        if (rushGame) rushGame.style.display = 'none';
        if (rushResult) rushResult.style.display = 'none';
        if (rushScoreEl) rushScoreEl.textContent = '0';
        if (rushStreakEl) rushStreakEl.textContent = '0';
        if (rushTimerEl) { rushTimerEl.textContent = '03:00'; rushTimerEl.classList.remove('warning'); }
        if (rushFeedback) { rushFeedback.textContent = ''; rushFeedback.className = 'rush-feedback'; }
        if (rushCells) rushCells.forEach(cell => { cell.classList.remove('hint-correct', 'hint-wrong', 'disabled'); cell.innerHTML = ''; cell.setAttribute('tabindex', '0'); });
    }
    function startRushGame() {
        resetRushState();
        if (rushStart) rushStart.style.display = 'none';
        if (rushResult) rushResult.style.display = 'none';
        if (rushHud) rushHud.style.display = 'grid';
        if (rushGame) rushGame.style.display = 'flex';
        if (rushScoreEl) rushScoreEl.textContent = '0';
        if (rushStreakEl) rushStreakEl.textContent = '0';
        if (rushTimerEl) { rushTimerEl.textContent = '03:00'; rushTimerEl.classList.remove('warning'); }
        rushState.active = true;
        loadRushPuzzle();
        startRushTimer();
    }
    function stopRushGame() {
        if (rushTimerInterval) { clearInterval(rushTimerInterval); rushTimerInterval = null; }
        rushState.active = false;
    }
    function loadRushPuzzle() {
        if (!rushState.active) return;
        if (!tacticsDB.length) {
            if (rushInstruction) rushInstruction.textContent = t('tactics-empty');
            return;
        }
        let available = tacticsDB.filter(t => !rushState.usedPuzzles.includes(t.id));
        if (available.length === 0) {
            rushState.usedPuzzles = [];
            available = tacticsDB.slice();
        }
        const puzzle = available[Math.floor(Math.random() * available.length)];
        rushState.currentPuzzle = puzzle;
        rushState.solved = false;
        rushState.usedPuzzles.push(puzzle.id);
        if (rushInstruction) {
            const diffLabel = puzzle.difficulty === 'easy' ? t('tactics-filter-easy') : puzzle.difficulty === 'medium' ? t('tactics-filter-medium') : t('tactics-filter-hard');
            rushInstruction.textContent = t(puzzle.descKey) + ' (' + diffLabel + ')';
        }
        if (rushFeedback) { rushFeedback.textContent = ''; rushFeedback.className = 'rush-feedback'; }
        if (rushSkipBtn) rushSkipBtn.style.display = 'inline-block';
        renderRushBoard();
        setTimeout(() => {
            if (!rushState.active || !rushModal || !rushModal.classList.contains('show')) return;
            const firstEmpty = rushCells.find(c => !c.classList.contains('disabled') && c.offsetParent !== null);
            if (firstEmpty) firstEmpty.focus();
        }, 50);
    }
    function renderRushBoard() {
        if (!rushState.currentPuzzle || !rushBoard) return;
        rushCells.forEach((cell, i) => {
            cell.innerHTML = '';
            cell.classList.remove('disabled', 'hint-correct', 'hint-wrong');
            cell.setAttribute('tabindex', '0');
            const mark = rushState.currentPuzzle.board[i];
            if (mark === 'X' || mark === 'O') {
                cell.appendChild(createMarkSvg(mark));
                cell.classList.add('disabled');
                cell.setAttribute('tabindex', '-1');
            }
        });
    }
    function validateRushMove(index) {
        if (!rushState.active || !rushState.currentPuzzle || rushState.solved) return;
        const cell = rushCells[index];
        if (!cell || cell.classList.contains('disabled')) return;
        if (rushState.currentPuzzle.correctMoves.includes(index)) {
            if (rushWrongTimer) { clearTimeout(rushWrongTimer); rushWrongTimer = null; }
            rushCells.forEach(c => c.classList.remove('hint-wrong'));
            rushState.solved = true;
            rushState.score++;
            rushState.streak++;
            if (rushState.streak > rushState.bestStreak) rushState.bestStreak = rushState.streak;
            rushState.correct++;
            cell.appendChild(createMarkSvg(rushState.currentPuzzle.player));
            cell.classList.add('hint-correct', 'disabled');
            cell.setAttribute('tabindex', '-1');
            if (rushSkipBtn) rushSkipBtn.style.display = 'none';
            if (rushScoreEl) rushScoreEl.textContent = rushState.score;
            if (rushStreakEl) rushStreakEl.textContent = rushState.streak;
            if (rushFeedback) { rushFeedback.textContent = t('rush-correct'); rushFeedback.className = 'rush-feedback correct'; }
            playWinSound();
            setTimeout(() => { if (rushState.active) loadRushPuzzle(); }, 400);
        } else {
            if (rushWrongTimer) { clearTimeout(rushWrongTimer); rushWrongTimer = null; }
            rushCells.forEach(c => c.classList.remove('hint-wrong'));
            rushState.score = Math.max(0, rushState.score - 1);
            rushState.streak = 0;
            rushState.wrong++;
            cell.classList.add('hint-wrong');
            if (rushScoreEl) rushScoreEl.textContent = rushState.score;
            if (rushStreakEl) rushStreakEl.textContent = '0';
            if (rushFeedback) { rushFeedback.textContent = t('rush-wrong'); rushFeedback.className = 'rush-feedback wrong'; }
            playErrorSound();
            rushWrongTimer = setTimeout(() => { rushCells.forEach(c => c.classList.remove('hint-wrong')); rushWrongTimer = null; }, 600);
        }
    }
    function skipRushPuzzle() {
        if (!rushState.active) return;
        if (rushWrongTimer) { clearTimeout(rushWrongTimer); rushWrongTimer = null; }
        rushCells.forEach(c => c.classList.remove('hint-wrong'));
        rushState.streak = 0;
        rushState.skipped++;
        if (rushStreakEl) rushStreakEl.textContent = '0';
        if (rushFeedback) { rushFeedback.textContent = ''; rushFeedback.className = 'rush-feedback'; }
        loadRushPuzzle();
    }
    function startRushTimer() {
        if (rushTimerInterval) clearInterval(rushTimerInterval);
        rushState.timeLeft = 180;
        rushTimerInterval = setInterval(tickRushTimer, 1000);
    }
    function tickRushTimer() {
        if (!rushState.active) return;
        rushState.timeLeft--;
        if (rushTimerEl) {
            rushTimerEl.textContent = formatRushTime(rushState.timeLeft);
            if (rushState.timeLeft <= 10) rushTimerEl.classList.add('warning');
            else rushTimerEl.classList.remove('warning');
        }
        if (rushState.timeLeft <= 0) {
            endRush();
        }
    }
    function formatRushTime(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }
    function endRush() {
        stopRushGame();
        playTimeoutSound();
        rushProgress.totalPlayed++;
        let isNewRecord = false;
        if (rushState.score > rushProgress.bestScore) {
            rushProgress.bestScore = rushState.score;
            isNewRecord = true;
        }
        if (rushState.bestStreak > rushProgress.bestStreak) {
            rushProgress.bestStreak = rushState.bestStreak;
        }
        saveRushProgress();
        checkRushAchievements();
        if (rushGame) rushGame.style.display = 'none';
        if (rushResult) rushResult.style.display = 'flex';
        renderRushResult(isNewRecord);
        setTimeout(() => {
            if (!rushModal || !rushModal.classList.contains('show')) return;
            const focusable = rushResult ? Array.from(rushResult.querySelectorAll('button')).filter(el => el.offsetParent !== null) : [];
            if (focusable.length) focusable[0].focus();
        }, 100);
    }
    function renderRushResult(isNewRecord) {
        if (rushResultScore) rushResultScore.textContent = rushState.score;
        if (rushResultStats) {
            rushResultStats.innerHTML = '<div class="rush-result-stat"><div class="rush-result-stat-value">' + rushState.correct + '</div><div class="rush-result-stat-label">' + t('rush-stat-correct') + '</div></div>' +
                '<div class="rush-result-stat"><div class="rush-result-stat-value">' + rushState.wrong + '</div><div class="rush-result-stat-label">' + t('rush-stat-wrong') + '</div></div>' +
                '<div class="rush-result-stat"><div class="rush-result-stat-value">' + rushState.skipped + '</div><div class="rush-result-stat-label">' + t('rush-stat-skipped') + '</div></div>' +
                '<div class="rush-result-stat"><div class="rush-result-stat-value">' + rushState.bestStreak + '</div><div class="rush-result-stat-label">' + t('rush-stat-best-streak') + '</div></div>';
        }
        if (rushResultBest) {
            if (isNewRecord) {
                rushResultBest.textContent = t('rush-new-record');
                rushResultBest.className = 'rush-result-best new-record';
            } else {
                rushResultBest.textContent = t('rush-best-score').replace('{score}', rushProgress.bestScore);
                rushResultBest.className = 'rush-result-best';
            }
        }
    }
    function updateRushBestDisplay() {
        if (rushMeta) rushMeta.textContent = t('rush-best-score').replace('{score}', rushProgress.bestScore);
    }
    function checkRushAchievements() {
        if (rushProgress.totalPlayed >= 1) checkSingleAchievement('rush_first');
        if (rushProgress.bestScore >= 10) checkSingleAchievement('rush_score_10');
        if (rushProgress.bestScore >= 20) checkSingleAchievement('rush_score_20');
        if (rushState.bestStreak >= 5) checkSingleAchievement('rush_streak_5');
    }

    /* ===== Board Editor ===== */
    function openEditor() {
        if (!editorModal) return;
        if (editorModal.classList.contains('show')) return;
        closeDrawer(); closeChangelog(); closeHistory(); closeReplay(); closeAchievements(); closeHotkeyModal(); closeRush(); closeDaily();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        if (tacticsDrawer) { closeTactics(); }
        clearTimeout(aiTimer); aiTimer = null;
        stopTimer();
        lastFocusedElement = document.activeElement;
        renderEditorBoard();
        updateEditorPlayerDisplay();
        editorModal.classList.add('show');
        setTimeout(() => {
            const first = editorCells.find(c => c.offsetParent !== null);
            if (first) first.focus();
        }, 50);
    }
    function closeEditor() {
        if (editorModal) editorModal.classList.remove('show');
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }
    function renderEditorBoard() {
        editorCells.forEach((cell, i) => {
            cell.innerHTML = '';
            cell.classList.remove('disabled');
            cell.setAttribute('tabindex', '0');
            const mark = editorBoardState[i];
            if (mark === 'X' || mark === 'O') {
                cell.appendChild(createMarkSvg(mark));
                cell.setAttribute('aria-label', mark === 'X' ? t('cell-x') : t('cell-o'));
            } else {
                cell.setAttribute('aria-label', t('aria-editor-cell'));
            }
        });
    }
    function toggleEditorCell(index) {
        const cell = editorCells[index];
        if (!cell) return;
        const current = editorBoardState[index];
        let next = '';
        if (current === '') next = 'X';
        else if (current === 'X') next = 'O';
        else next = '';
        editorBoardState[index] = next;
        cell.innerHTML = '';
        cell.classList.remove('disabled');
        if (next) {
            cell.appendChild(createMarkSvg(next));
            cell.setAttribute('aria-label', next === 'X' ? t('cell-x') : t('cell-o'));
        } else {
            cell.setAttribute('aria-label', t('aria-editor-cell'));
        }
        if (settings.sound) playMoveSound(next || PLAYER_X);
    }
    function clearEditorBoard() {
        editorBoardState = Array(9).fill('');
        renderEditorBoard();
        if (editorCells.length) editorCells[0].focus();
    }
    function toggleEditorPlayer() {
        editorPlayer = editorPlayer === 'X' ? 'O' : 'X';
        updateEditorPlayerDisplay();
    }
    function updateEditorPlayerDisplay() {
        if (editorPlayerMark) {
            editorPlayerMark.textContent = editorPlayer;
            editorPlayerMark.style.color = editorPlayer === 'X' ? 'var(--x-color)' : 'var(--o-color)';
        }
    }
    function startGameFromEditor() {
        const xCount = editorBoardState.filter(m => m === 'X').length;
        const oCount = editorBoardState.filter(m => m === 'O').length;
        // Validate: cannot have a completed line for either player
        const xWin = getWinningConditionTTT(editorBoardState, 'X');
        const oWin = getWinningConditionTTT(editorBoardState, 'O');
        if (xWin || oWin) {
            if (settings.sound) playErrorSound();
            alert(t('editor-invalid'));
            return;
        }
        // Validate turn order: X must be equal or one more than O
        if (xCount < oCount || xCount > oCount + 1) {
            if (settings.sound) playErrorSound();
            alert(t('editor-invalid'));
            return;
        }
        // Set up game state
        editorGame = true;
        gameBoard = editorBoardState.slice();
        currentPlayer = getEffectiveBattleMode() === 'pve' ? PLAYER_X : editorPlayer;
        gameActive = true;
        moveHistory = [];
        boardSnapshots = [];
        playerHistory = [];
        gameStartTime = Date.now();
        currentMoveStartTime = Date.now();
        lastWinData = null;
        winLine.classList.remove('show');
        if (modal) modal.classList.remove('show');
        initTimers();
        // Re-render main board
        cells.forEach((cell, i) => {
            cell.innerHTML = '';
            cell.classList.remove('x', 'o', 'disabled', 'win');
            cell.setAttribute('tabindex', '0');
            if (gameBoard[i]) {
                cell.appendChild(createMarkSvg(gameBoard[i]));
                cell.classList.add(gameBoard[i].toLowerCase());
            }
        });
        updateStatus();
        checkEditorAchievements();
        closeEditor();
        updateUndoButton();
        updateHintButton();
    }
    function checkEditorAchievements() {
        checkSingleAchievement('editor_first');
    }

    /* ===== Color Helpers ===== */
    function hexToRgb(hex) {
        if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) hex = '#7b68ee';
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }

    function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) { h = s = 0; }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h *= 60;
        }
        return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
    }

    function freqShift(baseFreq) {
        return baseFreq * Math.pow(2, settings.soundPitch / 12);
    }

    function durMul(base) {
        return base * (settings.soundDuration / 100);
    }

    function volMul() {
        return settings.soundVolume / 100;
    }

    function clamp(v, min, max) {
        return Math.max(min, Math.min(max, v));
    }

    /* ===== Timer System ===== */
    function formatTimer(ms) {
        if (ms < 0) ms = 0;
        const totalSeconds = Math.round(ms / 1000);
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');
    }

    function updateTimerDisplay() {
        if (!timerXEl || !timerOEl) return;
        timerXEl.textContent = formatTimer(timerState.X);
        timerOEl.textContent = formatTimer(timerState.O);
        timerXEl.classList.remove('active-x', 'active-o', 'danger', 'paused');
        timerOEl.classList.remove('active-x', 'active-o', 'danger', 'paused');
        if (!settings.timerEnabled) {
            timerXEl.textContent = '--:--';
            timerOEl.textContent = '--:--';
            return;
        }
        const bm = getEffectiveBattleMode();
        if (bm === 'aivsai') {
            timerXEl.textContent = '--:--';
            timerOEl.textContent = '--:--';
            return;
        }
        if (bm === 'pve') {
            timerOEl.textContent = '∞';
            if (timerState.running && timerState.activePlayer === PLAYER_X && gameActive) {
                timerXEl.classList.add('active-x');
                if (timerState.X <= 10000) timerXEl.classList.add('danger');
            } else {
                timerXEl.classList.add('paused');
            }
            return;
        }
        if (timerState.running && gameActive) {
            if (timerState.activePlayer === PLAYER_X) {
                timerXEl.classList.add('active-x');
                if (timerState.X <= 10000) timerXEl.classList.add('danger');
                timerOEl.classList.add('paused');
            } else {
                timerOEl.classList.add('active-o');
                if (timerState.O <= 10000) timerOEl.classList.add('danger');
                timerXEl.classList.add('paused');
            }
        } else {
            timerXEl.classList.add('paused');
            timerOEl.classList.add('paused');
        }
    }

    function playTickSound() {
        if (!settings.sound) return;
        initAudio();
        playOsc(880, 'sine', 0.06, 0.08);
    }

    function playTimeoutSound() {
        if (!settings.sound) return;
        initAudio();
        playOsc(200, 'sawtooth', 0.4, 0.12);
        setTimeout(() => playOsc(150, 'sawtooth', 0.4, 0.12), 120);
        setTimeout(() => playOsc(100, 'sawtooth', 0.5, 0.12), 240);
    }

    function checkTimerTimeout() {
        if (!settings.timerEnabled || !gameActive) return;
        const bm = getEffectiveBattleMode();
        if (bm === 'aivsai') return;
        if (bm === 'pve') {
            if (timerState.X <= 0) {
                playTimeoutSound();
                timerTimeoutFlag = true;
                if (isC4Mode()) endC4Game(false, PLAYER_O);
                else if (isGmkMode()) endGmkGame(false, PLAYER_O);
                else endGame(false, PLAYER_O);
                timerTimeoutFlag = false;
            }
        } else {
            if (timerState.activePlayer === PLAYER_X && timerState.X <= 0) {
                playTimeoutSound();
                timerTimeoutFlag = true;
                if (isC4Mode()) endC4Game(false, PLAYER_O);
                else if (isGmkMode()) endGmkGame(false, PLAYER_O);
                else endGame(false, PLAYER_O);
                timerTimeoutFlag = false;
            } else if (timerState.activePlayer === PLAYER_O && timerState.O <= 0) {
                playTimeoutSound();
                timerTimeoutFlag = true;
                if (isC4Mode()) endC4Game(false, PLAYER_X);
                else if (isGmkMode()) endGmkGame(false, PLAYER_X);
                else endGame(false, PLAYER_X);
                timerTimeoutFlag = false;
            }
        }
    }

    function timerTick() {
        if (!timerState.running || !gameActive) return;
        const now = Date.now();
        const elapsed = now - timerState.lastTick;
        timerState.lastTick = now;
        if (timerState.activePlayer === PLAYER_X) timerState.X -= elapsed;
        else if (timerState.activePlayer === PLAYER_O) timerState.O -= elapsed;
        updateTimerDisplay();
        // Danger tick sound (last 10 seconds, once per second)
        if (settings.sound && timerState.activePlayer) {
            const remaining = timerState.activePlayer === PLAYER_X ? timerState.X : timerState.O;
            if (remaining <= 10000 && remaining > 0) {
                if (now - lastTickSoundTime >= 1000) {
                    lastTickSoundTime = now;
                    playTickSound();
                }
            }
        }
        checkTimerTimeout();
    }

    function startTimer(player) {
        if (!settings.timerEnabled || !gameActive) return;
        const bm = getEffectiveBattleMode();
        if (bm === 'aivsai') return;
        if (bm === 'pve' && player === PLAYER_O) return;
        if (timerState.running && timerState.activePlayer === player) return;
        timerState.running = true;
        timerState.activePlayer = player;
        timerState.lastTick = Date.now();
        lastTickSoundTime = 0;
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(timerTick, 100);
        updateTimerDisplay();
    }

    function stopTimer() {
        timerState.running = false;
        timerState.activePlayer = null;
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        updateTimerDisplay();
    }
    function resumeTimerIfGameActive() {
        if (gameActive && settings.timerEnabled && getEffectiveBattleMode() !== 'aivsai') {
            startTimer(currentPlayer);
        }
    }

    function switchTimerTo(player) {
        if (!settings.timerEnabled || !gameActive) return;
        stopTimer();
        startTimer(player);
    }

    function initTimers() {
        if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
        if (!settings.timerEnabled) {
            stopTimer();
            timerState.X = 0;
            timerState.O = 0;
            updateTimerDisplay();
            return;
        }
        const bm = getEffectiveBattleMode();
        if (bm === 'aivsai') {
            stopTimer();
            timerState.X = 0;
            timerState.O = 0;
            updateTimerDisplay();
            return;
        }
        const durationMs = settings.timerDuration * 1000;
        timerState.X = durationMs;
        timerState.O = durationMs;
        timerState.running = false;
        timerState.activePlayer = null;
        updateTimerDisplay();
    }

    function setTimerEnabled(val) {
        settings.timerEnabled = val;
        applySettingsUI();
        if (!val) {
            stopTimer();
            timerState.X = 0;
            timerState.O = 0;
            updateTimerDisplay();
        } else if (gameActive) {
            initTimers();
        }
        saveSettings();
    }

    function setEloEnabled(val) {
        settings.eloEnabled = val;
        updateEloBadge();
        saveSettings();
    }
    function setMisereMode(val) {
        if (misereMode === val) return;
        misereMode = val;
        settings.misereMode = val;
        updateMisereIndicator();
        saveSettings();
        resetGame();
    }
    function updateMisereIndicator() {
        const indicator = document.getElementById('misere-indicator');
        if (indicator) {
            indicator.classList.toggle('hidden', !misereMode);
            indicator.textContent = t('misere-indicator');
        }
        if (gameWrapper) {
            gameWrapper.classList.toggle('misere-mode', misereMode);
        }
    }

    function setTimerDuration(seconds) {
        settings.timerDuration = seconds;
        applySettingsUI();
        saveSettings();
    }

    /* ===== Keyboard Navigation ===== */
    function isInputFocused() {
        const tag = document.activeElement.tagName.toLowerCase();
        return tag === 'input' || tag === 'textarea' || document.activeElement.isContentEditable;
    }

    function isAnyModalOpen() {
        return (modal && modal.classList.contains('show')) ||
            (changelogModal && changelogModal.classList.contains('show')) ||
            (replayModal && replayModal.classList.contains('show')) ||
            (hotkeyModal && hotkeyModal.classList.contains('show')) ||
            (drawer && drawer.classList.contains('show')) ||
            (historyDrawer && historyDrawer.classList.contains('show')) ||
            (achievementsDrawer && achievementsDrawer.classList.contains('show')) ||
            (tacticsDrawer && tacticsDrawer.classList.contains('show')) ||
            (tacticsModal && tacticsModal.classList.contains('show')) ||
            (dailyModal && dailyModal.classList.contains('show')) ||
            (editorModal && editorModal.classList.contains('show')) ||
            (rushModal && rushModal.classList.contains('show'));
    }

    function getActiveBoardCells() {
        if (isC4Mode()) return Array.from(document.querySelectorAll('.c4-cell'));
        if (isGmkMode()) return Array.from(document.querySelectorAll('.gomoku-cell'));
        return cells;
    }

    function getCellCoords(cell) {
        if (isC4Mode()) {
            return { r: parseInt(cell.dataset.row, 10), c: parseInt(cell.dataset.col, 10) };
        }
        if (isGmkMode()) {
            return { r: parseInt(cell.dataset.row, 10), c: parseInt(cell.dataset.col, 10) };
        }
        const idx = parseInt(cell.dataset.index, 10);
        return { r: Math.floor(idx / 3), c: idx % 3 };
    }

    function getBoardDimensions() {
        if (isC4Mode()) return { rows: C4_ROWS, cols: C4_COLS };
        if (isGmkMode()) {
            const cfg = getActiveGmkConfig();
            return { rows: cfg.h, cols: cfg.w };
        }
        return { rows: 3, cols: 3 };
    }

    function navigateBoard(direction) {
        if (isAnyModalOpen()) return;
        const activeEl = document.activeElement;
        const allCells = getActiveBoardCells();
        if (!allCells.length) return;
        const isBoardCell = activeEl.classList.contains('cell') ||
            activeEl.classList.contains('c4-cell') ||
            activeEl.classList.contains('gomoku-cell');
        if (!isBoardCell) {
            const first = allCells.find(c => !c.classList.contains('disabled'));
            if (first) first.focus();
            return;
        }
        const coords = getCellCoords(activeEl);
        const dim = getBoardDimensions();
        let targetR = coords.r, targetC = coords.c;
        switch (direction) {
            case 'up': targetR = Math.max(0, coords.r - 1); break;
            case 'down': targetR = Math.min(dim.rows - 1, coords.r + 1); break;
            case 'left': targetC = Math.max(0, coords.c - 1); break;
            case 'right': targetC = Math.min(dim.cols - 1, coords.c + 1); break;
        }
        if (targetR === coords.r && targetC === coords.c) return;
        let targetCell;
        if (isC4Mode()) {
            targetCell = allCells.find(c => parseInt(c.dataset.row, 10) === targetR && parseInt(c.dataset.col, 10) === targetC);
        } else if (isGmkMode()) {
            const cfg = getActiveGmkConfig();
            targetCell = allCells[targetR * cfg.w + targetC];
        } else {
            targetCell = allCells[targetR * 3 + targetC];
        }
        if (targetCell) targetCell.focus();
    }

    function navigateRushBoard(direction) {
        if (!rushModal || !rushModal.classList.contains('show')) return;
        const activeEl = document.activeElement;
        const isRushCell = activeEl.classList.contains('cell') && activeEl.closest('#rush-board');
        if (!isRushCell) {
            const first = rushCells.find(c => !c.classList.contains('disabled') && c.offsetParent !== null);
            if (first) first.focus();
            return;
        }
        const idx = parseInt(activeEl.dataset.index, 10);
        if (isNaN(idx)) return;
        const row = Math.floor(idx / 3);
        const col = idx % 3;
        let targetR = row, targetC = col;
        switch (direction) {
            case 'up': targetR = Math.max(0, row - 1); break;
            case 'down': targetR = Math.min(2, row + 1); break;
            case 'left': targetC = Math.max(0, col - 1); break;
            case 'right': targetC = Math.min(2, col + 1); break;
        }
        const targetIdx = targetR * 3 + targetC;
        const targetCell = rushCells[targetIdx];
        if (targetCell && !targetCell.classList.contains('disabled')) targetCell.focus();
    }
    function navigateGridCells(cells, direction, cols) {
        const activeEl = document.activeElement;
        const idx = cells.indexOf(activeEl);
        if (idx === -1) {
            const first = cells.find(c => !c.classList.contains('disabled') && c.offsetParent !== null);
            if (first) first.focus();
            return;
        }
        const row = Math.floor(idx / cols);
        const col = idx % cols;
        const rows = Math.ceil(cells.length / cols);
        let targetR = row, targetC = col;
        switch (direction) {
            case 'up': targetR = Math.max(0, row - 1); break;
            case 'down': targetR = Math.min(rows - 1, row + 1); break;
            case 'left': targetC = Math.max(0, col - 1); break;
            case 'right': targetC = Math.min(cols - 1, col + 1); break;
        }
        const targetIdx = targetR * cols + targetC;
        const targetCell = cells[targetIdx];
        if (targetCell) targetCell.focus();
    }

    function handleNumberKey(num, e) {
        if (isInputFocused()) return;
        if (dailyModal && dailyModal.classList.contains('show')) {
            const map = { 7: 0, 8: 1, 9: 2, 4: 3, 5: 4, 6: 5, 1: 6, 2: 7, 3: 8 };
            const idx = map[num];
            if (idx !== undefined) { e.preventDefault(); validateDailyMove(idx); }
            return;
        }
        if (tacticsModal && tacticsModal.classList.contains('show')) {
            const map = { 7: 0, 8: 1, 9: 2, 4: 3, 5: 4, 6: 5, 1: 6, 2: 7, 3: 8 };
            const idx = map[num];
            if (idx !== undefined) { e.preventDefault(); validateTacticMove(idx); }
            return;
        }
        if (rushModal && rushModal.classList.contains('show')) {
            const map = { 7: 0, 8: 1, 9: 2, 4: 3, 5: 4, 6: 5, 1: 6, 2: 7, 3: 8 };
            const idx = map[num];
            if (idx !== undefined) { e.preventDefault(); validateRushMove(idx); }
            return;
        }
        if (isAnyModalOpen()) return;
        if (isC4Mode()) {
            const col = num - 1;
            if (col < 0 || col >= C4_COLS) return;
            const cell = document.querySelector(`.c4-cell[data-row="0"][data-col="${col}"]`);
            if (cell && !cell.classList.contains('disabled')) {
                cell.focus();
                e.preventDefault();
                handleC4CellClick({ currentTarget: cell });
            }
        } else if (!isGmkMode()) {
            const map = { 7: 0, 8: 1, 9: 2, 4: 3, 5: 4, 6: 5, 1: 6, 2: 7, 3: 8 };
            const idx = map[num];
            if (idx === undefined) return;
            const cell = cells[idx];
            if (cell && !cell.classList.contains('disabled')) {
                cell.focus();
                e.preventDefault();
                handleCellClick({ currentTarget: cell });
            }
        }
    }

    function openHotkeyModal() {
        stopTimer();
        clearTimeout(aiTimer); aiTimer = null;
        closeDrawer(); closeHistory(); closeChangelog(); closeReplay(); closeAchievements(); closeDaily(); closeRush(); closeEditor();
        if (tacticsDrawer) { closeTactics(); }
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        lastFocusedElement = document.activeElement;
        renderHotkeyHelp();
        hotkeyModal.classList.add('show');
        setTimeout(() => { if (hotkeyClose) hotkeyClose.focus(); }, 50);
    }

    function closeHotkeyModal() {
        hotkeyModal.classList.remove('show');
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }

    function renderHotkeyHelp() {
        if (!hotkeyBody) return;
        const sections = [
            {
                title: t('hotkey-gameplay'),
                items: [
                    { kbd: t('hotkey-nav'), desc: t('hotkey-nav-desc') },
                    { kbd: t('hotkey-enter'), desc: t('hotkey-enter-desc') },
                    { kbd: t('hotkey-numbers'), desc: t('hotkey-numbers-desc') },
                ]
            },
            {
                title: t('hotkey-global'),
                items: [
                    { kbd: t('hotkey-r'), desc: t('hotkey-r-desc') },
                    { kbd: t('hotkey-u'), desc: t('hotkey-u-desc') },
                    { kbd: t('hotkey-h'), desc: t('hotkey-h-desc') },
                    { kbd: t('hotkey-a'), desc: t('hotkey-a-desc') },
                    { kbd: t('hotkey-t'), desc: t('hotkey-t-desc') },
                    { kbd: t('hotkey-d'), desc: t('hotkey-d-desc') },
                    { kbd: t('hotkey-p'), desc: t('hotkey-p-desc') },
                    { kbd: t('hotkey-z'), desc: t('hotkey-z-desc') },
                    { kbd: t('hotkey-c'), desc: t('hotkey-c-desc') },
                    { kbd: t('hotkey-s'), desc: t('hotkey-s-desc') },
                    { kbd: t('hotkey-question'), desc: t('hotkey-question-desc') },
                    { kbd: t('hotkey-esc'), desc: t('hotkey-esc-desc') },
                    { kbd: t('hotkey-ctrl-z'), desc: t('hotkey-ctrl-z-desc') },
                ]
            }
        ];
        let html = '';
        sections.forEach(sec => {
            html += `<div class="hotkey-section"><div class="hotkey-section-title">${sec.title}</div>`;
            sec.items.forEach(item => {
                html += `<div class="hotkey-row"><span class="hotkey-kbd">${item.kbd}</span><span class="hotkey-desc">${item.desc}</span></div>`;
            });
            html += `</div>`;
        });
        hotkeyBody.innerHTML = html;
    }

    /* ===== Audio ===== */
    function initAudio() {
        if (!audioCtx) {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) audioCtx = new AudioContext();
            } catch (e) {}
        }
    }

    function playOsc(freq, type, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        gain.gain.setValueAtTime(vol * volMul(), audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration));
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration));
    }

    function playFiltered(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, audioCtx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + durMul(duration));
        gain.gain.setValueAtTime(vol * volMul(), audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration));
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration));
    }

    function playRetro(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        gain.gain.setValueAtTime(vol * volMul(), audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 0.6);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration));
    }

    function playWoodTone(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        gain.gain.setValueAtTime(vol * volMul(), audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration));
    }

    function playBell(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        gain.gain.setValueAtTime(vol * volMul(), audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 0.8);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration));
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freqShift(freq * 2), audioCtx.currentTime);
        gain2.gain.setValueAtTime(vol * volMul() * 0.3, audioCtx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 0.5);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start();
        osc2.stop(audioCtx.currentTime + durMul(duration));
    }

    function playSpace(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        filter.Q.setValueAtTime(10, audioCtx.currentTime);
        gain.gain.setValueAtTime(vol * volMul() * 0.5, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration));
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration));
    }

    function playDrum(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freqShift(freq * 0.5), audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + durMul(duration) * 0.3);
        gain.gain.setValueAtTime(vol * volMul(), audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration));
    }

    function playPiano(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        playOsc(freq, 'sine', duration, vol * 0.6);
        setTimeout(() => playOsc(freq * 2, 'sine', duration * 0.5, vol * 0.2), 10);
        setTimeout(() => playOsc(freq * 3, 'sine', duration * 0.3, vol * 0.1), 20);
    }

    function playSynth(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(6, audioCtx.currentTime);
        lfoGain.gain.setValueAtTime(30, audioCtx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        gain.gain.setValueAtTime(vol * volMul() * 0.4, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration));
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        lfo.start();
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration));
        lfo.stop(audioCtx.currentTime + durMul(duration));
    }

    function playChiptune(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const notes = [freq, freq * 1.25, freq * 1.5, freq * 2];
        notes.forEach((f, i) => {
            setTimeout(() => {
                if (!settings.sound || !audioCtx) return;
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'square';
                osc.frequency.setValueAtTime(freqShift(f), audioCtx.currentTime);
                gain.gain.setValueAtTime(vol * volMul() * 0.12, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 0.15);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start();
                osc.stop(audioCtx.currentTime + durMul(duration) * 0.15);
            }, i * 40);
        });
    }

    function playPluck(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freqShift(freq), audioCtx.currentTime);
        gain.gain.setValueAtTime(vol * volMul() * 0.5, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration) * 0.3);
    }

    function playCrystal(freq, duration, vol) {
        if (!settings.sound || !audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freqShift(freq * 2), audioCtx.currentTime);
        gain.gain.setValueAtTime(vol * volMul() * 0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 1.2);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + durMul(duration) * 1.2);
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freqShift(freq * 3), audioCtx.currentTime + 0.05);
        gain2.gain.setValueAtTime(0, audioCtx.currentTime);
        gain2.gain.linearRampToValueAtTime(vol * volMul() * 0.1, audioCtx.currentTime + 0.08);
        gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durMul(duration) * 0.8);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start(audioCtx.currentTime + 0.05);
        osc2.stop(audioCtx.currentTime + durMul(duration) * 0.8);
    }

    function playMoveSound(player) {
        if (!settings.sound) return;
        initAudio();
        const style = settings.soundStyle;
        const baseFreq = player === PLAYER_X ? 523.25 : 392;
        const type = player === PLAYER_X ? 'sine' : 'triangle';
        if (style === 'classic') playOsc(baseFreq, type, 0.12, 0.12);
        else if (style === 'electronic') playFiltered(baseFreq, 0.15, 0.12);
        else if (style === 'retro') playRetro(baseFreq, 0.12, 0.1);
        else if (style === 'wood') playWoodTone(baseFreq, 0.18, 0.15);
        else if (style === 'bell') playBell(baseFreq, 0.25, 0.12);
        else if (style === 'space') playSpace(baseFreq, 0.2, 0.1);
        else if (style === 'drum') playDrum(baseFreq, 0.15, 0.12);
        else if (style === 'piano') playPiano(baseFreq, 0.2, 0.15);
        else if (style === 'synth') playSynth(baseFreq, 0.25, 0.12);
        else if (style === 'chiptune') playChiptune(baseFreq, 0.2, 0.12);
        else if (style === 'pluck') playPluck(baseFreq, 0.15, 0.15);
        else if (style === 'crystal') playCrystal(baseFreq, 0.3, 0.12);
    }

    function playWinSound() {
        if (!settings.sound) return;
        initAudio();
        const style = settings.soundStyle;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        if (style === 'classic') notes.forEach((freq, i) => setTimeout(() => playOsc(freq, 'sine', 0.25, 0.1), i * 80));
        else if (style === 'electronic') notes.forEach((freq, i) => setTimeout(() => playFiltered(freq, 0.2, 0.1), i * 80));
        else if (style === 'retro') notes.forEach((freq, i) => setTimeout(() => playRetro(freq, 0.18, 0.1), i * 70));
        else if (style === 'wood') notes.forEach((freq, i) => setTimeout(() => playWoodTone(freq, 0.2, 0.15), i * 90));
        else if (style === 'bell') notes.forEach((freq, i) => setTimeout(() => playBell(freq, 0.3, 0.1), i * 100));
        else if (style === 'space') notes.forEach((freq, i) => setTimeout(() => playSpace(freq, 0.25, 0.08), i * 90));
        else if (style === 'drum') notes.forEach((freq, i) => setTimeout(() => playDrum(freq, 0.15, 0.1), i * 70));
        else if (style === 'piano') notes.forEach((freq, i) => setTimeout(() => playPiano(freq, 0.25, 0.12), i * 90));
        else if (style === 'synth') notes.forEach((freq, i) => setTimeout(() => playSynth(freq, 0.3, 0.1), i * 90));
        else if (style === 'chiptune') notes.forEach((freq, i) => setTimeout(() => playChiptune(freq, 0.25, 0.1), i * 70));
        else if (style === 'pluck') notes.forEach((freq, i) => setTimeout(() => playPluck(freq, 0.2, 0.12), i * 80));
        else if (style === 'crystal') notes.forEach((freq, i) => setTimeout(() => playCrystal(freq, 0.35, 0.1), i * 100));
    }

    function playDrawSound() {
        if (!settings.sound) return;
        initAudio();
        const style = settings.soundStyle;
        if (style === 'classic') { playOsc(261.63, 'triangle', 0.3, 0.1); setTimeout(() => playOsc(196, 'triangle', 0.3, 0.1), 180); }
        else if (style === 'electronic') { playFiltered(261, 0.3, 0.1); setTimeout(() => playFiltered(196, 0.3, 0.1), 180); }
        else if (style === 'retro') { playRetro(261, 0.25, 0.1); setTimeout(() => playRetro(196, 0.25, 0.1), 150); }
        else if (style === 'wood') { playWoodTone(261, 0.2, 0.12); setTimeout(() => playWoodTone(196, 0.2, 0.12), 180); }
        else if (style === 'bell') { playBell(261, 0.3, 0.1); setTimeout(() => playBell(196, 0.3, 0.1), 200); }
        else if (style === 'space') { playSpace(261, 0.3, 0.08); setTimeout(() => playSpace(196, 0.3, 0.08), 200); }
        else if (style === 'drum') { playDrum(261, 0.2, 0.1); setTimeout(() => playDrum(196, 0.2, 0.1), 180); }
        else if (style === 'piano') { playPiano(261, 0.3, 0.12); setTimeout(() => playPiano(196, 0.3, 0.12), 200); }
        else if (style === 'synth') { playSynth(261, 0.35, 0.1); setTimeout(() => playSynth(196, 0.35, 0.1), 200); }
        else if (style === 'chiptune') { playChiptune(261, 0.25, 0.1); setTimeout(() => playChiptune(196, 0.25, 0.1), 180); }
        else if (style === 'pluck') { playPluck(261, 0.2, 0.12); setTimeout(() => playPluck(196, 0.2, 0.12), 180); }
        else if (style === 'crystal') { playCrystal(261, 0.4, 0.1); setTimeout(() => playCrystal(196, 0.4, 0.1), 220); }
    }
    function playLossSound() {
        if (!settings.sound) return;
        initAudio();
        const style = settings.soundStyle;
        if (style === 'classic') { playOsc(196, 'sine', 0.3, 0.15); setTimeout(() => playOsc(146.83, 'sine', 0.3, 0.15), 200); }
        else if (style === 'electronic') { playFiltered(196, 0.3, 0.15); setTimeout(() => playFiltered(146, 0.3, 0.15), 200); }
        else if (style === 'retro') { playRetro(196, 0.25, 0.15); setTimeout(() => playRetro(146, 0.25, 0.15), 180); }
        else if (style === 'wood') { playWoodTone(196, 0.2, 0.15); setTimeout(() => playWoodTone(146, 0.2, 0.15), 200); }
        else if (style === 'bell') { playBell(196, 0.3, 0.15); setTimeout(() => playBell(146, 0.3, 0.15), 220); }
        else if (style === 'space') { playSpace(196, 0.3, 0.15); setTimeout(() => playSpace(146, 0.3, 0.15), 200); }
        else if (style === 'drum') { playDrum(60, 0.3, 0.15); setTimeout(() => playDrum(50, 0.3, 0.15), 200); }
        else if (style === 'piano') { playPiano(196, 0.3, 0.15); setTimeout(() => playPiano(146, 0.3, 0.15), 200); }
        else if (style === 'synth') { playSynth(196, 0.3, 0.15); setTimeout(() => playSynth(146, 0.3, 0.15), 200); }
        else if (style === 'chiptune') { playChiptune(196, 0.3, 0.15); setTimeout(() => playChiptune(146, 0.3, 0.15), 200); }
        else if (style === 'pluck') { playPluck(196, 0.3, 0.15); setTimeout(() => playPluck(146, 0.3, 0.15), 200); }
        else if (style === 'crystal') { playCrystal(196, 0.3, 0.15); setTimeout(() => playCrystal(146, 0.3, 0.15), 200); }
    }
    function playErrorSound() {
        if (!settings.sound) return;
        initAudio();
        const style = settings.soundStyle;
        if (style === 'classic') { playOsc(200, 'sawtooth', 0.2, 0.1); setTimeout(() => playOsc(150, 'sawtooth', 0.25, 0.1), 100); }
        else if (style === 'electronic') { playFiltered(200, 0.2, 0.1); setTimeout(() => playFiltered(150, 0.25, 0.1), 100); }
        else if (style === 'retro') { playRetro(200, 0.15, 0.1); setTimeout(() => playRetro(150, 0.2, 0.1), 80); }
        else if (style === 'wood') { playWoodTone(200, 0.15, 0.12); setTimeout(() => playWoodTone(150, 0.2, 0.12), 100); }
        else if (style === 'bell') { playBell(200, 0.2, 0.08); setTimeout(() => playBell(150, 0.25, 0.08), 120); }
        else if (style === 'space') { playSpace(200, 0.2, 0.06); setTimeout(() => playSpace(150, 0.25, 0.06), 120); }
        else if (style === 'drum') { playDrum(200, 0.15, 0.08); setTimeout(() => playDrum(150, 0.2, 0.08), 100); }
        else if (style === 'piano') { playPiano(200, 0.2, 0.08); setTimeout(() => playPiano(150, 0.25, 0.08), 120); }
        else if (style === 'synth') { playSynth(200, 0.25, 0.08); setTimeout(() => playSynth(150, 0.3, 0.08), 120); }
        else if (style === 'chiptune') { playChiptune(200, 0.15, 0.08); setTimeout(() => playChiptune(150, 0.2, 0.08), 100); }
        else if (style === 'pluck') { playPluck(200, 0.15, 0.08); setTimeout(() => playPluck(150, 0.2, 0.08), 100); }
        else if (style === 'crystal') { playCrystal(200, 0.3, 0.08); setTimeout(() => playCrystal(150, 0.35, 0.08), 140); }
    }
    function playDailyWinSound() {
        if (!settings.sound) return;
        initAudio();
        const style = settings.soundStyle;
        const notes = [659.25, 783.99, 1046.50];
        if (style === 'classic') notes.forEach((freq, i) => setTimeout(() => playOsc(freq, 'sine', 0.3, 0.1), i * 90));
        else if (style === 'electronic') notes.forEach((freq, i) => setTimeout(() => playFiltered(freq, 0.25, 0.1), i * 90));
        else if (style === 'retro') notes.forEach((freq, i) => setTimeout(() => playRetro(freq, 0.22, 0.1), i * 80));
        else if (style === 'wood') notes.forEach((freq, i) => setTimeout(() => playWoodTone(freq, 0.25, 0.15), i * 100));
        else if (style === 'bell') notes.forEach((freq, i) => setTimeout(() => playBell(freq, 0.35, 0.1), i * 110));
        else if (style === 'space') notes.forEach((freq, i) => setTimeout(() => playSpace(freq, 0.3, 0.08), i * 100));
        else if (style === 'drum') notes.forEach((freq, i) => setTimeout(() => playDrum(freq, 0.18, 0.1), i * 80));
        else if (style === 'piano') notes.forEach((freq, i) => setTimeout(() => playPiano(freq, 0.3, 0.12), i * 100));
        else if (style === 'synth') notes.forEach((freq, i) => setTimeout(() => playSynth(freq, 0.35, 0.1), i * 100));
        else if (style === 'chiptune') notes.forEach((freq, i) => setTimeout(() => playChiptune(freq, 0.3, 0.1), i * 80));
        else if (style === 'pluck') notes.forEach((freq, i) => setTimeout(() => playPluck(freq, 0.25, 0.12), i * 90));
        else if (style === 'crystal') notes.forEach((freq, i) => setTimeout(() => playCrystal(freq, 0.4, 0.1), i * 110));
    }
    function playUndoSound() {
        if (!settings.sound) return;
        initAudio();
        const style = settings.soundStyle;
        if (style === 'classic') { playOsc(329.63, 'sine', 0.2, 0.08); setTimeout(() => playOsc(261.63, 'sine', 0.25, 0.08), 100); }
        else if (style === 'electronic') { playFiltered(329, 0.18, 0.08); setTimeout(() => playFiltered(261, 0.22, 0.08), 100); }
        else if (style === 'retro') { playRetro(329, 0.15, 0.08); setTimeout(() => playRetro(261, 0.18, 0.08), 80); }
        else if (style === 'wood') { playWoodTone(329, 0.15, 0.1); setTimeout(() => playWoodTone(261, 0.18, 0.1), 100); }
        else if (style === 'bell') { playBell(329, 0.2, 0.06); setTimeout(() => playBell(261, 0.25, 0.06), 120); }
        else if (style === 'space') { playSpace(329, 0.18, 0.05); setTimeout(() => playSpace(261, 0.22, 0.05), 120); }
        else if (style === 'drum') { playDrum(329, 0.12, 0.06); setTimeout(() => playDrum(261, 0.15, 0.06), 100); }
        else if (style === 'piano') { playPiano(329, 0.18, 0.06); setTimeout(() => playPiano(261, 0.22, 0.06), 120); }
        else if (style === 'synth') { playSynth(329, 0.22, 0.06); setTimeout(() => playSynth(261, 0.26, 0.06), 120); }
        else if (style === 'chiptune') { playChiptune(329, 0.15, 0.06); setTimeout(() => playChiptune(261, 0.18, 0.06), 100); }
        else if (style === 'pluck') { playPluck(329, 0.15, 0.06); setTimeout(() => playPluck(261, 0.18, 0.06), 100); }
        else if (style === 'crystal') { playCrystal(329, 0.25, 0.06); setTimeout(() => playCrystal(261, 0.3, 0.06), 140); }
    }
    function playAchievementSound() {
        if (!settings.sound) return;
        initAudio();
        const style = settings.soundStyle;
        const notes = [523.25, 659.25, 783.99];
        if (style === 'classic') notes.forEach((freq, i) => setTimeout(() => playOsc(freq, 'sine', 0.25, 0.1), i * 70));
        else if (style === 'electronic') notes.forEach((freq, i) => setTimeout(() => playFiltered(freq, 0.22, 0.1), i * 70));
        else if (style === 'retro') notes.forEach((freq, i) => setTimeout(() => playRetro(freq, 0.18, 0.1), i * 60));
        else if (style === 'wood') notes.forEach((freq, i) => setTimeout(() => playWoodTone(freq, 0.22, 0.12), i * 80));
        else if (style === 'bell') notes.forEach((freq, i) => setTimeout(() => playBell(freq, 0.3, 0.08), i * 90));
        else if (style === 'space') notes.forEach((freq, i) => setTimeout(() => playSpace(freq, 0.25, 0.06), i * 80));
        else if (style === 'drum') notes.forEach((freq, i) => setTimeout(() => playDrum(freq, 0.15, 0.06), i * 60));
        else if (style === 'piano') notes.forEach((freq, i) => setTimeout(() => playPiano(freq, 0.25, 0.1), i * 80));
        else if (style === 'synth') notes.forEach((freq, i) => setTimeout(() => playSynth(freq, 0.3, 0.08), i * 80));
        else if (style === 'chiptune') notes.forEach((freq, i) => setTimeout(() => playChiptune(freq, 0.25, 0.08), i * 60));
        else if (style === 'pluck') notes.forEach((freq, i) => setTimeout(() => playPluck(freq, 0.2, 0.08), i * 70));
        else if (style === 'crystal') notes.forEach((freq, i) => setTimeout(() => playCrystal(freq, 0.35, 0.08), i * 90));
    }

    /* ===== Game Flow ===== */
    function setMode(mode) {
        if (currentMode === mode) return;
        clearTimeout(aiTimer); aiTimer = null;
        currentMode = mode;
        modeBtns.forEach(btn => { btn.classList.toggle('active', btn.dataset.mode === mode); btn.setAttribute('aria-pressed', btn.dataset.mode === mode); });
        const bm2 = getEffectiveBattleMode();
        if (currentMode === 'ttt') subtitle.textContent = bm2 === 'pvp' ? t('subtitle-pvp') : bm2 === 'aivsai' ? t('subtitle-aivsai') : t('subtitle-pve');
        else if (currentMode === 'connect4') subtitle.textContent = bm2 === 'pvp' ? t('subtitle-connect4') + ' — ' + t('subtitle-pvp') : bm2 === 'aivsai' ? t('subtitle-connect4') + ' — ' + t('subtitle-aivsai') : t('subtitle-connect4');
        else if (currentMode === 'gomoku') subtitle.textContent = bm2 === 'pvp' ? t('subtitle-gomoku') + ' — ' + t('subtitle-pvp') : bm2 === 'aivsai' ? t('subtitle-gomoku') + ' — ' + t('subtitle-aivsai') : t('subtitle-gomoku');
        else subtitle.textContent = bm2 === 'pvp' ? getCustomSubtitle() + ' — ' + t('subtitle-pvp') : bm2 === 'aivsai' ? getCustomSubtitle() + ' — ' + t('subtitle-aivsai') : getCustomSubtitle();

        aiDifficultyGroup.style.display = getEffectiveBattleMode() !== 'pvp' ? 'flex' : 'none';
        customGameGroup.style.display = currentMode === 'custom' ? 'flex' : 'none';
        resetScores();
        updateScoreLabels();
        resetGame();
    }

    function setBattleMode(mode) {
        if (battleMode === mode) return;
        clearTimeout(aiTimer); aiTimer = null;
        battleMode = mode;
        battleBtns.forEach(btn => { btn.classList.toggle('active', btn.dataset.battle === mode); btn.setAttribute('aria-pressed', btn.dataset.battle === mode); });
        const bm = getEffectiveBattleMode();
        if (currentMode === 'ttt') subtitle.textContent = bm === 'pvp' ? t('subtitle-pvp') : bm === 'aivsai' ? t('subtitle-aivsai') : t('subtitle-pve');
        else if (currentMode === 'connect4') subtitle.textContent = bm === 'pvp' ? t('subtitle-connect4') + ' — ' + t('subtitle-pvp') : bm === 'aivsai' ? t('subtitle-connect4') + ' — ' + t('subtitle-aivsai') : t('subtitle-connect4');
        else if (currentMode === 'gomoku') subtitle.textContent = bm === 'pvp' ? t('subtitle-gomoku') + ' — ' + t('subtitle-pvp') : bm === 'aivsai' ? t('subtitle-gomoku') + ' — ' + t('subtitle-aivsai') : t('subtitle-gomoku');
        else if (currentMode === 'custom') subtitle.textContent = bm === 'pvp' ? getCustomSubtitle() + ' — ' + t('subtitle-pvp') : bm === 'aivsai' ? getCustomSubtitle() + ' — ' + t('subtitle-aivsai') : getCustomSubtitle();
        aiDifficultyGroup.style.display = getEffectiveBattleMode() !== 'pvp' ? 'flex' : 'none';
        resetScores();
        updateScoreLabels();
        updateEloBadge();
        resetGame();
    }

    function updateScoreLabels() {
        const labelX = document.querySelector('.score-card.player-x .label');
        const labelO = document.querySelector('.score-card.player-o .label');
        const bm = getEffectiveBattleMode();
        if (bm === 'pve') { labelX.textContent = t('label-player-x'); labelO.textContent = t('label-player-o'); }
        else if (bm === 'pvp') { labelX.textContent = t('label-player-x-pvp'); labelO.textContent = t('label-player-o-pvp'); }
        else { labelX.textContent = t('label-player-x-ai'); labelO.textContent = t('label-player-o-ai'); }
    }

    function getEffectiveBattleMode() {
        return battleMode;
    }

    function getCustomSubtitle() {
        return t('subtitle-custom') + ' — ' + customConfig.w + '×' + customConfig.h + ' · ' + customConfig.winLen + t('custom-win-label');
    }

    function resetScores() {
        scores = { X: 0, O: 0, draw: 0 };
        scoreXEl.textContent = '0';
        scoreOEl.textContent = '0';
        scoreDrawEl.textContent = '0';
    }

    function getTurnText() {
        const bm = getEffectiveBattleMode();
        let text;
        if (bm === 'aivsai') text = currentPlayer === PLAYER_X ? t('status-ai-x-thinking') : t('status-ai-o-thinking');
        else if (bm === 'pvp') text = currentPlayer === PLAYER_X ? t('status-player1-turn') : t('status-player2-turn');
        else text = currentPlayer === PLAYER_X ? t('status-your-turn') : t('status-ai-thinking');
        if (currentMode === 'custom') text += ' · ' + customConfig.winLen + t('custom-win-label');
        return text;
    }

    /* ===== Tic Tac Toe ===== */
    function handleCellClick(e) {
        const bm = getEffectiveBattleMode();
        const index = parseInt(e.currentTarget.dataset.index, 10);
        if (!gameActive || gameBoard[index] !== '') return;
        if (bm === 'aivsai') return;
        if (bm === 'pve' && currentPlayer !== PLAYER_X) return;

        const player = currentPlayer;
        createRipple(e, player);
        makeMove(index, player);

        if (gameActive && bm === 'pve') {
            updateStatus(getTurnText(), 'o');
            lockBoard(true);
            const delay = settings.animations ? 400 : 50;
            aiTimer = setTimeout(() => {
                if (!gameActive) return;
                const aiMove = getAiMove(gameBoard, PLAYER_O);
                if (aiMove < 0 || aiMove > 8) { endGame(true); return; }
                makeMove(aiMove, PLAYER_O);
                if (gameActive) lockBoard(false);
            }, delay);
        }
    }

    function makeMove(index, player) {
        if (!gameActive || index < 0 || index > 8 || gameBoard[index] !== '') return;
        const elapsed = Date.now() - (moveHistory.length === 0 ? gameStartTime : currentMoveStartTime);
        gameBoard[index] = player;
        cells.forEach(c => c.classList.remove('hint-glow'));
        moveHistory.push({ player, index, elapsed });
        currentMoveStartTime = Date.now();
        pushBoardSnapshot();
        playerHistory.push(player);
        cells[index].innerHTML = '';
        cells[index].appendChild(createMarkSvg(player));
        cells[index].classList.add('disabled');
        cells[index].setAttribute('aria-label', player === PLAYER_X ? t('cell-x') : t('cell-o'));
        cells[index].setAttribute('tabindex', '-1');
        playMoveSound(player);

        if (checkWinTTT(gameBoard, player)) {
            if (misereMode) drawWinLine(player);
            endGame(false, misereMode ? (player === PLAYER_X ? PLAYER_O : PLAYER_X) : player);
        } else if (checkDrawTTT(gameBoard)) {
            endGame(true);
        } else {
            currentPlayer = player === PLAYER_X ? PLAYER_O : PLAYER_X;
            const activeClass = currentPlayer === PLAYER_X ? 'x' : 'o';
            updateStatus(getTurnText(), activeClass);
            switchTimerTo(currentPlayer);
        }
        updateUndoButton();
        updateHintButton();
    }

    /* ===== Connect Four ===== */
    function handleC4CellClick(e) {
        const bm = getEffectiveBattleMode();
        if (!gameActive || bm === 'aivsai') return;
        if (bm === 'pve' && currentPlayer !== PLAYER_X) return;

        const col = parseInt(e.currentTarget.dataset.col, 10);
        const row = getC4NextOpenRow(col);
        if (row === -1) return;

        const player = currentPlayer;
        createRipple(e, player);
        makeC4Move(row, col, player);

        if (gameActive && bm === 'pve') {
            updateStatus(getTurnText(), 'o');
            lockC4Board(true);
            const delay = settings.animations ? 600 : 80;
            aiTimer = setTimeout(() => {
                if (!gameActive) return;
                const aiCol = getC4AiMove(PLAYER_O);
                if (aiCol === -1) { endC4Game(true); return; }
                const aiRow = getC4NextOpenRow(aiCol);
                makeC4Move(aiRow, aiCol, PLAYER_O);
                if (gameActive) lockC4Board(false);
            }, delay);
        }
    }

    function getC4NextOpenRow(col) {
        for (let r = C4_ROWS - 1; r >= 0; r--) {
            if (c4Board[r][col] === '') return r;
        }
        return -1;
    }

    function makeC4Move(row, col, player) {
        if (!gameActive || row < 0 || row >= C4_ROWS || col < 0 || col >= C4_COLS || c4Board[row][col] !== '') return;
        const elapsed = Date.now() - (moveHistory.length === 0 ? gameStartTime : currentMoveStartTime);
        c4Board[row][col] = player;
        moveHistory.push({ player, row, col, elapsed });
        currentMoveStartTime = Date.now();
        pushBoardSnapshot();
        playerHistory.push(player);
        const cell = c4CellsContainer.children[row * C4_COLS + col];
        const piece = document.createElement('div');
        piece.className = 'c4-piece ' + (player === PLAYER_X ? 'x-piece' : 'o-piece');
        cell.appendChild(piece);
        cell.classList.add('disabled');
        cell.setAttribute('aria-label', player === PLAYER_X ? t('cell-x') : t('cell-o'));
        cell.setAttribute('tabindex', '-1');
        playMoveSound(player);

        const winCells = checkWinC4(row, col, player);
        if (winCells) {
            endC4Game(false, misereMode ? (player === PLAYER_X ? PLAYER_O : PLAYER_X) : player, winCells);
        } else if (checkDrawC4()) {
            endC4Game(true);
        } else {
            currentPlayer = player === PLAYER_X ? PLAYER_O : PLAYER_X;
            const activeClass = currentPlayer === PLAYER_X ? 'x' : 'o';
            updateStatus(getTurnText(), activeClass);
            switchTimerTo(currentPlayer);
        }
        updateUndoButton();
        updateHintButton();
    }

    function checkWinC4(row, col, player) {
        const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
        for (const [dr, dc] of directions) {
            const cells = [[row, col]];
            for (let step = 1; step < 4; step++) {
                const r = row + dr * step, c = col + dc * step;
                if (r >= 0 && r < C4_ROWS && c >= 0 && c < C4_COLS && c4Board[r][c] === player) cells.push([r, c]);
                else break;
            }
            for (let step = 1; step < 4; step++) {
                const r = row - dr * step, c = col - dc * step;
                if (r >= 0 && r < C4_ROWS && c >= 0 && c < C4_COLS && c4Board[r][c] === player) cells.push([r, c]);
                else break;
            }
            if (cells.length >= 4) return cells;
        }
        return null;
    }

    function checkDrawC4() {
        return c4Board[0].every(cell => cell !== '');
    }

    function endC4Game(draw, winner, winCells) {
        gameActive = false;
        stopTimer();
        lockC4Board(true);
        recordGameStats(draw, winner);
        const eloChange = processEloChange(draw, winner);
        saveGameHistory(draw ? null : winner, eloChange !== null && eloData.history.length > 0 ? eloData.history[0] : null);
        checkAchievements({ mode: currentMode, bm: getEffectiveBattleMode(), winner: draw ? null : winner, difficulty: settings.difficulty, duration: Math.max(0, Date.now() - gameStartTime), moves: moveHistory.length, misereMode: misereMode });
        const bm = getEffectiveBattleMode();

        if (draw) {
            scores.draw++;
            animateScore(scoreDrawEl);
            playDrawSound();
            const msg = bm === 'aivsai' ? t('modal-draw-aivsai') : bm === 'pve' ? (misereMode ? t('modal-misere-draw') : t('modal-draw-pve')) : t('modal-draw-pvp');
            showModal('🤝', t('status-draw'), msg, eloChange);
            updateStatus(t('status-draw'), null);
        } else {
            scores[winner]++;
            animateScore(winner === PLAYER_X ? scoreXEl : scoreOEl);
            drawC4WinLine(winCells, winner);
            if (!timerTimeoutFlag) {
                if (misereMode && getEffectiveBattleMode() === 'pve' && winner === PLAYER_O) playLossSound(); else playWinSound();
            }
            let icon = '🎉', title, msg;
            if (timerTimeoutFlag) {
                icon = '⏰'; title = t('timer-out');
                if (winner === PLAYER_X) {
                    msg = bm === 'aivsai' ? t('modal-ai-x-wins') : (bm === 'pvp' ? t('modal-player1-wins') : t('modal-you-win'));
                    updateStatus(title, 'x');
                } else {
                    msg = bm === 'aivsai' ? t('modal-ai-o-wins') : (bm === 'pvp' ? t('modal-player2-wins') : t('modal-ai-wins'));
                    updateStatus(title, 'o');
                }
            } else if (winner === PLAYER_X) {
                if (bm === 'aivsai') { title = t('modal-ai-x-wins'); msg = title; icon = '⚡'; }
                else if (bm === 'pvp') { title = t('modal-player1-wins'); msg = title; }
                else { msg = misereMode ? t('modal-misere-you-win') : t('modal-you-win'); title = t('modal-you-win'); }
                updateStatus(title, 'x');
            } else {
                if (bm === 'aivsai') { title = t('modal-ai-o-wins'); msg = title; icon = '⚡'; }
                else if (bm === 'pvp') { title = t('modal-player2-wins'); msg = title; icon = '🔥'; }
                else { msg = misereMode ? t('modal-misere-ai-wins') : t('modal-ai-wins'); title = t('modal-ai-wins'); icon = '🤖'; }
                updateStatus(title, 'o');
            }
            showModal(icon, title, msg, eloChange);
        }
        updateUndoButton();
        updateHintButton();
    }

    function getWinLineEndpoints(winCells) {
        if (!winCells || winCells.length < 2) return [winCells[0], winCells[0]];
        let maxDistSq = -1, a = winCells[0], b = winCells[1];
        for (let i = 0; i < winCells.length; i++) {
            for (let j = i + 1; j < winCells.length; j++) {
                const [r1, c1] = winCells[i];
                const [r2, c2] = winCells[j];
                const distSq = (r1 - r2) ** 2 + (c1 - c2) ** 2;
                if (distSq > maxDistSq) {
                    maxDistSq = distSq;
                    a = winCells[i];
                    b = winCells[j];
                }
            }
        }
        return [a, b];
    }

    function drawC4WinLine(winCells, winner) {
        if (!winCells || winCells.length < 2) return;
        lastWinData = { mode: 'c4', winner, winCells };
        const [[r1, c1], [r2, c2]] = getWinLineEndpoints(winCells);
        const cell1 = c4CellsContainer.children[r1 * C4_COLS + c1];
        const cell2 = c4CellsContainer.children[r2 * C4_COLS + c2];
        if (!cell1 || !cell2) return;
        const rect1 = cell1.getBoundingClientRect();
        const rect2 = cell2.getBoundingClientRect();
        const boardRect = connect4Board.getBoundingClientRect();
        const padding = 6;
        const innerW = boardRect.width - padding * 2;
        const innerH = boardRect.height - padding * 2;
        const scaleX = 700 / innerW;
        const scaleY = 600 / innerH;

        c4WinLineSvg.setAttribute('x1', (rect1.left + rect1.width / 2 - boardRect.left - padding) * scaleX);
        c4WinLineSvg.setAttribute('y1', (rect1.top + rect1.height / 2 - boardRect.top - padding) * scaleY);
        c4WinLineSvg.setAttribute('x2', (rect2.left + rect2.width / 2 - boardRect.left - padding) * scaleX);
        c4WinLineSvg.setAttribute('y2', (rect2.top + rect2.height / 2 - boardRect.top - padding) * scaleY);
        c4WinLineSvg.setAttribute('stroke', winner === PLAYER_X ? 'var(--x-color)' : 'var(--o-color)');
        c4WinLine.classList.add('show');
    }

    function lockC4Board(lock) {
        document.querySelectorAll('.c4-cell').forEach(cell => {
            if (cell.querySelector('.c4-piece')) return;
            const col = parseInt(cell.dataset.col, 10);
            const cellRow = parseInt(cell.dataset.row, 10);
            const nextRow = getC4NextOpenRow(col);
            if (nextRow !== -1 && cellRow === nextRow) cell.classList.toggle('disabled', lock);
        });
    }

    /* ===== Connect Four AI ===== */
    function getC4AiMove(aiPlayer) {
        const diff = settings.difficulty;
        if (diff === 'hard') return getC4BestMove(aiPlayer);
        if (diff === 'easy') return getC4EasyMove(aiPlayer);
        return Math.random() < 0.5 ? getC4BestMove(aiPlayer) : getC4EasyMove(aiPlayer);
    }

    function getC4EasyMove(aiPlayer) {
        const humanPlayer = aiPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        if (!misereMode) {
            for (let c = 0; c < C4_COLS; c++) {
                const r = getC4NextOpenRow(c);
                if (r === -1) continue;
                c4Board[r][c] = aiPlayer;
                const win = checkWinC4(r, c, aiPlayer);
                c4Board[r][c] = '';
                if (win) return c;
            }
            for (let c = 0; c < C4_COLS; c++) {
                const r = getC4NextOpenRow(c);
                if (r === -1) continue;
                c4Board[r][c] = humanPlayer;
                const win = checkWinC4(r, c, humanPlayer);
                c4Board[r][c] = '';
                if (win) return c;
            }
        } else {
            // Misère: avoid winning, don't block opponent's win
            for (let c = 0; c < C4_COLS; c++) {
                const r = getC4NextOpenRow(c);
                if (r === -1) continue;
                c4Board[r][c] = aiPlayer;
                const win = checkWinC4(r, c, aiPlayer);
                c4Board[r][c] = '';
                if (win) continue; // skip winning moves
                return c;
            }
        }
        const prefs = [3, 2, 4, 1, 5, 0, 6];
        for (const c of prefs) {
            if (getC4NextOpenRow(c) !== -1) return c;
        }
        return -1;
    }

    function getC4BestMove(aiPlayer) {
        let bestScore = -Infinity, bestCol = -1;
        const humanPlayer = aiPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        for (let c = 0; c < C4_COLS; c++) {
            const r = getC4NextOpenRow(c);
            if (r === -1) continue;
            c4Board[r][c] = aiPlayer;
            const score = minimaxC4(0, false, aiPlayer, humanPlayer, -Infinity, Infinity);
            c4Board[r][c] = '';
            if (score > bestScore) { bestScore = score; bestCol = c; }
        }
        return bestCol;
    }

    function minimaxC4(depth, isMaximizing, aiPlayer, humanPlayer, alpha, beta) {
        for (let r = 0; r < C4_ROWS; r++) {
            for (let c = 0; c < C4_COLS; c++) {
                if (c4Board[r][c] !== '') {
                    if (checkWinC4(r, c, aiPlayer)) return misereMode ? depth - 1000 : 1000 - depth;
                    if (checkWinC4(r, c, humanPlayer)) return misereMode ? 1000 - depth : depth - 1000;
                }
            }
        }
        if (checkDrawC4()) return 0;
        if (depth >= 5) {
            const evalScore = evaluateC4Board(aiPlayer, humanPlayer);
            return misereMode ? -evalScore : evalScore;
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let c = 0; c < C4_COLS; c++) {
                const r = getC4NextOpenRow(c);
                if (r === -1) continue;
                c4Board[r][c] = aiPlayer;
                bestScore = Math.max(bestScore, minimaxC4(depth + 1, false, aiPlayer, humanPlayer, alpha, beta));
                c4Board[r][c] = '';
                alpha = Math.max(alpha, bestScore);
                if (beta <= alpha) break;
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let c = 0; c < C4_COLS; c++) {
                const r = getC4NextOpenRow(c);
                if (r === -1) continue;
                c4Board[r][c] = humanPlayer;
                bestScore = Math.min(bestScore, minimaxC4(depth + 1, true, aiPlayer, humanPlayer, alpha, beta));
                c4Board[r][c] = '';
                beta = Math.min(beta, bestScore);
                if (beta <= alpha) break;
            }
            return bestScore;
        }
    }

    function evaluateC4Board(aiPlayer, humanPlayer) {
        let score = 0;
        // Center column control
        for (let r = 0; r < C4_ROWS; r++) {
            if (c4Board[r][3] === aiPlayer) score += 4;
            else if (c4Board[r][3] === humanPlayer) score -= 4;
        }
        // Column 2 and 4 also valuable
        for (let r = 0; r < C4_ROWS; r++) {
            if (c4Board[r][2] === aiPlayer) score += 1;
            else if (c4Board[r][2] === humanPlayer) score -= 1;
            if (c4Board[r][4] === aiPlayer) score += 1;
            else if (c4Board[r][4] === humanPlayer) score -= 1;
        }
        const directions = [[0,1],[1,0],[1,1],[1,-1]];
        let aiThreats = 0, humanThreats = 0;
        for (let r = 0; r < C4_ROWS; r++) {
            for (let c = 0; c < C4_COLS; c++) {
                for (const [dr, dc] of directions) {
                    const window = [];
                    for (let i = 0; i < 4; i++) {
                        const rr = r + dr * i, cc = c + dc * i;
                        if (rr >= 0 && rr < C4_ROWS && cc >= 0 && cc < C4_COLS) window.push(c4Board[rr][cc]);
                    }
                    if (window.length === 4) {
                        const aiCount = window.filter(v => v === aiPlayer).length;
                        const humanCount = window.filter(v => v === humanPlayer).length;
                        if (aiCount > 0 && humanCount === 0) {
                            score += Math.pow(aiCount, 3);
                            if (aiCount === 3) aiThreats++;
                        }
                        if (humanCount > 0 && aiCount === 0) {
                            score -= Math.pow(humanCount, 3);
                            if (humanCount === 3) humanThreats++;
                        }
                    }
                }
            }
        }
        // Double threat bonus/penalty
        if (aiThreats >= 2) score += 80;
        if (humanThreats >= 2) score -= 80;
        return score;
    }

    /* ===== Gomoku & Custom ===== */
    function handleGmkCellClick(e) {
        const bm = getEffectiveBattleMode();
        if (!gameActive || bm === 'aivsai') return;
        if (bm === 'pve' && currentPlayer !== PLAYER_X) return;

        const row = parseInt(e.currentTarget.dataset.row, 10);
        const col = parseInt(e.currentTarget.dataset.col, 10);
        const board = getActiveGmkBoard();
        if (board[row][col] !== '') return;
        createRipple(e, currentPlayer);

        const player = currentPlayer;
        makeGmkMove(row, col, player);

        if (gameActive && bm === 'pve') {
            updateStatus(getTurnText(), 'o');
            lockGmkBoard(true);
            const delay = settings.animations ? 800 : 100;
            aiTimer = setTimeout(() => {
                if (!gameActive) return;
                const aiMove = getGmkAiMove(PLAYER_O);
                if (!aiMove) { endGmkGame(true); return; }
                makeGmkMove(aiMove.r, aiMove.c, PLAYER_O);
                if (gameActive) lockGmkBoard(false);
            }, delay);
        }
    }

    function getActiveGmkBoard() {
        if (currentMode === 'custom') return customBoard;
        return gmkBoard;
    }

    function makeGmkMove(row, col, player) {
        if (!gameActive) return;
        const board = getActiveGmkBoard();
        const cfg = getActiveGmkConfig();
        if (row < 0 || row >= cfg.h || col < 0 || col >= cfg.w || board[row][col] !== '') return;
        const elapsed = Date.now() - (moveHistory.length === 0 ? gameStartTime : currentMoveStartTime);
        board[row][col] = player;
        moveHistory.push({ player, row, col, elapsed });
        currentMoveStartTime = Date.now();
        pushBoardSnapshot();
        playerHistory.push(player);
        const cell = gomokuCellsContainer.children[row * cfg.w + col];
        const piece = document.createElement('div');
        piece.className = 'gomoku-piece ' + (player === PLAYER_X ? 'x-piece' : 'o-piece');
        cell.appendChild(piece);
        cell.classList.add('disabled');
        cell.setAttribute('aria-label', player === PLAYER_X ? t('cell-x') : t('cell-o'));
        cell.setAttribute('tabindex', '-1');
        playMoveSound(player);

        const winCells = checkWinGmk(row, col, player, cfg.w, cfg.h, cfg.winLen, board);
        if (winCells) {
            endGmkGame(false, misereMode ? (player === PLAYER_X ? PLAYER_O : PLAYER_X) : player, winCells);
        } else if (checkDrawGmk(cfg.w, cfg.h, board)) {
            endGmkGame(true);
        } else {
            currentPlayer = player === PLAYER_X ? PLAYER_O : PLAYER_X;
            const activeClass = currentPlayer === PLAYER_X ? 'x' : 'o';
            updateStatus(getTurnText(), activeClass);
            switchTimerTo(currentPlayer);
        }
        updateUndoButton();
        updateHintButton();
    }

    function getActiveGmkConfig() {
        if (currentMode === 'custom') return customConfig;
        return { w: GMK_SIZE, h: GMK_SIZE, winLen: 5 };
    }

    function checkWinGmk(row, col, player, w, h, winLen, board) {
        const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
        for (const [dr, dc] of directions) {
            const cells = [[row, col]];
            for (let step = 1; step < winLen; step++) {
                const r = row + dr * step, c = col + dc * step;
                if (r >= 0 && r < h && c >= 0 && c < w && board[r][c] === player) cells.push([r, c]);
                else break;
            }
            for (let step = 1; step < winLen; step++) {
                const r = row - dr * step, c = col - dc * step;
                if (r >= 0 && r < h && c >= 0 && c < w && board[r][c] === player) cells.push([r, c]);
                else break;
            }
            if (cells.length >= winLen) return cells;
        }
        return null;
    }

    function checkDrawGmk(w, h, board) {
        for (let r = 0; r < h; r++) {
            for (let c = 0; c < w; c++) {
                if (board[r][c] === '') return false;
            }
        }
        return true;
    }

    function endGmkGame(draw, winner, winCells) {
        gameActive = false;
        stopTimer();
        lockGmkBoard(true);
        recordGameStats(draw, winner);
        const eloChange = processEloChange(draw, winner);
        saveGameHistory(draw ? null : winner, eloChange !== null && eloData.history.length > 0 ? eloData.history[0] : null);
        checkAchievements({ mode: currentMode, bm: getEffectiveBattleMode(), winner: draw ? null : winner, difficulty: settings.difficulty, duration: Math.max(0, Date.now() - gameStartTime), moves: moveHistory.length, misereMode: misereMode });
        const bm = getEffectiveBattleMode();

        if (draw) {
            scores.draw++;
            animateScore(scoreDrawEl);
            playDrawSound();
            const msg = bm === 'aivsai' ? t('modal-draw-aivsai') : bm === 'pve' ? (misereMode ? t('modal-misere-draw') : t('modal-draw-pve')) : t('modal-draw-pvp');
            showModal('🤝', t('status-draw'), msg, eloChange);
            updateStatus(t('status-draw'), null);
        } else {
            scores[winner]++;
            animateScore(winner === PLAYER_X ? scoreXEl : scoreOEl);
            drawGmkWinLine(winCells, winner);
            if (!timerTimeoutFlag) {
                if (misereMode && getEffectiveBattleMode() === 'pve' && winner === PLAYER_O) playLossSound(); else playWinSound();
            }
            let icon = '🎉', title, msg;
            if (timerTimeoutFlag) {
                icon = '⏰'; title = t('timer-out');
                if (winner === PLAYER_X) {
                    msg = bm === 'aivsai' ? t('modal-ai-x-wins') : (bm === 'pvp' ? t('modal-player1-wins') : t('modal-you-win'));
                    updateStatus(title, 'x');
                } else {
                    msg = bm === 'aivsai' ? t('modal-ai-o-wins') : (bm === 'pvp' ? t('modal-player2-wins') : t('modal-ai-wins'));
                    updateStatus(title, 'o');
                }
            } else if (winner === PLAYER_X) {
                if (bm === 'aivsai') { title = t('modal-ai-x-wins'); msg = title; icon = '⚡'; }
                else if (bm === 'pvp') { title = t('modal-player1-wins'); msg = title; }
                else { msg = misereMode ? t('modal-misere-you-win') : t('modal-you-win'); title = t('modal-you-win'); }
                updateStatus(title, 'x');
            } else {
                if (bm === 'aivsai') { title = t('modal-ai-o-wins'); msg = title; icon = '⚡'; }
                else if (bm === 'pvp') { title = t('modal-player2-wins'); msg = title; icon = '🔥'; }
                else { msg = misereMode ? t('modal-misere-ai-wins') : t('modal-ai-wins'); title = t('modal-ai-wins'); icon = '🤖'; }
                updateStatus(title, 'o');
            }
            showModal(icon, title, msg, eloChange);
        }
        updateUndoButton();
        updateHintButton();
    }

    function drawGmkWinLine(winCells, winner) {
        if (!winCells || winCells.length < 2) return;
        const cfg = getActiveGmkConfig();
        lastWinData = { mode: 'gmk', winner, winCells };
        const [[r1, c1], [r2, c2]] = getWinLineEndpoints(winCells);
        const cell1 = gomokuCellsContainer.children[r1 * cfg.w + c1];
        const cell2 = gomokuCellsContainer.children[r2 * cfg.w + c2];
        if (!cell1 || !cell2) return;
        const rect1 = cell1.getBoundingClientRect();
        const rect2 = cell2.getBoundingClientRect();
        const boardRect = gomokuBoard.getBoundingClientRect();
        const padding = 6;
        const innerW = boardRect.width - padding * 2;
        const innerH = boardRect.height - padding * 2;
        const scaleX = 1500 / innerW;
        const scaleY = 1500 / innerH;

        gomokuWinLineSvg.setAttribute('x1', (rect1.left + rect1.width / 2 - boardRect.left - padding) * scaleX);
        gomokuWinLineSvg.setAttribute('y1', (rect1.top + rect1.height / 2 - boardRect.top - padding) * scaleY);
        gomokuWinLineSvg.setAttribute('x2', (rect2.left + rect2.width / 2 - boardRect.left - padding) * scaleX);
        gomokuWinLineSvg.setAttribute('y2', (rect2.top + rect2.height / 2 - boardRect.top - padding) * scaleY);
        gomokuWinLineSvg.setAttribute('stroke', winner === PLAYER_X ? 'var(--x-color)' : 'var(--o-color)');
        gomokuWinLine.classList.add('show');
    }

    function lockGmkBoard(lock) {
        document.querySelectorAll('.gomoku-cell').forEach(cell => {
            if (!cell.querySelector('.gomoku-piece')) cell.classList.toggle('disabled', lock);
        });
    }

    /* ===== Gomoku AI ===== */
    function getGmkAiMove(aiPlayer) {
        const diff = settings.difficulty;
        const board = getActiveGmkBoard();
        const cfg = getActiveGmkConfig();
        const humanPlayer = aiPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        if (diff === 'easy') return getGmkEasyMove(board, cfg, aiPlayer, humanPlayer);
        if (diff === 'medium') return Math.random() < 0.5 ? getGmkBestMove(board, cfg, aiPlayer, humanPlayer) : getGmkEasyMove(board, cfg, aiPlayer, humanPlayer);
        return getGmkBestMove(board, cfg, aiPlayer, humanPlayer);
    }

    function getGmkEasyMove(board, cfg, aiPlayer, humanPlayer) {
        if (!misereMode) {
            // Immediate win
            for (let r = 0; r < cfg.h; r++) {
                for (let c = 0; c < cfg.w; c++) {
                    if (board[r][c] !== '') continue;
                    board[r][c] = aiPlayer;
                    const win = checkWinGmk(r, c, aiPlayer, cfg.w, cfg.h, cfg.winLen, board);
                    board[r][c] = '';
                    if (win) return { r, c };
                }
            }
            // Block immediate loss
            for (let r = 0; r < cfg.h; r++) {
                for (let c = 0; c < cfg.w; c++) {
                    if (board[r][c] !== '') continue;
                    board[r][c] = humanPlayer;
                    const win = checkWinGmk(r, c, humanPlayer, cfg.w, cfg.h, cfg.winLen, board);
                    board[r][c] = '';
                    if (win) return { r, c };
                }
            }
        } else {
            // Misère: avoid winning moves
            for (let r = 0; r < cfg.h; r++) {
                for (let c = 0; c < cfg.w; c++) {
                    if (board[r][c] !== '') continue;
                    board[r][c] = aiPlayer;
                    const win = checkWinGmk(r, c, aiPlayer, cfg.w, cfg.h, cfg.winLen, board);
                    board[r][c] = '';
                    if (!win) return { r, c };
                }
            }
        }
        // Random near center
        const candidates = [];
        const centerR = Math.floor(cfg.h / 2);
        const centerC = Math.floor(cfg.w / 2);
        for (let r = 0; r < cfg.h; r++) {
            for (let c = 0; c < cfg.w; c++) {
                if (board[r][c] === '') {
                    const dist = Math.abs(r - centerR) + Math.abs(c - centerC);
                    candidates.push({ r, c, dist });
                }
            }
        }
        candidates.sort((a, b) => a.dist - b.dist);
        const top = candidates.slice(0, Math.min(candidates.length, 20));
        return top.length > 0 ? top[Math.floor(Math.random() * top.length)] : null;
    }

    function getGmkBestMove(board, cfg, aiPlayer, humanPlayer) {
        const moves = generateGmkCandidates(board, cfg);
        // Performance cap: limit to top 30 candidates by static eval
        let scoredMoves = moves.map(m => {
            board[m.r][m.c] = aiPlayer;
            const s = evaluateGmkPosition(board, cfg, aiPlayer, humanPlayer);
            board[m.r][m.c] = '';
            return { ...m, score: s };
        });
        scoredMoves.sort((a, b) => b.score - a.score);
        const topMoves = scoredMoves.slice(0, Math.min(scoredMoves.length, 30));

        let bestScore = -Infinity, bestMove = null;
        for (const move of topMoves) {
            board[move.r][move.c] = aiPlayer;
            const score = minimaxGmk(board, cfg, 1, false, aiPlayer, humanPlayer, -Infinity, Infinity);
            board[move.r][move.c] = '';
            if (score > bestScore) { bestScore = score; bestMove = move; }
        }
        return bestMove || getGmkEasyMove(board, cfg, aiPlayer, humanPlayer);
    }

    function minimaxGmk(board, cfg, depth, isMaximizing, aiPlayer, humanPlayer, alpha, beta) {
        // Terminal checks
        for (let r = 0; r < cfg.h; r++) {
            for (let c = 0; c < cfg.w; c++) {
                if (board[r][c] === aiPlayer) {
                    const win = checkWinGmk(r, c, aiPlayer, cfg.w, cfg.h, cfg.winLen, board);
                    if (win) return misereMode ? depth - 100000 : 100000 - depth;
                } else if (board[r][c] === humanPlayer) {
                    const win = checkWinGmk(r, c, humanPlayer, cfg.w, cfg.h, cfg.winLen, board);
                    if (win) return misereMode ? 100000 - depth : depth - 100000;
                }
            }
        }
        if (checkDrawGmk(cfg.w, cfg.h, board)) return 0;
        if (depth >= 2) {
            const evalScore = evaluateGmkPosition(board, cfg, aiPlayer, humanPlayer);
            return misereMode ? -evalScore : evalScore;
        }

        const player = isMaximizing ? aiPlayer : humanPlayer;
        const moves = generateGmkCandidates(board, cfg);
        // Limit branching factor for performance
        let scored = moves.map(m => {
            board[m.r][m.c] = player;
            const s = evaluateGmkPosition(board, cfg, aiPlayer, humanPlayer);
            board[m.r][m.c] = '';
            return { ...m, score: s };
        });
        scored.sort((a, b) => isMaximizing ? b.score - a.score : a.score - b.score);
        const top = scored.slice(0, Math.min(scored.length, 20));

        if (isMaximizing) {
            let best = -Infinity;
            for (const m of top) {
                board[m.r][m.c] = aiPlayer;
                best = Math.max(best, minimaxGmk(board, cfg, depth + 1, false, aiPlayer, humanPlayer, alpha, beta));
                board[m.r][m.c] = '';
                alpha = Math.max(alpha, best);
                if (beta <= alpha) break;
            }
            return best;
        } else {
            let best = Infinity;
            for (const m of top) {
                board[m.r][m.c] = humanPlayer;
                best = Math.min(best, minimaxGmk(board, cfg, depth + 1, true, aiPlayer, humanPlayer, alpha, beta));
                board[m.r][m.c] = '';
                beta = Math.min(beta, best);
                if (beta <= alpha) break;
            }
            return best;
        }
    }

    function generateGmkCandidates(board, cfg) {
        const candidates = [];
        const hasMoves = board.some(row => row.some(cell => cell !== ''));
        if (!hasMoves) {
            return [{ r: Math.floor(cfg.h / 2), c: Math.floor(cfg.w / 2) }];
        }
        for (let r = 0; r < cfg.h; r++) {
            for (let c = 0; c < cfg.w; c++) {
                if (board[r][c] !== '') continue;
                let near = false;
                for (let dr = -2; dr <= 2; dr++) {
                    for (let dc = -2; dc <= 2; dc++) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < cfg.h && nc >= 0 && nc < cfg.w && board[nr][nc] !== '') {
                            near = true; break;
                        }
                    }
                    if (near) break;
                }
                if (near) candidates.push({ r, c });
            }
        }
        return candidates.length > 0 ? candidates : [{ r: Math.floor(cfg.h / 2), c: Math.floor(cfg.w / 2) }];
    }

    function evaluateGmkPosition(board, cfg, aiPlayer, humanPlayer) {
        let score = 0;
        const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
        const SAFE_MAX = Math.min(cfg.winLen - 1, 15);
        const WIN_BONUS = Math.pow(5, SAFE_MAX) * 10 + 1;
        for (let r = 0; r < cfg.h; r++) {
            for (let c = 0; c < cfg.w; c++) {
                for (const [dr, dc] of directions) {
                    const window = [];
                    for (let i = 0; i < cfg.winLen; i++) {
                        const rr = r + dr * i, cc = c + dc * i;
                        if (rr >= 0 && rr < cfg.h && cc >= 0 && cc < cfg.w) window.push(board[rr][cc]);
                    }
                    if (window.length === cfg.winLen) {
                        const aiCount = window.filter(v => v === aiPlayer).length;
                        const humanCount = window.filter(v => v === humanPlayer).length;
                        // Prevent duplicate exact-win counting for contiguous lines longer than winLen
                        const prevR = r - dr, prevC = c - dc;
                        const isExtension = prevR >= 0 && prevR < cfg.h && prevC >= 0 && prevC < cfg.w && board[prevR][prevC] === aiPlayer;
                        const isHumanExtension = prevR >= 0 && prevR < cfg.h && prevC >= 0 && prevC < cfg.w && board[prevR][prevC] === humanPlayer;
                        if (aiCount === cfg.winLen && !isExtension) score += WIN_BONUS;
                        else if (humanCount === cfg.winLen && !isHumanExtension) score -= WIN_BONUS;
                        else if (aiCount > 0 && humanCount === 0) score += Math.pow(5, Math.min(aiCount, SAFE_MAX));
                        else if (humanCount > 0 && aiCount === 0) score -= Math.pow(5, Math.min(humanCount, SAFE_MAX));
                    }
                }
            }
        }
        // Center control bonus
        const centerR = Math.floor(cfg.h / 2);
        const centerC = Math.floor(cfg.w / 2);
        for (let r = 0; r < cfg.h; r++) {
            for (let c = 0; c < cfg.w; c++) {
                const dist = Math.abs(r - centerR) + Math.abs(c - centerC);
                const bonus = Math.max(0, 10 - dist);
                if (board[r][c] === aiPlayer) score += bonus;
                else if (board[r][c] === humanPlayer) score -= bonus;
            }
        }
        return score;
    }

    /* ===== Shared Game Logic ===== */
    function lockBoard(lock) {
        cells.forEach(cell => {
            const idx = parseInt(cell.dataset.index, 10);
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
        stopTimer();
        lockBoard(true);
        recordGameStats(draw, winner);
        const eloChange = processEloChange(draw, winner);
        saveGameHistory(draw ? null : winner, eloChange !== null && eloData.history.length > 0 ? eloData.history[0] : null);
        checkAchievements({ mode: currentMode, bm: getEffectiveBattleMode(), winner: draw ? null : winner, difficulty: settings.difficulty, duration: Math.max(0, Date.now() - gameStartTime), moves: moveHistory.length, misereMode: misereMode });

        const bm = getEffectiveBattleMode();
        if (draw) {
            scores.draw++;
            animateScore(scoreDrawEl);
            playDrawSound();
            const msg = bm === 'aivsai' ? t('modal-draw-aivsai') : bm === 'pve' ? (misereMode ? t('modal-misere-draw') : t('modal-draw-pve')) : t('modal-draw-pvp');
            showModal('🤝', t('status-draw'), msg, eloChange);
            updateStatus(t('status-draw'), null);
        } else {
            scores[winner]++;
            animateScore(winner === PLAYER_X ? scoreXEl : scoreOEl);
            drawWinLine(winner);
            if (!timerTimeoutFlag) {
                if (misereMode && getEffectiveBattleMode() === 'pve' && winner === PLAYER_O) playLossSound(); else playWinSound();
            }

            let icon, title, msg;
            if (timerTimeoutFlag) {
                icon = '⏰'; title = t('timer-out');
                if (winner === PLAYER_X) {
                    msg = bm === 'aivsai' ? t('modal-ai-x-wins') : (bm === 'pvp' ? t('modal-player1-wins') : t('modal-you-win'));
                    updateStatus(title, 'x');
                } else {
                    msg = bm === 'aivsai' ? t('modal-ai-o-wins') : (bm === 'pvp' ? t('modal-player2-wins') : t('modal-ai-wins'));
                    updateStatus(title, 'o');
                }
            } else if (winner === PLAYER_X) {
                title = getWinnerText(winner);
                icon = bm === 'aivsai' ? '⚡' : '🎉';
                if (bm === 'aivsai') msg = t('modal-ai-x-wins');
                else if (bm === 'pvp') msg = t('modal-player1-wins');
                else { msg = misereMode ? t('modal-misere-you-win') : t('modal-you-win'); title = msg; }
                updateStatus(title, 'x');
            } else {
                title = getWinnerText(winner);
                icon = bm === 'aivsai' ? '⚡' : (bm === 'pvp' ? '🔥' : '🤖');
                if (bm === 'aivsai') msg = t('modal-ai-o-wins');
                else if (bm === 'pvp') msg = t('modal-player2-wins');
                else { msg = misereMode ? t('modal-misere-ai-wins') : t('modal-ai-wins'); title = msg; }
                updateStatus(title, 'o');
            }
            showModal(icon, title, msg, eloChange);
        }
        updateUndoButton();
        updateHintButton();
    }

    function getWinnerText(winner) {
        if (timerTimeoutFlag) return t('timer-out');
        const bm = getEffectiveBattleMode();
        if (bm === 'aivsai') return (winner === PLAYER_X ? t('label-player-x-ai') : t('label-player-o-ai')) + ' ' + t('modal-win');
        if (bm === 'pvp') return winner === PLAYER_X ? t('modal-player1-wins') : t('modal-player2-wins');
        if (misereMode) return winner === PLAYER_X ? t('modal-misere-you-win') : t('modal-misere-ai-wins');
        return winner === PLAYER_X ? t('modal-you-win') : t('modal-ai-wins');
    }

    function animateScore(el) {
        el.classList.add('pop');
        el.textContent = parseInt(el.textContent, 10) + 1;
        setTimeout(() => el.classList.remove('pop'), 200);
    }

    function resetGame() {
        clearTimeout(aiTimer); aiTimer = null;
        clearTimeout(replayTimer); replayTimer = null;
        stopTimer();
        initTimers();
        editorGame = false;
        gameActive = true;
        currentPlayer = PLAYER_X;
        lastWinData = null;
        moveHistory = [];
        gameStartTime = Date.now();
        currentMoveStartTime = gameStartTime;
        boardSnapshots = [];
        playerHistory = [];
        hideModal();
        hideWinLine();
        c4WinLine.classList.remove('show');
        gomokuWinLine.classList.remove('show');
        cells.forEach(c => c.classList.remove('hint-glow'));

        if (isC4Mode()) {
            c4Board = Array(C4_ROWS).fill(null).map(() => Array(C4_COLS).fill(''));
            document.querySelectorAll('.c4-cell').forEach(cell => {
                cell.innerHTML = '';
                cell.classList.remove('disabled');
            });
            connect4Board.style.display = 'block';
            boardEl.style.display = 'none';
            gomokuBoard.style.display = 'none';
            pushBoardSnapshot();
            const bm = getEffectiveBattleMode();
            if (bm === 'pve') {
                updateStatus(getTurnText(), 'x');
                startTimer(PLAYER_X);
            } else if (bm === 'aivsai') {
                startC4AiVsAi();
            } else {
                updateStatus(getTurnText(), 'x');
                startTimer(PLAYER_X);
            }
        } else if (isGmkMode()) {
            if (currentMode === 'custom') {
                customBoard = Array(customConfig.h).fill(null).map(() => Array(customConfig.w).fill(''));
                rebuildCustomBoard();
            } else {
                gmkBoard = Array(GMK_SIZE).fill(null).map(() => Array(GMK_SIZE).fill(''));
                const neededCells = GMK_SIZE * GMK_SIZE;
                if (gomokuCellsContainer.children.length !== neededCells) {
                    buildGomokuCells();
                } else {
                    gomokuBoard.style.aspectRatio = `${GMK_SIZE} / ${GMK_SIZE}`;
                    document.querySelectorAll('.gomoku-cell').forEach(cell => {
                        cell.innerHTML = '';
                        cell.classList.remove('disabled');
                    });
                }
            }
            gomokuBoard.style.display = 'block';
            boardEl.style.display = 'none';
            connect4Board.style.display = 'none';
            pushBoardSnapshot();
            const bm = getEffectiveBattleMode();
            if (bm === 'pve') {
                updateStatus(getTurnText(), 'x');
                startTimer(PLAYER_X);
            } else if (bm === 'aivsai') {
                startGmkAiVsAi();
            } else {
                updateStatus(getTurnText(), 'x');
                startTimer(PLAYER_X);
            }
        } else {
            gameBoard = Array(9).fill('');
            cells.forEach(cell => { cell.innerHTML = ''; cell.classList.remove('disabled'); });
            boardEl.style.display = 'grid';
            connect4Board.style.display = 'none';
            gomokuBoard.style.display = 'none';
            pushBoardSnapshot();
            updateStatus(getTurnText(), 'x');
            if (battleMode === 'aivsai') startAiVsAi();
            else startTimer(PLAYER_X);
        }
        updateCellAriaLabels();
        updateUndoButton();
        updateHintButton();
    }

    function isC4Mode() {
        return currentMode === 'connect4';
    }

    function isGmkMode() {
        return currentMode === 'gomoku' || currentMode === 'custom';
    }

    /* ===== Modal ===== */
    function showModal(icon, title, msg, eloChange) {
        modalIcon.textContent = icon;
        modalTitle.textContent = title;
        modalMessage.textContent = msg;
        if (modalElo) {
            if (typeof eloChange === 'number' && settings.eloEnabled !== false) {
                const sign = eloChange > 0 ? '+' : '';
                const tier = getEloTier(eloData.current);
                modalElo.textContent = t('elo-change').replace('{change}', sign + eloChange).replace('{elo}', eloData.current) + ' · ' + tier.icon + ' ' + t('elo-tier-' + tier.id);
                modalElo.className = 'modal-elo ' + (eloChange > 0 ? 'positive' : eloChange < 0 ? 'negative' : 'neutral');
                modalElo.style.display = 'block';
            } else {
                modalElo.style.display = 'none';
                modalElo.textContent = '';
            }
        }
        lastFocusedElement = document.activeElement;
        modal.classList.add('show');
        setTimeout(() => modalBtn.focus(), 50);
    }
    function hideModal() {
        modal.classList.remove('show');
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
    }

    /* ===== Win Line ===== */
    function drawWinLine(winner) {
        const condition = getWinningConditionTTT(gameBoard, winner);
        if (!condition) return;
        lastWinData = { mode: 'ttt', winner, condition };
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

    /* ===== TTT Game Logic ===== */
    function checkWinTTT(board, player) {
        return tttWinConditions.some(cond => cond.every(i => board[i] === player));
    }
    function getWinningConditionTTT(board, player) {
        return tttWinConditions.find(cond => cond.every(i => board[i] === player)) || null;
    }
    function checkDrawTTT(board) { return board.every(cell => cell !== ''); }

    /* ===== TTT AI ===== */
    function getAiMove(board, aiPlayer) {
        if (misereMode && currentMode === 'ttt') return getBestMoveMisere(board, aiPlayer);
        const humanPlayer = aiPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        const diff = settings.difficulty;
        if (diff === 'hard') return getBestMoveGeneric(board, aiPlayer);
        if (diff === 'easy') return getEasyMoveTTT(board, aiPlayer, humanPlayer);
        return Math.random() < 0.5 ? getBestMoveGeneric(board, aiPlayer) : getEasyMoveTTT(board, aiPlayer, humanPlayer);
    }

    function getEasyMoveTTT(board, aiPlayer, humanPlayer) {
        const empties = board.map((v, i) => v === '' ? i : null).filter(v => v !== null);
        if (empties.length === 0) return -1;
        // In normal mode: try to win, then block opponent
        for (let i = 0; i < 9; i++) if (board[i] === '') {
            board[i] = aiPlayer;
            const win = checkWinTTT(board, aiPlayer);
            board[i] = '';
            if (win) return i;
        }
        for (let i = 0; i < 9; i++) if (board[i] === '') {
            board[i] = humanPlayer;
            const lose = checkWinTTT(board, humanPlayer);
            board[i] = '';
            if (lose) return i;
        }
        return empties[Math.floor(Math.random() * empties.length)];
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
        if (checkWinTTT(board, aiPlayer)) return 10 - depth;
        if (checkWinTTT(board, humanPlayer)) return depth - 10;
        if (checkDrawTTT(board)) return 0;
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

    /* ===== AI vs AI TTT ===== */
    function startAiVsAi() {
        if (!gameActive || battleMode !== 'aivsai') return;
        lockBoard(true);
        updateStatus(getTurnText(), currentPlayer === PLAYER_X ? 'x' : 'o');
        const delay = settings.animations ? 500 : 50;
        aiTimer = setTimeout(() => {
            if (!gameActive || battleMode !== 'aivsai') return;
            const move = getAiMove(gameBoard, currentPlayer);
            if (move < 0 || move > 8) { endGame(true); return; }
            makeMove(move, currentPlayer);
            if (gameActive) {
                startAiVsAi();
            } else {
                const nextDelay = settings.animations ? 1200 : 300;
                aiTimer = setTimeout(() => { if (!gameActive && battleMode === 'aivsai') resetGame(); }, nextDelay);
            }
        }, delay);
    }

    /* ===== AI vs AI Connect Four ===== */
    function startC4AiVsAi() {
        if (!gameActive || !isC4Mode()) return;
        if (getEffectiveBattleMode() !== 'aivsai') return;
        lockC4Board(true);
        updateStatus(getTurnText(), currentPlayer === PLAYER_X ? 'x' : 'o');
        const delay = settings.animations ? 500 : 60;
        aiTimer = setTimeout(() => {
            if (!gameActive || !isC4Mode()) return;
            if (getEffectiveBattleMode() !== 'aivsai') return;
            const aiCol = getC4AiMove(currentPlayer);
            if (aiCol !== -1) {
                const aiRow = getC4NextOpenRow(aiCol);
                makeC4Move(aiRow, aiCol, currentPlayer);
            } else if (gameActive) {
                endC4Game(true);
                return;
            }
            if (gameActive) {
                startC4AiVsAi();
            } else {
                const nextDelay = settings.animations ? 1200 : 300;
                aiTimer = setTimeout(() => { if (!gameActive && isC4Mode() && getEffectiveBattleMode() === 'aivsai') resetGame(); }, nextDelay);
            }
        }, delay);
    }

    /* ===== AI vs AI Gomoku / Custom ===== */
    function startGmkAiVsAi() {
        if (!gameActive || !isGmkMode()) return;
        if (getEffectiveBattleMode() !== 'aivsai') return;
        lockGmkBoard(true);
        updateStatus(getTurnText(), currentPlayer === PLAYER_X ? 'x' : 'o');
        const delay = settings.animations ? 600 : 80;
        aiTimer = setTimeout(() => {
            if (!gameActive || !isGmkMode()) return;
            if (getEffectiveBattleMode() !== 'aivsai') return;
            const aiMove = getGmkAiMove(currentPlayer);
            if (aiMove) {
                makeGmkMove(aiMove.r, aiMove.c, currentPlayer);
            } else if (gameActive) {
                endGmkGame(true);
                return;
            }
            if (gameActive) {
                startGmkAiVsAi();
            } else {
                const nextDelay = settings.animations ? 1200 : 300;
                aiTimer = setTimeout(() => { if (!gameActive && isGmkMode() && getEffectiveBattleMode() === 'aivsai') resetGame(); }, nextDelay);
            }
        }, delay);
    }

    /* ===== Changelog ===== */
    function openChangelog() {
        stopTimer();
        clearTimeout(aiTimer); aiTimer = null;
        closeDrawer(); closeHistory(); closeReplay(); closeEditor(); closeRush(); closeDaily(); closeAchievements(); closeHotkeyModal();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        if (tacticsDrawer) { closeTactics(); }
        lastFocusedElement = document.activeElement;
        renderChangelog();
        changelogModal.classList.add('show');
        setTimeout(() => {
            const focusable = changelogModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length) focusable[0].focus();
        }, 50);
    }
    function closeChangelog() {
        changelogModal.classList.remove('show');
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }

    function renderChangelog() {
        changelogBody.innerHTML = '';
        changelogData.forEach(v => {
            const block = document.createElement('div');
            block.className = 'version-block';
            const header = document.createElement('div');
            header.className = 'version-header';
            const badge = document.createElement('span');
            badge.className = 'version-badge';
            badge.textContent = 'v' + v.version;
            const date = document.createElement('span');
            date.className = 'version-date';
            date.textContent = v.date[settings.lang] || v.date.en;
            header.appendChild(badge);
            header.appendChild(date);
            const list = document.createElement('ul');
            list.className = 'version-list';
            const items = v.items[settings.lang] || v.items.en;
            items.forEach(txt => {
                const li = document.createElement('li');
                li.textContent = txt;
                list.appendChild(li);
            });
            block.appendChild(header);
            block.appendChild(list);
            changelogBody.appendChild(block);
        });
    }

    /* ===== History ===== */
    function saveGameHistory(winner, eloInfo) {
        if (moveHistory.length === 0) return;
        const record = {
            id: Date.now(),
            mode: currentMode,
            battleMode: battleMode,
            winner: winner || 'draw',
            difficulty: settings.difficulty,
            timestamp: Date.now(),
            moves: JSON.parse(JSON.stringify(moveHistory)),
            totalMoves: moveHistory.length,
            customConfig: currentMode === 'custom' ? { w: customConfig.w, h: customConfig.h, winLen: customConfig.winLen } : null,
            misere: misereMode,
            elo: eloInfo || null
        };
        let history = loadHistory();
        history.unshift(record);
        if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
        try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); } catch (e) {}
    }

    function loadHistory() {
        try {
            const raw = localStorage.getItem(HISTORY_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) { return []; }
    }

    function deleteHistoryItem(id) {
        if (!confirm(t('history-confirm-delete'))) return;
        let history = loadHistory();
        history = history.filter(h => h.id !== id);
        try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); } catch (e) {}
        renderHistory();
        const focusable = Array.from(historyDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
        if (focusable.length) focusable[0].focus();
    }

    function formatGameDate(ts) {
        const d = new Date(ts);
        const pad = n => n.toString().padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    function getModeLabel(mode) {
        if (mode === 'ttt') return t('mode-ttt');
        if (mode === 'connect4') return t('mode-connect4');
        if (mode === 'gomoku') return t('mode-gomoku');
        return t('mode-custom');
    }

    function getBattleLabel(bm) {
        if (bm === 'pvp') return t('mode-pvp');
        if (bm === 'aivsai') return t('mode-aivsai');
        return t('mode-pve');
    }

    function getWinnerLabel(winner, bm) {
        if (winner === 'draw') return t('label-draw');
        if (bm === 'aivsai') return winner === 'X' ? t('label-player-x-ai') : t('label-player-o-ai');
        if (bm === 'pvp') return winner === 'X' ? t('label-player-x-pvp') : t('label-player-o-pvp');
        return winner === 'X' ? t('label-player-x') : t('label-player-o');
    }

    function openHistory() {
        stopTimer();
        closeDrawer(); closeChangelog(); closeReplay(); closeEditor(); closeRush(); closeDaily(); closeAchievements(); closeHotkeyModal();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        if (tacticsDrawer) { closeTactics(); }
        lastFocusedElement = document.activeElement;
        renderHistory();
        historyDrawer.classList.add('show');
        historyOverlay.classList.add('show');
        setTimeout(() => {
            const focusable = Array.from(historyDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
            if (focusable.length) focusable[0].focus();
        }, 50);
    }

    function closeHistory() {
        historyDrawer.classList.remove('show');
        historyOverlay.classList.remove('show');
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }

    function clearHistory() {
        if (!confirm(t('history-confirm-clear'))) return;
        try { localStorage.removeItem(HISTORY_KEY); } catch (e) {}
        renderHistory();
        const focusable = Array.from(historyDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
        if (focusable.length) focusable[0].focus();
    }

    function renderHistory() {
        const history = loadHistory();
        historyList.innerHTML = '';
        if (history.length === 0) {
            historyEmpty.style.display = 'flex';
            historyList.style.display = 'none';
            clearHistoryBtn.style.display = 'none';
        } else {
            historyEmpty.style.display = 'none';
            historyList.style.display = 'flex';
            clearHistoryBtn.style.display = 'block';
            history.forEach(h => {
                const item = document.createElement('div');
                item.className = 'history-item';
                const meta = document.createElement('div');
                meta.className = 'history-item-meta';
                const modeBadge = document.createElement('span');
                modeBadge.className = 'history-mode';
                modeBadge.textContent = getModeLabel(h.mode);
                const battleBadge = document.createElement('span');
                battleBadge.className = 'history-battle';
                battleBadge.textContent = getBattleLabel(h.battleMode);
                const diffBadge = document.createElement('span');
                diffBadge.className = 'history-diff';
                diffBadge.textContent = t('diff-' + h.difficulty);
                const dateSpan = document.createElement('span');
                dateSpan.className = 'history-date';
                dateSpan.textContent = formatGameDate(h.timestamp);
                meta.appendChild(modeBadge);
                meta.appendChild(battleBadge);
                if (h.battleMode !== 'pvp') meta.appendChild(diffBadge);
                meta.appendChild(dateSpan);
                const info = document.createElement('div');
                info.className = 'history-item-info';
                const result = document.createElement('span');
                result.className = 'history-result result-' + h.winner.toLowerCase();
                result.textContent = h.winner === 'draw' ? t('label-draw') : getWinnerLabel(h.winner, h.battleMode) + ' ' + t('replay-winner');
                const moves = document.createElement('span');
                moves.className = 'history-moves';
                moves.textContent = h.totalMoves + ' ' + t('history-moves');
                info.appendChild(result);
                info.appendChild(moves);
                if (h.elo && h.battleMode === 'pve') {
                    const eloSpan = document.createElement('span');
                    eloSpan.className = 'history-elo ' + (h.elo.change > 0 ? 'positive' : h.elo.change < 0 ? 'negative' : 'neutral');
                    const sign = h.elo.change > 0 ? '+' : '';
                    eloSpan.textContent = sign + h.elo.change + ' ELO';
                    info.appendChild(eloSpan);
                }
                const actions = document.createElement('div');
                actions.className = 'history-item-actions';
                const replayBtn = document.createElement('button');
                replayBtn.className = 'btn btn-history-replay';
                replayBtn.textContent = t('history-replay');
                replayBtn.addEventListener('click', () => openReplay(h));
                const delBtn = document.createElement('button');
                delBtn.className = 'btn btn-history-delete';
                delBtn.textContent = t('history-delete');
                delBtn.addEventListener('click', () => deleteHistoryItem(h.id));
                actions.appendChild(replayBtn);
                actions.appendChild(delBtn);
                item.appendChild(meta);
                item.appendChild(info);
                item.appendChild(actions);
                historyList.appendChild(item);
            });
        }
    }

    /* ===== Replay ===== */
    function openReplay(record) {
        closeHistory(); closeDrawer(); closeChangelog(); closeEditor(); closeRush(); closeDaily(); closeAchievements(); closeHotkeyModal();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        if (tacticsDrawer) { closeTactics(); }
        clearTimeout(aiTimer); aiTimer = null;
        stopTimer();
        lastFocusedElement = document.activeElement;
        replayData = record;
        replayStep = 0;
        replayPlaying = false;
        clearTimeout(replayTimer);
        replayTimer = null;
        const modeLabel = getModeLabel(record.mode);
        const battleLabel = getBattleLabel(record.battleMode);
        replayMeta.textContent = modeLabel + ' · ' + battleLabel + ' · ' + (record.totalMoves + ' ' + t('history-moves'));
        renderReplayBoard();
        updateReplayProgress();
        replayPlay.textContent = '▶';
        replayPlay.setAttribute('aria-label', t('replay-play'));
        replayModal.classList.add('show');
        setTimeout(() => { replayClose.focus(); }, 50);
    }

    function closeReplay() {
        replayModal.classList.remove('show');
        clearTimeout(replayTimer);
        replayTimer = null;
        replayPlaying = false;
        replayData = null;
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }

    function renderReplayBoard() {
        replayBoardWrap.innerHTML = '';
        if (!replayData) return;
        const mode = replayData.mode;
        if (mode === 'ttt') {
            const board = document.createElement('div');
            board.className = 'replay-board-ttt';
            for (let i = 0; i < 9; i++) {
                const cell = document.createElement('div');
                cell.className = 'replay-cell-ttt';
                cell.dataset.index = i;
                board.appendChild(cell);
            }
            replayBoardWrap.appendChild(board);
        } else if (mode === 'connect4') {
            const board = document.createElement('div');
            board.className = 'replay-board-c4';
            for (let r = 0; r < C4_ROWS; r++) {
                for (let c = 0; c < C4_COLS; c++) {
                    const cell = document.createElement('div');
                    cell.className = 'replay-cell-c4';
                    cell.dataset.row = r;
                    cell.dataset.col = c;
                    board.appendChild(cell);
                }
            }
            replayBoardWrap.appendChild(board);
        } else {
            const cfg = replayData.customConfig || { w: GMK_SIZE, h: GMK_SIZE };
            const board = document.createElement('div');
            board.className = 'replay-board-gmk';
            board.style.gridTemplateColumns = `repeat(${cfg.w}, 1fr)`;
            board.style.gridTemplateRows = `repeat(${cfg.h}, 1fr)`;
            for (let r = 0; r < cfg.h; r++) {
                for (let c = 0; c < cfg.w; c++) {
                    const cell = document.createElement('div');
                    cell.className = 'replay-cell-gmk';
                    cell.dataset.row = r;
                    cell.dataset.col = c;
                    board.appendChild(cell);
                }
            }
            replayBoardWrap.appendChild(board);
        }
    }

    function executeReplayStep(i, animate = true) {
        if (!replayData || i < 0 || i >= replayData.moves.length) return;
        const move = replayData.moves[i];
        const mode = replayData.mode;
        if (mode === 'ttt') {
            const cell = replayBoardWrap.querySelector(`.replay-cell-ttt[data-index="${move.index}"]`);
            if (cell) {
                cell.innerHTML = '';
                cell.appendChild(createMarkSvg(move.player));
                if (animate) cell.classList.add('replay-pop');
            }
        } else if (mode === 'connect4') {
            const cell = replayBoardWrap.querySelector(`.replay-cell-c4[data-row="${move.row}"][data-col="${move.col}"]`);
            if (cell) {
                const piece = document.createElement('div');
                piece.className = 'replay-c4-piece ' + (move.player === PLAYER_X ? 'x-piece' : 'o-piece');
                if (!animate) piece.style.animation = 'none';
                cell.appendChild(piece);
            }
        } else {
            const cfg = replayData.customConfig || { w: GMK_SIZE, h: GMK_SIZE };
            const cell = replayBoardWrap.querySelector(`.replay-cell-gmk[data-row="${move.row}"][data-col="${move.col}"]`);
            if (cell) {
                const piece = document.createElement('div');
                piece.className = 'replay-gmk-piece ' + (move.player === PLAYER_X ? 'x-piece' : 'o-piece');
                if (!animate) piece.style.animation = 'none';
                cell.appendChild(piece);
            }
        }
    }

    function resetReplay() {
        if (!replayData) return;
        replayStep = 0;
        replayPlaying = false;
        clearTimeout(replayTimer);
        replayTimer = null;
        replayPlay.textContent = '▶';
        replayPlay.setAttribute('aria-label', t('replay-play'));
        renderReplayBoard();
        updateReplayProgress();
    }

    function stepReplayForward() {
        if (!replayData || replayStep >= replayData.moves.length) return;
        executeReplayStep(replayStep, true);
        replayStep++;
        updateReplayProgress();
        if (replayStep >= replayData.moves.length && replayPlaying) {
            replayPlaying = false;
            replayPlay.textContent = '▶';
            replayPlay.setAttribute('aria-label', t('replay-play'));
            clearTimeout(replayTimer);
            replayTimer = null;
        }
    }

    function stepReplayBackward() {
        if (!replayData || replayStep <= 0) return;
        replayPlaying = false;
        clearTimeout(replayTimer);
        replayTimer = null;
        replayPlay.textContent = '▶';
        replayPlay.setAttribute('aria-label', t('replay-play'));
        replayStep--;
        // Re-render board up to current step
        renderReplayBoard();
        for (let i = 0; i < replayStep; i++) {
            executeReplayStep(i, false);
        }
        updateReplayProgress();
    }

    function toggleReplayPlay() {
        if (!replayData) return;
        if (replayPlaying) {
            replayPlaying = false;
            replayPlay.textContent = '▶';
            replayPlay.setAttribute('aria-label', t('replay-play'));
            clearTimeout(replayTimer);
            replayTimer = null;
        } else {
            if (replayStep >= replayData.moves.length) {
                resetReplay();
            }
            replayPlaying = true;
            replayPlay.textContent = '⏸';
            replayPlay.setAttribute('aria-label', t('replay-pause'));
            advanceReplay();
        }
    }

    function advanceReplay() {
        if (!replayPlaying || !replayData) return;
        if (replayStep >= replayData.moves.length) {
            replayPlaying = false;
            replayPlay.textContent = '▶';
            replayPlay.setAttribute('aria-label', t('replay-play'));
            replayTimer = null;
            return;
        }
        executeReplayStep(replayStep, true);
        replayStep++;
        updateReplayProgress();
        if (replayStep < replayData.moves.length) {
            replayTimer = setTimeout(advanceReplay, 800);
        } else {
            replayPlaying = false;
            replayPlay.textContent = '▶';
            replayPlay.setAttribute('aria-label', t('replay-play'));
            replayTimer = null;
        }
    }

    function updateReplayProgress() {
        if (!replayData) return;
        replayStepText.textContent = replayStep + ' / ' + replayData.moves.length;
        const pct = replayData.moves.length > 0 ? (replayStep / replayData.moves.length) * 100 : 0;
        replayBarFill.style.width = pct + '%';
    }

    /* ===== Undo System ===== */
    function pushBoardSnapshot() {
        if (isC4Mode()) {
            boardSnapshots.push(c4Board.map(r => [...r]));
        } else if (isGmkMode()) {
            const board = getActiveGmkBoard();
            boardSnapshots.push(board.map(r => [...r]));
        } else {
            boardSnapshots.push([...gameBoard]);
        }
    }

    function restoreBoardFromSnapshot() {
        const snapshot = boardSnapshots[boardSnapshots.length - 1];
        if (isC4Mode()) {
            c4Board = snapshot.map(r => [...r]);
            document.querySelectorAll('.c4-cell').forEach((cell, i) => {
                cell.innerHTML = '';
                cell.classList.remove('disabled');
                const r = Math.floor(i / C4_COLS);
                const c = i % C4_COLS;
                if (c4Board[r][c]) {
                    const piece = document.createElement('div');
                    piece.className = 'c4-piece ' + (c4Board[r][c] === PLAYER_X ? 'x-piece' : 'o-piece');
                    cell.appendChild(piece);
                    cell.classList.add('disabled');
                    cell.setAttribute('aria-label', c4Board[r][c] === PLAYER_X ? t('cell-x') : t('cell-o'));
                    cell.setAttribute('tabindex', '-1');
                } else {
                    const col = parseInt(cell.dataset.col, 10);
                    const cellRow = parseInt(cell.dataset.row, 10);
                    const nextRow = getC4NextOpenRow(col);
                    if (nextRow !== -1 && cellRow !== nextRow) cell.classList.add('disabled');
                    cell.setAttribute('aria-label', t('aria-cell-empty'));
                    cell.setAttribute('tabindex', '0');
                }
            });
        } else if (isGmkMode()) {
            const board = getActiveGmkBoard();
            const cfg = getActiveGmkConfig();
            for (let r = 0; r < cfg.h; r++) {
                for (let c = 0; c < cfg.w; c++) {
                    board[r][c] = snapshot[r][c];
                }
            }
            document.querySelectorAll('.gomoku-cell').forEach((cell, i) => {
                cell.innerHTML = '';
                cell.classList.remove('disabled');
                const r = Math.floor(i / cfg.w);
                const c = i % cfg.w;
                if (board[r][c]) {
                    const piece = document.createElement('div');
                    piece.className = 'gomoku-piece ' + (board[r][c] === PLAYER_X ? 'x-piece' : 'o-piece');
                    cell.appendChild(piece);
                    cell.classList.add('disabled');
                    cell.setAttribute('aria-label', board[r][c] === PLAYER_X ? t('cell-x') : t('cell-o'));
                    cell.setAttribute('tabindex', '-1');
                } else {
                    cell.setAttribute('aria-label', t('aria-cell-empty'));
                    cell.setAttribute('tabindex', '0');
                }
            });
        } else {
            gameBoard = [...snapshot];
            cells.forEach((cell, i) => {
                cell.innerHTML = '';
                cell.classList.remove('disabled');
                if (gameBoard[i]) {
                    cell.appendChild(createMarkSvg(gameBoard[i]));
                    cell.classList.add('disabled');
                    cell.setAttribute('aria-label', gameBoard[i] === PLAYER_X ? t('cell-x') : t('cell-o'));
                    cell.setAttribute('tabindex', '-1');
                } else {
                    cell.setAttribute('aria-label', t('aria-cell-empty'));
                    cell.setAttribute('tabindex', '0');
                }
            });
        }
    }

    function undoMove() {
        if (undoBtn.classList.contains('disabled')) return;
        if (battleMode === 'aivsai') return;
        if (!gameActive) return;

        if (battleMode === 'pve') {
            if (playerHistory.length === 0) return;
            const lastPlayer = playerHistory[playerHistory.length - 1];
            if (lastPlayer === PLAYER_X) {
                // Last move was by player, undo one step
                if (boardSnapshots.length <= 1) return;
                boardSnapshots.pop();
                playerHistory.pop();
                moveHistory.pop();
                clearTimeout(aiTimer);
                aiTimer = null;
                restoreBoardFromSnapshot();
                currentPlayer = PLAYER_X;
            } else {
                // Last move was by AI, undo two steps (AI + player)
                if (boardSnapshots.length <= 2) return;
                boardSnapshots.pop();
                playerHistory.pop();
                moveHistory.pop();
                boardSnapshots.pop();
                playerHistory.pop();
                moveHistory.pop();
                restoreBoardFromSnapshot();
                currentPlayer = PLAYER_X;
            }
        } else {
            // PvP
            if (boardSnapshots.length <= 1) return;
            boardSnapshots.pop();
            playerHistory.pop();
            moveHistory.pop();
            restoreBoardFromSnapshot();
            currentPlayer = playerHistory.length > 0
                ? (playerHistory[playerHistory.length - 1] === PLAYER_X ? PLAYER_O : PLAYER_X)
                : PLAYER_X;
        }

        gameActive = true;
        lastWinData = null;
        hideModal();
        hideWinLine();
        c4WinLine.classList.remove('show');
        gomokuWinLine.classList.remove('show');
        cells.forEach(c => c.classList.remove('hint-glow'));
        currentMoveStartTime = Date.now();
        updateStatus(getTurnText(), currentPlayer === PLAYER_X ? 'x' : 'o');
        switchTimerTo(currentPlayer);
        updateCellAriaLabels();
        updateUndoButton();
        updateHintButton();
        playUndoSound();
    }

    function updateUndoButton() {
        if (!undoBtn) return;
        const canUndo = battleMode !== 'aivsai' && boardSnapshots.length > 1;
        undoBtn.classList.toggle('disabled', !canUndo);
        undoBtn.setAttribute('aria-disabled', String(!canUndo));
        const count = Math.max(0, boardSnapshots.length - 1);
        const tooltip = document.getElementById('undo-tooltip');
        if (tooltip) tooltip.textContent = t('undo-tooltip').replace('{count}', count);
        undoBtn.setAttribute('aria-label', t('aria-undo') + (count > 0 ? ' (' + count + ')' : ''));
    }
    function updateHintButton() {
        if (!hintBtn) return;
        const bm = getEffectiveBattleMode();
        const show = bm === 'pve' && currentMode === 'ttt' && gameActive && currentPlayer === PLAYER_X;
        hintBtn.style.display = show ? 'inline-flex' : 'none';
        const canHint = show;
        hintBtn.classList.toggle('disabled', !canHint);
        hintBtn.setAttribute('aria-disabled', String(!canHint));
    }

    function getBestMove(board, player) {
        if (misereMode && currentMode === 'ttt') return getBestMoveMisere(board, player);
        const opponent = player === PLAYER_X ? PLAYER_O : PLAYER_X;
        const empty = board.map((v, i) => v === '' ? i : -1).filter(i => i !== -1);
        if (empty.length === 0) return -1;
        if (checkWinForBoard(board, player) || checkWinForBoard(board, opponent)) return -1;
        // Check for immediate win
        for (const i of empty) {
            board[i] = player;
            const win = checkWinForBoard(board, player);
            board[i] = '';
            if (win) return i;
        }
        // Block opponent's immediate win
        for (const i of empty) {
            board[i] = opponent;
            const win = checkWinForBoard(board, opponent);
            board[i] = '';
            if (win) return i;
        }
        // Fork opportunity
        for (const i of empty) {
            board[i] = player;
            let wins = 0;
            for (const j of empty) {
                if (j === i) continue;
                board[j] = player;
                if (checkWinForBoard(board, player)) wins++;
                board[j] = '';
            }
            board[i] = '';
            if (wins >= 2) return i;
        }
        // Block opponent fork
        for (const i of empty) {
            board[i] = opponent;
            let wins = 0;
            for (const j of empty) {
                if (j === i) continue;
                board[j] = opponent;
                if (checkWinForBoard(board, opponent)) wins++;
                board[j] = '';
            }
            board[i] = '';
            if (wins >= 2) return i;
        }
        // Center
        if (board[4] === '') return 4;
        // Opposite corner
        const corners = [0, 2, 6, 8];
        for (const c of corners) {
            const opp = 8 - c;
            if (board[c] === opponent && board[opp] === '') return opp;
        }
        // Empty corner
        for (const c of corners) if (board[c] === '') return c;
        // Empty side
        const sides = [1, 3, 5, 7];
        for (const s of sides) if (board[s] === '') return s;
        return empty[0];
    }

    function getBestMoveMisere(board, player) {
        const opponent = player === PLAYER_X ? PLAYER_O : PLAYER_X;
        const empty = board.map((v, i) => v === '' ? i : -1).filter(i => i !== -1);
        if (empty.length === 0) return -1;
        let bestMove = -1, bestScore = -Infinity;
        for (const i of empty) {
            board[i] = player;
            const score = minimaxMisere(board, 0, false, player, opponent);
            board[i] = '';
            if (score > bestScore) { bestScore = score; bestMove = i; }
        }
        return bestMove;
    }
    function minimaxMisere(board, depth, isMaximizing, player, opponent) {
        // Score is always from the AI's perspective:
        // AI wins (forms a line) = AI loses in Misère = BAD for AI = negative
        // Opponent wins (forms a line) = opponent loses in Misère = GOOD for AI = positive
        if (checkWinForBoard(board, player)) return -10 + depth;
        if (checkWinForBoard(board, opponent)) return 10 - depth;
        if (board.every(c => c !== '')) return 0;
        const empty = board.map((v, i) => v === '' ? i : -1).filter(i => i !== -1);
        if (isMaximizing) {
            let bestScore = -Infinity;
            for (const i of empty) {
                board[i] = player;
                bestScore = Math.max(bestScore, minimaxMisere(board, depth + 1, false, player, opponent));
                board[i] = '';
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (const i of empty) {
                board[i] = opponent;
                bestScore = Math.min(bestScore, minimaxMisere(board, depth + 1, true, player, opponent));
                board[i] = '';
            }
            return bestScore;
        }
    }

    function checkWinForBoard(board, player) {
        for (const [a, b, c] of tttWinConditions) {
            if (board[a] === player && board[b] === player && board[c] === player) return true;
        }
        return false;
    }

    function getHint() {
        if (isAnyModalOpen()) return;
        if (getEffectiveBattleMode() !== 'pve' || currentMode !== 'ttt' || !gameActive || currentPlayer !== PLAYER_X) return;
        if (document.querySelector('.hint-glow')) return; // Already showing
        const move = getBestMove([...gameBoard], PLAYER_X);
        if (move === -1) return;
        // Track hint usage
        if (achievementStats) {
            achievementStats.hintsUsed = (achievementStats.hintsUsed || 0) + 1;
            saveAchievements();
            checkSingleAchievement('first_hint');
        }
        const cell = cells[move];
        if (!cell) return;
        cell.classList.add('hint-glow');
        if (a11yAnnouncer) { a11yAnnouncer.textContent = t('hint-shown'); setTimeout(() => { if (a11yAnnouncer) a11yAnnouncer.textContent = ''; }, 1500); }
        const onAnimEnd = () => {
            cell.classList.remove('hint-glow');
            cell.removeEventListener('animationend', onAnimEnd);
        };
        cell.addEventListener('animationend', onAnimEnd);
    }

    /* ===== Achievement System ===== */
    function getDefaultAchievementStats() {
        return {
            totalGames: 0,
            totalDraws: 0,
            currentStreak: 0,
            winsByMode: { ttt: 0, connect4: 0, gomoku: 0, custom: 0 },
            hardWinsByMode: { ttt: 0, connect4: 0, gomoku: 0, custom: 0 },
            languagesUsed: [],
            colorsUsed: [],
            soundsUsed: [],
            boardThemesUsed: [],
            hintsUsed: 0,
            modesPlayed: [],
            battlesPlayed: [],
            fastestWin: null,
            misereWins: 0,
            misereModesWon: [],
            misereCurrentStreak: 0,
        };
    }

    function loadAchievements() {
        try {
            const rawStats = localStorage.getItem(ACHIEVEMENT_STATS_KEY);
            const rawState = localStorage.getItem(ACHIEVEMENT_KEY);
            if (rawStats) {
                const parsed = JSON.parse(rawStats);
                if (parsed && typeof parsed === 'object') {
                    achievementStats = { ...getDefaultAchievementStats(), ...parsed };
                }
            } else {
                achievementStats = getDefaultAchievementStats();
            }
            if (rawState) {
                const parsed = JSON.parse(rawState);
                if (parsed && typeof parsed === 'object') achievementState = parsed;
                else achievementState = {};
            } else {
                achievementState = {};
            }
        } catch (e) {
            achievementStats = getDefaultAchievementStats();
            achievementState = {};
        }
    }

    function saveAchievements() {
        try {
            localStorage.setItem(ACHIEVEMENT_STATS_KEY, JSON.stringify(achievementStats));
            localStorage.setItem(ACHIEVEMENT_KEY, JSON.stringify(achievementState));
        } catch (e) {}
    }

    const achievementDefs = [
        { id: 'daily_first', icon: '📅', category: 'explorer', getProgress: () => (dailyProgress.history || []).length >= 1 ? 1 : 0, target: 1 },
        { id: 'daily_streak_7', icon: '🔥', category: 'explorer', getProgress: () => (dailyProgress.streak || 0) >= 7 ? 1 : 0, target: 1 },
        { id: 'daily_streak_30', icon: '👑', category: 'master', getProgress: () => (dailyProgress.streak || 0) >= 30 ? 1 : 0, target: 1 },
        { id: 'rush_first', icon: '⚡', category: 'explorer', getProgress: () => (rushProgress.totalPlayed || 0) >= 1 ? 1 : 0, target: 1 },
        { id: 'rush_score_10', icon: '⚡', category: 'explorer', getProgress: () => (rushProgress.bestScore || 0) >= 10 ? 1 : 0, target: 1 },
        { id: 'rush_score_20', icon: '⚡', category: 'master', getProgress: () => (rushProgress.bestScore || 0) >= 20 ? 1 : 0, target: 1 },
        { id: 'rush_streak_5', icon: '🔥', category: 'explorer', getProgress: () => (rushProgress.bestStreak || 0) >= 5 ? 1 : 0, target: 1 },
        { id: 'editor_first', icon: '✏️', category: 'explorer', getProgress: () => (achievementState.editor_first || false) ? 1 : 0, target: 1 },
        { id: 'tactic_first', icon: '🧩', category: 'explorer', getProgress: () => (tacticsProgress.completed || []).length >= 1 ? 1 : 0, target: 1 },
        { id: 'tactic_all_easy', icon: '🎯', category: 'explorer', getProgress: () => {
            const done = tacticsProgress.completed || [];
            const easyIds = tacticsDB.filter(t => t.difficulty === 'easy').map(t => t.id);
            return easyIds.every(id => done.includes(id)) ? 1 : 0;
        }, target: 1 },
        { id: 'tactic_streak_3', icon: '🔥', category: 'explorer', getProgress: () => (tacticsProgress.bestStreak || 0) >= 3 ? 1 : 0, target: 1 },
        { id: 'first_win_ttt', icon: '🏆', category: 'victory', getProgress: (s) => s.winsByMode.ttt >= 1 ? 1 : 0, target: 1 },
        { id: 'first_win_c4', icon: '🏆', category: 'victory', getProgress: (s) => s.winsByMode.connect4 >= 1 ? 1 : 0, target: 1 },
        { id: 'first_win_gmk', icon: '🏆', category: 'victory', getProgress: (s) => s.winsByMode.gomoku >= 1 ? 1 : 0, target: 1 },
        { id: 'first_win_custom', icon: '🏆', category: 'victory', getProgress: (s) => s.winsByMode.custom >= 1 ? 1 : 0, target: 1 },
        { id: 'beat_hard', icon: '🎯', category: 'victory', getProgress: (s, r) => (r.bm === 'pve' && r.winner === 'X' && r.difficulty === 'hard') ? 1 : 0, target: 1 },
        { id: 'streak_3', icon: '🔥', category: 'victory', getProgress: (s, r) => (r.bm === 'pve' && r.winner === 'X' && s.currentStreak >= 3) ? 1 : 0, target: 1 },
        { id: 'streak_5', icon: '⚡', category: 'victory', getProgress: (s, r) => (r.bm === 'pve' && r.winner === 'X' && s.currentStreak >= 5) ? 1 : 0, target: 1 },
        { id: 'streak_10', icon: '👑', category: 'victory', getProgress: (s, r) => (r.bm === 'pve' && r.winner === 'X' && s.currentStreak >= 10) ? 1 : 0, target: 1 },
        { id: 'draw_master', icon: '🤝', category: 'victory', getProgress: (s) => Math.min(s.totalDraws, 10), target: 10 },
        { id: 'pvp_first', icon: '🎮', category: 'victory', getProgress: (s, r) => (r.bm === 'pvp' && r.winner === 'X') ? 1 : 0, target: 1 },
        { id: 'aivsai_first', icon: '🤖', category: 'victory', getProgress: (s, r) => r.bm === 'aivsai' ? 1 : 0, target: 1 },
        { id: 'all_languages', icon: '🌍', category: 'explorer', getProgress: (s) => Math.min(s.languagesUsed.length, 10), target: 10 },
        { id: 'all_colors', icon: '🎨', category: 'explorer', getProgress: (s) => Math.min(s.colorsUsed.length, 10), target: 10 },
        { id: 'all_sounds', icon: '🎵', category: 'explorer', getProgress: (s) => Math.min(s.soundsUsed.length, 12), target: 12 },
        { id: 'theme_explorer', icon: '🎨', category: 'explorer', getProgress: (s) => Math.min(s.boardThemesUsed.length, 5), target: 5 },
        { id: 'first_hint', icon: '💡', category: 'explorer', getProgress: (s) => s.hintsUsed > 0 ? 1 : 0, target: 1 },
        { id: 'all_modes', icon: '🔢', category: 'explorer', getProgress: (s) => Math.min(s.modesPlayed.length, 4), target: 4 },
        { id: 'all_battles', icon: '⚔️', category: 'explorer', getProgress: (s) => Math.min(s.battlesPlayed.length, 3), target: 3 },
        { id: 'ttt_master', icon: '🧠', category: 'master', getProgress: (s) => Math.min(s.winsByMode.ttt, 50), target: 50 },
        { id: 'c4_master', icon: '🔴', category: 'master', getProgress: (s) => Math.min(s.winsByMode.connect4, 50), target: 50 },
        { id: 'gmk_master', icon: '⚫', category: 'master', getProgress: (s) => Math.min(s.winsByMode.gomoku, 50), target: 50 },
        { id: 'custom_master', icon: '📐', category: 'master', getProgress: (s) => Math.min(s.winsByMode.custom, 50), target: 50 },
        { id: 'speed_run', icon: '⏱️', category: 'master', getProgress: (s, r) => (r.bm === 'pve' && r.winner === 'X' && r.duration <= 30000) ? 1 : 0, target: 1 },
        { id: 'perfect_opening', icon: '🏅', category: 'master', getProgress: (s, r) => (r.mode === 'ttt' && r.bm === 'pve' && r.winner === 'X' && r.firstMoveIndex === 4) ? 1 : 0, target: 1 },
        { id: 'centurion', icon: '🔄', category: 'master', getProgress: (s) => Math.min(s.totalGames, 100), target: 100 },
        { id: 'grandmaster', icon: '💎', category: 'master', getProgress: (s) => (s.hardWinsByMode.ttt >= 1 && s.hardWinsByMode.connect4 >= 1 && s.hardWinsByMode.gomoku >= 1 && s.hardWinsByMode.custom >= 1) ? 1 : 0, target: 1 },
        { id: 'elo_1400', icon: '🥉', category: 'victory', getProgress: () => eloData.current >= 1400 ? 1 : 0, target: 1 },
        { id: 'elo_1800', icon: '🥇', category: 'master', getProgress: () => eloData.current >= 1800 ? 1 : 0, target: 1 },
        { id: 'elo_2200', icon: '👑', category: 'master', getProgress: () => eloData.current >= 2200 ? 1 : 0, target: 1 },
        { id: 'elo_streak_5', icon: '🔥', category: 'victory', getProgress: () => eloData.streak >= 5 ? 1 : 0, target: 1 },
        { id: 'misere_first', icon: '↻', category: 'explorer', getProgress: (s) => (s.misereWins || 0) >= 1 ? 1 : 0, target: 1 },
        { id: 'misere_streak_3', icon: '🔥', category: 'victory', getProgress: (s) => (s.misereCurrentStreak || 0) >= 3 ? 1 : 0, target: 1 },
        { id: 'misere_all_modes', icon: '🎯', category: 'master', getProgress: (s) => Math.min(s.misereModesWon ? s.misereModesWon.length : 0, 4), target: 4 },
        { id: 'misere_hard', icon: '💀', category: 'master', getProgress: (s, r) => r.misereMode && r.bm === 'pve' && r.winner === 'X' && r.difficulty === 'hard' ? 1 : 0, target: 1 },
    ];

    function trackAchievementSetting(type, value) {
        if (!achievementStats) return;
        const arr = type === 'lang' ? achievementStats.languagesUsed :
            type === 'color' ? achievementStats.colorsUsed :
            type === 'sound' ? achievementStats.soundsUsed :
            type === 'theme' ? achievementStats.boardThemesUsed : null;
        if (arr && !arr.includes(value)) {
            arr.push(value);
            saveAchievements();
            // Re-check explorer achievements immediately
            checkExplorerAchievements();
        }
    }

    function checkExplorerAchievements() {
        const newlyUnlocked = [];
        for (const def of achievementDefs) {
            if (def.category !== 'explorer') continue;
            const state = achievementState[def.id] || { unlocked: false, progress: 0, unlockedAt: null };
            if (state.unlocked) continue;
            const progress = def.getProgress(achievementStats, {});
            if (progress >= def.target) {
                state.unlocked = true;
                state.progress = progress;
                state.unlockedAt = Date.now();
                achievementState[def.id] = state;
                newlyUnlocked.push(def);
            } else {
                state.progress = progress;
                achievementState[def.id] = state;
            }
        }
        if (newlyUnlocked.length > 0) {
            saveAchievements();
            newlyUnlocked.forEach((def, i) => setTimeout(() => showAchievementToast(def), i * 600));
        }
    }

    function updateAchievementStats(result) {
        const s = achievementStats;
        s.totalGames++;
        if (!s.modesPlayed.includes(result.mode)) s.modesPlayed.push(result.mode);
        if (!s.battlesPlayed.includes(result.bm)) s.battlesPlayed.push(result.bm);

        if (result.winner === null) {
            s.totalDraws++;
            s.currentStreak = 0;
            s.misereCurrentStreak = 0;
        } else if (result.bm === 'pve' && result.winner === 'X') {
            s.currentStreak++;
            s.winsByMode[result.mode] = (s.winsByMode[result.mode] || 0) + 1;
            if (result.difficulty === 'hard') {
                s.hardWinsByMode[result.mode] = (s.hardWinsByMode[result.mode] || 0) + 1;
            }
            if (!s.fastestWin || result.duration < s.fastestWin) {
                s.fastestWin = result.duration;
            }
            if (result.misereMode) {
                s.misereWins = (s.misereWins || 0) + 1;
                if (!s.misereModesWon.includes(result.mode)) s.misereModesWon.push(result.mode);
                s.misereCurrentStreak = (s.misereCurrentStreak || 0) + 1;
            } else {
                s.misereCurrentStreak = 0;
            }
        } else {
            s.currentStreak = 0;
            s.misereCurrentStreak = 0;
        }
    }

    function checkAchievements(result) {
        updateAchievementStats(result);
        const newlyUnlocked = [];
        for (const def of achievementDefs) {
            const state = achievementState[def.id] || { unlocked: false, progress: 0, unlockedAt: null };
            if (state.unlocked) continue;
            const progress = def.getProgress(achievementStats, result);
            if (progress >= def.target) {
                state.unlocked = true;
                state.progress = progress;
                state.unlockedAt = Date.now();
                achievementState[def.id] = state;
                newlyUnlocked.push(def);
            } else {
                state.progress = progress;
                achievementState[def.id] = state;
            }
        }
        saveAchievements();
        newlyUnlocked.forEach((def, i) => setTimeout(() => showAchievementToast(def), i * 600));
    }

    function formatAchievementDate(ts) {
        const d = new Date(ts);
        const pad = n => n.toString().padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    }

    function renderAchievements() {
        if (!achievementsBody) return;
        const unlockedCount = achievementDefs.filter(d => (achievementState[d.id] || {}).unlocked).length;
        const totalCount = achievementDefs.length;

        let html = '';

        // Summary
        html += `<div class="achievement-summary">
            <div class="achievement-summary-card">
                <div class="value">${unlockedCount}/${totalCount}</div>
                <div class="label">${t('achievements-total')}</div>
            </div>
            <div class="achievement-summary-card">
                <div class="value">${Math.round((unlockedCount / totalCount) * 100)}%</div>
                <div class="label">${t('achievements-completed')}</div>
            </div>
        </div>`;

        const categories = ['victory', 'explorer', 'master'];
        const catLabels = { victory: 'cat-victory', explorer: 'cat-explorer', master: 'cat-master' };

        for (const cat of categories) {
            const items = achievementDefs.filter(d => d.category === cat);
            html += `<div class="achievement-category">
                <div class="achievement-category-title">${t(catLabels[cat])}</div>`;
            for (const def of items) {
                const state = achievementState[def.id] || { unlocked: false, progress: 0 };
                const isUnlocked = state.unlocked;
                const progress = isUnlocked ? def.target : (state.progress || 0);
                const pct = def.target > 1 ? Math.round((progress / def.target) * 100) : (isUnlocked ? 100 : 0);
                html += `<div class="achievement-item ${isUnlocked ? 'unlocked' : 'locked'}">
                    <div class="achievement-icon">${def.icon}</div>
                    <div class="achievement-info">
                        <div class="achievement-name">${t('ach-' + def.id.replace(/_/g, '-'))}</div>
                        <div class="achievement-desc">${t('ach-' + def.id.replace(/_/g, '-') + '-desc')}</div>`;
                if (def.target > 1) {
                    html += `<div class="achievement-progress-wrap">
                        <div class="achievement-progress-bar"><div class="achievement-progress-fill" style="width:${pct}%"></div></div>
                        <div class="achievement-progress-text">${progress}/${def.target}</div>
                    </div>`;
                }
                if (isUnlocked && state.unlockedAt) {
                    html += `<div class="achievement-unlock-date">${formatAchievementDate(state.unlockedAt)}</div>`;
                }
                html += `</div></div>`;
            }
            html += `</div>`;
        }

        achievementsBody.innerHTML = html;
    }

    function openAchievements() {
        stopTimer();
        closeDrawer(); closeChangelog(); closeHistory(); closeReplay(); closeEditor(); closeRush(); closeDaily(); closeAchievements(); closeHotkeyModal();
        if (modal) modal.classList.remove('show');
        if (tacticsModal) { tacticsModal.classList.remove('show'); resetTacticModalState(); }
        if (tacticsDrawer) { closeTactics(); }
        lastFocusedElement = document.activeElement;
        renderAchievements();
        achievementsDrawer.classList.add('show');
        achievementsOverlay.classList.add('show');
        setTimeout(() => {
            const focusable = Array.from(achievementsDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
            if (focusable.length) focusable[0].focus();
        }, 50);
    }

    function closeAchievements() {
        achievementsDrawer.classList.remove('show');
        achievementsOverlay.classList.remove('show');
        if (lastFocusedElement && lastFocusedElement.offsetParent !== null) { lastFocusedElement.focus(); } lastFocusedElement = null;
        resumeTimerIfGameActive();
    }

    function showAchievementToast(def) {
        if (!toastContainer) return;
        playAchievementSound();
        const toast = document.createElement('div');
        toast.className = 'achievement-toast';
        toast.innerHTML = `
            <div class="achievement-toast-icon">${def.icon}</div>
            <div class="achievement-toast-text">
                <div class="achievement-toast-title">${t('achievement-unlocked')}</div>
                <div class="achievement-toast-name">${t('ach-' + def.id.replace(/_/g, '-'))}</div>
            </div>
        `;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('out');
            setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 400);
        }, 3500);
    }

    function initAchievements() {
        loadAchievements();
        // Track initial settings
        trackAchievementSetting('lang', settings.lang);
        trackAchievementSetting('color', settings.accentColor);
        trackAchievementSetting('sound', settings.soundStyle);
    }

    init();
})();
