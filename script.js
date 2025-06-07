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
    
    // Add token display at the top
    const version = getUrlParameter('v') || 'default';
    html += `<div style="background: #f0f0f0; padding: 10px; margin-bottom: 20px; border-radius: 5px;">
        Current Token/Version: <strong>${version}</strong>
    </div>`;
    
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

        return new Promise((resolve, reject) => {
            // Create a hidden iframe
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            // Create the form
            const form = document.createElement('form');
            form.style.display = 'none';
            form.method = 'POST';
            form.action = 'https://script.google.com/macros/s/AKfycbzcGincZ4Ln9-TrQoCnVrweN59MkAW5DUn6N6177P6MPZC0BmKMgyoyexVpdV-D0oiI/exec';
            form.target = iframe.name = 'submit-iframe-' + Date.now();

            // Add the data as a hidden field
            const dataInput = document.createElement('input');
            dataInput.type = 'hidden';
            dataInput.name = 'payload';
            dataInput.value = JSON.stringify(formattedResponses);
            form.appendChild(dataInput);

            // Listen for the response
            window.addEventListener('message', function responseHandler(event) {
                // Clean up
                document.body.removeChild(iframe);
                document.body.removeChild(form);
                window.removeEventListener('message', responseHandler);

                const response = event.data;
                console.log('Received response:', response);

                if (response.status === 'success') {
                    resolve(true);
                } else {
                    console.error('Submission error:', response.message);
                    reject(new Error(response.message));
                }
            });

            // Add form to body and submit
            document.body.appendChild(form);
            form.submit();

            // Set a timeout
            setTimeout(() => {
                document.body.removeChild(iframe);
                document.body.removeChild(form);
                reject(new Error('Submission timeout after 30 seconds'));
            }, 30000);
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
            Please check the new tab for confirmation.
            You may close this window after seeing the success message.
        `;
        statusDiv.classList.add('success');
    } else {
        statusDiv.innerHTML = `
            ❌ There was an error submitting your responses. 
            Please check the console for details and try again.
            If the problem persists, please contact support.
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
        
        // Submit to Google Sheets before showing the final page
        submitToGoogleSheets(responses).then(success => {
            showSubmissionStatus(success);
            if (success) {
                pageIndex++;
                renderPage();
                document.getElementById("nextBtn").style.display = "none";
                document.getElementById("prevBtn").style.display = "none";
                localStorage.removeItem("surveyResponses");
            }
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

