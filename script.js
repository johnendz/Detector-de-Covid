var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        findAndReplaceDOMText(document.body, {
            find: 'coronavirus',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'coronavírus',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'Coronavirus',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'Coronavírus',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'corona virus',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'corona vírus',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'covid-19',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'Covid-19',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'COVID-19',
            replace: '💉',
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'covid19',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'COVID 19',
            replace: '💉'
            }
        );
        findAndReplaceDOMText(document.body, {
            find: 'covid',
            replace: '💉'
            }
        );
        clearInterval(interval);
    }    
}, 100);