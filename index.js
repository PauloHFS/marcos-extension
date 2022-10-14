const getRandomPosition = array => Math.floor(Math.random() * array.length);
const getRandomNickname = array => array[getRandomPosition(array)];

const MARCOS = ['marcos', 'Marcos'];

const MARCOS_CERTO = [
  'MARray',
  'useMarcos',
  'marquery',
  'MARthentication',
  'martation',
  'marCORS',
  'Bezarcos',
  'marCOPS',
  'MarrIcon',
  'MarDB',
  'MARSQL',
  'Marbitex',
  'Marxios',
  'Marcotex',
  'Maracatec',
  'MarcÓEÇI',
  'MacOS',
  'Mareact',
  'MARbank',
  'FigMAR',
  'MARscode',
  'Marqueue',
  'Marminal',
  'Marbernets',
  'Marbug',
  'Marhub',
  'Marconha',
  'Marcoting',
  'C+Marcos',
  'Mardemon',
  'Marcanhão',
  'Marnambuco',
  'Martal',
  'Maraíba',
  'São Maraulo',
  'Rio de Marneiro',
  'Rio Marcos do Sul',
  'Maiás',
  'Marcaraju',
  'Marjao Marssoa',
  'Marianópolis',
  'Marcapá',
  'Marcre',
  'Marmazonas',
  'Maraima',
  'Espírito Marcos',
  'Maraíma',
  'Maraná',
  'Minas Marais',
  'Distrito Marderal',
  'Mardônia',
  'Santa Marcarina',
  'Rio grande do Marte',
  'Marcuí',
  'Marco grosso do sul',
  'Marcantins',
  'Marhia',
  'Marsil',
  'Marcagoas',
  'Marcipe',
  'Paramarcos',
  'Marcaná',
  'Marcará',
  'Buenos Marcos',
];

const elements = [...document.getElementsByTagName('*')];

elements.forEach(element => {
  let validNodes = [...element.childNodes].filter(n => n.nodeType === 3);
  validNodes.forEach(node => {
    let text = node.nodeValue;
    let politicsSUX = text.replace(
      new RegExp(MARCOS.join('|'), 'ig'),
      getRandomNickname(MARCOS_CERTO)
    );
    politicsSUX !== text ? (node.nodeValue = politicsSUX) : '';
  });
});
