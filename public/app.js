// Pre-set challenge test cases organized by category
const CHALLENGES = {
    'MIXED ALPHANUMERIC IDENTIFIERS': [
        { text: 'Your case ID is F0L1X0E.', pronunciation: 'F, zero, L, one, X, zero, E' },
        { text: 'I\'m seeing your authentication token as B0D5V2N.', pronunciation: 'B, zero, D, five, V, two, N' },
        { text: 'The reference number for your request is O30DV87.', pronunciation: 'O, three, zero, D, V, eight, seven' },
        { text: 'Your temporary access code is P@ssw0rd123.', pronunciation: 'P, at, S, S, W, zero, R, D, one, two, three' },
        { text: 'Your session identifier appears as 01A07C9X.', pronunciation: 'zero, one, A, zero, seven, C, nine, X' },
        { text: 'I have your customer ID as X9T0F7Q1.', pronunciation: 'X, nine, T, zero, F, seven, Q, one' },
        { text: 'The system lists your approval code as 8L2Z51O4.', pronunciation: 'eight, L, two, Z, five, one, O, four' },
        { text: 'Your authorization string is H3L0-2X9.', pronunciation: 'H, three, L, zero, dash, two, X, nine' },
        { text: 'The request hash shows as ZF1-98T-2B7.', pronunciation: 'Z, F, one, dash, nine, eight, T, dash, two, B, seven' },
        { text: 'Your login token is displayed as H7Q4M2B9.', pronunciation: 'H, seven, Q, four, M, two, B, nine' },
        { text: 'The platform shows your renewal key as 22L0I55Z.', pronunciation: 'two, two, L, zero, I, five, five, Z' },
        { text: 'Your secure key is 5XQ27P.', pronunciation: 'five, X, Q, two, seven, P' }
    ],
    'SKUs / PRODUCT CODES': [
        { text: 'The part number you requested is 326DART4.', pronunciation: 'three, two, six, D, A, R, T, four' },
        { text: 'I found your product under SKU K700L2V.', pronunciation: 'K, seven, zero, zero, L, two, V' },
        { text: 'Your replacement component is listed as 443B90A.', pronunciation: 'four, four, three, B, nine, zero, A' },
        { text: 'The catalog shows product code AB-4500.', pronunciation: 'A, B, dash, four, five, zero, zero' },
        { text: 'Your warranty part is referenced as KP47A2.', pronunciation: 'K, P, four, seven, A, two' },
        { text: 'The inventory sheet lists lot number LOT20240315B.', pronunciation: 'L, O, T, two, zero, two, four, zero, three, one, five, B' },
        { text: 'The spare component is marked as K12-B34-C56.', pronunciation: 'K, one, two, dash, B, three, four, dash, C, five, six' },
        { text: 'The warehouse record shows item 45R-90X.', pronunciation: 'four, five, R, dash, nine, zero, X' },
        { text: 'Your filter element is labeled V3.2L.', pronunciation: 'V, three, point, two, L' },
        { text: 'I have the component code XL-B2A.', pronunciation: 'X, L, dash, B, two, A' },
        { text: 'Your package identifier is BATCH-24-07-19.', pronunciation: 'batch, twenty-four, zero, seven, nineteen' },
        { text: 'The part variation on file is H10-Z2.', pronunciation: 'H, one, zero, dash, Z, two' }
    ],
    'TRACKING & LOGISTICS CODES': [
        { text: 'Your UPS tracking number is 1Z9999E90000000057.', pronunciation: 'one, Z, nine, nine, nine, nine, E, nine, zero, zero, zero, zero, zero, zero, zero, zero, five, seven' },
        { text: 'The FedEx door tag on your shipment is DT120034567890.', pronunciation: 'D, T, one, two, zero, zero, three, four, five, six, seven, eight, nine, zero' },
        { text: 'Your USPS tracking number shows as 9405511899223847621034.', pronunciation: 'nine, four, zero, five, five, one, one, eight, nine, nine, two, two, three, eight, four, seven, six, two, one, zero, three, four' },
        { text: 'The shipment reference is TX-790-B4.', pronunciation: 'T, X, dash, seven, nine, zero, dash, B, four' },
        { text: 'Your parcel ID appears as SHP2300456A.', pronunciation: 'S, H, P, two, three, zero, zero, four, five, six, A' },
        { text: 'The return authorization code is REF-2024-AB21.', pronunciation: 'R, E, F, dash, two, zero, two, four, dash, A, B, two, one' },
        { text: 'I\'m seeing your delivery code as EX123456789US.', pronunciation: 'E, X, one, two, three, four, five, six, seven, eight, nine, U, S' },
        { text: 'Your pallet label is marked LOT-45-113.', pronunciation: 'lot, dash, forty-five, dash, one, thirteen' },
        { text: 'The freight record shows identifier FRG20240719X.', pronunciation: 'F, R, G, two, zero, two, four, zero, seven, one, nine, X' },
        { text: 'Your production run is labeled SERIES-21-04-18.', pronunciation: 'series, twenty-one, zero, four, eighteen' },
        { text: 'I have the carrier reference as GX99P00412.', pronunciation: 'G, X, nine, nine, P, zero, zero, four, one, two' },
        { text: 'Your shipment tag is 2Z45X09E0012345678.', pronunciation: 'two, Z, four, five, X, zero, nine, E, zero, zero, one, two, three, four, five, six, seven, eight' }
    ],
    'NUMERIC FORMATS': [
        { text: 'Your total today is $12.99.', pronunciation: 'twelve dollars and ninety-nine cents' },
        { text: 'The charge on your card is $2.09.', pronunciation: 'two dollars and nine cents' },
        { text: 'The contract amount is $5.7M.', pronunciation: 'five point seven million dollars' },
        { text: 'Your subscription fee is €18.50.', pronunciation: 'eighteen euros and fifty cents' },
        { text: 'The balance due is £1.25.', pronunciation: 'one pound and twenty-five pence' },
        { text: 'Your account number is 021000121.', pronunciation: 'zero, two, one, zero, zero, zero, one, two, one' },
        { text: 'The routing number on file is 11000015.', pronunciation: 'one, one, zero, zero, zero, zero, one, five' },
        { text: 'The applicable tax rate is 9.75%.', pronunciation: 'nine point seven five percent' },
        { text: 'Your discount is listed as 0.01%.', pronunciation: 'zero point zero one percent' },
        { text: 'Your contact number is 800-555-1212.', pronunciation: 'eight, zero, zero, five, five, five, one, two, one, two' },
        { text: 'I have your number as 8005551212.', pronunciation: 'eight, zero, zero, five, five, five, one, two, one, two' },
        { text: 'Your international contact number is +44 20 7946 0018.', pronunciation: 'plus, four, four, two, zero, seven, nine, four, six, zero, zero, one, eight' }
    ],
    'ADDRESSES': [
        { text: 'Your delivery address is 123 Pine St., Springfield, MO 65807.', pronunciation: 'one twenty-three Pine Street, Springfield, Missouri, six, five, eight, zero, seven' },
        { text: 'The service record shows your location as 4500 North Lake Shore Dr., Chicago, IL.', pronunciation: 'forty-five hundred North Lake Shore Drive, Chicago, Illinois' },
        { text: 'I have your address as 101 East Pine St., New York, NY 10009.', pronunciation: 'one oh one East Pine Street, New York, New York, one, zero, zero, zero, nine' },
        { text: 'Your billing location is 608 Birch Ter., Fairview, FL 32067.', pronunciation: 'six oh eight Birch Terrace, Fairview, Florida, three, two, zero, six, seven' },
        { text: 'The technician is scheduled to arrive at 269 Elm Pkwy., Lansing, MI 48911.', pronunciation: 'two sixty-nine Elm Parkway, Lansing, Michigan, four, eight, nine, one, one' },
        { text: 'Your profile lists your mailing address as 55 West Oak Ave., San Mateo, CA 94401.', pronunciation: 'fifty-five West Oak Avenue, San Mateo, California, nine, four, four, zero, one' },
        { text: 'I\'m confirming the address: 742 Evergreen Terrace, Springfield, OR 97403.', pronunciation: 'seven forty-two Evergreen Terrace, Springfield, Oregon, nine, seven, four, zero, three' },
        { text: 'Your contact information includes 88 Westlake Ct., Phoenix, AZ 85004.', pronunciation: 'eighty-eight Westlake Court, Phoenix, Arizona, eight, five, zero, zero, four' },
        { text: 'Please verify the location: 1 Queen St. W., Toronto, ON M5H 2N2.', pronunciation: 'one Queen Street West, Toronto, Ontario, M, five, H, two, N, two' },
        { text: 'Your international address is listed as 10 Downing St., London SW1A 2AA, UK.', pronunciation: 'ten Downing Street, London, S, W, one, A, two, A, A, United Kingdom' },
        { text: 'The PO Box on file is PO Box 145, Raleigh, NC 27602.', pronunciation: 'P O Box one forty-five, Raleigh, North Carolina, two, seven, six, zero, two' },
        { text: 'Your rural route address appears as RR 4 Box 22, Concord, NH 03301.', pronunciation: 'R R four Box twenty-two, Concord, New Hampshire, zero, three, three, zero, one' }
    ],
    'URLs / EMAILS / FILES': [
        { text: 'You can access the documentation at dg.com/API_v2.', pronunciation: 'D, G, dot, com, slash, A, P, I, underscore, V, two' },
        { text: 'Please sign in at support.dg.com/v3/login.', pronunciation: 'support, dot, D, G, dot, com, slash, V, three, slash, login' },
        { text: 'The website on file is airtel.in.', pronunciation: 'airtel, dot, I, N' },
        { text: 'Your profile is listed under example.co.uk.', pronunciation: 'example, dot, C, O, dot, U, K' },
        { text: 'You can review the API reference at docs.aws.amazon.com/lambda/latest/APIReference.', pronunciation: 'docs, dot, A, W, S, dot, amazon, dot, com, slash, lambda, slash, latest, slash, A, P, I, Reference' },
        { text: 'Your support contact is support@help.br.', pronunciation: 'support, at, help, dot, B, R' },
        { text: 'Please send attachments to help@barclays.co.uk.', pronunciation: 'help, at, barclays, dot, C, O, dot, U, K' },
        { text: 'Your notification email is john.doe@company.io.', pronunciation: 'john, dot, doe, at, company, dot, I, O' },
        { text: 'Your alternate contact is billing+alerts@service.net.', pronunciation: 'billing, plus, alerts, at, service, dot, net' },
        { text: 'Your file is saved as Report_Q3_24.pdf.', pronunciation: 'Report, underscore, Q, three, underscore, two, four, dot, P, D, F' },
        { text: 'The exported report is Invoice_2024-07-15.csv.', pronunciation: 'Invoice, underscore, two, zero, two, four, dash, zero, seven, dash, one, five, dot, C, S, V' },
        { text: 'The backup file is named Data.backup.tar.gz.', pronunciation: 'Data, dot, backup, dot, tar, dot, G, Z' }
    ],
    'TECHNICAL CODES': [
        { text: 'You\'re currently running version v3.5 SP1.', pronunciation: 'V, three, point, five, S, P, one' },
        { text: 'Your chemical identifier is H2O2.', pronunciation: 'H, two, O, two' },
        { text: 'The solution is labeled C6H12O6.', pronunciation: 'C, six, H, one, two, O, six' },
        { text: 'The material listed is NaCl.', pronunciation: 'N, a, C, l' },
        { text: 'Your reagent code is NH4NO3.', pronunciation: 'N, H, four, N, O, three' },
        { text: 'Your material classification code is C2-B7.', pronunciation: 'C, two, dash, B, seven' },
        { text: 'The compliance standard is ISO9001:2015.', pronunciation: 'I, S, O, nine, zero, zero, one, colon, two, zero, one, five' },
        { text: 'Your item is categorized under HS Code 8471.', pronunciation: 'eight, four, seven, one' }
    ]
};

