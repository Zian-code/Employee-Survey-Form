const pages = [
  {
    title: "Welcome",
    content: `
      <p>Welcome to our Employee Satisfaction Survey!<br>
      Your feedback is incredibly valuable to us.<br>
      This survey is completely anonymous and will take approximately 10 minutes to complete.<br>
      Thank you for helping us improve our workplace!</p>`
  },
  {
    title: "Company Culture",
    questions: [
      {
        label: "How would you describe the company culture?",
        name: "culture",
        type: "likert"
      },
      {
        label: "Does the company promote diversity & inclusion?",
        name: "diversity",
        type: "likert"
      }
    ]
  },
  {
    title: "Work Environment",
    questions: [
      {
        label: "How would you rate the quality of facilities/resources?",
        name: "facilities",
        type: "likert"
      },
      {
        label: "How safe do you feel physically at work?",
        name: "physical_safety",
        type: "likert"
      },
      {
        label: "How supported do you feel emotionally at work?",
        name: "mental_safety",
        type: "likert"
      },
      {
        label: "How would you rate the cleanliness & hygiene standards?",
        name: "cleanliness",
        type: "likert"
      }
    ]
  },
  {
    title: "Management and Leadership",
    questions: [
      {
        label: "How effective is your supervisor's leadership?",
        name: "leadership",
        type: "likert"
      },
      {
        label: "How confident are you in the management team?",
        name: "mgmt_confidence",
        type: "likert"
      },
      {
        label: "How well does management support your needs?",
        name: "support",
        type: "likert"
      },
      {
        label: "How approachable do you find the leadership team?",
        name: "approachability",
        type: "likert"
      }
    ]
  },
  {
    title: "Job Satisfaction",
    questions: [
      {
        label: "How satisfied are you with your job overall?",
        name: "job_satisfaction",
        type: "likert"
      },
      {
        label: "How likely are you to recommend this company to others?",
        name: "recommend",
        type: "likert"
      },
      {
        label: "What aspects of your job do you enjoy the most?",
        name: "enjoy_most",
        type: "textarea"
      },
      {
        label: "What aspects of your job do you find most challenging?",
        name: "enjoy_least",
        type: "textarea"
      },
      {
        label: "If you could change one thing about your job, what would it be?",
        name: "change_one",
        type: "textarea"
      }
    ]
  },
  {
    title: "Communication",
    questions: [
      {
        label: "How effective is communication within the company?",
        name: "communication",
        type: "likert"
      },
      {
        label: "How valued do you feel your suggestions and opinions are?",
        name: "opinions",
        type: "likert"
      },
      {
        label: "How would you rate team collaboration?",
        name: "teamwork",
        type: "likert"
      },
      {
        label: "How well-informed do you feel about company changes?",
        name: "updates",
        type: "likert"
      }
    ]
  },
  {
    title: "Professional Development",
    questions: [
      {
        label: "How satisfied are you with training opportunities?",
        name: "training",
        type: "likert"
      },
      {
        label: "How would you rate career advancement opportunities?",
        name: "advancement",
        type: "likert"
      },
      {
        label: "How effective are the skill development programs?",
        name: "review",
        type: "likert"
      }
    ]
  },
  {
    title: "Compensation and Benefits",
    questions: [
      {
        label: "How satisfied are you with your compensation?",
        name: "compensation",
        type: "likert"
      },
      {
        label: "How would you rate the healthcare benefits?",
        name: "healthcare",
        type: "likert"
      },
      {
        label: "How satisfied are you with the leave policies?",
        name: "leave",
        type: "likert"
      }
    ]
  },
  {
    title: "Work-Life Balance",
    questions: [
      {
        label: "How would you rate your work-life balance?",
        name: "balance",
        type: "likert"
      },
      {
        label: "How often do you feel overwhelmed at work?",
        name: "overwhelmed",
        type: "likert"
      }
    ]
  },
  {
    title: "Well-being",
    questions: [
      {
        label: "How would you rate your overall well-being at work?",
        name: "mental",
        type: "likert"
      },
      {
        label: "How effective are the company's well-being initiatives?",
        name: "wellbeing_effort",
        type: "likert"
      },
      {
        label: "How likely are you to participate in wellness programs?",
        name: "wellness_participation",
        type: "likert"
      },
      {
        label: "How comfortable do you feel discussing well-being with your supervisor?",
        name: "comfort",
        type: "likert"
      }
    ]
  },
  {
    title: "Recognition",
    questions: [
      {
        label: "How valued do you feel for your contributions?",
        name: "recognition",
        type: "likert"
      },
      {
        label: "How often do you receive positive recognition?",
        name: "positive_feedback",
        type: "likert"
      }
    ]
  },
  {
    title: "Final Thoughts",
    questions: [
      {
        label: "What changes would you like to see in the workplace?",
        name: "change_suggestions",
        type: "textarea"
      },
      {
        label: "What additional resources or support would help you succeed?",
        name: "resources_needed",
        type: "textarea"
      },
      {
        label: "Do you have any other comments or suggestions?",
        name: "other_comments",
        type: "textarea"
      }
    ]
  },
  {
    title: "Thank You!",
    content: `
      <p>🎉 Thank you for completing the survey!<br>
      Your feedback is invaluable in helping us create a better workplace.<br>
      We appreciate your time and honest responses.</p>`
  }
];

