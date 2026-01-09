const ALL_PLAYERS_DB = [
    { name: "Aaron Finch", team: "AUS", pos: "Batsman", market: "14.5", img: "player_images/aaron_finch.jpg" },
    { name: "Adam Zampa", team: "AUS", pos: "Spinner", market: "12.0", img: "player_images/adam_zampa.jpg" },
    { name: "Adil Rashid", team: "ENG", pos: "Spinner", market: "11.5", img: "player_images/adil_rashid.jpg" },
    { name: "Alex Carey", team: "AUS", pos: "WK-Batsman", market: "10.0", img: "player_images/alex_carey.jpg" },
    { name: "Andre Russell", team: "WI", pos: "All-rounder", market: "18.5", img: "player_images/andre_russell.jpg" },
    { name: "Angelo Mathews", team: "SL", pos: "All-rounder", market: "11.0", img: "player_images/angelo_mathews.jpg" },
    { name: "Anrich Nortje", team: "SA", pos: "Pacer", market: "13.5", img: "player_images/anrich_nortje.jpg" },
    { name: "Avishka Fernando", team: "SL", pos: "Batsman", market: "10.0", img: "player_images/avishka_fernando.jpg" },
    { name: "Babar Azam", team: "PAK", pos: "Batsman", market: "19.0", img: "player_images/babar_azam.jpg" },
    { name: "Ben Stokes", team: "ENG", pos: "All-rounder", market: "20.5", img: "player_images/ben_stokes.jpg" },
    { name: "Bhuvneshwar Kumar", team: "IND", pos: "Pacer", market: "13.0", img: "player_images/bhuvneshwar_kumar.jpg" },
    { name: "Chris Morris", team: "SA", pos: "All-rounder", market: "15.0", img: "player_images/chris_morris.jpg" },
    { name: "Dale Steyn", team: "SA", pos: "Pacer", market: "12.5", img: "player_images/dale_steyn.jpg" },
    { name: "David Warner", team: "AUS", pos: "Batsman", market: "17.0", img: "player_images/david_warner.jpg" },
    { name: "Dinesh Karthik", team: "IND", pos: "WK-Batsman", market: "11.0", img: "player_images/dinesh_karthik.jpg" },
    { name: "Eoin Morgan", team: "ENG", pos: "Batsman", market: "14.0", img: "player_images/eoin_morgan.jpg" },
    { name: "Faf Du Plessis", team: "SA", pos: "Batsman", market: "16.0", img: "player_images/faf_du_plessis.jpg" },
    { name: "Fakhar Zaman", team: "PAK", pos: "Batsman", market: "12.0", img: "player_images/fakhar_zaman.jpg" },
    { name: "Gulbadin Naib", team: "AFG", pos: "All-rounder", market: "10.0", img: "player_images/gulbadin_naib.jpg" },
    { name: "Hardik Pandya", team: "IND", pos: "All-rounder", market: "18.5", img: "player_images/hardik_pandya.jpg" },
    { name: "Imam-Ul-Haq", team: "PAK", pos: "Batsman", market: "11.0", img: "player_images/imam-ul-haq.jpg" },
    { name: "Isuru Udana", team: "SL", pos: "Pacer", market: "10.0", img: "player_images/isuru_udana.jpg" },
    { name: "Jason Behrendorff", team: "AUS", pos: "Pacer", market: "11.0", img: "player_images/jason_behrendorff.jpg" },
    { name: "Jason Holder", team: "WI", pos: "All-rounder", market: "13.0", img: "player_images/jason_holder.jpg" },
    { name: "Jason Roy", team: "ENG", pos: "Batsman", market: "15.0", img: "player_images/jason_roy.jpg" },
    { name: "Jasprit Bumrah", team: "IND", pos: "Pacer", market: "22.5", img: "player_images/jasprit_bumrah.jpg" },
    { name: "Jeevan Mendis", team: "SL", pos: "All-rounder", market: "10.0", img: "player_images/jeevan_mendis.jpg" },
    { name: "Joe Root", team: "ENG", pos: "Batsman", market: "18.0", img: "player_images/joe_root.jpg" },
    { name: "Jonny Bairstow", team: "ENG", pos: "WK-Batsman", market: "16.0", img: "player_images/jonny_bairstow.jpg" },
    { name: "Jos Buttler", team: "ENG", pos: "WK-Batsman", market: "19.5", img: "player_images/jos_buttler.jpg" },
    { name: "JP Duminy", team: "SA", pos: "All-rounder", market: "11.0", img: "player_images/jp_duminy.jpg" },
    { name: "K.L. Rahul", team: "IND", pos: "WK-Batsman", market: "17.5", img: "player_images/k._l._rahul.jpg" },
    { name: "Kane Williamson", team: "NZ", pos: "Batsman", market: "20.0", img: "player_images/kane_williamson.jpg" },
    { name: "Kemar Roach", team: "WI", pos: "Pacer", market: "11.5", img: "player_images/kemar_roach.jpg" },
    { name: "Kuldeep Yadav", team: "IND", pos: "Spinner", market: "14.5", img: "player_images/kuldeep_yadav.jpg" },
    { name: "Kusal Perera", team: "SL", pos: "WK-Batsman", market: "12.0", img: "player_images/kusal_perera.jpg" },
    { name: "Lasith Malinga", team: "SL", pos: "Pacer", market: "15.5", img: "player_images/lasith_malinga.jpg" },
    { name: "Lungi Ngidi", team: "SA", pos: "Pacer", market: "13.0", img: "player_images/lungi_ngidi.jpg" },
    { name: "Marcus Stoinis", team: "AUS", pos: "All-rounder", market: "14.0", img: "player_images/marcus_stoinis.jpg" },
    { name: "Mitchell Starc", team: "AUS", pos: "Pacer", market: "21.0", img: "player_images/mitchell_starc.jpg" },
    { name: "Moeen Ali", team: "ENG", pos: "All-rounder", market: "13.5", img: "player_images/moeen_ali.jpg" },
    { name: "Mohammad Hafeez", team: "PAK", pos: "All-rounder", market: "11.5", img: "player_images/mohammad_hafeez.jpg" },
    { name: "MS Dhoni", team: "IND", pos: "WK-Batsman", market: "15.0", img: "player_images/ms_dhoni.jpg" },
    { name: "Mujeeb Ur Rahman", team: "AFG", pos: "Spinner", market: "12.5", img: "player_images/mujeeb_ur_rahman.jpg" },
    { name: "Mushfiqur Rahim", team: "BAN", pos: "WK-Batsman", market: "11.0", img: "player_images/mushfiqur_rahim.jpg" },
    { name: "Nathan Coulter-Nile", team: "AUS", pos: "Pacer", market: "11.0", img: "player_images/nathan_coulter-nile.jpg" },
    { name: "Nicholas Pooran", team: "WI", pos: "WK-Batsman", market: "16.5", img: "player_images/nicholas_pooran.jpg" },
    { name: "Pat Cummins", team: "AUS", pos: "Pacer", market: "19.0", img: "player_images/pat_cummins.jpg" },
    { name: "Quinton De Kock", team: "SA", pos: "WK-Batsman", market: "18.5", img: "player_images/quinton_de_kock.jpg" },
    { name: "Rashid Khan", team: "AFG", pos: "Spinner", market: "20.0", img: "player_images/rashid_khan.jpg" },
    { name: "Ravindra Jadeja", team: "IND", pos: "All-rounder", market: "19.0", img: "player_images/ravindra_jadeja.jpg" },
    { name: "Rohit Sharma", team: "IND", pos: "Batsman", market: "21.5", img: "player_images/rohit_sharma.jpg" },
    { name: "Ross Taylor", team: "NZ", pos: "Batsman", market: "14.0", img: "player_images/ross_taylor.jpg" },
    { name: "Samiullah Shinwari", team: "AFG", pos: "All-rounder", market: "10.0", img: "player_images/samiullah_shinwari.jpg" },
    { name: "Sarfaraz Ahmed", team: "PAK", pos: "WK-Batsman", market: "11.0", img: "player_images/sarfaraz_ahmed.jpg" },
    { name: "Shadab Khan", team: "PAK", pos: "Spinner", market: "13.0", img: "player_images/shadab_khan.jpg" },
    { name: "Shakib Al Hasan", team: "BAN", pos: "All-rounder", market: "17.5", img: "player_images/shakib_al_hasan.jpg" },
    { name: "Shikhar Dhawan", team: "IND", pos: "Batsman", market: "16.0", img: "player_images/shikhar_dhawan.jpg" },
    { name: "Shimron Hetmyer", team: "WI", pos: "Batsman", market: "14.5", img: "player_images/shimron_hetmyer.jpg" },
    { name: "Shoaib Malik", team: "PAK", pos: "All-rounder", market: "12.0", img: "player_images/shoaib_malik.jpg" },
    { name: "Steve Smith", team: "AUS", pos: "Batsman", market: "19.5", img: "player_images/steve_smith.jpg" },
    { name: "Tabraiz Shamsi", team: "SA", pos: "Spinner", market: "11.0", img: "player_images/tabraiz_shamsi.jpg" },
    { name: "Thisara Perera", team: "SL", pos: "All-rounder", market: "11.0", img: "player_images/thisara_perera.jpg" },
    { name: "Tom Curran", team: "ENG", pos: "Pacer", market: "12.0", img: "player_images/tom_curran.jpg" },
    { name: "Trent Boult", team: "NZ", pos: "Pacer", market: "18.5", img: "player_images/trent_boult.jpg" },
    { name: "Vijay Shankar", team: "IND", pos: "All-rounder", market: "10.0", img: "player_images/vijay_shankar.jpg" },
    { name: "Virat Kohli", team: "IND", pos: "Batsman", market: "25.0", img: "player_images/virat_kohli.jpg" }
];