// Global state
let ws = null;
let audioContext = null;
let startTime = null;
let providerStartTimes = {}; // Track when each provider starts buffering
let providerBufferingTimes = {}; // Track buffering time for each provider
let summaryPrinted = false; // Track if TTFPA summary has been printed
let currentText = '';

// Provider state tracking
const providerState = {
    elevenlabs: {
        ttfa: null,
        audioBuffer: null, // For download only (complete buffer)
        sourceNode: null,
        isStreaming: false,
        isBuffering: false,
        isBuffered: false, // True when we have enough audio to start playback
        firstChunkReceived: false,
        audioChunks: [], // For download accumulator (all chunks)
        playbackQueue: [], // Queue of AudioBuffers for streaming playback
        playHeadTime: null, // Next scheduled playback time
        isPlaying: false,
        scheduledSources: [] // Track scheduled sources for cleanup
    },
    cartesia: {
        ttfa: null,
        audioBuffer: null,
        sourceNode: null,
        isStreaming: false,
        isBuffering: false,
        isBuffered: false,
        firstChunkReceived: false,
        audioChunks: [],
        playbackQueue: [],
        playHeadTime: null,
        isPlaying: false,
        scheduledSources: []
    },
    deepgram: {
        ttfa: null,
        audioBuffer: null,
        sourceNode: null,
        isStreaming: false,
        isBuffering: false,
        isBuffered: false,
        firstChunkReceived: false,
        audioChunks: [],
        playbackQueue: [],
        playHeadTime: null,
        isPlaying: false,
        scheduledSources: []
    },
    rime: {
        ttfa: null,
        audioBuffer: null,
        sourceNode: null,
        isStreaming: false,
        isBuffering: false,
        isBuffered: false,
        firstChunkReceived: false,
        audioChunks: [],
        playbackQueue: [],
        playHeadTime: null,
        isPlaying: false,
        scheduledSources: []
    }
};

// Initialize Web Audio API
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

/**
 * Wrap raw PCM bytes into a WAV Blob for browser playback
 * @param {Uint8Array | ArrayBuffer} pcmBytes - raw PCM byte data
 * @param {object} opts
 * @param {number} opts.sampleRate - e.g. 24000
 * @param {number} opts.numChannels - 1 for mono, 2 for stereo
 * @param {number} opts.bytesPerSample - 2 for 16-bit, 4 for 32-bit float
 * @returns {Blob} - a Blob representing a valid WAV file
 */
function pcmToWavBlob(pcmBytes, { sampleRate = 24000, numChannels = 1, bytesPerSample = 2 } = {}) {
    const dataLength = pcmBytes.byteLength || pcmBytes.length;
    const blockAlign = numChannels * bytesPerSample;
    const byteRate = sampleRate * blockAlign;
    const wavHeader = new ArrayBuffer(44);
    const view = new DataView(wavHeader);
    
    // Helper to write strings
    function writeString(view, offset, str) {
        for (let i = 0; i < str.length; i++) {
            view.setUint8(offset + i, str.charCodeAt(i));
        }
    }
    
    // RIFF identifier 'RIFF'
    writeString(view, 0, 'RIFF');
    // file length minus 8 bytes
    view.setUint32(4, 36 + dataLength, true);
    // RIFF type 'WAVE'
    writeString(view, 8, 'WAVE');
    // Format chunk 'fmt '
    writeString(view, 12, 'fmt ');
    // Format chunk length = 16
    view.setUint32(16, 16, true);
    // Audio format 1 = PCM, 3 = IEEE float
    const audioFormat = (bytesPerSample === 4 ? 3 : 1);
    view.setUint16(20, audioFormat, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bytesPerSample * 8, true); // bits per sample
    // Data chunk header 'data'
    writeString(view, 36, 'data');
    view.setUint32(40, dataLength, true);
    
    // Combine header + PCM data
    const pcmArray = pcmBytes instanceof Uint8Array ? pcmBytes : new Uint8Array(pcmBytes);
    const wavBuffer = new Uint8Array(44 + dataLength);
    wavBuffer.set(new Uint8Array(wavHeader), 0);
    wavBuffer.set(pcmArray, 44);
    
    return new Blob([wavBuffer], { type: 'audio/wav' });
}

