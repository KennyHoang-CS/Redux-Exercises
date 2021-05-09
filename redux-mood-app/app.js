
const h1 = document.getElementById('h1')
const happy = document.getElementById('happy')
const sad = document.getElementById('sad')
const confused = document.getElementById('confused')
const cry = document.getElementById('cry')

happy.addEventListener('click', function (e) {
    store.dispatch({ type: 'happy', payload: ':)' });
    const state = store.getState();
    h1.innerText = state.mood;
})

sad.addEventListener('click', function (e) {
    store.dispatch({ type: 'sad', payload: ':(' });
    const state = store.getState();
    h1.innerText = state.mood;
})

confused.addEventListener('click', function (e) {
    store.dispatch({ type: 'confused', payload: 'O.o' });
    const state = store.getState();
    h1.innerText = state.mood;
})

cry.addEventListener('click', function (e) {
    store.dispatch({ type: 'cry', payload: 'T_T' });
    const state = store.getState();
    h1.innerText = state.mood;
})