// Global State
const state = {
    teamCount: 0,
    teams: [],
    currentPlayerIndex: 0,
    auctionPhase: 'setup',
    currentBid: 0,
    currentBidder: null,
    soldPlayers: [],
    isListening: false,
    activeAuctionList: [], // Dynamically generated
    currentTurnTeamIndex: -1, // Multi-team turn tracker
    teamsAskedSinceLastBid: 0, // Track loop completion
    registrationStep: 'name', // 'name' or 'owner'
    registrationTeamIndex: 0
};

// DOM Cache
const teamSetupCard = document.getElementById('teamSetupCard');
const teamRegistrationCard = document.getElementById('teamRegistrationCard');
const auctionCard = document.getElementById('auctionCard');
const resultsCard = document.getElementById('resultsCard');
const dynamicPlayerArea = document.getElementById('dynamicPlayerArea');
const currentBidDisplay = document.getElementById('currentBid');
const currentBidderDisplay = document.getElementById('currentBidderDisplay');
const voiceStatus = document.getElementById('voiceStatus');
const timerBar = document.getElementById('auctionTimerBar');
const soldBadge = document.getElementById('soldBadge');

// Voice Synthesis
function speak(text) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Function to select female voice
        const setVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            const femaleVoice = voices.find(v =>
                v.name.includes('Female') ||
                v.name.includes('Google UK English Female') ||
                v.name.includes('Microsoft Zira') ||
                v.name.includes('Samantha') ||
                v.name.includes('Google US English') ||
                v.lang.includes('en-GB') || v.lang.includes('en-US')
            );
            if (femaleVoice) utterance.voice = femaleVoice;
            utterance.pitch = 1.1;
            utterance.rate = 0.95; // Slightly slower for clarity
            window.speechSynthesis.speak(utterance);
        };

        if (window.speechSynthesis.getVoices().length > 0) {
            setVoice();
        } else {
            window.speechSynthesis.onvoiceschanged = setVoice;
        }
    }
}