// Initialize WebSocket connection
function initWebSocket() {
    // Close existing connection if any
    if (ws) {
        ws.onclose = null; // Prevent reconnection loop
        ws.close();
        ws = null;
    }
    
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}`;
    
    ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
        console.log('WebSocket connected');
        updateStatus('all', 'Connected');
    };
    
    ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            
            if (data.type === 'connected') {
                console.log('Connection established:', data.connectionId);
                return;
            }
            
            // Handle provider-specific messages
            if (data.provider === 'cartesia') {
                if (data.type === 'audio') {
                    handleAudioChunk(data.provider, data.data);
                } else if (data.type === 'done') {
                    console.log('Cartesia stream complete. Triggering final buffer assembly.');
                    console.log(`Provider state before completion:`, {
                        chunks: providerState[data.provider]?.audioChunks?.length || 0,
                        isBuffered: providerState[data.provider]?.isBuffered || false,
                        isStreaming: providerState[data.provider]?.isStreaming || false
                    });
                    handleStreamComplete(data.provider);
                } else if (data.type === 'error') {
                    console.error(`Stream error for ${data.provider}:`, data.message);
                    handleStreamError(data.provider, data.message);
                }
            } else if (data.provider === 'deepgram') {
                if (data.type === 'audio') {
                    handleAudioChunk(data.provider, data.data);
                } else if (data.type === 'done') {
                    console.log('Deepgram stream complete. Triggering final buffer assembly.');
                    console.log(`Provider state before completion:`, {
                        chunks: providerState[data.provider]?.audioChunks?.length || 0,
                        isBuffered: providerState[data.provider]?.isBuffered || false,
                        isStreaming: providerState[data.provider]?.isStreaming || false
                    });
                    handleStreamComplete(data.provider);
                } else if (data.type === 'error') {
                    console.error(`Stream error for ${data.provider}:`, data.message);
                    handleStreamError(data.provider, data.message);
                }
            } else if (data.provider === 'rime') {
                if (data.type === 'audio') {
                    handleAudioChunk(data.provider, data.data);
                } else if (data.type === 'done') {
                    console.log('Rime stream complete. Triggering final buffer assembly.');
                    console.log(`Provider state before completion:`, {
                        chunks: providerState[data.provider]?.audioChunks?.length || 0,
                        isBuffered: providerState[data.provider]?.isBuffered || false,
                        isStreaming: providerState[data.provider]?.isStreaming || false
                    });
                    handleStreamComplete(data.provider);
                } else if (data.type === 'error') {
                    console.error(`Stream error for ${data.provider}:`, data.message);
                    handleStreamError(data.provider, data.message);
                }
            } else if (data.type === 'audio') {
                // ElevenLabs or other providers
                handleAudioChunk(data.provider, data.data);
            } else if (data.type === 'done') {
                console.log(`Stream complete for ${data.provider}`);
                console.log(`Provider state before completion:`, {
                    chunks: providerState[data.provider]?.audioChunks?.length || 0,
                    isBuffered: providerState[data.provider]?.isBuffered || false,
                    isStreaming: providerState[data.provider]?.isStreaming || false
                });
                handleStreamComplete(data.provider);
            } else if (data.type === 'error') {
                console.error(`Stream error for ${data.provider}:`, data.message);
                handleStreamError(data.provider, data.message);
            } else {
                console.log('Unknown message type from server:', data);
            }
        } catch (error) {
            console.error('Error parsing WebSocket message:', error);
        }
    };
    
    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        updateStatus('all', 'Connection Error');
    };
    
    ws.onclose = () => {
        console.log('WebSocket closed');
        updateStatus('all', 'Disconnected');
        // Don't auto-reconnect - let user refresh page
    };
}

// Handle incoming audio chunk
async function handleAudioChunk(provider, base64Data) {
    const state = providerState[provider];
    
    if (!state) {
        console.error('Unknown provider:', provider);
        return;
    }
    
    // Record TTFA on first chunk
    if (!state.firstChunkReceived && startTime) {
        const ttfa = Date.now() - startTime;
        state.ttfa = ttfa;
        state.firstChunkReceived = true;
        state.isBuffering = true;
        state.isStreaming = true;
        updateTTFADisplay(provider, ttfa);
        updateStatus(provider, 'Buffering...');
    }
    
    // Accumulate audio chunk for download (keep all chunks)
    try {
        const audioData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
        state.audioChunks.push(audioData);
        
        // Convert chunk to AudioBuffer and add to playback queue for streaming
        const chunkBuffer = await chunkToAudioBuffer(provider, audioData);
        if (chunkBuffer) {
            // Skip extremely short chunks for streaming playback (prevents clicks from tiny edge chunks)
            // Use them for download accumulator but don't enqueue for streaming
            const minChunkDuration = 0.02; // 20ms minimum
            if (chunkBuffer.duration >= minChunkDuration) {
                state.playbackQueue.push(chunkBuffer);
                
                // If playback is already active, schedule this chunk immediately
                if (state.isPlaying && state.playHeadTime !== null) {
                    scheduleChunkPlayback(provider, chunkBuffer);
                }
            }
            // Note: chunk is still in audioChunks for download, just not in playbackQueue
        } else {
            console.warn(`[${provider.toUpperCase()}] chunkToAudioBuffer returned null for chunk of size ${audioData.length} bytes`);
        }
        
        // Check for minimum playable threshold (~150ms of audio) to enable early playback
        // Only check if not already buffered (play button not shown yet)
        if (!state.isBuffered) {
            // Calculate total duration from playback queue
            const totalDuration = state.playbackQueue.reduce((sum, buf) => sum + buf.duration, 0);
            const minDurationMs = 150; // Minimum playable audio duration
            const totalDurationMs = totalDuration * 1000;
            
            // Debug logging
            if (state.playbackQueue.length <= 3) {
                console.log(`[${provider.toUpperCase()}] Checking threshold: ${totalDurationMs.toFixed(1)}ms / ${minDurationMs}ms (${state.playbackQueue.length} chunks, providerStartTimes exists: ${!!providerStartTimes[provider]})`);
            }
            
            if (totalDurationMs >= minDurationMs) {
                state.isBuffered = true;
                
                // Calculate TTFPA (Time to First Playable Audio) = time from request start to play button
                // TTFPA = TTFA + (time from first chunk to play button)
                if (startTime) {
                    const ttfpa = Date.now() - startTime;
                    providerBufferingTimes[provider] = ttfpa; // Store as TTFPA
                }
                
                updateStatus(provider, 'Ready to Play');
                checkAllBufferingComplete();
            }
        }
    } catch (error) {
        console.error(`Error processing audio chunk for ${provider}:`, error);
    }
}

// Schedule a single AudioBuffer chunk for playback
function scheduleChunkPlayback(provider, audioBuffer) {
    const state = providerState[provider];
    const ctx = initAudioContext();
    
    if (!state.isPlaying || state.playHeadTime === null) {
        return;
    }
    
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(ctx.destination);
    
    const startTime = state.playHeadTime;
    source.start(startTime);
    
    // Update playHeadTime for next chunk
    state.playHeadTime = startTime + audioBuffer.duration;
    
    // Track source for cleanup
    state.scheduledSources.push(source);
    
    source.onended = () => {
        // Remove from scheduled sources when done
        const index = state.scheduledSources.indexOf(source);
        if (index > -1) {
            state.scheduledSources.splice(index, 1);
        }
        
        // If all sources are done and stream is complete, stop playback
        if (state.scheduledSources.length === 0 && !state.isStreaming) {
            state.isPlaying = false;
            state.playHeadTime = null;
            updateStatus(provider, 'Ready to Play');
            
            // Re-enable all play buttons when playback naturally ends
            setAllPlayButtonsEnabled(true);
            
            // Reset button text to "Play"
            updatePlayButtonText(provider, false);
        }
    };
}

// Convert a single chunk (Uint8Array) to AudioBuffer for streaming playback
async function chunkToAudioBuffer(provider, chunkData) {
    const ctx = initAudioContext();
    
    // Get provider-specific audio format
    let sampleRate = 24000;
    let bytesPerSample = 2;
    if (provider === 'elevenlabs') {
        sampleRate = 22050;
        bytesPerSample = 2;
    } else if (provider === 'cartesia') {
        sampleRate = 24000;
        bytesPerSample = 4; // float32
    } else if (provider === 'deepgram') {
        sampleRate = 24000;
        bytesPerSample = 2;
    } else if (provider === 'rime') {
        sampleRate = 24000;
        bytesPerSample = 2;
    }
    
    try {
        if (provider === 'cartesia') {
            // Cartesia: float32 PCM
            const frameCount = Math.floor(chunkData.length / bytesPerSample);
            if (frameCount === 0) return null;
            
            const audioBuffer = ctx.createBuffer(1, frameCount, sampleRate);
            const channelData = audioBuffer.getChannelData(0);
            const float32View = new Float32Array(chunkData.buffer, chunkData.byteOffset, Math.floor(chunkData.length / 4));
            for (let i = 0; i < Math.min(float32View.length, frameCount); i++) {
                channelData[i] = float32View[i];
            }
            return audioBuffer;
        } else {
            // ElevenLabs, Deepgram, Rime: 16-bit signed integer PCM
            const frameCount = Math.floor(chunkData.length / bytesPerSample);
            if (frameCount === 0) return null;
            
            const audioBuffer = ctx.createBuffer(1, frameCount, sampleRate);
            const channelData = audioBuffer.getChannelData(0);
            const dv = new DataView(chunkData.buffer, chunkData.byteOffset, chunkData.byteLength);
            for (let i = 0; i < frameCount; i++) {
                const int16Sample = dv.getInt16(i * bytesPerSample, true);
                channelData[i] = int16Sample / 32768.0;
            }
            return audioBuffer;
        }
    } catch (error) {
        console.error(`Error converting chunk to AudioBuffer for ${provider}:`, error);
        return null;
    }
}

// Build complete AudioBuffer from accumulated chunks (for download)
async function buildAudioBuffer(provider) {
    const state = providerState[provider];
    const ctx = initAudioContext();
    
    if (!state.audioChunks || state.audioChunks.length === 0) {
        console.error(`No audio chunks to build buffer for ${provider}`);
        return null;
    }
    
    // Concatenate all audio chunks
    let totalLength = 0;
    state.audioChunks.forEach(chunk => {
        totalLength += chunk.length;
    });
    
    const combinedAudio = new Uint8Array(totalLength);
    let offset = 0;
    state.audioChunks.forEach(chunk => {
        combinedAudio.set(chunk, offset);
        offset += chunk.length;
    });
    
    try {
        let audioBuffer;
        
        if (provider === 'elevenlabs') {
            // ElevenLabs sends raw PCM (16-bit signed integer) at 22050 Hz - convert to AudioBuffer
            const sampleRate = 22050;
            const numChannels = 1; // Mono
            const bytesPerSample = 2; // 16-bit = 2 bytes per sample
            const frameCount = Math.floor(combinedAudio.length / bytesPerSample);
            
            console.log(`[elevenlabs] Processing PCM: ${combinedAudio.length} bytes, ${frameCount} frames at ${sampleRate}Hz`);
            
            audioBuffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
            const channelData = audioBuffer.getChannelData(0);
            
            // Convert 16-bit signed integer PCM to float32
            const dv = new DataView(combinedAudio.buffer, combinedAudio.byteOffset, combinedAudio.byteLength);
            for (let i = 0; i < frameCount; i++) {
                const int16Sample = dv.getInt16(i * bytesPerSample, true);
                channelData[i] = int16Sample / 32768.0;
            }
            
            console.log(`[elevenlabs] Built AudioBuffer with ${frameCount} frames, duration: ${audioBuffer.duration.toFixed(3)}s`);
        } else if (provider === 'rime') {
            // Rime sends raw PCM (16-bit signed integer) - convert to AudioBuffer
            const sampleRate = 24000;
            const numChannels = 1; // Mono
            const bytesPerSample = 2; // 16-bit = 2 bytes per sample
            const frameCount = Math.floor(combinedAudio.length / bytesPerSample);
            
            console.log(`[rime] Processing PCM: ${combinedAudio.length} bytes, ${frameCount} frames at ${sampleRate}Hz`);
            
            audioBuffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
            const channelData = audioBuffer.getChannelData(0);
            
            // Convert 16-bit signed integer PCM to float32
            const dv = new DataView(combinedAudio.buffer, combinedAudio.byteOffset, combinedAudio.byteLength);
            for (let i = 0; i < frameCount; i++) {
                const int16Sample = dv.getInt16(i * bytesPerSample, true); // little-endian
                channelData[i] = int16Sample / 32768.0; // Normalize to [-1, 1]
            }
            
            console.log(`[rime] Built AudioBuffer with ${frameCount} frames, duration: ${audioBuffer.duration}s`);
        } else if (provider === 'deepgram') {
            // Deepgram sends linear16 (16-bit signed integer PCM)
            // Simplified processing for faster buffering (similar to ElevenLabs/Rime)
            const sampleRate = 24000; // Aura-2 uses 24000 Hz
            const numChannels = 1; // Mono
            const bytesPerSample = 2; // 16-bit = 2 bytes per sample
            const frameCount = Math.floor(combinedAudio.length / bytesPerSample);
            
            console.log(`[deepgram] Processing linear16 PCM: ${combinedAudio.length} bytes, ${frameCount} frames at ${sampleRate}Hz`);
            
            audioBuffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
            const channelData = audioBuffer.getChannelData(0);
            
            // Convert 16-bit signed integer PCM to float32 (single pass, no post-processing)
            const dv = new DataView(combinedAudio.buffer, combinedAudio.byteOffset, combinedAudio.byteLength);
            for (let i = 0; i < frameCount; i++) {
                const int16Sample = dv.getInt16(i * bytesPerSample, true);
                channelData[i] = int16Sample / 32768.0;
            }
            
            // Minimal fade-in/fade-out to prevent clicks (very short, simple linear fade)
            const fadeSamples = Math.min(120, Math.floor(frameCount * 0.01)); // 120 samples = 5ms at 24kHz
            if (fadeSamples > 0 && frameCount > fadeSamples * 2) {
                // Simple linear fade (much faster than cosine/Hann)
                for (let i = 0; i < fadeSamples; i++) {
                    channelData[i] *= i / fadeSamples;
                }
                for (let i = 0; i < fadeSamples; i++) {
                    channelData[frameCount - fadeSamples + i] *= 1 - (i / fadeSamples);
                }
            }
            
            console.log(`[deepgram] Built AudioBuffer with ${frameCount} frames, duration: ${audioBuffer.duration.toFixed(3)}s`);
        } else {
            // Fallback: Assume PCM format
            const sampleRate = 16000;
            const numChannels = 1;
            const length = combinedAudio.length / 2; // 16-bit = 2 bytes per sample
            
            audioBuffer = ctx.createBuffer(numChannels, length, sampleRate);
            const channelData = audioBuffer.getChannelData(0);
            
            // Convert 16-bit PCM to float32
            for (let i = 0; i < length; i++) {
                const sample = (combinedAudio[i * 2] | (combinedAudio[i * 2 + 1] << 8));
                // Handle signed 16-bit PCM
                const signedSample = sample > 32767 ? sample - 65536 : sample;
                channelData[i] = signedSample / 32768.0;
            }
        }
        
        return audioBuffer;
        
    } catch (error) {
        console.error(`Error building audio buffer for ${provider}:`, error);
        console.error(`Provider: ${provider}, Audio chunks: ${state.audioChunks.length}, Total size: ${combinedAudio.length} bytes`);
        
        // If decode fails, try alternative approaches
        if (provider === 'elevenlabs') {
            // Try creating a Blob and using it for decoding
            try {
                const blob = new Blob([combinedAudio], { type: 'audio/mpeg' });
                const arrayBuffer = await blob.arrayBuffer();
                const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
                console.log(`${provider} audio decoded via Blob method`);
                return audioBuffer;
            } catch (blobError) {
                console.error(`Blob decode also failed for ${provider}:`, blobError);
            }
        } else if (provider === 'rime') {
            // Rime fallback: try PCM processing again with error handling
            try {
                const sampleRate = 24000;
                const numChannels = 1;
                const bytesPerSample = 2;
                const frameCount = Math.floor(combinedAudio.length / bytesPerSample);
                const audioBuffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
                const channelData = audioBuffer.getChannelData(0);
                const dv = new DataView(combinedAudio.buffer, combinedAudio.byteOffset, combinedAudio.byteLength);
                for (let i = 0; i < frameCount; i++) {
                    const int16Sample = dv.getInt16(i * bytesPerSample, true);
                    channelData[i] = int16Sample / 32768.0;
                }
                console.log(`${provider} audio processed via fallback PCM method`);
                return audioBuffer;
            } catch (pcmError) {
                console.error(`PCM processing also failed for ${provider}:`, pcmError);
            }
        }
        
        updateStatus(provider, 'Decode Error');
        return null;
    }
}

// Helper function to get provider display name
function getProviderDisplayName(provider) {
    const names = {
        'elevenlabs': 'ElevenLabs',
        'cartesia': 'Cartesia',
        'deepgram': 'Deepgram',
        'rime': 'Rime'
    };
    return names[provider] || provider;
}

// Helper function to enable/disable all play buttons
function setAllPlayButtonsEnabled(enabled, exceptProvider = null) {
    const providers = ['elevenlabs', 'cartesia', 'deepgram', 'rime'];
    providers.forEach(p => {
        if (p === exceptProvider) return;
        const btn = document.getElementById(`${p}-play-btn`);
        if (btn) {
            btn.disabled = !enabled;
        }
    });
}

// Helper function to update play button text
function updatePlayButtonText(provider, isPlaying) {
    const btn = document.getElementById(`${provider}-play-btn`);
    if (btn) {
        const providerName = getProviderDisplayName(provider);
        btn.textContent = isPlaying ? `Restart ${providerName}` : `Play ${providerName}`;
    }
}

// Play buffered audio on demand - uses streaming queue for gapless playback
function playBufferedAudio(provider) {
    const state = providerState[provider];
    const ctx = initAudioContext();
    
    if (!state.isBuffered || state.playbackQueue.length === 0) {
        console.error(`No playable audio available for ${provider}`);
        updateStatus(provider, 'No Audio Available');
        return;
    }
    
    // Stop any currently playing audio for this provider (without re-enabling buttons)
    if (state.isPlaying) {
        // Stop all scheduled sources
        state.scheduledSources.forEach(source => {
            try {
                source.stop();
            } catch (e) {
                // Ignore errors (source may have already ended)
            }
        });
        state.scheduledSources = [];
        state.isPlaying = false;
        state.playHeadTime = null;
    }
    
    // Disable all other play buttons
    setAllPlayButtonsEnabled(false, provider);
    
    // Update button text to "Restart"
    updatePlayButtonText(provider, true);
    
    // Initialize playback queue
    state.isPlaying = true;
    state.playHeadTime = ctx.currentTime + 0.1; // Start slightly in the future for scheduling
    
    // Schedule all queued chunks for playback
    state.playbackQueue.forEach(chunkBuffer => {
        scheduleChunkPlayback(provider, chunkBuffer);
    });
    
    updateStatus(provider, 'Playing...');
}

// Stop playback for a provider
function stopPlayback(provider) {
    const state = providerState[provider];
    
    // Stop all scheduled sources
    state.scheduledSources.forEach(source => {
        try {
            source.stop();
        } catch (e) {
            // Ignore errors (source may have already ended)
        }
    });
    state.scheduledSources = [];
    
    state.isPlaying = false;
    state.playHeadTime = null;
    updateStatus(provider, 'Ready to Play');
    
    // Re-enable all play buttons
    setAllPlayButtonsEnabled(true);
    
    // Reset button text to "Play"
    updatePlayButtonText(provider, false);
}


// Handle stream completion - rebuilds full buffer for download, enables download button
async function handleStreamComplete(provider) {
    const state = providerState[provider];
    state.isStreaming = false;
    state.isBuffering = false;
    
    console.log(`${provider} stream complete. Total chunks: ${state.audioChunks.length}`);
    
    // Fallback: Calculate TTFPA if it wasn't calculated during chunk processing
    // This happens if the threshold was met but startTime wasn't available
    if (!providerBufferingTimes[provider] && state.isBuffered && startTime) {
        const ttfpa = Date.now() - startTime;
        providerBufferingTimes[provider] = ttfpa;
    }
    if (state.audioChunks.length > 0) {
        const totalSize = state.audioChunks.reduce((sum, chunk) => sum + chunk.length, 0);
        console.log(`${provider} total audio size: ${totalSize} bytes`);
    }
    
    // Rebuild complete audio buffer from all chunks for download
    // This ensures the download button gets the full, complete audio file
    if (state.audioChunks.length > 0) {
        try {
            // Special handling for Cartesia raw PCM streams
            if (provider === 'cartesia') {
                console.log(`Processing ${provider} raw PCM stream completion for download...`);
                
                // Concatenate all raw PCM bytes, ensuring 4-byte alignment
                let totalLength = 0;
                state.audioChunks.forEach(chunk => totalLength += chunk.length);
                
                const remainder = totalLength % 4;
                const alignedLength = totalLength - remainder;
                
                if (remainder !== 0) {
                    console.warn(`[${provider}] WARNING: PCM data length ${totalLength} is not a multiple of 4. Truncating ${remainder} bytes to ${alignedLength}.`);
                }
                
                // Create a new ArrayBuffer with exact aligned size
                const pcmBuffer = new ArrayBuffer(alignedLength);
                const pcmBytes = new Uint8Array(pcmBuffer);
                let offset = 0;
                let bytesCopied = 0;
                
                // Copy chunks, ensuring we don't exceed aligned length
                for (const chunk of state.audioChunks) {
                    const remainingBytes = alignedLength - bytesCopied;
                    if (remainingBytes <= 0) break;
                    
                    const bytesToCopy = Math.min(chunk.length, remainingBytes);
                    pcmBytes.set(chunk.slice(0, bytesToCopy), offset);
                    offset += bytesToCopy;
                    bytesCopied += bytesToCopy;
                }
                
                // Interpret as float32 samples (little-endian)
                const sampleRate = 24000;
                const bytesPerSample = 4;
                const frameCount = alignedLength / bytesPerSample;
                
                const audioContext = initAudioContext();
                const audioBuffer = audioContext.createBuffer(1, frameCount, sampleRate);
                const channelData = audioBuffer.getChannelData(0);
                
                // Use Float32Array view of the buffer
                const float32View = new Float32Array(pcmBuffer);
                
                // Copy samples from Float32Array to AudioBuffer
                const samplesToCopy = Math.min(float32View.length, frameCount);
                for (let i = 0; i < samplesToCopy; i++) {
                    channelData[i] = float32View[i];
                }
                
                // If there are remaining frames, fill with silence
                if (samplesToCopy < frameCount) {
                    for (let i = samplesToCopy; i < frameCount; i++) {
                        channelData[i] = 0;
                    }
                }
                
                state.audioBuffer = audioBuffer; // Update with complete buffer
            } else {
                // For other providers (ElevenLabs, Deepgram, Rime), rebuild from all chunks
                const audioBuffer = await buildAudioBuffer(provider);
                if (audioBuffer) {
                    state.audioBuffer = audioBuffer; // Update with complete buffer
                } else {
                    console.error(`${provider} failed to build complete audio buffer for download`);
                }
            }
            
            // Enable download button now that we have the complete audio
            const downloadBtn = document.getElementById(`${provider}-download-btn`);
            if (downloadBtn && state.audioBuffer) {
                downloadBtn.style.display = 'block';
            }
        } catch (err) {
            console.error(`Error building complete audio buffer for ${provider} download:`, err);
        }
    }
    
    // Check if all streams are complete
    checkAllBufferingComplete();
}

// Check if all providers have finished buffering
function checkAllBufferingComplete() {
    // Get enabled providers based on toggle states
    const elevenlabsEnabled = document.getElementById('toggle-elevenlabs')?.checked ?? true;
    const deepgramEnabled = document.getElementById('toggle-deepgram')?.checked ?? true;
    const cartesiaEnabled = document.getElementById('toggle-cartesia')?.checked ?? false;
    const rimeEnabled = document.getElementById('toggle-rime')?.checked ?? false;
    
    const allProviders = [];
    if (elevenlabsEnabled) allProviders.push('elevenlabs');
    if (deepgramEnabled) allProviders.push('deepgram');
    if (cartesiaEnabled) allProviders.push('cartesia');
    if (rimeEnabled) allProviders.push('rime');
    
    // Check if all enabled providers are done (streams complete, not just buffered)
    const allComplete = allProviders.every(provider => {
        const state = providerState[provider];
        // Provider is complete only when stream is done (not streaming AND not buffering)
        return !state.isStreaming && !state.isBuffering;
    });
    
    // Log summary of all provider metrics when all streams are complete (one time only)
    if (allComplete && !summaryPrinted) {
        console.log('\n========== TTFPA (Time to First Playable Audio) SUMMARY ==========');
        allProviders.forEach(provider => {
            const state = providerState[provider];
            const ttfpa = providerBufferingTimes[provider] || 'N/A';
            const ttfa = state.ttfa || 'N/A';
            console.log(`${provider.toUpperCase().padEnd(12)}: TTFPA=${ttfpa}ms, TTFA=${ttfa}ms`);
        });
        console.log('==========================================\n');
        
        // Mark summary as printed and clear tracking for next test
        summaryPrinted = true;
        providerStartTimes = {};
        providerBufferingTimes = {};
    }
    
    console.log('Checking if all buffering complete:', {
        allComplete,
        elevenlabs: {
            isBuffered: providerState.elevenlabs.isBuffered,
            hasAudioBuffer: !!providerState.elevenlabs.audioBuffer
        },
        cartesia: {
            isBuffered: providerState.cartesia.isBuffered,
            hasAudioBuffer: !!providerState.cartesia.audioBuffer
        },
        deepgram: {
            isBuffered: providerState.deepgram.isBuffered,
            hasAudioBuffer: !!providerState.deepgram.audioBuffer
        }
    });
    
    // Show play buttons immediately when a provider is buffered (early playback)
    // Don't wait for all streams to complete - show as soon as we have playable audio
    allProviders.forEach(provider => {
        const state = providerState[provider];
        const playBtn = document.getElementById(`${provider}-play-btn`);
        
        // Show play button as soon as we have a playable buffer (150ms threshold met)
        // Use playbackQueue instead of audioBuffer for early playback
        const hasAudio = state.isBuffered && state.playbackQueue.length > 0;
        
        if (playBtn && hasAudio) {
            playBtn.style.display = 'block';
            playBtn.disabled = false; // Ensure button is enabled when shown
            // Only reset text if not currently playing
            if (!state.isPlaying) {
                updatePlayButtonText(provider, false);
            }
        } else if (playBtn) {
            playBtn.style.display = 'none';
        }
        
        // Download button is only shown in handleStreamComplete when full stream is complete
        // Don't show/hide it here - it's controlled by stream completion to ensure full audio
    });
}

// Handle stream error
function handleStreamError(provider, message) {
    const state = providerState[provider];
    state.isStreaming = false;
    state.isBuffering = false;
    updateStatus(provider, `Error: ${message}`);
    console.error(`${provider} error:`, message);
    
    // Still check if all are complete (even with errors)
    checkAllBufferingComplete();
}

// Update TTFA display
function updateTTFADisplay(provider, ttfa) {
    const element = document.getElementById(`${provider}-ttfa`);
    if (element) {
        element.textContent = ttfa;
        element.style.color = '#4caf50';
    }
}

// Update status display
function updateStatus(provider, status) {
    if (provider === 'all') {
        ['elevenlabs', 'cartesia', 'deepgram'].forEach(p => {
            const element = document.getElementById(`${p}-status`);
            if (element) {
                element.textContent = status;
                element.className = 'audio-status';
            }
        });
    } else {
        const element = document.getElementById(`${provider}-status`);
        if (element) {
            element.textContent = status;
            element.className = 'audio-status';
            if (status === 'Streaming...') {
                element.classList.add('streaming');
            } else if (status.startsWith('Error')) {
                element.classList.add('error');
            }
        }
    }
}

// Reset provider state
function resetProviderState() {
    Object.keys(providerState).forEach(provider => {
        const state = providerState[provider];
        state.ttfa = null;
        state.firstChunkReceived = false;
        state.isStreaming = false;
        state.isBuffering = false;
        state.isBuffered = false;
        state.audioChunks = []; // Download accumulator
        state.audioBuffer = null; // Complete buffer for download
        state.playbackQueue = []; // Streaming playback queue
        state.playHeadTime = null;
        state.isPlaying = false;
        state.scheduledSources = [];
        
        // Stop any playing audio
        if (state.isPlaying) {
            stopPlayback(provider);
        }
        
        if (state.sourceNode) {
            try {
                state.sourceNode.stop();
            } catch (e) {
                // Ignore errors when stopping
            }
            state.sourceNode = null;
        }
        
        // Hide play button
        const playBtn = document.getElementById(`${provider}-play-btn`);
        if (playBtn) {
            playBtn.style.display = 'none';
            playBtn.disabled = false; // Re-enable when hidden
            updatePlayButtonText(provider, false); // Reset text
        }
        
        // Hide download button
        const downloadBtn = document.getElementById(`${provider}-download-btn`);
        if (downloadBtn) {
            downloadBtn.style.display = 'none';
        }
        
        // Reset displays
        const ttfaElement = document.getElementById(`${provider}-ttfa`);
        if (ttfaElement) {
            ttfaElement.textContent = '--';
            ttfaElement.style.color = '#13EF93';
        }
        
        updateStatus(provider, 'Ready');
    });
}

// Reset a single provider's state (used when voice changes)
function resetSingleProviderState(provider, settingChanged = 'Setting') {
    const state = providerState[provider];
    if (!state) return;
    
    state.ttfa = null;
    state.firstChunkReceived = false;
    state.isStreaming = false;
    state.isBuffering = false;
    state.isBuffered = false;
    state.audioChunks = [];
    state.audioBuffer = null;
    
    if (state.sourceNode) {
        try {
            state.sourceNode.stop();
        } catch (e) {
            // Ignore errors when stopping
        }
        state.sourceNode = null;
    }
    
    // Hide play button
    const playBtn = document.getElementById(`${provider}-play-btn`);
    if (playBtn) {
        playBtn.style.display = 'none';
    }
    
    // Hide download button
    const downloadBtn = document.getElementById(`${provider}-download-btn`);
    if (downloadBtn) {
        downloadBtn.style.display = 'none';
    }
    
    // Reset displays
    const ttfaElement = document.getElementById(`${provider}-ttfa`);
    if (ttfaElement) {
        ttfaElement.textContent = '--';
        ttfaElement.style.color = '#667eea';
    }
    
    // Update status with appropriate message based on what changed
    const settingName = settingChanged || 'Setting';
    updateStatus(provider, `${settingName} changed - Click "Start TTS Test" to hear new audio`);
}

// Start TTS test
function startTTSTest(text) {
    if (!text || text.trim() === '') {
        alert('Please enter or select text to test');
        return;
    }
    
    if (!ws || ws.readyState !== WebSocket.OPEN) {
        alert('WebSocket not connected. Please wait...');
        return;
    }
    
    currentText = text.trim();
    
    // Check which providers are enabled
    const elevenlabsEnabled = document.getElementById('toggle-elevenlabs')?.checked ?? true;
    const deepgramEnabled = document.getElementById('toggle-deepgram')?.checked ?? true;
    const cartesiaEnabled = document.getElementById('toggle-cartesia')?.checked ?? false;
    const rimeEnabled = document.getElementById('toggle-rime')?.checked ?? false;
    
    // Collect voice IDs and model from selectors (only for enabled providers)
    
    const voices = {};
    const models = {};
    
    if (elevenlabsEnabled) {
        voices.elevenlabs = document.getElementById('elevenlabs-voice')?.value || 'EXAVITQu4vr4xnSDxMaL';
        models.elevenlabs = document.getElementById('elevenlabs-model')?.value || 'eleven_flash_v2_5';
    }
    
    if (deepgramEnabled) {
        voices.deepgram = document.getElementById('deepgram-voice')?.value || 'aura-2-thalia-en';
        models.deepgram = document.getElementById('deepgram-model')?.value || 'aura-2';
    }
    
    // Collect text normalization setting if multilingual v2 is selected (only for ElevenLabs if enabled)
    const elevenlabsTextNorm = (elevenlabsEnabled && models.elevenlabs === 'eleven_multilingual_v2') 
        ? (document.getElementById('elevenlabs-text-norm')?.value || 'auto')
        : null;
    
    // Only include optional providers if enabled
    if (cartesiaEnabled) {
        voices.cartesia = document.getElementById('cartesia-voice')?.value || 'f786b574-daa5-4673-aa0c-cbe3e8534c02';
        models.cartesia = document.getElementById('cartesia-model')?.value || 'sonic-turbo';
    }
    
    if (rimeEnabled) {
        voices.rime = document.getElementById('rime-voice')?.value || 'astra';
        models.rime = document.getElementById('rime-model')?.value || 'mistv2';
    }
    
    // Collect text normalization setting for Rime (only for Mist v2)
    const rimeModel = rimeEnabled 
        ? (document.getElementById('rime-model')?.value || 'mistv2')
        : null;
    const rimeTextNorm = (rimeEnabled && rimeModel === 'mistv2')
        ? (document.getElementById('rime-text-normalization')?.value || 'off')
        : null;
    
    const textNormalization = {
        elevenlabs: elevenlabsTextNorm,
        rime: rimeTextNorm
    };
    
    // Create enabledProviders object
    const enabledProviders = {
        elevenlabs: elevenlabsEnabled,
        deepgram: deepgramEnabled,
        cartesia: cartesiaEnabled,
        rime: rimeEnabled
    };
    
    // Reset state (only for enabled providers)
    resetProviderState();
    
    // Record start time for TTFA measurement
    startTime = Date.now();
    
    // Reset provider timing tracking for new test
    providerStartTimes = {};
    providerBufferingTimes = {};
    summaryPrinted = false; // Reset summary flag for new test
    
    console.log(`\n========== STARTING TTS TEST ==========`);
    console.log(`Text: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`);
    console.log(`Start Time: ${new Date().toISOString()}`);
    console.log(`Enabled Providers: ${Object.keys(enabledProviders).filter(p => enabledProviders[p]).join(', ')}`);
    console.log('==========================================\n');
    
    // Send start message to server with voice IDs, models, text normalization, and enabled providers
    const startMessage = {
        type: 'start',
        text: currentText,
        voices: voices,
        models: models,
        textNormalization: textNormalization,
        enabledProviders: enabledProviders
    };
    
    // Check WebSocket state before sending
    if (!ws) {
        initWebSocket();
        // Wait for connection
        const waitForConnection = (retries = 10) => {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(startMessage));
                updateStatus('all', 'Starting...');
            } else if (retries > 0) {
                setTimeout(() => waitForConnection(retries - 1), 200);
            } else {
                updateStatus('all', 'Connection Failed');
            }
        };
        waitForConnection();
    } else if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(startMessage));
        updateStatus('all', 'Starting...');
    } else if (ws.readyState === WebSocket.CONNECTING) {
        ws.addEventListener('open', () => {
            ws.send(JSON.stringify(startMessage));
            updateStatus('all', 'Starting...');
        }, { once: true });
    } else {
        initWebSocket();
        // Wait for connection
        const waitForConnection = (retries = 10) => {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(startMessage));
                updateStatus('all', 'Starting...');
            } else if (retries > 0) {
                setTimeout(() => waitForConnection(retries - 1), 200);
            } else {
                updateStatus('all', 'Connection Failed');
            }
        };
        waitForConnection();
    }
    
    // Disable start button
    const startBtn = document.getElementById('start-test-btn');
    if (startBtn) {
        startBtn.disabled = true;
        setTimeout(() => {
            startBtn.disabled = false;
        }, 5000); // Re-enable after 5 seconds
    }
}

// Populate challenge dropdown with categorized options
function populateChallengeDropdown() {
    const challengeSelect = document.getElementById('challenge-select');
    if (!challengeSelect) return;
    
    // Clear existing options except the first one
    challengeSelect.innerHTML = '<option value="">Select a challenge...</option>';
    
    // Track challenge number across all categories
    let challengeNumber = 1;
    
    // Add categorized options
    Object.keys(CHALLENGES).forEach(category => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;
        
        CHALLENGES[category].forEach(challenge => {
            const option = document.createElement('option');
            // Value is the original text (without number) - this is what gets sent to TTS
            option.value = challenge.text;
            // Display text includes the number prefix for UI reference only
            option.textContent = `${challengeNumber}. ${challenge.text}`;
            optgroup.appendChild(option);
            challengeNumber++;
        });
        
        challengeSelect.appendChild(optgroup);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize WebSocket
    initWebSocket();
    
    // Populate challenge dropdown
    populateChallengeDropdown();
    
    // Provider toggle handlers
    const toggleElevenLabs = document.getElementById('toggle-elevenlabs');
    const toggleDeepgram = document.getElementById('toggle-deepgram');
    const toggleCartesia = document.getElementById('toggle-cartesia');
    const toggleRime = document.getElementById('toggle-rime');
    const elevenlabsColumn = document.getElementById('elevenlabs-column');
    const deepgramColumn = document.getElementById('deepgram-column');
    const cartesiaColumn = document.getElementById('cartesia-column');
    const rimeColumn = document.getElementById('rime-column');
    const providersSection = document.querySelector('.providers-section');
    
    function updateProviderLayout() {
        const elevenlabsVisible = toggleElevenLabs?.checked ?? true;
        const deepgramVisible = toggleDeepgram?.checked ?? true;
        const cartesiaVisible = toggleCartesia?.checked ?? false;
        const rimeVisible = toggleRime?.checked ?? false;
        
        // Show/hide columns
        if (elevenlabsColumn) {
            elevenlabsColumn.classList.toggle('hidden', !elevenlabsVisible);
        }
        if (deepgramColumn) {
            deepgramColumn.classList.toggle('hidden', !deepgramVisible);
        }
        if (cartesiaColumn) {
            cartesiaColumn.classList.toggle('hidden', !cartesiaVisible);
        }
        if (rimeColumn) {
            rimeColumn.classList.toggle('hidden', !rimeVisible);
        }
        
        // Update grid columns based on visible providers
        const visibleCount = (elevenlabsVisible ? 1 : 0) + (deepgramVisible ? 1 : 0) + 
                            (cartesiaVisible ? 1 : 0) + (rimeVisible ? 1 : 0);
        
        if (providersSection) {
            providersSection.style.gridTemplateColumns = `repeat(${visibleCount}, 1fr)`;
        }
    }
    
    // Initialize layout
    updateProviderLayout();
    
    // Add event listeners for toggles
    if (toggleElevenLabs) {
        toggleElevenLabs.addEventListener('change', () => {
            updateProviderLayout();
            if (!toggleElevenLabs.checked) {
                resetSingleProviderState('elevenlabs', 'Setting');
            }
        });
    }
    
    if (toggleDeepgram) {
        toggleDeepgram.addEventListener('change', () => {
            updateProviderLayout();
            if (!toggleDeepgram.checked) {
                resetSingleProviderState('deepgram', 'Setting');
            }
        });
    }
    
    if (toggleCartesia) {
        toggleCartesia.addEventListener('change', () => {
            updateProviderLayout();
            if (!toggleCartesia.checked) {
                resetSingleProviderState('cartesia', 'Setting');
            }
        });
    }
    
    if (toggleRime) {
        toggleRime.addEventListener('change', () => {
            updateProviderLayout();
            if (!toggleRime.checked) {
                resetSingleProviderState('rime', 'Setting');
            }
        });
    }
    
    // Challenge select change
    const challengeSelect = document.getElementById('challenge-select');
    const customText = document.getElementById('custom-text');
    const pronunciationGuide = document.getElementById('pronunciation-guide');
    const pronunciationText = document.getElementById('pronunciation-text');
    
    if (challengeSelect) {
        challengeSelect.addEventListener('change', (e) => {
            const selectedText = e.target.value;
            if (selectedText) {
                // Check if this is a different text than what was last tested
                if (currentText && selectedText !== currentText) {
                    // Text changed - reset all providers to indicate new test needed
                    resetProviderState();
                }
                
                // Clear and disable custom text when pre-set challenge is selected
                if (customText) {
                    customText.value = '';
                    customText.disabled = true;
                    customText.placeholder = 'Select "Select a challenge..." to use custom text';
                }
                
                // Find the selected challenge and show pronunciation
                let foundChallenge = null;
                for (const category of Object.keys(CHALLENGES)) {
                    foundChallenge = CHALLENGES[category].find(ch => ch.text === selectedText);
                    if (foundChallenge) break;
                }
                
                if (foundChallenge && foundChallenge.pronunciation) {
                    if (pronunciationGuide) {
                        pronunciationGuide.style.display = 'block';
                    }
                    if (pronunciationText) {
                        pronunciationText.textContent = foundChallenge.pronunciation;
                    }
                } else {
                    if (pronunciationGuide) {
                        pronunciationGuide.style.display = 'none';
                    }
                }
            } else {
                // No challenge selected, enable custom text
                if (customText) {
                    customText.disabled = false;
                    customText.placeholder = 'Enter custom alphanumeric text to test...';
                }
                // Hide pronunciation guide
                if (pronunciationGuide) {
                    pronunciationGuide.style.display = 'none';
                }
            }
        });
    }
    
    // Custom text input - clear pre-set challenge when user types
    // Debounce timer for pronunciation generation
    let pronunciationDebounceTimer = null;
    
    if (customText) {
        customText.addEventListener('input', (e) => {
            const textValue = e.target.value.trim();
            if (textValue && challengeSelect) {
                // Check if this is a different text than what was last tested
                if (currentText && textValue !== currentText) {
                    // Text changed - reset all providers to indicate new test needed
                    resetProviderState();
                }
                
                // Clear pre-set challenge when custom text is entered
                challengeSelect.value = '';
                
                // Clear previous debounce timer
                if (pronunciationDebounceTimer) {
                    clearTimeout(pronunciationDebounceTimer);
                }
                
                // Debounce pronunciation generation (wait 3 seconds after user stops typing)
                pronunciationDebounceTimer = setTimeout(async () => {
                    try {
                        // Show loading state
                        if (pronunciationGuide) {
                            pronunciationGuide.style.display = 'block';
                            if (pronunciationText) {
                                pronunciationText.textContent = 'Generating pronunciation...';
                            }
                        }
                        
                        const response = await fetch('/api/generate-pronunciation', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ text: textValue })
                        });
                        
                        if (response.ok) {
                            const data = await response.json();
                            if (data.pronunciation && pronunciationText) {
                                pronunciationText.textContent = data.pronunciation;
                                if (pronunciationGuide) {
                                    pronunciationGuide.style.display = 'block';
                                }
                            }
                        } else {
                            // If API fails, just hide the guide (don't show error to user)
                            if (pronunciationGuide) {
                                pronunciationGuide.style.display = 'none';
                            }
                        }
                    } catch (error) {
                        console.error('Error generating pronunciation:', error);
                        // Silently fail - just hide the guide
                        if (pronunciationGuide) {
                            pronunciationGuide.style.display = 'none';
                        }
                    }
                }, 3000); // Wait 3 seconds after user stops typing
            } else if (!textValue) {
                // Custom text was cleared - reset providers and hide pronunciation
                if (currentText) {
                    resetProviderState();
                }
                if (pronunciationGuide) {
                    pronunciationGuide.style.display = 'none';
                }
                // Clear any pending pronunciation request
                if (pronunciationDebounceTimer) {
                    clearTimeout(pronunciationDebounceTimer);
                    pronunciationDebounceTimer = null;
                }
            }
        });
        
        // Also handle focus to provide feedback
        customText.addEventListener('focus', () => {
            if (challengeSelect && challengeSelect.value) {
                // Clear pre-set challenge when user focuses on custom text
                challengeSelect.value = '';
                if (pronunciationGuide) {
                    pronunciationGuide.style.display = 'none';
                }
            }
        });
    }
    
    // Generate random challenge button
    const generateRandomBtn = document.getElementById('generate-random-btn');
    if (generateRandomBtn) {
        generateRandomBtn.addEventListener('click', async () => {
            // Disable button while generating
            generateRandomBtn.disabled = true;
            generateRandomBtn.textContent = '🔄 Generating...';
            
            try {
                const response = await fetch('/api/generate-random-challenge', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to generate challenge');
                }
                
                const data = await response.json();
                
                // Clear pre-set challenge selection
                if (challengeSelect) {
                    challengeSelect.value = '';
                }
                
                // Enable and populate custom text field
                if (customText) {
                    customText.disabled = false;
                    customText.value = data.text;
                    customText.placeholder = 'Enter custom alphanumeric text to test...';
                }
                
                // Show pronunciation guide
                if (pronunciationGuide) {
                    pronunciationGuide.style.display = 'block';
                }
                if (pronunciationText) {
                    pronunciationText.textContent = data.pronunciation;
                }
                
                // Reset providers since we have new text
                resetProviderState();
                
                // Scroll to custom text field to show the generated challenge
                if (customText) {
                    customText.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
            } catch (error) {
                console.error('Error generating random challenge:', error);
                alert(`Failed to generate random challenge: ${error.message}`);
            } finally {
                // Re-enable button
                generateRandomBtn.disabled = false;
                generateRandomBtn.textContent = 'Generate Random Challenge';
            }
        });
    }
    
    // Start test button
    const startBtn = document.getElementById('start-test-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const challengeSelect = document.getElementById('challenge-select');
            const customText = document.getElementById('custom-text');
            
            let text = '';
            if (challengeSelect && challengeSelect.value) {
                text = challengeSelect.value;
            } else if (customText && customText.value.trim()) {
                text = customText.value.trim();
            }
            
            startTTSTest(text);
        });
    }
    
    // Play buttons
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const provider = e.target.getAttribute('data-provider');
            playBufferedAudio(provider);
        });
    });
    
    // Download buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const provider = e.target.getAttribute('data-provider');
            downloadAudio(provider);
        });
    });
    
    // Voice selector change handlers - reset provider state when voice changes
    const elevenlabsVoiceSelect = document.getElementById('elevenlabs-voice');
    if (elevenlabsVoiceSelect) {
        elevenlabsVoiceSelect.addEventListener('change', () => {
            resetSingleProviderState('elevenlabs', 'Voice');
        });
    }
    
    const elevenlabsModelSelect = document.getElementById('elevenlabs-model');
    const elevenlabsTextNormToggle = document.getElementById('elevenlabs-text-normalization');
    
    // Function to update toggle visibility
    const updateTextNormToggle = () => {
        if (elevenlabsTextNormToggle && elevenlabsModelSelect) {
            if (elevenlabsModelSelect.value === 'eleven_multilingual_v2') {
                elevenlabsTextNormToggle.style.display = 'block';
            } else {
                elevenlabsTextNormToggle.style.display = 'none';
            }
        }
    };
    
    if (elevenlabsModelSelect) {
        // Initialize toggle visibility on page load
        updateTextNormToggle();
        
        elevenlabsModelSelect.addEventListener('change', () => {
            resetSingleProviderState('elevenlabs', 'Model');
            updateTextNormToggle();
        });
    }
    
    const elevenlabsTextNormSelect = document.getElementById('elevenlabs-text-norm');
    if (elevenlabsTextNormSelect) {
        elevenlabsTextNormSelect.addEventListener('change', () => {
            resetSingleProviderState('elevenlabs', 'Text normalization');
        });
    }
    
    const cartesiaModelSelect = document.getElementById('cartesia-model');
    if (cartesiaModelSelect) {
        cartesiaModelSelect.addEventListener('change', () => {
            resetSingleProviderState('cartesia', 'Model');
        });
    }
    
    const cartesiaVoiceSelect = document.getElementById('cartesia-voice');
    if (cartesiaVoiceSelect) {
        cartesiaVoiceSelect.addEventListener('change', () => {
            resetSingleProviderState('cartesia', 'Voice');
        });
    }
    
    const deepgramVoiceSelect = document.getElementById('deepgram-voice');
    if (deepgramVoiceSelect) {
        deepgramVoiceSelect.addEventListener('change', () => {
            resetSingleProviderState('deepgram', 'Voice');
        });
    }
    
    const rimeModelSelect = document.getElementById('rime-model');
    const rimeTextNormToggle = document.getElementById('rime-text-normalization-toggle');
    
    // Function to update text normalization toggle visibility
    const updateRimeTextNormToggle = () => {
        if (rimeTextNormToggle && rimeModelSelect) {
            const selectedModel = rimeModelSelect.value;
            if (selectedModel === 'mistv2') {
                rimeTextNormToggle.style.display = 'block';
            } else {
                rimeTextNormToggle.style.display = 'none';
            }
        }
    };
    
    if (rimeModelSelect) {
        // Initialize toggle visibility on page load
        updateRimeTextNormToggle();
        
        rimeModelSelect.addEventListener('change', () => {
            resetSingleProviderState('rime', 'Model');
            updateRimeTextNormToggle();
        });
    }
    
    const rimeVoiceSelect = document.getElementById('rime-voice');
    if (rimeVoiceSelect) {
        rimeVoiceSelect.addEventListener('change', () => {
            resetSingleProviderState('rime', 'Voice');
        });
    }
    
    const rimeTextNormSelect = document.getElementById('rime-text-normalization');
    if (rimeTextNormSelect) {
        rimeTextNormSelect.addEventListener('change', () => {
            resetSingleProviderState('rime', 'Text normalization');
        });
    }
});

// Download audio as WAV file
function downloadAudio(provider) {
    const state = providerState[provider];
    
    if (!state.audioBuffer) {
        console.error(`No audio buffer available for ${provider}`);
        updateStatus(provider, 'No Audio Available');
        return;
    }
    
    try {
        // Convert AudioBuffer to WAV
        const wav = audioBufferToWav(state.audioBuffer);
        const blob = new Blob([wav], { type: 'audio/wav' });
        
        // Create download link
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${provider}-audio-${Date.now()}.wav`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log(`Downloaded audio for ${provider}`);
    } catch (error) {
        console.error(`Error downloading audio for ${provider}:`, error);
        updateStatus(provider, 'Download Error');
    }
}

