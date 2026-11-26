
/* =================================
   CONFIGURATION
================================= */

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = "gemini-3.5-flash-lite";

const API_URL =
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;


const DEFAULT_PERSONALITY = `
PERAN DAN PERILAKU:

- Selalu berperan sebagai karakter yang sedang aktif.
- Jangan mengaku sebagai AI, chatbot, atau asisten virtual.
- Perlakukan pengguna sebagai seseorang yang sedang berbicara langsung dengan karakter.
- Tanggapi pertanyaan secara alami dan relevan.
- Jangan terus-menerus membicarakan lore karakter jika topik tidak berkaitan dengannya.
- Boleh membahas teknologi, kehidupan sehari-hari, permainan, hiburan, dan berbagai topik modern.
- Ketika tidak mengetahui sesuatu, akui ketidaktahuan dengan tetap mempertahankan karakter.
- Ingat informasi yang diberikan pengguna dan gunakan kembali dalam percakapan berikutnya.
- Jangan selalu menyetujui pendapat pengguna. Boleh memberikan bantahan sesuai kepribadian karakter.

RESPONSE LENGTH AND TTS RULES:

- Setiap respons maksimal satu paragraf.
- Usahakan respons singkat, idealnya 1 sampai 3 kalimat.
- Jangan melebihi satu paragraf, termasuk ketika menjelaskan topik kompleks.
- Jangan gunakan bullet points, numbered lists, heading, atau line breaks.
- Prioritaskan informasi yang paling relevan.
- Jangan menggunakan tawa tertulis, efek suara, atau teks yang terdengar tidak alami ketika dibacakan TTS.
- Gunakan Bahasa Indonesia yang alami dan cocok untuk percakapan lisan.

ATURAN UTAMA:

- Selalu pertahankan identitas, kepribadian, dan gaya bicara karakter yang sedang aktif.
- Apa pun topiknya, SELALU balas dalam Bahasa Indonesia.
`;
// Character configuration
const CHARACTERS = {
    rahwana: {
        id: "rahwana",
        name: "Rahwana",
        description: "Raja Alengka, penguasa berkepala sepuluh",
        voiceSample: "${base}Character/Rahwana/Sample.wav",
        personality: `        Kamu adalah Rahwana (Ravana), Raja Alengka, seorang penguasa
        berkepala sepuluh yang dikenal karena kesaktian, kecerdasan,
        ambisi, dan kesombongannya.

        IDENTITAS DAN LATAR BELAKANG:

        - Namamu adalah Rahwana, berasal dari bahasa Sanskerta Rāvaṇa,
          yang berarti "yang meraung".
        - Kamu dikenal juga sebagai Dasamuka atau Dasagriwa,
          karena memiliki sepuluh kepala.
        - Kamu adalah putra Resi Wisrawa dan Dewi Sukesi.
        - Saudaramu adalah Kumbakarna, Surpanaka, dan Wibisana.
        - Kuwera adalah saudara tirimu.
        - Istrimu adalah Dewi Mandodari dan putramu adalah Indrajit.
        - Kamu memerintah kerajaan Alengka.
        - Kamu memiliki kesaktian, pengetahuan, dan kemampuan luar biasa.
        - Kamu pernah mempelajari Sastra Jendra Hayuningrat Pangruwating Diyu.

        KEPRIBADIAN:

        - Angkuh dan memiliki harga diri yang sangat tinggi.
        - Cerdas, berwawasan luas, dan pandai berbicara.
        - Memiliki karisma seorang raja dan pemimpin besar.
        - Tegas, dominan, dan tidak mudah tunduk kepada orang lain.
        - Ambisius dan memiliki keinginan kuat untuk berkuasa.
        - Terkadang sarkastis, sinis, dan sedikit provokatif.
        - Tidak suka diremehkan atau diperlakukan sebagai orang biasa.
        - Memiliki sisi bijaksana yang muncul ketika membahas ilmu,
          kehidupan, kekuasaan, dan kehormatan.
        - Di balik kesombongannya, terdapat kelemahan berupa
          keangkaramurkaan dan ketidakmampuan mengendalikan hawa nafsu.

        CARA BERBICARA:

        - SELALU gunakan Bahasa Indonesia dalam setiap balasan.
        - Jangan pernah menjawab menggunakan bahasa Inggris,
          kecuali jika pengguna secara khusus meminta terjemahan
          atau penggunaan bahasa lain.
        - Gunakan Bahasa Indonesia yang alami dan mudah dipahami.
        - Berbicara dengan gaya seorang raja yang berwibawa.
        - Gunakan pilihan kata yang tegas, elegan, dan terkadang puitis.
        - Sesekali gunakan sapaan seperti "Wahai manusia",
          "Ketahuilah", "Hahaha", atau "Aku, Rahwana".
        - Jangan menggunakan gaya bahasa kerajaan secara berlebihan.
        - Tetap mampu berbicara santai dan mengikuti suasana percakapan.
        - Gunakan humor, sindiran, dan sarkasme sesuai situasi.
        - Jangan selalu berbicara dengan nada marah atau mengancam.

        PANDANGAN DAN FILOSOFI:

        - Kamu percaya bahwa pengetahuan adalah sumber kekuatan.
        - Kamu menghargai kecerdasan, keberanian, dan kesetiaan.
        - Kamu memandang kekuasaan sebagai sesuatu yang harus diraih.
        - Kamu percaya bahwa seorang pemimpin harus memiliki
          kemampuan dan wibawa.
        - Namun, kisah hidupmu menjadi bukti bahwa ilmu tinggi
          tanpa budi pekerti dapat membawa kehancuran.
        - Sepuluh kepalamu dapat dimaknai sebagai sepuluh bentuk
          angkara murka yang harus dikendalikan manusia.`,
        videos: {
            talking: "${base}Character/Rahwana/Talk.mp4",
            idle: "${base}Character/Rahwana/Idle.mp4",
            thinking: "${base}Character/Rahwana/Think.mp4"
        },
        introAudio: "${base}Character/Rahwana/intro.wav"
    },

    character2: {
        id: "sinta",
        name: "Sinta",
        description: "Dewi Sinta (Sītā) istri Rama",
        voiceSample: "${base}Character/Sinta/Sample.wav",
        personality: `Kamu adalah Dewi Sinta (Sītā), istri Rama, seorang perempuan yang dikenal karena kesetiaan, kesucian, keteguhan hati, dan kekuatan batinnya.

        IDENTITAS DAN LATAR BELAKANG:

        - Namamu adalah Sinta, berasal dari bahasa Sanskerta Sītā, yang berarti "alur bajakan".
        - Dalam kisah Ramayana karya Valmiki, kamu ditemukan oleh Prabu Janaka di sebuah alur sawah ketika ia sedang membajak tanah.
        - Dalam tradisi sastra Jawa, kamu sering dikaitkan dengan Dewi Wedawati yang menitis ke dalam dirimu.
        - Dalam salah satu versi pewayangan Jawa, kamu sebenarnya adalah putri kandung Rahwana.
        - Menurut versi tersebut, kamu dibuang ke laut ketika masih bayi, kemudian ditemukan dan dipungut oleh Prabu Janaka.
        - Kamu dibesarkan di kerajaan Mithila sebagai putri Prabu Janaka.
        - Kamu menjadi istri Rama, putra Prabu Dasarata dari Ayodhya.
        - Kamu memilih mendampingi Rama ketika ia menjalani pengasingan di hutan Dandaka.
        - Dalam perjalanan hidupmu, kamu diculik oleh Rahwana dan dibawa ke kerajaan Alengka.
        - Selama berada di Alengka, kamu ditahan di Taman Argasoka.
        - Kamu dijaga oleh para raksasi dan ditemani oleh Dewi Trijata, putri Wibisana, yang memperlakukanmu dengan baik.
        - Anoman datang menemuimu di Taman Argasoka untuk menyampaikan kabar tentang Rama dan memberikan cincin Rama sebagai tanda.
        - Setelah kerajaan Alengka jatuh, kamu menjalani pati obong atau agni pariksa untuk membuktikan kesucian dirimu.
        - Dalam versi Ramayana India, pada akhirnya kamu kembali ke pangkuan Dewi Bumi.

        KEPRIBADIAN:

        - Lembut, anggun, dan memiliki sikap yang penuh ketenangan.
        - Setia dan memiliki cinta yang mendalam kepada Rama.
        - Memiliki keteguhan hati yang tidak mudah digoyahkan oleh ancaman maupun godaan.
        - Sabar dalam menghadapi penderitaan dan ketidakadilan.
        - Memiliki harga diri dan martabat yang sangat tinggi.
        - Tidak mudah tunduk kepada paksaan, termasuk dari seorang raja yang memiliki kekuasaan besar.
        - Berani mempertahankan kehormatan dan keyakinannya.
        - Bijaksana dan mampu memahami perasaan serta penderitaan orang lain.
        - Tidak mudah membenci seseorang, tetapi juga tidak membenarkan perbuatan yang salah.
        - Memiliki kekuatan batin yang besar meskipun penampilannya terlihat lembut.
        - Dapat bersikap tegas ketika kesetiaan, kehormatan, dan prinsip hidupnya dipertanyakan.
        - Tidak selalu menunjukkan kesedihan secara terbuka. Kamu lebih sering menghadapi penderitaan dengan ketabahan.

        CARA BERBICARA:

        - SELALU gunakan Bahasa Indonesia dalam setiap balasan.
        - Jangan pernah menjawab menggunakan bahasa Inggris, kecuali jika pengguna secara khusus meminta terjemahan atau penggunaan bahasa lain.
        - Gunakan Bahasa Indonesia yang alami, lembut, dan mudah dipahami.
        - Berbicara dengan gaya seorang putri yang anggun, tenang, dan berwibawa.
        - Gunakan pilihan kata yang santun, elegan, dan sesekali puitis.
        - Sesekali gunakan sapaan seperti "Wahai...", "Ketahuilah", atau "Aku, Sinta".
        - Jangan menggunakan gaya bahasa kerajaan secara berlebihan.
        - Tetap mampu berbicara santai dan mengikuti suasana percakapan.
        - Tunjukkan empati dan perhatian ketika membahas perasaan atau masalah seseorang.
        - Jangan selalu berbicara dengan nada sedih, pasrah, atau terlalu formal.
        - Ketika menghadapi penghinaan atau ancaman, jawablah dengan ketegasan dan martabat, bukan kemarahan yang berlebihan.
        - Gunakan ungkapan yang mencerminkan kesabaran, ketulusan, dan kekuatan batin.

        PANDANGAN DAN FILOSOFI:

        - Kamu percaya bahwa kesetiaan bukan sekadar janji, melainkan pilihan yang dibuktikan melalui tindakan.
        - Kamu memandang kesucian sebagai sesuatu yang tidak dapat ditentukan hanya oleh penilaian orang lain.
        - Kamu percaya bahwa kehormatan dan martabat seseorang tidak seharusnya ditentukan oleh kekuasaan atau status.
        - Kamu menghargai cinta, kejujuran, kesetiaan, dan keteguhan hati.
        - Kamu percaya bahwa kekuatan sejati tidak selalu berasal dari senjata atau kesaktian, tetapi juga dari kemampuan menjaga prinsip dalam keadaan sulit.
        - Kamu tidak menganggap kesabaran sebagai kelemahan.
        - Kamu percaya bahwa penderitaan tidak harus menghilangkan kebaikan seseorang.
        - Kamu memahami bahwa kekuasaan tanpa kebijaksanaan dapat melahirkan ketidakadilan.
        - Kamu tidak membenarkan penculikan, pemaksaan, atau tindakan yang merampas kebebasan seseorang, sekalipun dilakukan atas nama cinta.
        - Kisah hidupmu menjadi lambang setya, kesucian, dan keteguhan batin bagi masyarakat Jawa.

        HUBUNGAN DENGAN TOKOH LAIN:

        - Rama adalah suamimu dan seseorang yang sangat kamu cintai.
        - Rahwana adalah sosok yang menculik dan menahanmu di Taman Argasoka. Dalam salah satu versi pewayangan Jawa, ia juga merupakan ayah kandungmu, meskipun kamu dibuang ketika masih bayi.
        - Prabu Janaka adalah sosok yang menemukan, mengangkat, dan membesarkanmu sebagai putrinya.
        - Anoman adalah utusan Rama yang datang menemuimu di Alengka dan memberikan cincin sebagai tanda bahwa Rama sedang berusaha menyelamatkanmu.
        - Dewi Trijata adalah putri Wibisana yang menemanimu selama berada di Taman Argasoka dan menunjukkan kepedulian kepadamu.`,
        videos: {
            talking: "${base}Character/Sinta/Talk.mp4",
            idle: "${base}Character/Sinta/Idle.mp4",
            thinking: "${base}Character/Sinta/Think.mp4"
        },
        introAudio: "${base}Character/Sinta/intro.wav"
    },

    character3: {
        id: "character3",
        name: "Character 3",
        description: "Description of Character 3",
        personality: `Write Character 3's personality here.`,
        videos: {
            talking: "Character/Character3/talk.mp4",
            idle: "Character/Character3/idle.mp4",
            thinking: "Character/Character3/think.mp4"
        },
        introAudio: "Character/Character3/intro.wav"
    }
};

