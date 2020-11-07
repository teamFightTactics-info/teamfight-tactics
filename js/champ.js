let contain = document.getElementById('champ')
const Champ = {
    Cost1: `
    <div id='diana' class="characters-items coin-1"></div>
    <div id='elise' class="characters-items coin-1"></div>
    <div id='fiora' class="characters-items coin-1"></div>
    <div id='garen' class="characters-items coin-1"></div>
    <div id='nami' class="characters-items coin-1"></div>
    <div id='nid' class="characters-items coin-1"></div>
    <div id='maokai' class="characters-items coin-1"></div>
    <div id='tahm' class="characters-items coin-1"></div>
    <div id='tf' class="characters-items coin-1"></div>
    <div id='vayne' class="characters-items coin-1"></div>
    <div id='wukong' class="characters-items coin-1"></div>
    <div id='ys' class="characters-items coin-1"></div>
    `,
    Cost2: `
    <div id='annie' class="characters-items coin-2"></div>
    <div id='aphelios' class="characters-items coin-2"></div>
    <div id='hecarim' class="characters-items coin-2"></div>
    <div id='janna' class="characters-items coin-2"></div>
    <div id='j4' class="characters-items coin-2"></div>
    <div id='jax' class="characters-items coin-2"></div>
    <div id='liss' class="characters-items coin-2"></div>
    <div id='lulu' class="characters-items coin-2"></div>
    <div id='pyke' class="characters-items coin-2"></div>
    <div id='sylas' class="characters-items coin-2"></div>
    <div id='teemo' class="characters-items coin-2"></div>
    <div id='thresh' class="characters-items coin-2"></div>
    <div id='vi' class="characters-items coin-2"></div>
    <div id='zed' class="characters-items coin-2"></div>
    `,
    Cost3: `
    <div id='akali' class="characters-items coin-3"></div>
    <div id='evelynn' class="characters-items coin-3"></div>
    <div id='irelia' class="characters-items coin-3"></div>
    <div id='jinx' class="characters-items coin-3"></div>
    <div id='kalista' class="characters-items coin-3"></div>
    <div id='kata' class="characters-items coin-3"></div>
    <div id='kennen' class="characters-items coin-3"></div>
    <div id='kindred' class="characters-items coin-3"></div>
    <div id='lux' class="characters-items coin-3"></div>
    <div id='nunu' class="characters-items coin-3"></div>
    <div id='veigar' class="characters-items coin-3"></div>
    <div id='xinzhao' class="characters-items coin-3"></div>
    <div id='yuumi' class="characters-items coin-3"></div>
    `,
    Cost4: `
    <div id='aatrox' class="characters-items coin-4"></div>
    <div id='ahri' class="characters-items coin-4"></div>
    <div id='ashe' class="characters-items coin-4"></div>
    <div id='cassiopeia' class="characters-items coin-4"></div>
    <div id='jhin' class="characters-items coin-4"></div>
    <div id='mor' class="characters-items coin-4"></div>
    <div id='riven' class="characters-items coin-4"></div>
    <div id='sejuani' class="characters-items coin-4"></div>
    <div id='shen' class="characters-items coin-4"></div>
    <div id='talon' class="characters-items coin-4"></div>
    <div id='warwich' class="characters-items coin-4"></div>
    `,
    Cost5: `
    <div id='azir' class="characters-items coin-5 "></div>
    <div id='ez' class="characters-items coin-5"></div>
    <div id='kayn' class="characters-items coin-5"></div>
    <div id='lee' class="characters-items coin-5"></div>
    <div id='lilia' class="characters-items coin-5"></div>
    <div id='sett' class="characters-items coin-5"></div>
    <div id='yone' class="characters-items coin-5"></div>
    <div id='zilean' class="characters-items coin-5"></div>
    `,
    Reset:`
    <div id='aatrox' class="characters-items coin-4"></div>
    <div id='ahri' class="characters-items coin-4"></div>
    <div id='akali' class="characters-items coin-3"></div>
    <div id='annie' class="characters-items coin-2"></div>
    <div id='aphelios' class="characters-items coin-2"></div>
    <div id='ashe' class="characters-items coin-4"></div>
    <div id='azir' class="characters-items coin-5 "></div>
    <div id='cassiopeia' class="characters-items coin-4"></div>
    <div id='diana' class="characters-items coin-1"></div>
    <div id='elise' class="characters-items coin-1"></div>
    <div id='evelynn' class="characters-items coin-3"></div>
    <div id='ez' class="characters-items coin-5"></div>
    <div id='fiora' class="characters-items coin-1"></div>
    <div id='garen' class="characters-items coin-1"></div>
    <div id='hecarim' class="characters-items coin-2"></div>
    <div id='irelia' class="characters-items coin-3"></div>
    <div id='janna' class="characters-items coin-2"></div>
    <div id='j4' class="characters-items coin-2"></div>
    <div id='jax' class="characters-items coin-2"></div>
    <div id='jhin' class="characters-items coin-4"></div>
    <div id='jinx' class="characters-items coin-3"></div>
    <div id='kalista' class="characters-items coin-3"></div>
    <div id='kata' class="characters-items coin-3"></div>
    <div id='kayn' class="characters-items coin-5"></div>
    <div id='kennen' class="characters-items coin-3"></div>
    <div id='kindred' class="characters-items coin-3"></div>
    <div id='lee' class="characters-items coin-5"></div>
    <div id='lilia' class="characters-items coin-5"></div>
    <div id='liss' class="characters-items coin-2"></div>
    <div id='lulu' class="characters-items coin-2"></div>
    <div id='lux' class="characters-items coin-3"></div>
    <div id='maokai' class="characters-items coin-1"></div>
    <div id='mor' class="characters-items coin-4"></div>
    <div id='nami' class="characters-items coin-1"></div>
    <div id='nid' class="characters-items coin-1"></div>
    <div id='nunu' class="characters-items coin-3"></div>
    <div id='pyke' class="characters-items coin-2"></div>
    <div id='riven' class="characters-items coin-4"></div>
    <div id='sejuani' class="characters-items coin-4"></div>
    <div id='sett' class="characters-items coin-5"></div>
    <div id='shen' class="characters-items coin-4"></div>
    <div id='sylas' class="characters-items coin-2"></div>
    <div id='tahm' class="characters-items coin-1"></div>
    <div id='talon' class="characters-items coin-4"></div>
    <div id='teemo' class="characters-items coin-2"></div>
    <div id='thresh' class="characters-items coin-2"></div>
    <div id='tf' class="characters-items coin-1"></div>
    <div id='vayne' class="characters-items coin-1"></div>
    <div id='veigar' class="characters-items coin-3"></div>
    <div id='vi' class="characters-items coin-2"></div>
    <div id='warwich' class="characters-items coin-4"></div>
    <div id='wukong' class="characters-items coin-1"></div>
    <div id='xinzhao' class="characters-items coin-3"></div>
    <div id='ys' class="characters-items coin-1"></div>
    <div id='yone' class="characters-items coin-5"></div>
    <div id='yuumi' class="characters-items coin-3"></div>
    <div id='zed' class="characters-items coin-2"></div>
    <div id='zilean' class="characters-items coin-5"></div>
    `,
    Cultist:`
    <div id='aatrox' class="characters-items coin-4 cultist"></div>
    <div id='elise' class="characters-items coin-1 cultist"></div>
    <div id='evelynn' class="characters-items coin-3 cultist"></div>
    <div id='jhin' class="characters-items coin-4 cultist"></div>
    <div id='kalista' class="characters-items coin-3 cultist"></div>
    <div id='pyke' class="characters-items coin-2 cultist"></div>
    <div id='tf' class="characters-items coin-1 cultist"></div>
    <div id='zilean' class="characters-items coin-5 cultist"></div>
    `,
    Divine:`
    <div id='irelia' class="characters-items coin-3 divine enlightened"></div>
    <div id='jax' class="characters-items coin-2 divine"></div>
    <div id='lee' class="characters-items coin-5 divine"></div>
    <div id='lux' class="characters-items coin-3 divine"></div>
    <div id='warwich' class="characters-items coin-4 divine"></div>
    <div id='wukong' class="characters-items coin-1 divine"></div>
    `,
    Dusk:`
    <div id='cassiopeia' class="characters-items coin-4 dusk"></div>
    <div id='lilia' class="characters-items coin-5 dusk"></div>
    <div id='riven' class="characters-items coin-4 dusk"></div>
    <div id='thresh' class="characters-items coin-2 dusk"></div>
    <div id='vayne' class="characters-items coin-1 dusk"></div>
    `,
    Elderwood:`
    <div id='ashe' class="characters-items coin-4 elderwood"></div>
    <div id='ez' class="characters-items coin-5 elderwood"></div>
    <div id='hecarim' class="characters-items coin-2 elderwood"></div>           
    <div id='lulu' class="characters-items coin-2 elderwood"></div>
    <div id='maokai' class="characters-items coin-1 elderwood"></div>
    <div id='nunu' class="characters-items coin-3 elderwood"></div>
    <div id='veigar' class="characters-items coin-3 elderwood"></div>
    `,
    Enlightened:`
    <div id='fiora' class="characters-items coin-1 enlightened"></div>
    <div id='irelia' class="characters-items coin-3 divine enlightened"></div>
    <div id='janna' class="characters-items coin-2 enlightened"></div>
    <div id='mor' class="characters-items coin-4 enlightened"></div>
    <div id='nami' class="characters-items coin-1 enlightened"></div>
    <div id='talon' class="characters-items coin-4 enlightened"></div>
    `,
    Exile:`
    <div id='ys' class="characters-items coin-1 exile"></div>
    <div id='yone' class="characters-items coin-5 exile"></div>
    `,
    Fortune:`
    <div id='annie' class="characters-items coin-2 fortune"></div>
    <div id='jinx' class="characters-items coin-3 fortune"></div>
    <div id='kata' class="characters-items coin-3 fortune warlord"></div>
    <div id='sejuani' class="characters-items coin-4 fortune"></div>
    <div id='tahm' class="characters-items coin-1 fortune"></div>
    `,
    Moonlight:`
    <div id='aphelios' class="characters-items coin-2 moonlight"></div>
    <div id='diana' class="characters-items coin-1 moonlight"></div>
    <div id='liss' class="characters-items coin-2 moonlight"></div>
    <div id='sylas' class="characters-items coin-2 moonlight"></div>
    `,
    Ninja:`
    <div id='akali' class="characters-items coin-3 ninja"></div>
    <div id='kennen' class="characters-items coin-3 ninja"></div>
    <div id='shen' class="characters-items coin-4 ninja"></div>
    <div id='zed' class="characters-items coin-2 ninja"></div>
    `,
    Spirit:`
    <div id='ahri' class="characters-items coin-4 spirit"></div>
    <div id='kindred' class="characters-items coin-3 spirit"></div>
    <div id='teemo' class="characters-items coin-2 spirit"></div>
    <div id='yuumi' class="characters-items coin-3 spirit"></div>
    `,
    TheBoss:`
    <div id='sett' class="characters-items coin-5 theboss"></div>
    `,
    Tormented:`
    <div id='kayn' class="characters-items coin-5 tormented"></div>
    `,
    Warlord:`
    <div id='azir' class="characters-items coin-5 warlord"></div>
    <div id='garen' class="characters-items coin-1 warlord"></div>
    <div id='j4' class="characters-items coin-2 warlord"></div>
    <div id='kata' class="characters-items coin-3 fortune warlord"></div>
    <div id='nid' class="characters-items coin-1 warlord"></div>
    <div id='vi' class="characters-items coin-2 warlord"></div>
    <div id='xinzhao' class="characters-items coin-3 warlord"></div>
    `,
    Adept:`
    <div id='irelia' class="characters-items coin-3 divine enlightened adept"></div>
    <div id='shen' class="characters-items coin-4 ninja adept mystic"></div>
    <div id='yone' class="characters-items coin-5 exile adept"></div>
    `,
    Assasin:`
    <div id='akali' class="characters-items coin-3 ninja assasin"></div>
    <div id='diana' class="characters-items coin-1 moonlight assasin"></div>
    <div id='kata' class="characters-items coin-3 fortune warlord assasin"></div>
    <div id='pyke' class="characters-items coin-2 cultist assasin"></div>
    <div id='talon' class="characters-items coin-4 enlightened assasin"></div>
    `,
    Brawler:`
    <div id='maokai' class="characters-items coin-1 elderwood brawler"></div>
    <div id='nunu' class="characters-items coin-3 elderwood brawler"></div>
    <div id='sett' class="characters-items coin-5 theboss brawler"></div>
    <div id='sylas' class="characters-items coin-2 moonlight brawler"></div>
    <div id='tahm' class="characters-items coin-1 fortune brawler"></div>
    <div id='vi' class="characters-items coin-2 warlord brawler"></div>
    <div id='warwich' class="characters-items coin-4 divine brawler hunter"></div>
    `,
    Dazzler:`
    <div id='ez' class="characters-items coin-5 elderwood dazzler"></div>
    <div id='liss' class="characters-items coin-2 moonlight dazzler"></div>
    <div id='lux' class="characters-items coin-3 divine dazzler"></div>
    <div id='mor' class="characters-items coin-4 enlightened dazzler"></div>
    `,
    Duelist:`
    <div id='fiora' class="characters-items coin-1 enlightened duelist"></div>
    <div id='jax' class="characters-items coin-2 divine duelist"></div>
    <div id='kalista' class="characters-items coin-3 cultist duelist"></div>
    <div id='lee' class="characters-items coin-5 divine duelist"></div>
    <div id='xinzhao' class="characters-items coin-3 warlord duelist"></div>
    <div id='ys' class="characters-items coin-1 exile duelist"></div>
    `,
    Emperor:`
    <div id='azir' class="characters-items coin-5 warlord emperor keeper"></div>
    `,
    Hunter:`
    <div id='aphelios' class="characters-items coin-2 moonlight hunter"></div>
    <div id='ashe' class="characters-items coin-4 elderwood hunter"></div>
    <div id='kindred' class="characters-items coin-3 spirit hunter"></div>
    <div id='warwich' class="characters-items coin-4 divine brawler hunter"></div>
    `,
    Keeper:`
    <div id='azir' class="characters-items coin-5 warlord emperor keeper"></div>
    <div id='elise' class="characters-items coin-1 cultist keeper"></div>
    <div id='j4' class="characters-items coin-2 warlord keeper"></div>
    <div id='kennen' class="characters-items coin-3 ninja keeper"></div>
    <div id='riven' class="characters-items coin-4 dusk keeper"></div>
    `,
    Mage:`
    <div id='ahri' class="characters-items coin-4 spirit mage"></div>
    <div id='annie' class="characters-items coin-2 fortune mage"></div>
    <div id='lilia' class="characters-items coin-5 dusk mage"></div>
    <div id='lulu' class="characters-items coin-2 elderwood mage"></div>
    <div id='nami' class="characters-items coin-1 enlightened mage"></div>
    <div id='tf' class="characters-items coin-1 cultist mage"></div>
    <div id='veigar' class="characters-items coin-3 elderwood mage"></div>
    `,
    Mystic:`
    <div id='cassiopeia' class="characters-items coin-4 dusk mystic"></div>
    <div id='janna' class="characters-items coin-2 enlightened mystic"></div>
    <div id='shen' class="characters-items coin-4 ninja adept mystic"></div>
    <div id='yuumi' class="characters-items coin-3 spirit mystic"></div>
    <div id='zilean' class="characters-items coin-5 cultist mystic"></div>
    `,
    Shade:`
    <div id='evelynn' class="characters-items coin-3 cultist shade"></div>
    <div id='kayn' class="characters-items coin-5 tormented shade"></div>
    <div id='zed' class="characters-items coin-2 ninja shade"></div>
    `,
    Sharpshooter:`
    <div id='jhin' class="characters-items coin-4 cultist sharpshooter"></div>
    <div id='jinx' class="characters-items coin-3 fortune sharpshooter"></div>
    <div id='nid' class="characters-items coin-1 warlord sharpshooter"></div>
    <div id='teemo' class="characters-items coin-2 spirit sharpshooter"></div>
    <div id='vayne' class="characters-items coin-1 dusk sharpshooter"></div>
    `,
    Vanguard:`
    <div id='aatrox' class="characters-items coin-4 cultist vanguard"></div>
    <div id='garen' class="characters-items coin-1 warlord vanguard"></div>
    <div id='hecarim' class="characters-items coin-2 elderwood vanguard"></div>
    <div id='sejuani' class="characters-items coin-4 fortune vanguard "></div>
    <div id='thresh' class="characters-items coin-2 dusk vanguard"></div>
    <div id='wukong' class="characters-items coin-1 divine vanguard"></div>
    `,
}