const motivationalSpeeches = [
    "Your feedback is the heartbeat of our improvement! 💓",
    "Every answer helps us grow stronger together! 🌱",
    "You're making a difference with every response! ⭐",
    "Your voice matters in shaping our future! 🎯",
    "Together, we're building a better workplace! 🏥",
    "Your insights are like medicine for our growth! 💊",
    "Each question brings us closer to excellence! 🎓",
    "Your perspective is invaluable to our journey! 🚀",
    "You're helping us create a healthier workplace! 🏥",
    "Your feedback is the key to our success! 🔑"
];

let pageIndex = 0;
let responses = JSON.parse(localStorage.getItem('surveyResponses')) || {};
let currentSpeechIndex = 0;

function getRandomSpeech() {
    const speech = motivationalSpeeches[currentSpeechIndex];
    currentSpeechIndex = (currentSpeechIndex + 1) % motivationalSpeeches.length;
    return speech;
}

function showWarning(message, questions) {
    const existingWarning = document.querySelector('.warning-message');
    if (existingWarning) existingWarning.remove();

    const warning = document.createElement('div');
    warning.className = 'warning-message';
    warning.innerHTML = `Please answer all the questions (${questions.length} remaining)`;
    
    document.body.appendChild(warning);
    
    setTimeout(() => {
        warning.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        warning.classList.remove('show');
        setTimeout(() => warning.remove(), 300);
    }, 5000);
}

function validatePage() {
    const page = pages[pageIndex];
    if (!page.questions) return true;

    let isValid = true;
    let unansweredQuestions = [];

    page.questions.forEach(q => {
        let selected = false;
        if (q.type === "likert") {
            selected = document.querySelector(`input[name="${q.name}"]:checked`) !== null;
            if (!selected) {
                const likertScale = document.querySelector(`div.likert-scale:has(input[name="${q.name}"])`);
                if (likertScale) {
                    likertScale.classList.add('error');
                    likertScale.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => likertScale.classList.remove('error'), 2000);
                }
                unansweredQuestions.push(q.label);
                isValid = false;
            }
        } else if (q.type === "textarea") {
            const textarea = document.querySelector(`textarea[name="${q.name}"]`);
            selected = textarea && textarea.value.trim() !== '';
            if (!selected && textarea) {
                textarea.classList.add('error');
                textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => textarea.classList.remove('error'), 2000);
                unansweredQuestions.push(q.label);
                isValid = false;
            }
        }
    });

    if (!isValid) {
        showWarning('Please answer all the questions', unansweredQuestions);
    }
    return isValid;
}

