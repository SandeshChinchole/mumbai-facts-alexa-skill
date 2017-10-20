
'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined; // Add your app ID here

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'Few examples of the various nicknames Mumbai has are the city of dreams, the city of seven islands, financial capital of India, the gateway of India, Hollywood of India, maximum city, maya nagari, etc.',
                'Mumbai was under the rule of the Portuguese empire from 1534 to 1661 and they named it Bombaim from the Portuguese phrase bom baim, meaning "good little bay”.',
                'After the English gained possession of the city in the 17th century, the Portuguese name was anglicized as Bombay.',
                'The name Mumbai is an eponym derived from "Mumba", the name of the local Hindu goddess Mumbadevi, and "Aai", meaning "mother" in Marathi.',
                'The oldest known names for the city of Mumbai are Kakamuchee and Galajunkja.',
                // Add more facts, atleast 50 to 100

            ],
            SKILL_NAME: 'Skill Name', // Insert your skill name
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'Few examples of the various nicknames Mumbai has are the city of dreams, the city of seven islands, financial capital of India, the gateway of India, Hollywood of India, maximum city, maya nagari, etc.',
                'Mumbai was under the rule of the Portuguese empire from 1534 to 1661 and they named it Bombaim from the Portuguese phrase bom baim, meaning "good little bay”.',
                'After the English gained possession of the city in the 17th century, the Portuguese name was anglicized as Bombay.',
                'The name Mumbai is an eponym derived from "Mumba", the name of the local Hindu goddess Mumbadevi, and "Aai", meaning "mother" in Marathi.',
                'The oldest known names for the city of Mumbai are Kakamuchee and Galajunkja.',
                // Add more facts, atleast 50 to 100

            ],
            SKILL_NAME: 'Skill Name', // Insert your skill name
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'Few examples of the various nicknames Mumbai has are the city of dreams, the city of seven islands, financial capital of India, the gateway of India, Hollywood of India, maximum city, maya nagari, etc.',
                'Mumbai was under the rule of the Portuguese empire from 1534 to 1661 and they named it Bombaim from the Portuguese phrase bom baim, meaning "good little bay”.',
                'After the English gained possession of the city in the 17th century, the Portuguese name was anglicized as Bombay.',
                'The name Mumbai is an eponym derived from "Mumba", the name of the local Hindu goddess Mumbadevi, and "Aai", meaning "mother" in Marathi.',
                'The oldest known names for the city of Mumbai are Kakamuchee and Galajunkja.',
                // Add more facts, atleast 50 to 100
                
            ],
            SKILL_NAME: 'Skill Name', // Insert your skill name
        },
    },

};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random fact from the facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
