const char = createKnight('Bonieky');
const monster = createLittleMonster("Little Monster");

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)