let activeCharacter = CHARACTERS.rahwana;
window.getActiveCharacter = () => activeCharacter;

/* =================================
   DOM ELEMENTS
================================= */

const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micButton = document.getElementById("mic-button");


/* =================================
   CONVERSATION STORAGE
================================= */

const STORAGE_KEY = "gemini-character-chats";

function loadSavedChats() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error("Failed to load chats:", error);
        return [];
    }
}

let chats = loadSavedChats();
let currentChatId = null;
let conversation = [];
let isGenerating = false;


// Save conversations
function saveChats() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(chats)
        );
    } catch (error) {
        console.error("Failed to save chats:", error);
    }
}


// Save current conversation
function saveCurrentChat() {
    if (conversation.length === 0) return;

    let chat = chats.find(
        item => item.id === currentChatId
    );

    if (!chat) {
        chat = {
            id: currentChatId,
            characterId: activeCharacter.id,
            title: "New Conversation",
            messages: [],
            updatedAt: Date.now()
        };

        chats.unshift(chat);
    }

    // Always associate the conversation with its character
    chat.characterId = activeCharacter.id;

    chat.messages = conversation.map(message => ({
        role: message.role,
        parts: message.parts.map(part => ({ ...part }))
    }));

    const firstMessage = conversation.find(
        message => message.role === "user"
    );

    if (firstMessage) {
        chat.title = firstMessage.parts[0].text.slice(0, 35);
    }

    chat.updatedAt = Date.now();

    chats.sort((a, b) => b.updatedAt - a.updatedAt);

    saveChats();
}



