export const json = {
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=bdf16c7e-fa1e-4e31-9d82-a6df1982c224",
  "logoWidth": "200px",
  "logoHeight": "80px",
  "logoFit": "cover",
  "logoPosition": "right",
  "completedHtmlOnCondition": [{
    "expression": "{nps-score} <= 6 or {rebuy} = false",
    "html": {
      "default": "Thanks for your feedback! We highly value all ideas and suggestions from our customers, whether they're positive or critical. In the future, our team might reach out to you to learn more about how we can further improve our product so that it exceeds your expectations.",
      "fr": "Merci pour vos commentaires! Nous accordons une grande importance à toutes les idées et suggestions de nos clients, qu'elles soient positives ou critiques. À l'avenir, notre équipe pourrait vous contacter pour en savoir plus sur la façon dont nous pouvons encore améliorer notre produit afin qu'il dépasse vos attentes."
    }
  }, {
    "expression": "{nps-score} = 6 or {nps-score} = 7",
    "html": {
      "default": "Thanks for your feedback. Our goal is to create the best possible product, and your thoughts, ideas, and suggestions play a major role in helping us identify opportunities to improve.",
      "fr": "Merci pour vos commentaires. Notre objectif est de créer le meilleur produit possible, et vos réflexions, idées et suggestions jouent un rôle majeur pour nous aider à identifier les opportunités d'amélioration."
    }
  }, {
    "expression": "{nps-score} >= 8",
    "html": {
      "default": "Thanks for your feedback. It's great to hear that you're a fan of our product. Your feedback helps us discover new opportunities to improve it and make sure you have the best possible experience.",
      "fr": "Merci pour vos commentaires. Nous sommes ravis d'entendre que vous avez apprécié notre produit. Vos commentaires nous aident à découvrir de nouvelles opportunités pour l'améliorer et vous assurer la meilleure expérience possible."
    }
  }],
  "elements": [{
    "type": "panel",
    "name": "nps-panel",
    "elements": [{
      "type": "rating",
      "name": "nps-score",
      "title": {
        "default": "On a scale from 0 to 10 how likely are you to recommend us to a friend or colleague?",
        "fr": "Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez notre produit à un ami ou à un collègue?"
      },
      "rateMax": 10,
      "maxRateDescription": {
        "default": "Very likely",
        "fr": "Très probable"
      },
      "minRateDescription": {
        "default": "Very unlikely",
        "fr": "Très improbable"
      }
    }, {
      "type": "comment",
      "name": "disappointing-experience",
      "visibleIf": "{nps-score} <= 5",
      "title": {
        "default": "How did we disappoint you and what can we do to make things right?",
        "fr": "Nous n'avons pas été a la hauteur de vos attentes, comment pouvons-nous améliorer?"
      }
    }, {
      "type": "comment",
      "name": "improvements-required",
      "visibleIf": "{nps-score} >= 6",
      "title": {
        "default": "What can we do to make your experience more satisfying?",
        "fr": "Que pouvons-nous faire pour rendre votre expérience plus satisfaisante?"
      }
    }, {
      "type": "checkbox",
      "name": "promoter-features",
      "visibleIf": "{nps-score} >= 9",
      "title": {
        "default": "Which of the following features do you value the most?",
        "fr": "Laquelle des fonctionnalités suivantes appréciez-vous le plus ?"
      },
      "description": {
        "default": "Please select no more than three features.",
        "fr": "Veuillez ne pas sélectionner plus de trois fonctionnalités."
      },
      "validators": [{
        "type": "answercount",
        "text": {
          "default": "Please select no more than three features.",
          "fr": "Veuillez ne pas sélectionner plus de trois fonctionnalités."
        },
        "maxCount": 3
      }],
      "isRequired": true,
      "showOtherItem": true,
      "choices": [{
        "text": {
          "default": "Performance",
          "fr": "Performance"
        },
        "value": "performance"
      }, {
        "text": {
          "default": "Stability",
          "fr": "Stabilité"
        },
        "value": "stability"
      }, {
        "text": {
          "default": "User interface",
          "fr": "Interface utilisateur"
        },
        "value": "ui"
      }, {
        "text": {
          "default": "Complete functionality",
          "fr": "Ensemble des fonctionnalités"
        },
        "value": "complete-functionality"
      }, {
        "text": {
          "default": "Learning materials (documentation, demos, code examples)",
          "fr": "Matériel d'apprentissage (documentation, démos, exemples de code)"
        },
        "value": "learning-materials"
      }, {
        "text": {
          "default": "Quality support",
          "fr": "Accompagnement de qualité"
        },
        "value": "support"
      }],
      "otherText": {
        "default": "Other features",
        "fr": "Autres fonctionnalités"
      },
      "otherPlaceholder": {
        "default": "Please specify...",
        "fr": "Veuillez préciser..."
      },
      "colCount": 2
    }]
  }, {
    "type": "boolean",
    "name": "rebuy",
    "title": {
      "default": "Would you buy our product again?",
      "fr": "Achèteriez-vous à nouveau notre produit?"
    }
  }, {
    "type": "panel",
    "name": "testimonal-request",
    "elements": [{
      "type": "radiogroup",
      "name": "testimonial",
      "title": {
        "default": "Would you mind providing us a brief testimonial for the website?",
        "fr": "Accepteriez-vous de rédiger un bref commentaire pour notre site Internet?"
      },
      "choices": [{
        "value": "yes",
        "text": {
          "default": "Sure!",
          "fr": "Bien sur!"
        }
      }, {
        "value": "no",
        "text": {
          "default": "No",
          "fr": "Non merci."
        }
      }]
    }, {
      "type": "text",
      "name": "email",
      "visibleIf": "{testimonial} = 'yes'",
      "title": {
        "default": "What is your email address?",
        "fr": "Quelle est votre adresse e-mail?"
      },
      "placeholder": {
        "default": "Enter your email here",
        "fr": "Veuillez saisir votre adresse e-mail ici"
      }
    }]
  }],
  "showPrevButton": false,
  "completeText": {
    "fr": "Envoyer"
  },
  "questionsOnPageMode": "questionPerPage",
  "showQuestionNumbers": false,
  "widthMode": "static",
  "width": "1000px"
};