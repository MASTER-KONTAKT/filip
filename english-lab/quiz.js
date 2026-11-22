/* English Lab — standalone question bank and quiz engine. No dependencies or backend. */
(() => {
  'use strict';
  // Every alternative listed below is a deliberately approved, complete answer.
  const Q = (task, prompt, answers, topic) => ({ task, prompt, answers: Array.isArray(answers) ? answers : [answers], topic });
  const RC = {
    easy: [
      Q('Uzupełnij lukę — wpisz jedno słowo','The woman ___ works here is a doctor.',['who','that'],'WHO'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The book ___ is on the table belongs to Tom.',['which','that'],'WHICH / THAT'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The girl ___ brother is a pilot lives next door.','whose','WHOSE'),
      Q('Uzupełnij lukę — wpisz jedno słowo','This is the town ___ I grew up.','where','WHERE'),
      Q('Uzupełnij lukę — wpisz jedno słowo','I remember the day ___ we first met.','when','WHEN'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The man ___ called you is my uncle.',['who','that'],'WHO / THAT'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The laptop ___ stopped working is new.',['which','that'],'WHICH / THAT'),
      Q('Uzupełnij lukę — wpisz jedno słowo','That is the restaurant ___ we had dinner.','where','WHERE'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The boy ___ bike is red is my cousin.','whose','WHOSE'),
      Q('Uzupełnij lukę — wpisz jedno słowo','Summer is the season ___ we go swimming.','when','WHEN'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The dog ___ barks at night belongs to our neighbour.',['which','that'],'WHICH / THAT'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The teacher ___ teaches French is very patient.',['who','that'],'WHO'),
      Q('Połącz zdania w jedno','I know a man. He speaks five languages.',['I know a man who speaks five languages.','I know a man that speaks five languages.'],'Łączenie zdań'),
      Q('Połącz zdania w jedno','This is a car. It uses very little fuel.',['This is a car which uses very little fuel.','This is a car that uses very little fuel.'],'Łączenie zdań'),
      Q('Połącz zdania w jedno','I met a woman. Her son is an actor.','I met a woman whose son is an actor.','WHOSE'),
      Q('Połącz zdania w jedno','That is the school. I studied there.','That is the school where I studied.','WHERE'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The phone ___ I bought yesterday is broken.',['which','that'],'Dopełnienie'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The film ___ we watched was funny.',['which','that'],'Dopełnienie'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The man which lives upstairs is friendly.',['The man who lives upstairs is friendly.','The man that lives upstairs is friendly.'],'Poprawianie błędów'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','I have a friend whose she works in London.','I have a friend who works in London.','Poprawianie błędów'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','This is the place who we met.','This is the place where we met.','Poprawianie błędów'),
      Q('Połącz zdania w jedno','I have a friend. She lives in Canada.',['I have a friend who lives in Canada.','I have a friend that lives in Canada.'],'Łączenie zdań'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The artist ___ paintings are famous lives here.','whose','WHOSE'),
      Q('Uzupełnij lukę — wpisz jedno słowo','I will never forget the year ___ I moved abroad.','when','WHEN')
    ],
    medium: [
      Q('Uzupełnij lukę — wpisz jedno słowo','My sister, ___ lives in Paris, is visiting us.','who','Non-defining'),
      Q('Uzupełnij lukę — wpisz jedno słowo','My laptop, ___ I bought last month, is already broken.','which','Non-defining'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The man ___ you met yesterday is my boss.',['who','whom','that'],'Dopełnienie'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The company ___ products we sell is based in Germany.','whose','WHOSE'),
      Q('Przepisz, pomijając zaimek względny','The cake that I made is delicious.','The cake I made is delicious.','Omission'),
      Q('Przepisz, pomijając zaimek względny','The film which we saw was boring.','The film we saw was boring.','Omission'),
      Q('Przepisz, pomijając zaimek względny','The woman whom I called was busy.','The woman I called was busy.','Omission'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','My father, that is 60, runs every day.','My father, who is 60, runs every day.','Non-defining'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The girl who she won the race is my friend.',['The girl who won the race is my friend.','The girl that won the race is my friend.'],'Podmiot'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The book which I bought it was expensive.',['The book which I bought was expensive.','The book that I bought was expensive.','The book I bought was expensive.'],'Dopełnienie'),
      Q('Połącz zdania w jedno','I visited Oxford. My brother studies there.','I visited Oxford, where my brother studies.','Non-defining'),
      Q('Połącz zdania w jedno','I met Sarah. Her father is a musician.','I met Sarah, whose father is a musician.','WHOSE'),
      Q('Połącz zdania w jedno','I have a neighbour. He is working abroad now.',['I have a neighbour who is working abroad now.','I have a neighbour that is working abroad now.'],'Present Continuous'),
      Q('Połącz zdania w jedno','I know a woman. She has travelled to Japan.',['I know a woman who has travelled to Japan.','I know a woman that has travelled to Japan.','I know a woman who has traveled to Japan.','I know a woman that has traveled to Japan.'],'Present Perfect'),
      Q('Połącz zdania w jedno','The man is my uncle. He helped us yesterday.',['The man who helped us yesterday is my uncle.','The man that helped us yesterday is my uncle.'],'Past Simple'),
      Q('Połącz zdania w jedno','I know a student. She will study medicine next year.',['I know a student who will study medicine next year.','I know a student that will study medicine next year.'],'Future Simple'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The day ___ the results were announced was unforgettable.','when','WHEN'),
      Q('Uzupełnij lukę — wpisz jedno słowo','London, ___ my cousin lives, is very expensive.','where','Non-defining'),
      Q('Połącz zdania w jedno','Anna has a new phone. It has a great camera.','Anna has a new phone which has a great camera.','Non-defining'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','My car, that I bought in 2020, still works.','My car, which I bought in 2020, still works.','Non-defining'),
      Q('Połącz zdania w jedno','The children are excited. They are playing outside.',['The children who are playing outside are excited.','The children that are playing outside are excited.'],'Present Continuous'),
      Q('Połącz zdania w jedno','I lost the keys. You gave them to me.',['I lost the keys you gave me.','I lost the keys that you gave me.','I lost the keys which you gave me.'],'Omission'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The man lives next door is a chef.',['The man who lives next door is a chef.','The man that lives next door is a chef.'],'Nie pomijaj podmiotu'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The author, ___ books have won awards, is giving a talk.','whose','Non-defining')
    ],
    hard: [
      Q('Uzupełnij lukę — wpisz jedno słowo','The colleague to ___ I sent the report has replied.','whom','Formalne przyimki'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The company for ___ he works is expanding.','which','Formalne przyimki'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The reason for ___ she resigned remains unknown.','which','Formalne przyimki'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The researcher, ___ findings changed the field, won a prize.','whose','WHOSE'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The meeting, during ___ several issues arose, lasted hours.','which','Formalne przyimki'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The person with ___ I shared an office has retired.','whom','Formalne przyimki'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The policy under ___ these decisions were made has changed.','which','Formalne przyimki'),
      Q('Przekształć na formalną konstrukcję z przyimkiem na początku','The person who I spoke to was helpful.','The person to whom I spoke was helpful.','Formalne konstrukcje'),
      Q('Przekształć na formalną konstrukcję z przyimkiem na początku','The topic which we argued about was sensitive.','The topic about which we argued was sensitive.','Formalne konstrukcje'),
      Q('Przekształć na formalną konstrukcję z przyimkiem na początku','The house which she grew up in has been sold.','The house in which she grew up has been sold.','Formalne konstrukcje'),
      Q('Przekształć na formalną konstrukcję z przyimkiem na początku','The colleague who I worked with has moved abroad.','The colleague with whom I worked has moved abroad.','Formalne konstrukcje'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The woman to who you referred has left.','The woman to whom you referred has left.','Formalne przyimki'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The documents, that were signed yesterday, are missing.','The documents, which were signed yesterday, are missing.','Non-defining'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The manager whose I spoke to was unavailable.',['The manager whom I spoke to was unavailable.','The manager who I spoke to was unavailable.','The manager that I spoke to was unavailable.','The manager I spoke to was unavailable.','The manager to whom I spoke was unavailable.'],'WHOSE a WHOM'),
      Q('Połącz zdania w jedno','The museum has reopened. Its roof was damaged last year.','The museum, whose roof was damaged last year, has reopened.','WHOSE'),
      Q('Połącz zdania w jedno','The project was cancelled. We had been working on it for months.',['The project which we had been working on for months was cancelled.','The project that we had been working on for months was cancelled.','The project we had been working on for months was cancelled.','The project on which we had been working for months was cancelled.'],'Past Perfect Continuous'),
      Q('Połącz zdania w jedno','The engineer is presenting today. Her invention has won a prize.','The engineer whose invention has won a prize is presenting today.','WHOSE'),
      Q('Połącz zdania w jedno','The building is being renovated. It was designed in 1900.',['The building which was designed in 1900 is being renovated.','The building that was designed in 1900 is being renovated.'],'Past Simple'),
      Q('Połącz zdania w jedno','I know a scientist. She will be leading the expedition.',['I know a scientist who will be leading the expedition.','I know a scientist that will be leading the expedition.'],'Future Continuous'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The circumstances in ___ the contract was signed are disputed.','which','Formalne przyimki'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The hotel in where we stayed was beautiful.',['The hotel in which we stayed was beautiful.','The hotel where we stayed was beautiful.'],'WHERE / WHICH'),
      Q('Uzupełnij lukę — wpisz jedno słowo','The student, without ___ we could not have finished, deserves credit.','whom','Formalne przyimki'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The proposal, to that we objected, was withdrawn.','The proposal, to which we objected, was withdrawn.','Formalne przyimki'),
      Q('Połącz zdania w jedno','The journalist published the story. Her sources had remained anonymous.','The journalist whose sources had remained anonymous published the story.','WHOSE / Past Perfect')
    ]
  };
  const PV = {
    easy: [
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','English ___ (speak) in many countries.','is spoken','Present Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The windows ___ (clean) every Friday.','are cleaned','Present Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The letter ___ (send) yesterday.','was sent','Past Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The cars ___ (wash) last Monday.','were washed','Past Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The results ___ (announce) tomorrow.','will be announced','Future Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The cake ___ (make) by my mother every Sunday.','is made','Present Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','These shoes ___ (produce) in Italy.','are produced','Present Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The door ___ (lock) an hour ago.','was locked','Past Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The tickets ___ (sell) online every day.','are sold','Present Simple'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','A new bridge ___ (build) next year.','will be built','Future Simple'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They clean the office every day.','The office is cleaned every day.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','Someone broke the window.','The window was broken.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They will deliver the package tomorrow.','The package will be delivered tomorrow.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','People speak Spanish here.','Spanish is spoken here.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','Someone stole my bike yesterday.','My bike was stolen yesterday.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They make these chairs in Poland.','These chairs are made in Poland.','Active → Passive'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The room is clean every morning.','The room is cleaned every morning.','Poprawianie błędów'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The phone was stole last night.','The phone was stolen last night.','Poprawianie błędów'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The emails will sent tomorrow.','The emails will be sent tomorrow.','Poprawianie błędów'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','This song are played on the radio.','This song is played on the radio.','Poprawianie błędów'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The museum ___ (open) in 1995.','was opened','Past Simple'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They repair cars here.','Cars are repaired here.','Active → Passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','All orders ___ (check) before shipping.','are checked','Present Simple'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The report will be write next week.','The report will be written next week.','Poprawianie błędów')
    ],
    medium: [
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The road ___ (repair) right now.','is being repaired','Present Continuous'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The invitations ___ (send) already.','have been sent','Present Perfect'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The work ___ (finish) before the manager arrived.','had been finished','Past Perfect'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The documents ___ (sign) at the moment.','are being signed','Present Continuous'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The problem ___ (solve) recently.','has been solved','Present Perfect'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The message ___ (read) before I returned.','had been read','Past Perfect'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','These rules ___ (follow). It is obligatory.','must be followed','Modal passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The equipment ___ (check) before use; it is recommended.','should be checked','Modal passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','This task ___ (complete) by anyone with a laptop; it is possible.','can be completed','Modal passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The flight ___ (delay); use “might” to express uncertainty.','might be delayed','Modal passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They are painting the walls.','The walls are being painted.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','Someone has stolen my wallet.','My wallet has been stolen.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They had completed the project before June.','The project had been completed before June.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They must sign the contract today.','The contract must be signed today.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','Someone is interviewing the candidates.','The candidates are being interviewed.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They have repaired the lift.','The lift has been repaired.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They can solve this problem.','This problem can be solved.','Active → Passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','Someone had locked the door before midnight.','The door had been locked before midnight.','Active → Passive'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The house is being build now.','The house is being built now.','Poprawianie błędów'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The report has been wrote.','The report has been written.','Poprawianie błędów'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The tickets must checked today.','The tickets must be checked today.','Poprawianie błędów'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The files had been delete before the audit.','The files had been deleted before the audit.','Poprawianie błędów'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They should replace these batteries.','These batteries should be replaced.','Active → Passive'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The new system is being test this week.','The new system is being tested this week.','Poprawianie błędów')
    ],
    hard: [
      Q('Przekształć bez zmiany znaczenia — zacznij od „It”','People say that the CEO is leaving.','It is said that the CEO is leaving.','Reporting passive'),
      Q('Przekształć bez zmiany znaczenia — zacznij od „He”','People believe that he is innocent.','He is believed to be innocent.','Reporting passive'),
      Q('Przekształć bez zmiany znaczenia — zacznij od „It”','People expect that the prices will rise.','It is expected that the prices will rise.','Reporting passive'),
      Q('Przekształć bez zmiany znaczenia — zacznij od „She”','People say that she lives in Rome.','She is said to live in Rome.','Reporting passive'),
      Q('Przekształć bez zmiany znaczenia — zacznij od „He”','People believe that he stole the painting.','He is believed to have stolen the painting.','Reporting passive'),
      Q('Przekształć bez zmiany znaczenia — zacznij od „It”','People report that the bridge has collapsed.','It is reported that the bridge has collapsed.','Reporting passive'),
      Q('Przekształć bez zmiany znaczenia — zacznij od „The minister”','People expect that the minister will resign.','The minister is expected to resign.','Reporting passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The documents ___ (send) yesterday, but nobody knows for sure.','might have been sent','Modal perfect passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The instructions ___ (follow) more carefully; this was a mistake.','should have been followed','Modal perfect passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The error ___ (prevent); a solution was available.','could have been prevented','Modal perfect passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The report ___ (finish) before the inspection; that was required.','should have been finished','Modal perfect passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','The new library ___ (open) next month; this is the plan.','is going to be opened','Going to passive'),
      Q('Uzupełnij lukę — wpisz brakującą konstrukcję','Several trees ___ (plant) in the park next week; that is the plan.','are going to be planted','Going to passive'),
      Q('Przekształć zdanie, używając „have something done”','A mechanic repaired my car for me yesterday.','I had my car repaired yesterday.','Causative have'),
      Q('Przekształć zdanie, używając „get something done”','A technician fixed his laptop for him last week.','He got his laptop fixed last week.','Causative get'),
      Q('Przekształć zdanie, używając „have something done”','A dentist will check her teeth tomorrow.','She will have her teeth checked tomorrow.','Causative have'),
      Q('Przekształć zdanie, używając „get something done”','Someone is painting our house for us today.','We are getting our house painted today.','Causative get'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They should have informed the passengers earlier.','The passengers should have been informed earlier.','Modal perfect passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They might have cancelled the meeting.','The meeting might have been cancelled.','Modal perfect passive'),
      Q('Zmień na stronę bierną — wpisz całe zdanie','They are going to renovate the station.','The station is going to be renovated.','Going to passive'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','He is believed to stole the money.','He is believed to have stolen the money.','Reporting passive'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The report should have been wrote yesterday.','The report should have been written yesterday.','Modal perfect passive'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','I had my hair cutted yesterday.','I had my hair cut yesterday.','Causative have'),
      Q('Popraw zdanie — wpisz całe poprawne zdanie','The building is going to demolished next month.','The building is going to be demolished next month.','Going to passive')
    ]
  };

  // Normalize only differences that do not affect grammar (case, spacing, ordinary punctuation).
  // Deliberately do NOT stem verbs, remove auxiliaries, or accept substring matches.
  function normalize(input) {
    return String(input).normalize('NFKC').toLocaleLowerCase('en')
      .replace(/[\u2018\u2019\u02bc]/g, "'")
      .replace(/[.,!?;:…„“”"()\[\]]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  function isCorrect(answer, question) {
    return question.answers.some(expected => normalize(expected) === normalize(answer));
  }
  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function add(parent, ...children) { children.forEach(child => parent.appendChild(child)); return parent; }
  function makeButton(text, variant, click) {
    const button = el('button', `button ${variant}`, text);
    button.type = 'button'; button.addEventListener('click', click); return button;
  }
  const type = document.body.dataset.quiz;
  const mount = document.getElementById('quiz-app');
  if (!mount || !Object.prototype.hasOwnProperty.call({relative: RC, passive: PV}, type)) {
    // Index: highlight the correct nav item for on-page hash navigation.
    if (!mount) {
      function syncNav() {
        const hash = location.hash;
        document.querySelectorAll('.bottom-nav .nav-link').forEach((link, i) => {
          const active = (hash === '#quizy' && i === 1) || (hash === '#nauka' && i === 2) || ((!hash || (hash !== '#quizy' && hash !== '#nauka')) && i === 0);
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
        });
      }
      window.addEventListener('hashchange', syncNav); syncNav();
    }
    return;
  }
  const bank = type === 'relative' ? RC : PV;
  const state = {difficulty: 'easy', count: 10, questions: [], current: 0, responses: []};
  function clear() { mount.replaceChildren(); }
  function scrollToApp() { mount.scrollIntoView({block:'start', behavior: 'smooth'}); }
  function showSetup() {
    clear();
    const panel = el('section', 'panel');
    const head = el('div', 'panel-heading');
    add(head, el('span','step-icon','✦'), el('h2', '', 'Ustaw swój trening'));
    add(panel, head, el('p','panel-description','Wybierz poziom i liczbę pytań. Każdą odpowiedź wpiszesz samodzielnie — bez zgadywania A/B/C/D.'));
    const difficultyTitle = el('div','field-label','Poziom trudności');
    const difficultyOptions = el('div','options');
    [['easy','Łatwy'],['medium','Średni'],['hard','Trudny']].forEach(([value,label]) => {
      const wrapper = el('label','option'); const input = el('input'); input.type = 'radio'; input.name='difficulty'; input.value=value;
      input.checked = state.difficulty === value; input.addEventListener('change', () => state.difficulty=value);
      add(wrapper,input,el('span','',label)); difficultyOptions.append(wrapper);
    });
    const countTitle = el('div','field-label','Liczba pytań');
    const countOptions = el('div','options');
    [5,10,15,20].forEach(value => {
      const wrapper = el('label','option'); const input=el('input'); input.type='radio'; input.name='question-count'; input.value=String(value);
      input.checked = state.count === value; input.addEventListener('change',()=>state.count=value);
      add(wrapper,input,el('span','',String(value))); countOptions.append(wrapper);
    });
    const actions=el('div','config-actions');
    add(actions,el('span','fine-print','Odpowiedzi zobaczysz dopiero na końcu.'),makeButton('Rozpocznij quiz →','button-primary',start));
    add(panel,difficultyTitle,difficultyOptions,countTitle,countOptions,actions); mount.appendChild(panel);
  }
  function start() {
    const available=bank[state.difficulty];
    if (state.count > available.length) throw new Error('Za mało pytań w bazie.');
    state.questions=shuffle(available).slice(0,state.count);
    state.responses=[];state.current=0;showQuestion();scrollToApp();
  }
  function showQuestion() {
    clear(); const question=state.questions[state.current];
    const panel=el('section','panel'); const top=el('div','question-top');
    const count=el('div','question-count');count.append('Pytanie ');add(count,el('strong','',String(state.current+1)));count.append(` / ${state.questions.length}`);
    add(top,count,el('span','question-topic',question.topic));
    const progress=el('div','progress-track'); progress.setAttribute('role','progressbar');progress.setAttribute('aria-valuenow',String(state.current));progress.setAttribute('aria-valuemin','0');progress.setAttribute('aria-valuemax',String(state.questions.length));progress.setAttribute('aria-label','Postęp quizu');
    const fill=el('div','progress-fill');fill.style.width=`${state.current/state.questions.length*100}%`;progress.append(fill);
    const kicker=el('div','task-kicker',question.task);
    const prompt=el('div','question-prompt',question.prompt);
    const label=el('label','answer-label','Twoja odpowiedź');label.htmlFor='user-answer';
    const input=el('input','answer-input');input.id='user-answer';input.type='text';input.placeholder='Wpisz odpowiedź po angielsku…';input.autocomplete='off';input.autocapitalize='off';input.spellcheck=false;input.setAttribute('aria-describedby','answer-error');
    const error=el('div','field-error','');error.id='answer-error';error.setAttribute('role','alert');
    const actions=el('div','question-actions');
    const submit=makeButton(state.current===state.questions.length-1?'Zakończ quiz →':'Sprawdź i dalej →','button-primary',handleAnswer);
    add(actions,el('span','question-hint','↵ Enter również zatwierdza odpowiedź'),submit);
    add(panel,top,progress,kicker,prompt,label,input,error,actions);mount.appendChild(panel);
    function handleAnswer(){
      const answer=input.value.trim();
      if (!answer){error.textContent='Najpierw wpisz swoją odpowiedź.';input.setAttribute('aria-invalid','true');input.focus();return;}
      submit.disabled=true;
      state.responses.push({question,answer,correct:isCorrect(answer,question)});
      state.current++;
      if(state.current<state.questions.length)showQuestion();else showResults();
    }
    input.addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.isComposing){event.preventDefault();handleAnswer();}});
    input.addEventListener('input',()=>{error.textContent='';input.removeAttribute('aria-invalid');});
    input.focus({preventScroll:true});
  }
  function showResults(){
    clear();const correct=state.responses.filter(response=>response.correct).length;
    const pct=Math.round(correct/state.responses.length*100);
    const verdict=pct===100?'Perfekcyjnie! Tak trzymaj.':pct>=80?'Świetny wynik! Masz to opanowane.':pct>=60?'Dobra robota! Jeszcze trochę praktyki.':pct>=40?'Jesteś na dobrej drodze. Ćwicz dalej.':'Każdy trening to postęp. Spróbuj ponownie!';
    const panel=el('section','panel result-hero');
    add(panel,el('div','result-medal',pct>=60?'✦':'↗'),el('span','overline','TWÓJ WYNIK'),el('h2','','Trening zakończony!'));
    const score=el('div','score',String(correct));add(score,el('span','',` / ${state.responses.length}`));panel.append(score);
    add(panel,el('div','result-percentage',`${pct}% poprawnych odpowiedzi`),el('p','result-comment',verdict));
    const actions=el('div','result-actions');
    const home=el('a','button button-outline','Wróć do menu');home.href='index.html#quizy';
    add(actions,makeButton('Spróbuj ponownie ↻','button-primary',()=>{showSetup();scrollToApp();}),home);panel.append(actions);mount.append(panel);
    mount.append(el('h2','review-heading','Twoje odpowiedzi'));
    const list=el('div','review-list');
    state.responses.forEach((item,i)=>{
      const row=el('article','review-item');const heading=el('div','review-top');
      add(heading,el('span','review-number',`PYTANIE ${String(i+1).padStart(2,'0')} · ${item.question.topic}`),el('span',`verdict ${item.correct?'good':'bad'}`,item.correct?'✓ Poprawnie':'✕ Błąd'));
      const question=el('div','review-question',item.question.prompt);
      const answer=el('div',`review-answer ${item.correct?'correct':'incorrect'}`);answer.append('Twoja odpowiedź: ');answer.append(el('strong','',item.answer));
      add(row,heading,el('div','task-kicker',item.question.task),question,answer);
      if(!item.correct){const expected=el('div','review-answer correct');expected.append('Poprawna odpowiedź: ');expected.append(el('strong','',item.question.answers[0]));row.append(expected);
        if(item.question.answers.length>1){row.append(el('div','review-answer',`Inne akceptowane warianty: ${item.question.answers.slice(1).join(' · ')}`));}}
      list.append(row);
    });mount.append(list);
    const footer=el('div','result-footer');footer.append(makeButton('Nowy trening ↑','button-outline',()=>{showSetup();scrollToApp();}));mount.append(footer);
    scrollToApp();
  }
  showSetup();
  // Expose only a small read-only diagnostic API for automated offline tests.
  Object.defineProperty(window,'EnglishLabTest',{value:Object.freeze({normalize,isCorrect,count:(difficulty)=>bank[difficulty].length})});
})();