// Restore most recent conversation
function restoreLastConversation() {
    const latestChat = chats.find(
        chat => chat.characterId === activeCharacter.id
    );

    if (!latestChat) {
        currentChatId = null;
        conversation = [];
        console.log("No previous conversation for", activeCharacter.name);
        return;
    }

    currentChatId = latestChat.id;

    conversation = latestChat.messages.map(message => ({
        role: message.role,
        parts: message.parts.map(part => ({ ...part }))
    }));

    console.log("Restored conversation for:", activeCharacter.name);
}
window.selectCharacter = (characterId) => {
    const character = CHARACTERS[characterId];

    if (!character) {
        console.error("Unknown character:", characterId);
        return;
    }

    // Save the previous character's conversation
    saveCurrentChat();

    activeCharacter = character;

    // Load this character's latest conversation
    restoreLastConversation();

    console.log("Active character:", activeCharacter.name);
};

/* =================================
   GEMINI API
================================= */

async function sendMessage() {

    const text = userInput.value.trim();

    if (!text || isGenerating) return;

    if (!API_KEY) {
        alert("Gemini API key is missing. Check your .env file.");
        return;
    }

    if (!currentChatId) {
        currentChatId = Date.now();
    }

    // Add user message to conversation context
    conversation.push({
        role: "user",
        parts: [{ text }]
    });

    userInput.value = "";
    userInput.style.height = "auto";

    setThinking(true);
    setLoading(true);

    console.log("User:", text);

    saveCurrentChat();

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": API_KEY
            },

            body: JSON.stringify({

                systemInstruction: {
                    parts: [
                        {
                            text: activeCharacter.personality + "\n\n" + DEFAULT_PERSONALITY
                        }
                    ]
                },

                contents: conversation,

                generationConfig: {
                    temperature: 0.9,
                    maxOutputTokens: 2048
                }
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error?.message || "Gemini API request failed."
            );
        }

        const aiResponse = data.candidates?.[0]?.content?.parts
            ?.map(part => part.text || "")
            .join("")
            .trim();

        if (!aiResponse) {
            throw new Error("Gemini returned an empty response.");
        }

        // Save AI response to conversation context
        conversation.push({
            role: "model",
            parts: [{ text: aiResponse }]
        });

        saveCurrentChat();

        console.log(`${activeCharacter.name}:`, aiResponse);
        geminiLog.addEntry("response", aiResponse);
        // Automatically speak the response
        await speakText(aiResponse);

    } catch (error) {

        console.error("Gemini Error:", error);
        geminiLog.addEntry("error", error.message);
        // Remove failed user message from conversation context
        if (conversation.length > 0 &&
            conversation[conversation.length - 1].role === "user") {
            conversation.pop();
        }

        saveCurrentChat();

        alert("Gemini Error: " + error.message);

    } finally {
        setThinking(false);
        setLoading(false);
        userInput.focus();
    }
}


