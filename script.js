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
        type: "likert",
        scaleLabels: ["Very Negative", "Very Postive"]
      },
      {
        label: "Do you believe the company promotes a culture of diversity and inclusion?",
        name: "diversity",
        type: "likert",
        scaleLabels: ["Strongly Disagree", "Strongly Agree"]
      }
    ]
  },
  {
    title: "Work Environment",
    questions: [
      {
        label: "How would you rate the quality of the facilities and resources provided?",
        name: "facilities",
        type: "likert",
        scaleLabels: ["Very Poor", "Excellent"]
      },
      {
        label: "How safe do you feel in your workplace in terms of physical safety?",
        name: "physical_safety",
        type: "likert",
        scaleLabels: ["Not Safe at All", "Very Safe"]
      },
      {
        label: "How safe do you feel in your workplace in terms of mental and emotional well-being?",
        name: "mental_safety",
        type: "likert",
        scaleLabels: ["Not Safe at All", "Very Safe"]
      },
      {
        label: "How would you rate the cleanliness and hygiene standards of the workplace?",
        name: "cleanliness",
        type: "likert",
        scaleLabels: ["Very Poor", "Excellent"]
      }
    ]
  },
  {
    title: "Management and Leadership",
    questions: [
      {
        label: "How would you rate the leadership abilities of your immediate supervisor?",
        name: "leadership",
        type: "likert",
        scaleLabels: ["Very Poor", "Excellent"]
      },
      {
        label: "How confident are you in the management team's ability to lead the company effectively?",
        name: "mgmt_confidence",
        type: "likert",
        scaleLabels: ["Not Confident at All", "Very Confident"]
      },
      {
        label: "Do you feel that management supports you in your job?",
        name: "support",
        type: "likert",
        scaleLabels: ["Strongly Disagree", "Strongly Agree"]
      },
      {
        label: "How approachable are the company’s leaders and managers?",
        name: "approachability",
        type: "likert",
        scaleLabels: ["Very Unapproachable", "Very Approachable"]
      }
    ]
  },
  {
    title: "Job Satisfaction",
    questions: [
      {
        label: "How satisfied are you with your current job?",
        name: "job_satisfaction",
        type: "likert",
        scaleLabels: ["Very Dissatisfied", "Very Satisfied"]
      },
      {
        label: "How likely are you to recommend our company as a good place to work to others?",
        name: "recommend",
        type: "likert",
        scaleLabels: ["Not Likely", "Very Likely"]
      },
      {
        label: "What do you enjoy most about working at our company?",
        name: "enjoy_most",
        type: "textarea",
      },
      {
        label: "What do you enjoy least about working at our company?",
        name: "enjoy_least",
        type: "textarea",
      },
      {
        label: "What is one thing you would change to improve your work experience?",
        name: "change_one",
        type: "textarea",
      }
    ]
  },
  {
    title: "Communication",
    questions: [
      {
        label: "How effectively do you think communication flows between management and staff?",
        name: "communication",
        type: "likert",
        scaleLabels: ["Very Ineffective", "Very Effective"]
      },
      {
        label: "Do you feel your opinions and suggestions are valued by your supervisors?",
        name: "opinions",
        type: "likert",
        scaleLabels: ["Strongly Disagree", "Strongly Agree"]
      },
      {
        label: "How well do you feel you work with your team members?",
        name: "teamwork",
        type: "likert",
        scaleLabels: ["Very Poorly", "Very Well"]
      },
      {
        label: "Do you feel informed about important company updates and changes?",
        name: "updates",
        type: "likert",
        scaleLabels: ["Strongly Disagree", "Strongly Agree"]
      }
    ]
  },
  {
    title: "Professional Development",
    questions: [
      {
        label: "How satisfied are you with the training and development opportunities provided?",
        name: "training",
        type: "likert",
        scaleLabels: ["Very Dissatisfied", "Very Satisfied"]
      },
      {
        label: "Do you feel there are opportunities for career advancement within the company?",
        name: "advancement",
        type: "likert",
        scaleLabels: ["Strongly Disagree", "Strongly Agree"]
      },
      {
        label: "Have you had a review in the last 12 months that helped you improve your skills and job performance?",
        name: "review",
        type: "likert",
        scaleLabels: ["Strongly Disagree", "Strongly Agree"]
      }
    ]
  },
  {
    title: "Compensation and Benefits",
    questions: [
      {
        label: "How satisfied are you with your overall compensation package?",
        name: "compensation",
        type: "likert",
        scaleLabels: ["Very Dissatisfied", "Very Satisfied"]
      },
      {
        label: "How would you rate the healthcare benefits provided by the company?",
        name: "healthcare",
        type: "likert",
        scaleLabels: ["Very Poor", "Excellent"]
      },
      {
        label: "Are you satisfied with the leave policies in the company?",
        name: "leave",
        type: "likert",
        scaleLabels: ["Very Dissatisfied", "Very Satisfied"]
      }
    ]
  },
  {
    title: "Work-Life Balance",
    questions: [
      {
        label: "How well do you feel you can balance your work responsibilities with your personal life?",
        name: "balance",
        type: "likert",
        scaleLabels: ["Very Poorly", "Very Well"]
      },
      {
        label: "How often do you feel overwhelmed by your workload?",
        name: "overwhelmed",
        type: "likert",
        scaleLabels: ["Never", "Always"]
      }
    ]
  },
  {
    title: "Well-being",
    questions: [
      {
        label: "How would you rate your overall mental well-being?  ",
        name: "mental",
        type: "likert",
        scaleLabels: ["Very Poor", "Excellent"]
      },
      {
        label: "How would you rate the company’s efforts to promote employee well-being?",
        name: "wellbeing_effort",
        type: "likert",
        scaleLabels: ["Very Poor", "Excellent"]
      },
      {
        label: "How likely are you to participate in Wellness Program provided by your company?",
        name: "wellness_participation",
        type: "likert",
        scaleLabels: ["Not Likely", "Very Likely"]
      },
      {
        label: "How comfortable do you feel discussing well-being concerns with your supervisor?",
        name: "comfort",
        type: "likert",
        scaleLabels: ["Very Uncomfortable", "Very Comfortable"]
      }
    ]
  },
  {
    title: "Recognition",
    questions: [
      {
        label: "Do you feel valued and recognized for your contributions at work?  ",
        name: "recognition",
        type: "likert",
        scaleLabels: ["Strongly Disagree", "Strongly Agree"]
      },
      {
        label: "How often do you receive positive recognition for your work?  ",
        name: "positive_feedback",
        type: "likert",
        scaleLabels: ["Never", "Very Often"]
      }
    ]
  },
  {
    title: "Final Thoughts",
    questions: [
      {
        label: "What changes would you like to see implemented in our company?",
        name: "change_suggestions",
        type: "textarea"
      },
      {
        label: "What additional resources or support do you need to do your job more effectively?",
        name: "resources_needed",
        type: "textarea"
      },
      {
        label: "Do you have any other comments or suggestions for improving our workplace?",
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
                const [leftLabel, rightLabel] = q.scaleLabels || ["Strongly Disagree", "Strongly Agree"];
                html += `<div class="likert-scale">`;
                html += `<span class="likert-label">${leftLabel}</span>`;
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
                html += `<span class="likert-label">${rightLabel}</span>`;
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

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

async function submitToGoogleSheets(responses) {
    try {
        // Get the department/version from URL parameter
        const version = getUrlParameter('v') || 'default';
        
        // Format the data for submission
        const formattedResponses = {
            timestamp: new Date().toISOString(),
            version: version,
            ...responses
        };

        console.log('Submitting data:', formattedResponses);

        // Use fetch for all requests (restored for real submissions)
        return fetch('https://script.google.com/macros/s/AKfycbzb_J7hvywEblQSQzsQNop9M86WyC2PWjb5uiFRkf1MdME9DlM4mVr4Uh6JYSCcWEp1/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'payload=' + encodeURIComponent(JSON.stringify(formattedResponses))
        })
        .then(async response => {
            if (response.ok) {
                try {
                    const data = await response.json();
                    if (data.status === 'success') {
                        return true;
                    } else {
                        console.error('Backend error:', data.message);
                        return false;
                    }
                } catch (err) {
                    console.error('Failed to parse backend response:', err);
                    return false;
                }
            } else {
                throw new Error('Submission failed');
            }
        })
        .catch(err => {
            console.error('Network error occurred:', err);
            return false;
        });

    } catch (error) {
        console.error('Error in submitToGoogleSheets:', error);
        return false;
    }
}

function showSubmissionStatus(success) {
    const statusDiv = document.createElement('div');
    statusDiv.className = 'submission-status';
    
    if (success) {
        statusDiv.innerHTML = `
            ✅ Your responses have been submitted. 
        `;
        statusDiv.classList.add('success');
    } else {
        statusDiv.innerHTML = `
            ❌ There was an error submitting your responses. 
            Please resubmit the responses.
            If the problem persists, please contact the HR team.
        `;
        statusDiv.classList.add('error');
    }
    
    // Position the status message at the top of the page
    statusDiv.style.position = 'fixed';
    statusDiv.style.top = '20px';
    statusDiv.style.left = '50%';
    statusDiv.style.transform = 'translateX(-50%)';
    statusDiv.style.backgroundColor = success ? '#4CAF50' : '#f44336';
    statusDiv.style.color = 'white';
    statusDiv.style.padding = '15px 25px';
    statusDiv.style.borderRadius = '5px';
    statusDiv.style.zIndex = '1000';
    statusDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    
    document.body.appendChild(statusDiv);
    setTimeout(() => {
        statusDiv.style.opacity = '0';
        statusDiv.style.transition = 'opacity 0.5s ease';
        setTimeout(() => statusDiv.remove(), 500);
    }, 5000);
}

function goNext() {
    const currentPage = pages[pageIndex];
    
    if (!validatePage()) {
        return;
    }

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
        
        // Show loading indicator
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading-indicator';
        loadingDiv.innerHTML = 'Submitting your responses...';
        loadingDiv.style.position = 'fixed';
        loadingDiv.style.top = '50%';
        loadingDiv.style.left = '50%';
        loadingDiv.style.transform = 'translate(-50%, -50%)';
        loadingDiv.style.padding = '20px';
        loadingDiv.style.background = 'rgba(0,0,0,0.8)';
        loadingDiv.style.color = 'white';
        loadingDiv.style.borderRadius = '8px';
        loadingDiv.style.zIndex = '1000';
        document.body.appendChild(loadingDiv);
        
        // Submit to Google Sheets before showing the final page
        submitToGoogleSheets(responses)
            .then(success => {
                document.body.removeChild(loadingDiv);
                showSubmissionStatus(success);
                if (success) {
                    pageIndex++;
                    renderPage();
                    document.getElementById("nextBtn").style.display = "none";
                    document.getElementById("prevBtn").style.display = "none";
                    localStorage.removeItem("surveyResponses");
                }
            })
            .catch(error => {
                document.body.removeChild(loadingDiv);
                showSubmissionStatus(false);
                console.error('Submission error:', error);
            });
    } else {
        pageIndex++;
        renderPage();
    }
    
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