function renderPage() {
    const app = document.getElementById("app");
    const page = pages[pageIndex];
    let html = `<div class="form-section">`;
    
    html += `<h2>${page.title}</h2>`;

    if (page.questions) {
        page.questions.forEach(q => {
            html += `<label>${q.label}</label>`;

            if (q.type === "likert") {
                html += `<div class="likert-scale">`;
                html += `<span class="likert-label">Strongly Disagree</span>`;
                html += `<div class="likert-options">`;
                for (let i = 1; i <= 6; i++) {
                    const isChecked = responses[q.name] == i ? 'checked' : '';
                    html += `
                        <label class="likert-option">
                            <input type="radio" name="${q.name}" value="${i}" ${isChecked} required>
                            <div class="likert-btn">${i}</div>
                        </label>`;
                }
                html += `</div>`;
                html += `<span class="likert-label">Strongly Agree</span>`;
                html += `</div>`;
            } else {
                const value = responses[q.name] || '';
                html += `<textarea name="${q.name}" placeholder="Please share your thoughts..." required>${value}</textarea>`;
            }
        });
    } else {
        html += page.content;
    }

    html += `</div>`;
    app.innerHTML = html;

    updateNavButtons();
    updateProgressBar(pageIndex, pages.length);

    // Add event listeners
    document.getElementById("nextBtn").addEventListener("click", goNext);
    document.getElementById("prevBtn").addEventListener("click", goBack);

    // Save responses as they're entered
    document.querySelectorAll('input[type="radio"], textarea').forEach(el => {
        el.addEventListener('change', (e) => {
            responses[e.target.name] = e.target.value;
            localStorage.setItem('surveyResponses', JSON.stringify(responses));
            
            // Remove error state when user makes a selection
            if (e.target.type === 'radio') {
                const likertScale = e.target.closest('.likert-scale');
                if (likertScale) {
                    likertScale.classList.remove('error');
                }
            } else {
                e.target.classList.remove('error');
            }
        });
    });

    // Add animation class to likert buttons on hover and selection
    const likertBtns = document.querySelectorAll('.likert-btn');
    likertBtns.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            if (!btn.parentElement.querySelector('input').checked) {
                btn.style.transform = 'scale(1.1)';
            }
        });
        btn.addEventListener('mouseout', () => {
            if (!btn.parentElement.querySelector('input').checked) {
                btn.style.transform = 'scale(1)';
            }
        });
    });
}

function goNext() {
    const currentPage = pages[pageIndex];
    
    // Only validate and show warnings when trying to proceed
    if (!validatePage()) {
        return;
    }

    // Save all responses before proceeding
    if (currentPage.questions) {
        currentPage.questions.forEach(q => {
            if (q.type === "likert") {
                const selected = document.querySelector(`input[name="${q.name}"]:checked`);
                if (selected) {
                    responses[q.name] = selected.value;
                }
            } else if (q.type === "textarea") {
                const textarea = document.querySelector(`textarea[name="${q.name}"]`);
                if (textarea) {
                    responses[q.name] = textarea.value.trim();
                }
            }
        });

        localStorage.setItem("surveyResponses", JSON.stringify(responses));
    }

    if (pageIndex === pages.length - 2) {
        const userToken = localStorage.getItem("surveyToken") || crypto.randomUUID();
        localStorage.setItem("surveyToken", userToken);
        
        pageIndex++;
        renderPage();
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("prevBtn").style.display = "none";
        localStorage.removeItem("surveyResponses");
    } else {
        pageIndex++;
        renderPage();
    }
    
    // Scroll to top after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    if (pageIndex > 0) {
        pageIndex--;
        renderPage();
        // Scroll to top after navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    // Hide prev button only on first page
    prevBtn.style.display = pageIndex === 0 ? 'none' : 'block';
    
    if (pageIndex === 0) {
        nextBtn.textContent = "Start Survey";
    } else if (pageIndex === pages.length - 2) {
        nextBtn.textContent = "Submit";
    } else {
        nextBtn.textContent = "Next";
    }
}

function updateProgressBar(current, total) {
  const progress = ((current + 1) / total) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
});

// Get token from URL
function getTokenFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('token');
}

// Initialize survey state
let currentQuestionIndex = 0;
let answers = {};
const token = getTokenFromURL();

// Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz2ufGYoDdzeS480kWsyA9fju_vgOJ9Cb_DNJ27aBy5sOgIRGD7VIYNiNALml8gGUJZQQ/exec';

// Check if token exists
if (!token) {
    document.querySelector('#app').innerHTML = `
        <div class="form-section">
            <h2>Access Denied</h2>
            <p>Please use a valid survey link with a token.</p>
        </div>
    `;
} else {
    // Initialize the survey
    initializeSurvey();
}