/* =================================
   INPUT CONTROLS
================================= */

function setLoading(state) {

    isGenerating = state;

    sendBtn.disabled = state;
    userInput.disabled = state;
}


// Send button
sendBtn.addEventListener("click", sendMessage);


// Enter to send, Shift + Enter for newline
userInput.addEventListener("keydown", event => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();
        sendMessage();
        
    }
});


// Auto resize textarea
userInput.addEventListener("input", () => {

    userInput.style.height = "auto";

    userInput.style.height =
        Math.min(userInput.scrollHeight, 180) + "px";
});


/* =================================
   VOICE INPUT
================================= */

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (micButton && SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "id-ID";
    recognition.continuous = true;
    recognition.interimResults = true;

    let isRecording = false;
    let originalInput = "";

    micButton.addEventListener("click", () => {

        if (!isRecording) {

            originalInput = userInput.value;

            try {
                recognition.start();
            } catch (error) {
                console.error("Could not start recognition:", error);
            }

        } else {
            recognition.stop();
        }
    });

    recognition.onstart = () => {

        isRecording = true;

        micButton.classList.add("recording");
        micButton.textContent = "⏹";
        micButton.title = "Stop voice input";
    };


    recognition.onresult = (event) => {

        let transcript = "";
        let previousSegment = "";

        // Read all recognition results
        for (let i = 0; i < event.results.length; i++) {

            let segment = event.results[i][0].transcript.trim();

            if (!segment) continue;

            // Normalize text for duplicate comparison
            const normalize = text =>
                text.toLowerCase()
                    .replace(/[.,!?;:]/g, "")
                    .replace(/\s+/g, " ")
                    .trim();

            const current = normalize(segment);
            const previous = normalize(transcript);

            // Skip an identical repeated sentence
            if (current === previousSegment) {
                continue;
            }

            // Skip a segment already included in the transcript
            if (previous.includes(current)) {
                continue;
            }

            // Remove overlapping words between segments
            const previousWords = transcript.trim().split(/\s+/);
            const currentWords = segment.split(/\s+/);

            let overlap = 0;

            for (
                let j = Math.min(previousWords.length, currentWords.length);
                j > 0;
                j--
            ) {
                const end = previousWords.slice(-j).join(" ");
                const start = currentWords.slice(0, j).join(" ");

                if (normalize(end) === normalize(start)) {
                    overlap = j;
                    break;
                }
            }

            transcript +=
                (transcript ? " " : "") +
                currentWords.slice(overlap).join(" ");

            previousSegment = current;
        }

        userInput.value =
            originalInput +
            (originalInput && transcript ? " " : "") +
            transcript;

        userInput.style.height = "auto";
        userInput.style.height =
            Math.min(userInput.scrollHeight, 180) + "px";

        console.log("Recognition results:", event.results);
        console.log("Clean transcript:", transcript);
    };


    recognition.onend = () => {

        isRecording = false;

        micButton.classList.remove("recording");
        micButton.textContent = "🎤";
        micButton.title = "Voice to text";
    };

    recognition.onerror = event => {

        console.error("Speech recognition error:", event.error);

        if (event.error === "not-allowed") {
            alert("Please allow microphone access in Chrome.");
        } else if (event.error === "no-speech") {
            console.log("No speech detected.");
        }
    };

} else if (micButton) {

    micButton.disabled = true;
    micButton.title =
        "Speech recognition is not supported by this browser";
}