function Cost1() {
    champ.innerHTML = Champ.Cost1
}
function Cost2() {
    champ.innerHTML = Champ.Cost2
}
function Cost3() {
    champ.innerHTML = Champ.Cost3
}
function Cost4() {
    champ.innerHTML = Champ.Cost4
}
function Cost5() {
    champ.innerHTML = Champ.Cost5
}
function Reset() {
    champ.innerHTML = Champ.Reset
}
function Cultist() {
    champ.innerHTML = Champ.Cultist
}
function Divine() {
    champ.innerHTML = Champ.Divine
}
function Elderwood() {
    champ.innerHTML = Champ.Elderwood
}
function Enlightened() {
    champ.innerHTML = Champ.Enlightened
}
function Exile() {
    champ.innerHTML = Champ.Exile
}
function Fortune() {
    champ.innerHTML = Champ.Fortune
}
function Moonlight() {
    champ.innerHTML = Champ.Moonlight
}
function Ninja() {
    champ.innerHTML = Champ.Ninja
}
function Spirit() {
    champ.innerHTML = Champ.Spirit
}
function TheBoss() {
    champ.innerHTML = Champ.TheBoss
}
function Tormented() {
    champ.innerHTML = Champ.Tormented
}
function Warlord() {
    champ.innerHTML = Champ.Warlord
}
function Adept() {
    champ.innerHTML = Champ.Adept
}
function Assasin() {
    champ.innerHTML = Champ.Assasin
}
function Brawler() {
    champ.innerHTML = Champ.Brawler
}
function Dazzler() {
    champ.innerHTML = Champ.Dazzler
}
function Duelist() {
    champ.innerHTML = Champ.Duelist
}
function Emperor() {
    champ.innerHTML = Champ.Emperor
}
function Hunter() {
    champ.innerHTML = Champ.Hunter
}
function Keeper() {
    champ.innerHTML = Champ.Keeper
}
function Mage() {
    champ.innerHTML = Champ.Mage
}
function Mystic() {
    champ.innerHTML = Champ.Mystic
}
function Shade() {
    champ.innerHTML = Champ.Shade
}
function Sharpshooter() {
    champ.innerHTML = Champ.Sharpshooter
}
function Vanguard() {
    champ.innerHTML = Champ.Vanguard
}