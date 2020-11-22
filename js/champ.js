let contain = document.getElementById('champ')
const Champ = {
    Cost1: `
    <a  href="../html/champion/diana.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Diana.png" alt="">
        <p class="f-title">Diana</p>
    </a>,
    <a  href="../html/champion/elise.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Elise.png" alt="">
        <p class="f-title">Elise</p>
    </a>,
    <a  href="../html/champion/fiora.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Fiora.png" alt="">
        <p class="f-title">Fiora</p>
    </a>,
    <a  href="../html/champion/garen.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Garen.png" alt="">
        <p class="f-title">Garen</p>
    </a>,
    <a  href="../html/champion/lissandra.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Lissandra.png" alt="">
        <p class="f-title">Lissandra</p>
    </a>,
    <a  href="../html/champion/maokai.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Maokai.png" alt="">
        <p class="f-title">Maokai</p>
    </a>,
    <a  href="../html/champion/nami.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Nami.png" alt="">
        <p class="f-title">Nami</p>
    </a>,
    <a  href="../html/champion/nidalee.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Nidalee.png" alt="">
        <p class="f-title">Nidalee</p>
    </a>,
    <a  href="../html/champion/tahmkench.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/TahmKench.png" alt="">
        <p class="f-title">Tahm Kench</p>
    </a>,
    <a  href="../html/champion/tf.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/TwistedFate.png" alt="">
        <p class="f-title">Twisted Fate</p>
    </a>,
    <a  href="../html/champion/vayne.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Vayne.png" alt="">
        <p class="f-title">Vayne</p>
    </a>,
    <a  href="../html/champion/wukong.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Wukong.png" alt="">
        <p class="f-title">Wukong</p>
    </a>,
    <a  href="../html/champion/yasuo.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Yasuo.png" alt="">
        <p class="f-title">Yasuo</p>
    </a>


    `,
    Cost2: `
    <a  href="../html/champion/annie.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Annie.png" alt="">
        <p class="f-title">Annie</p>
    </a>,
    <a href="../html/champion/aphelios.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Aphelios.png" alt="">
        <p class="f-title">Aphelios</p>
    </a>,
    <a href="../html/champion/hecarim.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Hecarim.png" alt="">
        <p class="f-title">Hecarim</p>
    </a>,
    <a href="../html/champion/janna.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Janna.png" alt="">
        <p class="f-title">Janna</p>
    </a>,
    <a href="../html/champion/JarvanIV.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/JarvanIV.png" alt="">
        <p class="f-title">Jarvan IV</p>
    </a>,
    <a href="../html/champion/jax.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Jax.png" alt="">
        <p class="f-title">Jax</p>
    </a>,
    <a href="../html/champion/lulu.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Lulu.png" alt="">
        <p class="f-title">Lulu</p>
    </a>,
    <a href="../html/champion/pyke.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Pyke.png" alt="">
        <p class="f-title">Pyke</p>
    </a>,
    <a href="../html/champion/sylas.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Sylas.png" alt="">
        <p class="f-title">Sylas</p>
    </a>,
    <a href="../html/champion/teemo.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Teemo.png" alt="">
        <p class="f-title">Teemo</p>
    </a>,
    <a href="../html/champion/thresh.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Thresh.png" alt="">
        <p class="f-title">Thresh</p>
    </a>,
    <a href="../html/champion/vi.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Vi.png" alt="">
        <p class="f-title">Vi</p>
    </a>,
    <a href="../html/champion/zed.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Zed.png" alt="">
        <p class="f-title">Zed</p>
    </a>
    `,
    Cost3: `
    <a  href="../html/champion/akali.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Akali.png" alt="">
        <p class="f-title">Akali</p>
    </a>,
    <a href="" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Evelynn.png" alt="">
        <p class="f-title">Evelynn</p>
    </a>,
    <a href="../html/champion/irelia.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Irelia.png" alt="">
        <p class="f-title">Irelia</p>
    </a>,
    <a href="../html/champion/jinx.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Jinx.png" alt="">
        <p class="f-title">Jinx</p>
    </a>,
    <a href="../html/champion/kalista.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kalista.png" alt="">
        <p class="f-title">Kalista</p>
    </a>,
    <a href="../html/champion/katarina.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Katarina.png" alt="">
        <p class="f-title">Katarina</p>
    </a>,
    <a href="../html/champion/kennen.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kennen.png" alt="">
        <p class="f-title">Kennen</p>
    </a>,
    <a href="../html/champion/kindred.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kindred.png" alt="">
        <p class="f-title">Kindred</p>
    </a>,
    <a href="../html/champion/lux.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Lux.png" alt="">
        <p class="f-title">Lux</p>
    </a>,
    <a href="../html/champion/nunu.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Nunu.png" alt="">
        <p class="f-title">Nunu</p>
    </a>,
    <a href="../html/champion/veigar.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Veigar.png" alt="">
        <p class="f-title">Veigar</p>
    </a>,
    <a href="../html/champion/xinzhao.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/XinZhao.png" alt="">
        <p class="f-title">Xin Zhao</p>
    </a>,
    <a href="../html/champion/yummi.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Yuumi.png" alt="">
        <p class="f-title">Yuumi</p>
    </a>
    `,
    Cost4: `
    <a href="../html/champion/aatrox.html" style="text-decoration: none;" id='aatrox'>
        <img class="characters-items coin-4 " src="../image/champions/Aatrox.png" alt="">
        <p class="f-title">Aatrox</p>
    </a>
    <a href="../html/champion/ahri.html" style="text-decoration: none;">
        <img class="characters-items coin-4 spirit mage" src="../image/champions/Ahri.png" alt="">
        <p class="f-title">Ahri</p>
    </a>
    <a href="../html/champion/ashe.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Ashe.png" alt="">
        <p class="f-title">Ashe</p>
    </a>,
    <a href="../html/champion/cassiopeia.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Cassiopeia.png" alt="">
        <p class="f-title">Cassiopeia</p>
    </a>,
    <a href="../html/champion/jhin.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Jhin.png" alt="">
        <p class="f-title">Jhin</p>
    </a>,
    <a href="../html/champion/morgana.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Morgana.png" alt="">
        <p class="f-title">Morgana</p>
    </a>,
    <a href="../html/champion/riven.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Riven.png" alt="">
        <p class="f-title">Riven</p>
    </a>,
    <a href="../html/champion/sejuani.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Sejuani.png" alt="">
        <p class="f-title">Sejuani</p>
    </a>,
    <a href="../html/champion/shen.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Shen.png" alt="">
        <p class="f-title">Shen</p>
    </a>,
    <a href="../html/champion/talon.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Talon.png" alt="">
        <p class="f-title">Talon</p>
    </a>,
    <a href="../html/champion/warwich.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Warwick.png" alt="">
        <p class="f-title">Warwick</p>
    </a>,
    `,
    Cost5: `
    <a  href="../html/champion/azir.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Azir.png" alt="">
        <p class="f-title">Azir</p>
    </a>,
    <a href="../html/champion/ezreal.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Ezreal.png" alt="">
        <p class="f-title">Ezreal</p>
    </a>,
    <a href="../html/champion/kayn.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Kayn.png" alt="">
        <p class="f-title">Kayn</p>
    </a>,
    <a href="../html/champion/leesin.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/LeeSin.png" alt="">
        <p class="f-title">Lee Sin</p>
    </a>,
    <a href="../html/champion/lillia.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Lillia.png" alt="">
        <p class="f-title">Lillia</p>
    </a>,
    <a href="../html/champion/sett.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Sett.png" alt="">
        <p class="f-title">Sett</p>
    </a>,
    <a href="../html/champion/yone.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Yone.png" alt="">
        <p class="f-title">Yone</p>
    </a>,
    <a href="../html/champion/zilean.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Zilean.png" alt="">
        <p class="f-title">Zilean</p>
    </a>
    `,
    Reset:`
    <a href="" style="text-decoration: none;" id='aatrox'>
    <img class="characters-items coin-4 " src="../image/champions/Aatrox.png" alt="">
    <p class="f-title">Aatrox</p>
</a>

<a href="" style="text-decoration: none;">
    <img class="characters-items coin-4 spirit mage" src="../image/champions/Ahri.png" alt="">
    <p class="f-title">Ahri</p>
</a>

<a href="../html/champion/akali.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Akali.png" alt="">
    <p class="f-title">Akali</p>
</a>

<a href="../html/champion/annie.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Annie.png" alt="">
    <p class="f-title">Annie</p>
</a>

<a href="../html/champion/aphelios.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Aphelios.png" alt="">
    <p class="f-title">Aphelios</p>
</a>

<a href="../html/champion/ashe.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Ashe.png" alt="">
    <p class="f-title">Ashe</p>
</a>

<a href="../html/champion/azir.html" style="text-decoration: none;">
    <img class="characters-items coin-5" src="../image/champions/Azir.png" alt="">
    <p class="f-title">Azir</p>
</a>

<a href="../html/champion/cassiopeia.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Cassiopeia.png" alt="">
    <p class="f-title">Cassiopeia</p>
</a>

<a href="../html/champion/diana.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Diana.png" alt="">
    <p class="f-title">Diana</p>
</a>

<a href="../html/champion/elise.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Elise.png" alt="">
    <p class="f-title">Elise</p>
</a>

<a href="" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Evelynn.png" alt="">
    <p class="f-title">Evelynn</p>
</a>

<a href="../html/champion/ezreal.html" style="text-decoration: none;">
    <img class="characters-items coin-5" src="../image/champions/Ezreal.png" alt="">
    <p class="f-title">Ezreal</p>
</a>

<a href="../html/champion/fiora.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Fiora.png" alt="">
    <p class="f-title">Fiora</p>
</a>

<a href="../html/champion/garen.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Garen.png" alt="">
    <p class="f-title">Garen</p>
</a>

<a href="../html/champion/hecarim.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Hecarim.png" alt="">
    <p class="f-title">Hecarim</p>
</a>

<a href="../html/champion/irelia.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Irelia.png" alt="">
    <p class="f-title">Irelia</p>
</a>

<a href="../html/champion/janna.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Janna.png" alt="">
    <p class="f-title">Janna</p>
</a>

<a href="../html/champion/JarvanIV.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/JarvanIV.png" alt="">
    <p class="f-title">Jarvan IV</p>
</a>

<a href="../html/champion/jax.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Jax.png" alt="">
    <p class="f-title">Jax</p>
</a>

<a href="../html/champion/jhin.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Jhin.png" alt="">
    <p class="f-title">Jhin</p>
</a>

<a href="../html/champion/jinx.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Jinx.png" alt="">
    <p class="f-title">Jinx</p>
</a>

<a href="../html/champion/kalista.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Kalista.png" alt="">
    <p class="f-title">Kalista</p>
</a>

<a href="../html/champion/katarina.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Katarina.png" alt="">
    <p class="f-title">Katarina</p>
</a>

<a href="../html/champion/kayn.html" style="text-decoration: none;">
    <img class="characters-items coin-5" src="../image/champions/Kayn.png" alt="">
    <p class="f-title">Kayn</p>
</a>

<a href="../html/champion/kennen.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Kennen.png" alt="">
    <p class="f-title">Kennen</p>
</a>

<a href="../html/champion/kindred.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Kindred.png" alt="">
    <p class="f-title">Kindred</p>
</a>

<a href="../html/champion/leesin.html" style="text-decoration: none;">
    <img class="characters-items coin-5" src="../image/champions/LeeSin.png" alt="">
    <p class="f-title">Lee Sin</p>
</a>

<a href="../html/champion/lillia.html" style="text-decoration: none;">
    <img class="characters-items coin-5" src="../image/champions/Lillia.png" alt="">
    <p class="f-title">Lillia</p>
</a>

<a href="../html/champion/lissandra.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Lissandra.png" alt="">
    <p class="f-title">Lissandra</p>
</a>

<a href="../html/champion/lulu.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Lulu.png" alt="">
    <p class="f-title">Lulu</p>
</a>

<a href="../html/champion/lux.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Lux.png" alt="">
    <p class="f-title">Lux</p>
</a>

<a href="../html/champion/maokai.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Maokai.png" alt="">
    <p class="f-title">Maokai</p>
</a>

<a href="../html/champion/morgana.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Morgana.png" alt="">
    <p class="f-title">Morgana</p>
</a>

<a href="../html/champion/nami.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Nami.png" alt="">
    <p class="f-title">Nami</p>
</a>

<a href="../html/champion/nidalee.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Nidalee.png" alt="">
    <p class="f-title">Nidalee</p>
</a>

<a href="../html/champion/nunu.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Nunu.png" alt="">
    <p class="f-title">Nunu</p>
</a>

<a href="../html/champion/pyke.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Pyke.png" alt="">
    <p class="f-title">Pyke</p>
</a>

<a href="../html/champion/riven.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Riven.png" alt="">
    <p class="f-title">Riven</p>
</a>

<a href="../html/champion/sejuani.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Sejuani.png" alt="">
    <p class="f-title">Sejuani</p>
</a>

<a href="../html/champion/sett.html" style="text-decoration: none;">
    <img class="characters-items coin-5" src="../image/champions/Sett.png" alt="">
    <p class="f-title">Sett</p>
</a>

<a href="../html/champion/shen.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Shen.png" alt="">
    <p class="f-title">Shen</p>
</a>

<a href="../html/champion/sylas.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Sylas.png" alt="">
    <p class="f-title">Sylas</p>
</a>

<a href="../html/champion/tahmkench.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/TahmKench.png" alt="">
    <p class="f-title">Tahm Kench</p>
</a>

<a href="../html/champion/talon.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Talon.png" alt="">
    <p class="f-title">Talon</p>
</a>

<a href="../html/champion/teemo.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Teemo.png" alt="">
    <p class="f-title">Teemo</p>
</a>

<a href="../html/champion/thresh.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Thresh.png" alt="">
    <p class="f-title">Thresh</p>
</a>

<a href="../html/champion/tf.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/TwistedFate.png" alt="">
    <p class="f-title">Twisted Fate</p>
</a>

<a href="../html/champion/vayne.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Vayne.png" alt="">
    <p class="f-title">Vayne</p>
</a>

<a href="../html/champion/veigar.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Veigar.png" alt="">
    <p class="f-title">Veigar</p>
</a>

<a href="../html/champion/vi.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Vi.png" alt="">
    <p class="f-title">Vi</p>
</a>

<a href="../html/champion/warwich.html" style="text-decoration: none;">
    <img class="characters-items coin-4" src="../image/champions/Warwick.png" alt="">
    <p class="f-title">Warwick</p>
</a>

<a href="../html/champion/wukong.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Wukong.png" alt="">
    <p class="f-title">Wukong</p>
</a>

<a href="../html/champion/xinzhao.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/XinZhao.png" alt="">
    <p class="f-title">Xin Zhao</p>
</a>

<a href="../html/champion/yasuo.html" style="text-decoration: none;">
    <img class="characters-items coin-1" src="../image/champions/Yasuo.png" alt="">
    <p class="f-title">Yasuo</p>
</a>

<a href="../html/champion/yone.html" style="text-decoration: none;">
    <img class="characters-items coin-5" src="../image/champions/Yone.png" alt="">
    <p class="f-title">Yone</p>
</a>

<a href="../html/champion/yummi.html" style="text-decoration: none;">
    <img class="characters-items coin-3" src="../image/champions/Yuumi.png" alt="">
    <p class="f-title">Yuumi</p>
</a>

<a href="../html/champion/zed.html" style="text-decoration: none;">
    <img class="characters-items coin-2" src="../image/champions/Zed.png" alt="">
    <p class="f-title">Zed</p>
</a>

<a href="../html/champion/zilean.html" style="text-decoration: none;">
    <img class="characters-items coin-5" src="../image/champions/Zilean.png" alt="">
    <p class="f-title">Zilean</p>
</a>
    `,
    Cultist:`
    <a href="../html/champion/aatrox.html" style="text-decoration: none;" id='aatrox'>
        <img class="characters-items coin-4 " src="../image/champions/Aatrox.png" alt="">
        <p class="f-title">Aatrox</p>
    </a>
    <a href="../html/champion/elise.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Elise.png" alt="">
        <p class="f-title">Elise</p>
    </a>,
    <a  href="" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Evelynn.png" alt="">
        <p class="f-title">Evelynn</p>
    </a>,
    <a href="../html/champion/jhin.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Jhin.png" alt="">
        <p class="f-title">Jhin</p>
    </a>,
    <a href="../html/champion/kalista.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kalista.png" alt="">
        <p class="f-title">Kalista</p>
    </a>,
    <a href="../html/champion/pyke.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Pyke.png" alt="">
        <p class="f-title">Pyke</p>
    </a>,
    <a href="../html/champion/tf.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/TwistedFate.png" alt="">
        <p class="f-title">Twisted Fate</p>
    </a>,
    <a href="../html/champion/zilean.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Zilean.png" alt="">
        <p class="f-title">Zilean</p>
    </a>,

    `,
    Divine:`
    <a href="../html/champion/irelia.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Irelia.png" alt="">
        <p class="f-title">Irelia</p>
    </a>,
    <a href="../html/champion/jax.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Jax.png" alt="">
        <p class="f-title">Jax</p>
    </a>,
    <a  href="../html/champion/leesin.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/LeeSin.png" alt="">
        <p class="f-title">Lee Sin</p>
    </a>,
    <a href="../html/champion/lux.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Lux.png" alt="">
        <p class="f-title">Lux</p>
    </a>,
    <a href="../html/champion/warwich.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Warwick.png" alt="">
        <p class="f-title">Warwick</p>
    </a>,
    <a href="../html/champion/wukong.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Wukong.png" alt="">
        <p class="f-title">Wukong</p>
    </a>
    `,
    Dusk:`
    <a href="../html/champion/cassiopeia.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Cassiopeia.png" alt="">
        <p class="f-title">Cassiopeia</p>
    </a>,
    <a  href="../html/champion/lillia.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Lillia.png" alt="">
        <p class="f-title">Lillia</p>
    </a>,
    <a href="../html/champion/riven.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Riven.png" alt="">
        <p class="f-title">Riven</p>
    </a>,
    <a href="../html/champion/thresh.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Thresh.png" alt="">
        <p class="f-title">Thresh</p>
    </a>,
    <a href="../html/champion/vayne.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Vayne.png" alt="">
        <p class="f-title">Vayne</p>
    </a>,
    `,
    Elderwood:`
    <a href="../html/champion/ashe.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Ashe.png" alt="">
        <p class="f-title">Ashe</p>
    </a>,
    <a href="../html/champion/ezreal.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Ezreal.png" alt="">
        <p class="f-title">Ezreal</p>
    </a>,
    <a href="../html/champion/hecarim.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Hecarim.png" alt="">
        <p class="f-title">Hecarim</p>
    </a>,
    <a  href="../html/champion/lulu.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Lulu.png" alt="">
        <p class="f-title">Lulu</p>
    </a>,
    <a href="../html/champion/maokai.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Maokai.png" alt="">
        <p class="f-title">Maokai</p>
    </a>,
    <a href="../html/champion/nunu.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Nunu.png" alt="">
        <p class="f-title">Nunu</p>
    </a>,
    <a href="../html/champion/veigar.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Veigar.png" alt="">
        <p class="f-title">Veigar</p>
    </a>,
    `,
    Enlightened:`
    <a href="../html/champion/fiora.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Fiora.png" alt="">
        <p class="f-title">Fiora</p>
    </a>,
    <a href="../html/champion/irelia.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Irelia.png" alt="">
        <p class="f-title">Irelia</p>
    </a>,
    <a href="../html/champion/janna.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Janna.png" alt="">
        <p class="f-title">Janna</p>
    </a>,
    <a  href="../html/champion/morgana.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Morgana.png" alt="">
        <p class="f-title">Morgana</p>
    </a>,
    <a href="../html/champion/nami.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Nami.png" alt="">
        <p class="f-title">Nami</p>
    </a>,
    <a href="../html/champion/talon.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Talon.png" alt="">
        <p class="f-title">Talon</p>
    </a>
    `,
    Exile:`
    <a href="../html/champion/yasuo.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Yasuo.png" alt="">
        <p class="f-title">Yasuo</p>
    </a>,
    <a  href="../html/champion/yone.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Yone.png" alt="">
        <p class="f-title">Yone</p>
    </a>
    `,
    Fortune:`
    <a href="../html/champion/annie.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Annie.png" alt="">
        <p class="f-title">Annie</p>
    </a>,
    <a href="../html/champion/jinx.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Jinx.png" alt="">
        <p class="f-title">Jinx</p>
    </a>,
    <a href="../html/champion/katarina.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Katarina.png" alt="">
        <p class="f-title">Katarina</p>
    </a>,
    <a href="../html/champion/sejuani.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Sejuani.png" alt="">
        <p class="f-title">Sejuani</p>
    </a>,
    <a href="../html/champion/tahmkench.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/TahmKench.png" alt="">
        <p class="f-title">Tahm Kench</p>
    </a>
    `,
    Moonlight:`
    <a href="../html/champion/aphelios.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Aphelios.png" alt="">
        <p class="f-title">Aphelios</p>
    </a>,
    <a href="../html/champion/diana.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Diana.png" alt="">
        <p class="f-title">Diana</p>
    </a>,
    <a href="../html/champion/lissandra.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Lissandra.png" alt="">
        <p class="f-title">Lissandra</p>
    </a>,
    <a href="../html/champion/sylas.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Sylas.png" alt="">
        <p class="f-title">Sylas</p>
    </a>
    `,
    Ninja:`
    <a href="../html/champion/akali.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Akali.png" alt="">
        <p class="f-title">Akali</p>
    </a>,
    <a href="../html/champion/kennen.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kennen.png" alt="">
        <p class="f-title">Kennen</p>
    </a>,
    <a href="../html/champion/shen.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Shen.png" alt="">
        <p class="f-title">Shen</p>
    </a>,
    <a href="../html/champion/zed.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Zed.png" alt="">
        <p class="f-title">Zed</p>
    </a>
    `,
    Spirit:`
    <a href="../html/champion/ahri.html" style="text-decoration: none;">
        <img class="characters-items coin-4 spirit mage" src="../image/champions/Ahri.png" alt="">
        <p class="f-title">Ahri</p>
    </a>
    <a href="../html/champion/kindred.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kindred.png" alt="">
        <p class="f-title">Kindred</p>
    </a>,
    <a href="../html/champion/teemo.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Teemo.png" alt="">
        <p class="f-title">Teemo</p>
    </a>,
    <a href="../html/champion/yummi.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Yuumi.png" alt="">
        <p class="f-title">Yuumi</p>
    </a>
    `,
    TheBoss:`
    <a href="../html/champion/sett.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Sett.png" alt="">
        <p class="f-title">Sett</p>
    </a>
    `,
    Tormented:`
    <a href="../html/champion/kayn.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Kayn.png" alt="">
        <p class="f-title">Kayn</p>
    </a>
    `,
    Warlord:`
    <a href="../html/champion/azir.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Azir.png" alt="">
        <p class="f-title">Azir</p>
    </a>,
    <a href="../html/champion/garen.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Garen.png" alt="">
        <p class="f-title">Garen</p>
    </a>,
    <a href="../html/champion/JarvanIV.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/JarvanIV.png" alt="">
        <p class="f-title">Jarvan IV</p>
    </a>,
    <a href="../html/champion/katarina.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Katarina.png" alt="">
        <p class="f-title">Katarina</p>
    </a>,
    <a href="../html/champion/nidalee.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Nidalee.png" alt="">
        <p class="f-title">Nidalee</p>
    </a>,
    <a href="../html/champion/vi.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Vi.png" alt="">
        <p class="f-title">Vi</p>
    </a>,
    <a href="../html/champion/xinzhao.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/XinZhao.png" alt="">
        <p class="f-title">Xin Zhao</p>
    </a>
    `,
    Adept:`
    <a href="../html/champion/irelia.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Irelia.png" alt="">
        <p class="f-title">Irelia</p>
    </a>,
    <a href="../html/champion/shen.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Shen.png" alt="">
        <p class="f-title">Shen</p>
    </a>,
    <a href="../html/champion/yone.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Yone.png" alt="">
        <p class="f-title">Yone</p>
    </a>,

    `,
    Assasin:`
    <a href="../html/champion/akali.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Akali.png" alt="">
        <p class="f-title">Akali</p>
    </a>,
    <a href="../html/champion/diana.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Diana.png" alt="">
        <p class="f-title">Diana</p>
    </a>,
    <a href="../html/champion/katarina.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Katarina.png" alt="">
        <p class="f-title">Katarina</p>
    </a>,
    <a href="../html/champion/pyke.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Pyke.png" alt="">
        <p class="f-title">Pyke</p>
    </a>,
    <a href="../html/champion/talon.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Talon.png" alt="">
        <p class="f-title">Talon</p>
    </a>
    `,
    Brawler:`
    <a href="../html/champion/maokai.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Maokai.png" alt="">
        <p class="f-title">Maokai</p>
    </a>,
    <a href="../html/champion/nunu.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Nunu.png" alt="">
        <p class="f-title">Nunu</p>
    </a>,
    <a href="../html/champion/sett.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Sett.png" alt="">
        <p class="f-title">Sett</p>
    </a>,
    <a href="../html/champion/sylas.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Sylas.png" alt="">
        <p class="f-title">Sylas</p>
    </a>,
    <a href="../html/champion/tahmkench.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/TahmKench.png" alt="">
        <p class="f-title">Tahm Kench</p>
    </a>,
    <a href="../html/champion/vi.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Vi.png" alt="">
        <p class="f-title">Vi</p>
    </a>,
    <a href="../html/champion/warwich.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Warwick.png" alt="">
        <p class="f-title">Warwick</p>
    </a>
    `,
    Dazzler:`
    <a href="../html/champion/ezreal.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Ezreal.png" alt="">
        <p class="f-title">Ezreal</p>
    </a>,
    <a href="../html/champion/lissandra.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Lissandra.png" alt="">
        <p class="f-title">Lissandra</p>
    </a>,
    <a href="../html/champion/lux.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Lux.png" alt="">
        <p class="f-title">Lux</p>
    </a>,
    <a href="../html/champion/morgana.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Morgana.png" alt="">
        <p class="f-title">Morgana</p>
    </a>
    `,
    Duelist:`
    <a href="../html/champion/fiora.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Fiora.png" alt="">
        <p class="f-title">Fiora</p>
    </a>,
    <a href="../html/champion/jax.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Jax.png" alt="">
        <p class="f-title">Jax</p>
    </a>,
    <a href="../html/champion/kalista.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kalista.png" alt="">
        <p class="f-title">Kalista</p>
    </a>,
    <a href="../html/champion/leesin.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/LeeSin.png" alt="">
        <p class="f-title">Lee Sin</p>
    </a>,
    <a href="../html/champion/xinzhao.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/XinZhao.png" alt="">
        <p class="f-title">Xin Zhao</p>
    </a>,
    <a href="../html/champion/yasuo.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Yasuo.png" alt="">
        <p class="f-title">Yasuo</p>
    </a>
    `,
    Emperor:`
    <a href="../html/champion/azir.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Azir.png" alt="">
        <p class="f-title">Azir</p>
    </a>
    `,
    Hunter:`
    <a href="../html/champion/aphelios.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Aphelios.png" alt="">
        <p class="f-title">Aphelios</p>
    </a>,
    <a href="../html/champion/ashe.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Ashe.png" alt="">
        <p class="f-title">Ashe</p>
    </a>,
    <a href="../html/champion/kindred.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kindred.png" alt="">
        <p class="f-title">Kindred</p>
    </a>,
    <a href="" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Warwick.png" alt="">
        <p class="f-title">Warwick</p>
    </a>,
    `,
    Keeper:`
    <a href="../html/champion/azir.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Azir.png" alt="">
        <p class="f-title">Azir</p>
    </a>,
    <a href="../html/champion/elise.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Elise.png" alt="">
        <p class="f-title">Elise</p>
    </a>,
    <a href="../html/champion/JarvanIV.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/JarvanIV.png" alt="">
        <p class="f-title">Jarvan IV</p>
    </a>,
    <a href="../html/champion/kennen.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Kennen.png" alt="">
        <p class="f-title">Kennen</p>
    </a>,
    <a href="../html/champion/riven.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Riven.png" alt="">
        <p class="f-title">Riven</p>
    </a>
    `,
    Mage:`
    <a href="../html/champion/ahri.html" style="text-decoration: none;">
        <img class="characters-items coin-4 spirit mage" src="../image/champions/Ahri.png" alt="">
        <p class="f-title">Ahri</p>
    </a>
    <a href="../html/champion/annie.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Annie.png" alt="">
        <p class="f-title">Annie</p>
    </a>,
    <a href="../html/champion/lillia.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Lillia.png" alt="">
        <p class="f-title">Lillia</p>
    </a>,
    <a href="../html/champion/lulu.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Lulu.png" alt="">
        <p class="f-title">Lulu</p>
    </a>,
    <a href="../html/champion/nami.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Nami.png" alt="">
        <p class="f-title">Nami</p>
    </a>,
    <a href="../html/champion/tf.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/TwistedFate.png" alt="">
        <p class="f-title">Twisted Fate</p>
    </a>,
    <a href="../html/champion/veigar.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Veigar.png" alt="">
        <p class="f-title">Veigar</p>
    </a>
    `,
    Mystic:`
    <a href="../html/champion/cassiopeia.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Cassiopeia.png" alt="">
        <p class="f-title">Cassiopeia</p>
    </a>,
    <a href="../html/champion/janna.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Janna.png" alt="">
        <p class="f-title">Janna</p>
    </a>,
    <a href="../html/champion/shen.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Shen.png" alt="">
        <p class="f-title">Shen</p>
    </a>,
    <a href="../html/champion/yummi.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Yuumi.png" alt="">
        <p class="f-title">Yuumi</p>
    </a>,
    <a href="../html/champion/zilean.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Zilean.png" alt="">
        <p class="f-title">Zilean</p>
    </a>
    `,
    Shade:`
    <a href="" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Evelynn.png" alt="">
        <p class="f-title">Evelynn</p>
    </a>,
    <a href="../html/champion/kayn.html" style="text-decoration: none;">
        <img class="characters-items coin-5" src="../image/champions/Kayn.png" alt="">
        <p class="f-title">Kayn</p>
    </a>,
    <a href="../html/champion/zed.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Zed.png" alt="">
        <p class="f-title">Zed</p>
    </a>,
    `,
    Sharpshooter:`
    <a href="../html/champion/jinx.html" style="text-decoration: none;">
        <img class="characters-items coin-3" src="../image/champions/Jinx.png" alt="">
        <p class="f-title">Jinx</p>
    </a>,
    <a href="../html/champion/jhin.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Jhin.png" alt="">
        <p class="f-title">Jhin</p>
    </a>,
    <a href="../html/champion/nidalee.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Nidalee.png" alt="">
        <p class="f-title">Nidalee</p>
    </a>,
    <a href="../html/champion/teemo.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Teemo.png" alt="">
        <p class="f-title">Teemo</p>
    </a>,
    <a href="../html/champion/vayne.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Vayne.png" alt="">
        <p class="f-title">Vayne</p>
    </a>
    `,
    Vanguard:`
    <a href="" style="text-decoration: none;" id='aatrox'>
        <img class="characters-items coin-4 " src="../image/champions/Aatrox.png" alt="">
        <p class="f-title">Aatrox</p>
    </a>,
    <a href="../html/champion/garen.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Garen.png" alt="">
        <p class="f-title">Garen</p>
    </a>,
    <a href="../html/champion/hecarim.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Hecarim.png" alt="">
        <p class="f-title">Hecarim</p>
    </a>,
    <a href="../html/champion/sejuani.html" style="text-decoration: none;">
        <img class="characters-items coin-4" src="../image/champions/Sejuani.png" alt="">
        <p class="f-title">Sejuani</p>
    </a>,
    <a href="../html/champion/thresh.html" style="text-decoration: none;">
        <img class="characters-items coin-2" src="../image/champions/Thresh.png" alt="">
        <p class="f-title">Thresh</p>
    </a>,
    <a href="../html/champion/wukong.html" style="text-decoration: none;">
        <img class="characters-items coin-1" src="../image/champions/Wukong.png" alt="">
        <p class="f-title">Wukong</p>
    </a>
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