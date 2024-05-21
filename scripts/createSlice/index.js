const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Вкажіть слой ${layers.join(' або ')}`);
}

if (!sliceName) {
    throw new Error('Вкажіть назву слайса');
}

createTemplate(layer, sliceName);