// Convert AudioBuffer to WAV format
function audioBufferToWav(buffer) {
    const length = buffer.length;
    const numberOfChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const bytesPerSample = 2; // 16-bit
    const blockAlign = numberOfChannels * bytesPerSample;
    const byteRate = sampleRate * blockAlign;
    const dataLength = length * blockAlign;
    const bufferSize = 44 + dataLength;
    
    const arrayBuffer = new ArrayBuffer(bufferSize);
    const view = new DataView(arrayBuffer);
    
    // WAV header
    const writeString = (offset, string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };
    
    // RIFF chunk descriptor
    writeString(0, 'RIFF');
    view.setUint32(4, bufferSize - 8, true); // Chunk size
    writeString(8, 'WAVE');
    
    // fmt sub-chunk
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true); // Sub-chunk size
    view.setUint16(20, 1, true); // Audio format (1 = PCM)
    view.setUint16(22, numberOfChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bytesPerSample * 8, true); // Bits per sample
    
    // data sub-chunk
    writeString(36, 'data');
    view.setUint32(40, dataLength, true);
    
    // Convert float32 samples to int16 PCM
    let offset = 44;
    for (let i = 0; i < length; i++) {
        for (let channel = 0; channel < numberOfChannels; channel++) {
            const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
            view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
            offset += 2;
        }
    }
    
    return arrayBuffer;
}

