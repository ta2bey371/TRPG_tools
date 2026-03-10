import  { useEffect, useState } from 'react';
import { DiceRoll } from '../System/UseDice';

function CharacterMake() {
  const [basicParamaters,setBasicParamaters] = useState({
    STR:{value:0,dice:"3D6"},
    CON:{value:0,dice:"3D6"},
    POW:{value:0,dice:"3D6"},
    DEX:{value:0,dice:"3D6"},
    APP:{value:0,dice:"3D6"},
    SIZ:{value:0,dice:"2D6+6"},
    INT:{value:0,dice:"2D6+6"},
    EDU:{value:0,dice:"2D6+6"},
    LUK:{value:0,dice:"3D6"},
  });
  const advanceParameters = {
    HP:Math.floor((basicParamaters.CON.value+basicParamaters.SIZ.value)/10),
    MP:Math.floor(basicParamaters.POW.value/5),
    SAN:basicParamaters.POW.value,
    IDE:basicParamaters.INT.value,
    KNOW:basicParamaters.EDU.value,
    ダメージボーナス:0,
    BUILD:0,
    MOV:0,
  };
  const setAParameter = (key,dice)=>setBasicParamaters({
    ...basicParamaters,
    [key]:{value:DiceRoll(dice)*5,dice:dice}
  });
  const setAllParameters = () => setBasicParamaters({
    STR:{value:DiceRoll("3D6")*5,dice:"3D6"},
    CON:{value:DiceRoll("3D6")*5,dice:"3D6"},
    POW:{value:DiceRoll("3D6")*5,dice:"3D6"},
    DEX:{value:DiceRoll("3D6")*5,dice:"3D6"},
    APP:{value:DiceRoll("3D6")*5,dice:"3D6"},
    SIZ:{value:DiceRoll("2D6+6")*5,dice:"2D6+6"},
    INT:{value:DiceRoll("2D6+6")*5,dice:"2D6+6"},
    EDU:{value:DiceRoll("2D6+6")*5,dice:"2D6+6"},
    LUK:{value:DiceRoll("3D6")*5,dice:"3D6"},
  });
  const reset = () => setBasicParamaters({
    STR:{value:0,dice:"3D6"},
    CON:{value:0,dice:"3D6"},
    POW:{value:0,dice:"3D6"},
    DEX:{value:0,dice:"3D6"},
    APP:{value:0,dice:"3D6"},
    SIZ:{value:0,dice:"2D6+6"},
    INT:{value:0,dice:"2D6+6"},
    EDU:{value:0,dice:"2D6+6"},
    LUK:{value:0,dice:"3D6"},
  });
  return (
    <>
      <div>
        <h1>探索者作成</h1>
        <p>紹介文を記載予定</p>
      </div>
      <div>
        <h2>{"<基礎情報>"}</h2>
        <label>
          名前：
          <input type='text'/>
        </label>
        <label>
          年齢：
          <input type='text'/>
        </label>
        <label>
          身長：
          <input type='text'/>
        </label>
        <label>
          体重：
          <input type='text'/>
        </label>
        <label>
          バックストーリー：
          <textarea/>
        </label>
      </div>
      <div>
        <h2>{"<能力値>"}</h2>
        <h3>基礎能力</h3>
        {Object.entries(basicParamaters).map(([key,object])=>(
          <div key={key}>
            {key}:{object.value}
            <button onClick={()=>setAParameter(key,object.dice)}>ダイス</button>
          </div>
        ))}
        <button onClick={setAllParameters}>一括ロール</button>
        <button onClick={reset}>リセット</button>
        <h3>派生能力</h3>
        {Object.entries(advanceParameters).map(([key,value])=>(
          <div key={key}>
            {key}：{value}
          </div>
        ))}
      </div>
      <div>
        <h2>{"<職業技能>"}</h2>
        <label>
          職業：
          <input type='text'/>
        </label>
        <button>決定</button>
      </div>
      <div>
        <h2>{"<趣味技能>"}</h2>
      </div>
    </>
  )
}

export default CharacterMake