function initializeSurvey() {
    // Survey questions
    const questions = [
        {
            id: "workload",
            text: "I am satisfied with my current workload.",
            type: "likert"
        },
        {
            id: "resources",
            text: "I have the resources I need to do my job effectively.",
            type: "likert"
        },
        {
            id: "growth",
            text: "I have opportunities for professional growth.",
            type: "likert"
        },
        {
            id: "communication",
            text: "Communication within my team is effective.",
            type: "likert"
        },
        {
            id: "recognition",
            text: "I feel recognized for my contributions.",
            type: "likert"
        },
        {
            id: "feedback",
            text: "Please provide any additional feedback or suggestions.",
            type: "text"
        }
    ];

    function showQuestion(index) {
        const question = questions[index];
        const app = document.querySelector('#app');
        
        if (index === 0) {
            // Show welcome message
            app.innerHTML = `
                <div class="form-section">
                    <h2>Employee Satisfaction Survey</h2>
                    <p>Thank you for participating in our survey. Your feedback is valuable to us.</p>
                    <p>All responses are confidential and will be used to improve our workplace.</p>
                </div>
            `;
            return;
        }
        
        if (index > questions.length) {
            // Show thank you message and submit
            submitSurvey();
            return;
        }

        const currentQuestion = questions[index - 1];
        let questionHTML = '';

        if (currentQuestion.type === 'likert') {
            questionHTML = `
                <div class="form-section">
                    <h2>${currentQuestion.text}</h2>
                    <div class="likert-scale">
                        <div class="likert-label">Strongly Agree</div>
                        <div class="likert-options">
                            ${[5,4,3,2,1].map(value => `
                                <label class="likert-option">
                                    <input type="radio" name="${currentQuestion.id}" value="${value}" ${answers[currentQuestion.id] === value ? 'checked' : ''}>
                                    <div class="likert-btn">${value}</div>
                                </label>
                            `).join('')}
                        </div>
                        <div class="likert-label">Strongly Disagree</div>
                    </div>
                </div>
            `;
        } else if (currentQuestion.type === 'text') {
            questionHTML = `
                <div class="form-section">
                    <h2>${currentQuestion.text}</h2>
                    <textarea name="${currentQuestion.id}">${answers[currentQuestion.id] || ''}</textarea>
                </div>
            `;
        }

        app.innerHTML = questionHTML;
    }

    function updateProgress() {
        const progress = document.querySelector('#progressBar');
        const percentage = (currentQuestionIndex / (questions.length + 1)) * 100;
        progress.style.width = `${percentage}%`;
    }

    function saveCurrentAnswer() {
        if (currentQuestionIndex === 0) return true;
        if (currentQuestionIndex > questions.length) return true;

        const currentQuestion = questions[currentQuestionIndex - 1];
        const input = currentQuestion.type === 'likert' 
            ? document.querySelector(`input[name="${currentQuestion.id}"]:checked`)
            : document.querySelector(`textarea[name="${currentQuestion.id}"]`);

        if (!input && currentQuestion.type === 'likert') {
            showWarning('Please select an option to continue.');
            return false;
        }

        answers[currentQuestion.id] = currentQuestion.type === 'likert' 
            ? parseInt(input.value)
            : input.value;
        return true;
    }

    function showWarning(message) {
        const warning = document.createElement('div');
        warning.className = 'warning-message';
        warning.textContent = message;
        document.body.appendChild(warning);
        setTimeout(() => warning.remove(), 3000);
    }

    async function submitSurvey() {
        const app = document.querySelector('#app');
        app.innerHTML = `
            <div class="form-section">
                <h2>Submitting Your Response</h2>
                <p>Please wait while we submit your feedback...</p>
            </div>
        `;

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: token,
                    answers: answers
                })
            });

            if (response.ok) {
                app.innerHTML = `
                    <div class="form-section">
                        <h2>Thank You!</h2>
                        <p>Your feedback has been submitted successfully.</p>
                        <p>We appreciate your time and input.</p>
                    </div>
                `;
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            app.innerHTML = `
                <div class="form-section">
                    <h2>Submission Error</h2>
                    <p>There was an error submitting your response. Please try again later.</p>
                </div>
            `;
        }
    }

    // Initialize navigation buttons
    document.querySelector('#prevBtn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
            updateProgress();
        }
    });

    document.querySelector('#nextBtn').addEventListener('click', () => {
        if (saveCurrentAnswer()) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
            updateProgress();
        }
    });

    // Show first question
    showQuestion(currentQuestionIndex);
    updateProgress();
}

// Initialization
(function(_0x2f1d3a,_0x5e4b8c){const _0x3d8b4f=_0x2a15;function _0x2a15(_0x4d8a2c,_0x2e8f9d){const _0x1f4b8e=_0x1f4b();return _0x2a15=function(_0x2a1551,_0x4f4b8e){_0x2a1551=_0x2a1551-0x1b3;let _0x3b4b8e=_0x1f4b8e[_0x2a1551];return _0x3b4b8e;},_0x2a15(_0x4d8a2c,_0x2e8f9d);}(function(){const _0x4f4b8e=new URLSearchParams(window.location.search),_0x1f4b8e=_0x4f4b8e.get('v');if(!_0x1f4b8e)return void(_0x2f1d3a.innerHTML='<div class="form-section"><h2>Session Expired</h2><p>Please refresh and try again.</p></div>');_0x5e4b8c(_0x1f4b8e);})();})
(document.querySelector('#app'),initializeSession);