// Auto-Prompt on Start (Interaction-Based to avoid browser blocking)
let hasSpoken = false;

function speakIntro() {
    if (hasSpoken) return;
    hasSpoken = true;

    const utterance = new SpeechSynthesisUtterance(
        "Please enter how many teams are participating in the auction."
    );

    const voices = speechSynthesis.getVoices();
    // Prioritize female voice, fallback to first available
    utterance.voice = voices.find(v => v.name.toLowerCase().includes("female")) || voices.find(v => v.name.includes("Zira") || v.name.includes("Samantha")) || voices[0];

    utterance.rate = 1;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
}

// Unlock audio & mic on first interaction
function handleInitialInteraction() {
    speakIntro();
    // Automatically start listening for team count
    setTimeout(() => {
        startVoice();
    }, 1500);
}

document.addEventListener("click", handleInitialInteraction, { once: true });
document.addEventListener("keydown", handleInitialInteraction, { once: true });

window.addEventListener('load', () => {
    // Proactively request microphone permissions
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                console.log("Microphone access granted.");
                stream.getTracks().forEach(track => track.stop());
            })
            .catch(err => {
                console.error("Microphone access denied:", err);
            });
    }

    // Focus the manual input field immediately
    const input = document.getElementById('manualTeamCount');
    if (input) input.focus();
});

// Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.onstart = () => { voiceStatus.textContent = 'Listening...'; voiceStatus.style.color = '#ffcc00'; };
    recognition.onend = () => { voiceStatus.textContent = 'Ready'; voiceStatus.style.color = '#38ef7d'; state.isListening = false; };
    recognition.onresult = (e) => { handleSpeech(e.results[0][0].transcript); };
}

// Event Listeners
document.getElementById('micBtn').onclick = () => startVoice();
document.getElementById('registrationMicBtn').onclick = () => startVoice();
document.getElementById('auctionMicBtn').onclick = () => startVoice();
document.getElementById('confirmTeamsBtn').onclick = proceedToRegistration;
document.getElementById('guidedSubmitBtn').onclick = handleGuidedSubmit;
document.getElementById('startAuctionBtn').onclick = startLiveAuction;

const setManualCountBtn = document.getElementById('setManualCountBtn');
const manualTeamCountInput = document.getElementById('manualTeamCount');

if (setManualCountBtn) {
    setManualCountBtn.onclick = () => {
        const val = parseInt(manualTeamCountInput.value);
        if (val >= 2 && val <= 6) {
            setTeamCount(val);
        } else {
            alert("Please enter a number between 2 and 6.");
        }
    };
}

document.getElementById('manualBidBtn').onclick = () => {
    const val = prompt("Enter Bid (Lakhs):", state.currentBid + 5);
    if (val && !isNaN(val)) {
        // If a team is currently being questioned, attribute the bid to them
        const bidder = state.currentTurnTeamIndex !== -1 ? state.teams[state.currentTurnTeamIndex].name : "";
        placeBid(parseInt(val), bidder);
    }
};
document.getElementById('confirmBidBtn').onclick = () => {
    if (state.auctionPhase === 'live' && state.currentTurnTeamIndex !== -1) {
        // Attribute the bid to the team currently being asked by the AI
        placeBid(state.currentBid + 5, state.teams[state.currentTurnTeamIndex].name);
    }
};
document.getElementById('nextPlayerBtn').onclick = () => nextPlayer();
document.getElementById('restartAuctionBtn').onclick = () => location.reload();

// Navigation & Phase Logic
function updatePhase(phase) {
    state.auctionPhase = phase;
    document.getElementById('currentPhaseText').textContent = phase.toUpperCase();
    [1, 2, 3, 4].forEach(i => {
        const circle = document.getElementById(`phase${i}`);
        if (circle) {
            circle.className = 'phase-circle';
            const currentPhaseIdx = phase === 'setup' ? 1 : phase === 'teams' ? 2 : phase === 'auction' ? 3 : 4;
            if (i < currentPhaseIdx) circle.classList.add('completed');
            if (i === currentPhaseIdx) circle.classList.add('active');
        }
    });
}

function startVoice() {
    if (recognition && !state.isListening) {
        state.isListening = true;
        recognition.start();
    }
}

function handleSpeech(transcript) {
    const text = transcript.toLowerCase();
    if (state.auctionPhase === 'setup') {
        const numMap = { 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6 };
        let num = text.match(/\d+/) ? parseInt(text.match(/\d+/)[0]) : null;
        if (!num) {
            for (const key in numMap) { if (text.includes(key)) num = numMap[key]; }
        }
        if (num) setTeamCount(num);
    } else if (state.auctionPhase === 'teams') {
        const input = document.getElementById('guidedInput');
        if (input) {
            input.value = transcript;
            setTimeout(() => handleGuidedSubmit(), 500);
        }
    } else if (state.auctionPhase === 'auction') {
        const bidMatch = text.match(/\d+/);
        if (bidMatch) {
            const val = parseInt(bidMatch[0]);
            placeBid(val, state.teams[state.currentBidder || 0]?.name || "Voice bidder");
        }
    }
}

