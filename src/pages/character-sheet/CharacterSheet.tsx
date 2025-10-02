import { useEffect, useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function CharacterSheet() {
  const [name, setName] = useState('');
  const [str, setStr] = useState(8);
  const [dex, setDex] = useState(8);
  const [con, setCon] = useState(8);
  const [int, setInt] = useState(8);
  const [wis, setWis] = useState(8);
  const [cha, setCha] = useState(8);
  const [strTotal, setStrTotal] = useState(0);
  const [dexTotal, setDexTotal] = useState(0);
  const [conTotal, setConTotal] = useState(0);
  const [intTotal, setIntTotal] = useState(0);
  const [wisTotal, setWisTotal] = useState(0);
  const [chaTotal, setChaTotal] = useState(0);
  const [strRacial, setStrRacial] = useState(1);
  const [dexRacial, setDexRacial] = useState(0);
  const [conRacial, setConRacial] = useState(0);
  const [intRacial, setIntRacial] = useState(0);
  const [wisRacial, setWisRacial] = useState(0);
  const [chaRacial, setChaRacial] = useState(0);
  const [pointsUsed, setPointsUsed] = useState(0);

  const pointBuyCosts = [
    { score: 8, cost: 0 },
    { score: 9, cost: 1 },
    { score: 10, cost: 2 },
    { score: 11, cost: 3 },
    { score: 12, cost: 4 },
    { score: 13, cost: 5 },
    { score: 14, cost: 6 },
    { score: 15, cost: 8 },
    { score: 16, cost: 10 },
    { score: 17, cost: 13 },
    { score: 18, cost: 16 },
  ];
  useEffect(() => {
    setPointsUsed(pointBuyCosts.find((cost) => cost.score === str)?.cost! + pointBuyCosts.find((cost) => cost.score === dex)?.cost! + pointBuyCosts.find((cost) => cost.score === con)?.cost! + pointBuyCosts.find((cost) => cost.score === int)?.cost! + pointBuyCosts.find((cost) => cost.score === wis)?.cost! + pointBuyCosts.find((cost) => cost.score === cha)?.cost!);
    setStrTotal(str + strRacial);
    setDexTotal(dex + dexRacial);
    setConTotal(con + conRacial);
    setIntTotal(int + intRacial);
    setWisTotal(wis + wisRacial);
    setChaTotal(cha + chaRacial);
  });
  return (
    <>
      <div className='input-wrapper'>
        <div className='name'>Pontos Usados: {pointsUsed}</div>
        <input id='nome' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Digite aqui...' />
      </div>

      {/* STR */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='stats'>STR</div>
        <button className='button_stats_remove' onClick={() => setStr(str > 8 ? str - 1 : str)}>
          <RemoveCircleOutlineIcon />
        </button>
        <div className='stats'>{str}</div>
        <button className='button_stats_add' onClick={() => setStr(str < 18 ? str + 1 : str)}>
          <AddCircleOutlineIcon />
        </button>
        <div className='stats' style={{ background: strRacial < 0 ? '#ff0000ff' : strRacial > 0 ? '#3aff44' : 'transparent', color: strRacial < 0 ? '#ffffff' : '#646cff' }}>
          {strRacial}
        </div>
        <div className='stats'>{strTotal}</div>
        <div className='stats' style={{ background: Math.floor((strTotal - 10) / 2) < 0 ? '#ff0000ff' : Math.floor((strTotal - 10) / 2) > 0 ? '#3aff44' : 'transparent', color: Math.floor((strTotal - 10) / 2) < 0 ? '#ffffff' : '#646cff' }}>
          {Math.floor((strTotal - 10) / 2)}
        </div>
      </div>
      {/* DEX */} 
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='stats'>DEX</div>
        <button className='button_stats_remove' onClick={() => setDex(dex > 8 ? dex - 1 : dex)}>
          <RemoveCircleOutlineIcon />
        </button>
        <div className='stats'>{dex}</div>
        <button className='button_stats_add' onClick={() => setDex(dex < 18 ? dex + 1 : dex)}>
          <AddCircleOutlineIcon />
        </button>
        <div className='stats' style={{ background: dexRacial < 0 ? '#ff0000ff' : dexRacial > 0 ? '#3aff44' : 'transparent', color: dexRacial < 0 ? '#ffffff' : '#646cff' }}>
          {dexRacial}
        </div>
        <div className='stats'>{dexTotal}</div>
        <div className='stats' style={{ background: Math.floor((dexTotal - 10) / 2) < 0 ? '#ff0000ff' : Math.floor((dexTotal - 10) / 2) > 0 ? '#3aff44' : 'transparent', color: Math.floor((dexTotal - 10) / 2) < 0 ? '#ffffff' : '#646cff' }}>
          {Math.floor((dexTotal - 10) / 2)}
        </div>
      </div>
      {/* CON */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='stats'>CON</div>
        <button className='button_stats_remove' onClick={() => setCon(con > 8 ? con - 1 : con)}>
          <RemoveCircleOutlineIcon />
        </button>
        <div className='stats'>{con}</div>
        <button className='button_stats_add' onClick={() => setCon(con < 18 ? con + 1 : con)}>
          <AddCircleOutlineIcon />
        </button>
        <div className='stats' style={{ background: conRacial < 0 ? '#ff0000ff' : conRacial > 0 ? '#3aff44' : 'transparent', color: conRacial < 0 ? '#ffffff' : '#646cff' }}>
          {conRacial}
        </div>
        <div className='stats'>{conTotal}</div>
        <div className='stats' style={{ background: Math.floor((conTotal - 10) / 2) < 0 ? '#ff0000ff' : Math.floor((conTotal - 10) / 2) > 0 ? '#3aff44' : 'transparent', color: Math.floor((conTotal - 10) / 2) < 0 ? '#ffffff' : '#646cff' }}>
          {Math.floor((conTotal - 10) / 2)}
        </div>
      </div>
      {/* INT */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='stats'>INT</div>
        <button className='button_stats_remove' onClick={() => setInt(int > 8 ? int - 1 : int)}>
          <RemoveCircleOutlineIcon />
        </button>
        <div className='stats'>{int}</div>
        <button className='button_stats_add' onClick={() => setInt(int < 18 ? int + 1 : int)}>
          <AddCircleOutlineIcon />
        </button>
        <div className='stats' style={{ background: intRacial < 0 ? '#ff0000ff' : intRacial > 0 ? '#3aff44' : 'transparent', color: intRacial < 0 ? '#ffffff' : '#646cff' }}>
          {intRacial}
        </div>
        <div className='stats'>{intTotal}</div>
        <div className='stats' style={{ background: Math.floor((intTotal - 10) / 2) < 0 ? '#ff0000ff' : Math.floor((intTotal - 10) / 2) > 0 ? '#3aff44' : 'transparent', color: Math.floor((intTotal - 10) / 2) < 0 ? '#ffffff' : '#646cff' }}>
          {Math.floor((intTotal - 10) / 2)}
        </div>
      </div>
      {/* WIS */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='stats'>WIS</div>
        <button className='button_stats_remove' onClick={() => setWis(wis > 8 ? wis - 1 : wis)}>
          <RemoveCircleOutlineIcon />
        </button>
        <div className='stats'>{wis}</div>
        <button className='button_stats_add' onClick={() => setWis(wis < 18 ? wis + 1 : wis)}>
          <AddCircleOutlineIcon />
        </button>
        <div className='stats' style={{ background: wisRacial < 0 ? '#ff0000ff' : wisRacial > 0 ? '#3aff44' : 'transparent', color: wisRacial < 0 ? '#ffffff' : '#646cff' }}>
          {wisRacial}
        </div>
        <div className='stats'>{wisTotal}</div>
        <div className='stats' style={{ background: Math.floor((wisTotal - 10) / 2) < 0 ? '#ff0000ff' : Math.floor((wisTotal - 10) / 2) > 0 ? '#3aff44' : 'transparent', color: Math.floor((wisTotal - 10) / 2) < 0 ? '#ffffff' : '#646cff' }}>
          {Math.floor((wisTotal - 10) / 2)}
        </div>
      </div>
      {/* CHA */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='stats'>CHA</div>
        <button className='button_stats_remove' onClick={() => setCha(cha > 8 ? cha - 1 : cha)}>
          <RemoveCircleOutlineIcon />
        </button>
        <div className='stats'>{cha}</div>
        <button className='button_stats_add' onClick={() => setCha(cha < 18 ? cha + 1 : cha)}>
          <AddCircleOutlineIcon />
        </button>
        <div className='stats' style={{ background: chaRacial < 0 ? '#ff0000ff' : chaRacial > 0 ? '#3aff44' : 'transparent', color: chaRacial < 0 ? '#ffffff' : '#646cff' }}>
          {chaRacial}
        </div>
        <div className='stats'>{chaTotal}</div>
        <div className='stats' style={{ background: Math.floor((chaTotal - 10) / 2) < 0 ? '#ff0000ff' : Math.floor((chaTotal - 10) / 2) > 0 ? '#3aff44' : 'transparent', color: Math.floor((chaTotal - 10) / 2) < 0 ? '#ffffff' : '#646cff' }}>
          {Math.floor((chaTotal - 10) / 2)}
        </div>
      </div>
    </>
  );
}