function initializeSession(key) {
    const _0x4c8a = {
        endpoint: atob('aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5YkIxSndJSUF6LXlsYWIzd1NPU3R6aEFmeHNrZlFrdmJWblU5ajh1Q1RfVlkyU1hmSWlTTmxGLXBkZFZBajRIUDhJUS9leGVj'),
        metrics: {},
        sequence: 0
    };

    const _0x3f9b = [
        {k:"p1",t:"I am satisfied with my current workload.",c:1},
        {k:"p2",t:"I have the resources I need to do my job effectively.",c:1},
        {k:"p3",t:"I have opportunities for professional growth.",c:1},
        {k:"p4",t:"Communication within my team is effective.",c:1},
        {k:"p5",t:"I feel recognized for my contributions.",c:1},
        {k:"p6",t:"Please provide any additional feedback or suggestions.",c:2}
    ];

    function _0x2b7c(i) {
        const e = document.querySelector('#app');
        if(i === 0) {
            e.innerHTML = `
                <div class="form-section">
                    <h2>Employee Feedback Form</h2>
                    <p>Help us improve your workplace experience.</p>
                    <p>Your input is valuable and confidential.</p>
                </div>
            `;
            return;
        }
        
        if(i > _0x3f9b.length) {
            _0x5d9c();
            return;
        }

        const q = _0x3f9b[i-1];
        let h = '';

        if(q.c === 1) {
            h = `
                <div class="form-section">
                    <h2>${q.t}</h2>
                    <div class="likert-scale">
                        <div class="likert-label">Strongly Agree</div>
                        <div class="likert-options">
                            ${[5,4,3,2,1].map(v => `
                                <label class="likert-option">
                                    <input type="radio" name="${q.k}" value="${v}" ${_0x4c8a.metrics[q.k] === v ? 'checked' : ''}>
                                    <div class="likert-btn">${v}</div>
                                </label>
                            `).join('')}
                        </div>
                        <div class="likert-label">Strongly Disagree</div>
                    </div>
                </div>
            `;
        } else {
            h = `
                <div class="form-section">
                    <h2>${q.t}</h2>
                    <textarea name="${q.k}">${_0x4c8a.metrics[q.k] || ''}</textarea>
                </div>
            `;
        }

        e.innerHTML = h;
    }

    function _0x1a3c() {
        const p = document.querySelector('#progressBar');
        const r = (_0x4c8a.sequence / (_0x3f9b.length + 1)) * 100;
        p.style.width = `${r}%`;
    }

    function _0x4d2e() {
        if(_0x4c8a.sequence === 0) return true;
        if(_0x4c8a.sequence > _0x3f9b.length) return true;

        const q = _0x3f9b[_0x4c8a.sequence-1];
        const i = q.c === 1 
            ? document.querySelector(`input[name="${q.k}"]:checked`)
            : document.querySelector(`textarea[name="${q.k}"]`);

        if(!i && q.c === 1) {
            const w = document.createElement('div');
            w.className = 'warning-message';
            w.textContent = 'Please make a selection to continue.';
            document.body.appendChild(w);
            setTimeout(() => w.remove(), 3000);
            return false;
        }

        _0x4c8a.metrics[q.k] = q.c === 1 ? parseInt(i.value) : i.value;
        return true;
    }

    async function _0x5d9c() {
        const e = document.querySelector('#app');
        e.innerHTML = `
            <div class="form-section">
                <h2>Processing</h2>
                <p>Please wait...</p>
            </div>
        `;

        try {
            const r = await fetch(_0x4c8a.endpoint, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    token: key,
                    answers: _0x4c8a.metrics
                })
            });

            if(r.ok) {
                e.innerHTML = `
                    <div class="form-section">
                        <h2>Thank You</h2>
                        <p>Your response has been recorded.</p>
                    </div>
                `;
            } else {
                throw new Error('Failed');
            }
        } catch(x) {
            e.innerHTML = `
                <div class="form-section">
                    <h2>Error</h2>
                    <p>Please try again later.</p>
                </div>
            `;
        }
    }

    document.querySelector('#prevBtn').addEventListener('click', () => {
        if(_0x4c8a.sequence > 0) {
            _0x4c8a.sequence--;
            _0x2b7c(_0x4c8a.sequence);
            _0x1a3c();
        }
    });

    document.querySelector('#nextBtn').addEventListener('click', () => {
        if(_0x4d2e()) {
            _0x4c8a.sequence++;
            _0x2b7c(_0x4c8a.sequence);
            _0x1a3c();
        }
    });

    _0x2b7c(_0x4c8a.sequence);
    _0x1a3c();
}