// Setup Logic
function setTeamCount(count) {
    if (count >= 2 && count <= 6) {
        state.teamCount = count;
        document.getElementById('confirmTeamsBtn').disabled = false;
        document.getElementById('confirmTeamsBtn').innerHTML = `<i class="fas fa-rocket"></i> Confirm ${state.teamCount} Teams`;
        document.getElementById('interpretation').innerHTML = `<span style="color:#38ef7d">Recognized: ${count} Teams</span>`;
    }
}

function proceedToRegistration() {
    updatePhase('teams');
    teamSetupCard.classList.add('hidden');
    teamRegistrationCard.classList.remove('hidden');
    document.getElementById('totalTeams').textContent = state.teamCount;

    // Dynamic Player Generation: 16 players per team
    const requiredPlayers = state.teamCount * 16;
    const shuffled = [...ALL_PLAYERS_DB].sort(() => 0.5 - Math.random());
    state.activeAuctionList = shuffled.slice(0, requiredPlayers);

    // If we don't have enough unique players, repeat some
    while (state.activeAuctionList.length < requiredPlayers) {
        state.activeAuctionList.push({ ...shuffled[Math.floor(Math.random() * shuffled.length)] });
    }

    startGuidedRegistration();
}

// Guided Registration Logic
let tempRegistration = { name: '', owner: '' };

function startGuidedRegistration() {
    state.registrationTeamIndex = 0;
    state.registrationStep = 'name';
    updateGuidedUI();

    // Initial Prompt
    setTimeout(() => {
        speak("Please enter the Team Name");
    }, 800);
}

function updateGuidedUI() {
    const progress = document.getElementById('registrationProgress');
    const label = document.getElementById('guidedInputLabel');
    const input = document.getElementById('guidedInput');
    const stepLabel = document.getElementById('guidedStepLabel');

    progress.textContent = `Slot ${state.registrationTeamIndex + 1}/${state.teamCount}`;
    input.value = '';
    input.focus();

    if (state.registrationStep === 'name') {
        label.textContent = "Please enter the Team Name";
        input.placeholder = "e.g. Royal Challengers Bangalore";
        stepLabel.textContent = "Team Name Entry";
    } else {
        label.textContent = "Please enter the Team Owner Name";
        input.placeholder = "e.g. Mr. Nagesh";
        stepLabel.textContent = "Owner Name Entry";
    }
}

function handleGuidedSubmit() {
    const input = document.getElementById('guidedInput');
    const value = input.value.trim();

    if (!value || value.length < 2) {
        speak("Invalid entry. Please repeat.");
        input.focus();
        return;
    }

    if (state.registrationStep === 'name') {
        tempRegistration.name = value;
        state.registrationStep = 'owner';
        updateGuidedUI();
        speak("Please enter the Team Owner Name");
    } else {
        tempRegistration.owner = value;

        // Save Team
        state.teams.push({
            name: tempRegistration.name,
            owner: tempRegistration.owner,
            budget: 1000,
            players: []
        });

        updateTeamList();

        // Check if finished
        if (state.teams.length < state.teamCount) {
            state.registrationTeamIndex++;
            state.registrationStep = 'name';
            updateGuidedUI();

            // Visual Confirmation Animation (subtle)
            const box = document.querySelector('.guided-registration-box');
            box.style.borderColor = 'var(--success)';
            setTimeout(() => {
                box.style.borderColor = 'var(--glass-border)';
                speak("Team Registered. Please enter the next Team Name");
            }, 600);
        } else {
            // Finished
            document.getElementById('startAuctionBtn').disabled = false;
            document.getElementById('registrationPrompt').textContent = "Registration Complete!";
            document.querySelector('.guided-registration-box').innerHTML = `
                <div style="text-align:center; padding: 40px;">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--success); margin-bottom: 15px;"></i>
                    <h3>All Teams Ready</h3>
                    <p style="color: #a0a0c0; margin-top:10px;">The auction arena is prepared. Launch the module to begin.</p>
                </div>
            `;
            speak("Registration complete. You may now start the auction.");
        }
    }
}

// Add Enter key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && state.auctionPhase === 'teams') {
        handleGuidedSubmit();
    }
});

function updateTeamList() {
    const list = document.getElementById('teamList');
    list.innerHTML = state.teams.map(t => `
        <li class="team-card-enhanced">
            <div>
                <strong style="color:#fff">${t.name}</strong><br>
                <small style="color:#64748b">${t.owner}</small>
            </div>
            <div style="font-weight:900; color:#00f2a1">₹${t.budget}L</div>
        </li>
    `).join('');
    document.getElementById('countText').textContent = state.teams.length;
}