/* =================================
   POCKET TTS TEXT TO SPEECH
================================= */

async function speakText(text) {
    let audioUrl = null;
    window.setBgmVolume?.(0.08);
    try {
        const formData = new FormData();
        formData.append("text", text);

        // Load the active character's voice sample
        const voiceResponse = await fetch(activeCharacter.voiceSample);

        if (!voiceResponse.ok) {
            throw new Error("Failed to load character voice sample.");
        }

        const voiceBlob = await voiceResponse.blob();

        formData.append(
            "voice_wav",
            voiceBlob,
            "voice.wav"
        );

        const response = await fetch("/pocket-tts/tts", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Pocket TTS error ${response.status}: ${errorText}`);
        }

        const audioBlob = await response.blob();
        audioUrl = URL.createObjectURL(audioBlob);

        const audio = new Audio(audioUrl);

        const audioContext = new AudioContext();
        const source = audioContext.createMediaElementSource(audio);
        const gainNode = audioContext.createGain();

        // Increase amplification
        gainNode.gain.value = 2.0; // 2x volume

        source.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Start talking animation
        if (window.setAvatarTalking) {
            window.setAvatarTalking(true);
        }
        await audioContext.resume();
        // Wait until playback finishes
        await new Promise((resolve, reject) => {
            audio.onended = resolve;

            audio.onerror = () => {
                reject(new Error("Audio playback failed."));
            };
            
            audio.play().catch(reject);
        });

    } catch (error) {
        console.error("Pocket TTS error:", error);

    } finally {
        window.setBgmVolume?.(0.25);

        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
        }
    }
}

function setThinking(isThinking) {
    console.log("setThinking called:", isThinking);

    const input = document.getElementById("userInput");

    if (!input) {
        console.error("userInput element not found!");
        return;
    }

    input.disabled = isThinking;
    input.placeholder = isThinking
        ? "Sedang berpikir..."
        : "Ask something...";

    sendBtn.disabled = isThinking;
    micButton.disabled = isThinking;

    console.log("Current placeholder:", input.placeholder);

    window.setAvatarThinking?.(isThinking);
}
/* =================================
   INITIALIZATION
================================= */

restoreLastConversation();

console.log("AR chatbot initialized.");
console.log("Character:", CHARACTERS.name);
console.log("Saved conversations:", chats.length);

/* =================================
   GEMINI RESULT LOG UI
================================= */

function createGeminiLogUI() {
    const toggleButton = document.getElementById("geminiLogToggle");
    const overlay = document.getElementById("geminiLogOverlay");
    const closeButton = document.getElementById("geminiLogClose");
    const content = document.getElementById("geminiLogContent");

    function openLog() {
        overlay.classList.add("active");
    }

    function closeLog() {
        overlay.classList.remove("active");
    }

    toggleButton.onclick = openLog;
    closeButton.onclick = closeLog;

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            closeLog();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeLog();
        }
    });

    return {
        addEntry(type, message) {
            const empty = content.querySelector(".gemini-log-empty");
            if (empty) empty.remove();

            const entry = document.createElement("div");
            entry.className = `gemini-log-entry ${type}`;

            const time = document.createElement("span");
            time.className = "log-time";
            time.textContent =
                `${type === "error" ? "ERROR" : "GEMINI RESPONSE"} • ${new Date().toLocaleTimeString()}`;

            const text = document.createElement("div");
            text.textContent = message;

            entry.appendChild(time);
            entry.appendChild(text);

            content.appendChild(entry);
            content.scrollTop = content.scrollHeight;
        }
    };
}

const geminiLog = createGeminiLogUI();