// Auction Logic
function startLiveAuction() {
    updatePhase('live');
    teamRegistrationCard.classList.add('hidden');
    auctionCard.classList.remove('hidden');
    loadPlayer(0);
}

async function loadPlayer(index) {
    if (index >= state.activeAuctionList.length) return endAuction();
    state.currentPlayerIndex = index;
    state.currentBid = 0;
    state.currentBidder = null;
    state.currentTurnTeamIndex = -1;
    state.teamsAskedSinceLastBid = 0;

    dynamicPlayerArea.innerHTML = `<div class="bidly-loader"><div class="loader-ring"></div><div class="loader-text">Bidly Syncing 2025 Data...</div></div>`;
    document.getElementById('playerSequence').textContent = `SYNCING SLOT ${index + 1}...`;

    await new Promise(r => setTimeout(r, 1200));

    const p = state.activeAuctionList[index];
    state.currentBid = parseFloat(p.market);
    renderPlayerCard(p);
    updateBidUI();

    // AI Player Announcement
    const priceText = p.market.includes('.') ? p.market.replace('.', ' point ') : p.market;
    speak(`${p.pos} ${p.name}. Base price is ${priceText} lakhs.`);

    // Delay start of team questioning to let announcement finish
    setTimeout(() => {
        askNextTeam();
    }, 4000);
}

function askNextTeam() {
    if (state.auctionPhase !== 'live') return;

    state.teamsAskedSinceLastBid++;

    // If we've circled through every team (including potential lead) without a new bid
    if (state.teamsAskedSinceLastBid > state.teams.length) {
        if (state.currentBidder === null) {
            skipPlayer();
        } else {
            sellPlayer();
        }
        return;
    }

    // Move to next team in circle
    state.currentTurnTeamIndex = (state.currentTurnTeamIndex + 1) % state.teams.length;

    // If this team is already the highest bidder, skip asking them and move to next
    if (state.currentTurnTeamIndex === state.currentBidder) {
        askNextTeam();
        return;
    }

    const team = state.teams[state.currentTurnTeamIndex];
    speak(`${team.name}, are you bidding?`);
    currentBidderDisplay.textContent = `Awaiting ${team.name}...`;
    startTimer();
}

function renderPlayerCard(p) {
    document.getElementById('playerSequence').textContent = `PLAYER ${state.currentPlayerIndex + 1} OF ${state.activeAuctionList.length}`;

    let statusClass = "available";
    let statusText = "AVAILABLE";
    if (state.currentBidder !== null) {
        const team = state.teams[state.currentBidder];
        statusText = `HIGHEST BID: ${team.name}`;
        statusClass = "sold";
    }

    dynamicPlayerArea.innerHTML = `
        <div class="player-card-container">
            <div class="ipl-broadcast-wrapper">
                <!-- Nationality Badge (Vertical) -->
                <div class="broadcast-nation-tag">${p.team}</div>

                <!-- TATA IPL Logo Emulation -->
                <div class="broadcast-logo-container">
                    <div class="ipl-logo-text">TATA <span style="color:var(--ipl-cyan)">IPL</span></div>
                    <div class="ipl-auction-label">AUCTION</div>
                </div>

                <!-- Player Portrait with Role Tag -->
                <div class="player-round-portrait">
                    <img src="${p.img}" alt="${p.name}">
                    <div class="broadcast-role-tag">${p.pos}</div>
                </div>

                <!-- Price -->
                <div class="broadcast-price-value" id="broadcastPrice">INR ${state.currentBid} L</div>

                <!-- Name Plate -->
                <div class="broadcast-name-plate">${p.name}</div>

                <!-- Status/Team Plate -->
                <div class="broadcast-meta-plate ${statusClass}" id="broadcastStatusPlate">
                    ${statusText}
                </div>
            </div>
        </div>
    `;
}

function updateBidUI() {
    const priceEl = document.getElementById('broadcastPrice');
    const statusEl = document.getElementById('broadcastStatusPlate');

    if (priceEl) priceEl.textContent = `INR ${state.currentBid} L`;
    if (statusEl && state.currentBidder !== null) {
        const team = state.teams[state.currentBidder];
        statusEl.textContent = `HIGHEST BID: ${team.name}`;
        statusEl.className = "broadcast-meta-plate sold";
        currentBidderDisplay.textContent = `Lead: ${team.name} (At ₹${state.currentBid}L)`;
    } else if (statusEl) {
        statusEl.textContent = "AVAILABLE";
        statusEl.className = "broadcast-meta-plate available";
    }

    currentBidDisplay.textContent = `₹${state.currentBid}L`;
    currentBidDisplay.style.color = state.currentBidder !== null ? "var(--success)" : "#fff";
}

let timer = null;
let timeLeft = 5;
function startTimer() {
    if (timer) clearInterval(timer);
    timeLeft = 5;
    timerBar.style.width = '100%';
    timerBar.classList.remove('warning');

    timer = setInterval(() => {
        timeLeft--;
        const pct = (timeLeft / 5) * 100;
        timerBar.style.width = `${pct}%`;
        if (timeLeft <= 2) timerBar.classList.add('warning');
        if (timeLeft <= 0) {
            clearInterval(timer);
            askNextTeam();
        }
    }, 1000);
}

function placeBid(amount, bidderName) {
    // If bidder just says "yes" or "bid", use the increment
    if (amount <= state.currentBid || isNaN(amount)) amount = state.currentBid + 5;

    state.currentBid = amount;

    // Use the index of the team currently being questioned, 
    // unless a specific team name was provided.
    const bIdx = state.teams.findIndex(t => t.name.toLowerCase() === bidderName.toLowerCase());
    if (bIdx !== -1) {
        state.currentBidder = bIdx;
    } else {
        state.currentBidder = state.currentTurnTeamIndex;
    }

    const team = state.teams[state.currentBidder];
    speak(`${team.name} bids ${state.currentBid} lakhs.`);
    updateBidUI();

    // Reset loop counter but CONTINUE from currentTurnTeamIndex (don't reset to -1)
    state.teamsAskedSinceLastBid = 1; // This bidder is the 1st
    setTimeout(() => askNextTeam(), 1500);
}

function sellPlayer() {
    const p = state.activeAuctionList[state.currentPlayerIndex];
    const team = state.teams[state.currentBidder];
    team.budget -= state.currentBid;
    state.soldPlayers.push({ name: p.name, team: team.name, price: state.currentBid });

    speak(`${p.name} SOLD to ${team.name} for ${state.currentBid} lakhs.`);
    soldBadge.textContent = "SOLD";
    soldBadge.style.color = "#000";
    soldBadge.style.background = "var(--success)";
    soldBadge.style.display = "block";

    clearInterval(timer);
    setTimeout(() => { soldBadge.style.display = "none"; nextPlayer(); }, 3000);
}

function skipPlayer() {
    const p = state.activeAuctionList[state.currentPlayerIndex];
    speak(`${p.name} UNSOLD.`);
    soldBadge.textContent = "UNSOLD";
    soldBadge.style.color = "#fff";
    soldBadge.style.background = "var(--danger)";
    soldBadge.style.display = "block";

    clearInterval(timer);
    setTimeout(() => { soldBadge.style.display = "none"; nextPlayer(); }, 3000);
}

function nextPlayer() {
    loadPlayer(state.currentPlayerIndex + 1);
}

function endAuction() {
    updatePhase('results');
    auctionCard.classList.add('hidden');
    resultsCard.classList.remove('hidden');

    document.getElementById('resTotalPlayers').textContent = state.soldPlayers.length;
    const total = state.soldPlayers.reduce((s, p) => s + p.price, 0);
    document.getElementById('resTotalValue').textContent = `₹${total.toFixed(1)}L`;
    const highest = state.soldPlayers.length ? Math.max(...state.soldPlayers.map(p => p.price)) : 0;
    document.getElementById('resHighestBid').textContent = `₹${highest.toFixed(1)}L`;
    document.getElementById('resTeams').textContent = state.teams.length;

    document.getElementById('soldPlayersList').innerHTML = state.soldPlayers.map(p => `
        <li class="team-card-enhanced" style="margin-bottom:10px">
            <div><strong>${p.name}</strong><br><small>${p.team}</small></div>
            <div style="font-weight:900; color:#38ef7d">₹${p.price}L</div>
        </li>
    `).join('');
}
