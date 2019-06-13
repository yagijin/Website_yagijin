<template>
    <div>
        <b-container class="font-weight-bold pb-5">
            <b-row>
                <b-media left-align vertical-align="center" class="pt-5 pb-5" >
                    <b-img src="../assets/brain4.png" slot="aside" round fluid alt="brain" style="max-height:200px; max-width: 200px;"></b-img>
                        <h2 class="pl-5 pt-3" >研究テーマ：ブレインコンピュータインターフェース</h2>
                        <p class="pl-5 pt-3">
                        生体情報を処理する研究室に在籍しています．<br>
                        研究分野は，ブレインコンピュータインターフェース（BCI）です．<br>
                        BCIは，脳波を用いたインターフェースで，これを使用すると脳波のみでキーボードやロボットなどの操作をすることができます．
                        この技術は，ALSの患者などのしゃべることもできないような重度の運動障害の患者にコニュニケーションを取る手段を提供します．
                        将来的には，そういった方々に使ってもらいたいと思ったため，安価で携帯型のBCIを作成することを目的に研究をしています．<br>
                        現在取り組んでいる内容としては，BCIとしての精度とコマンド数をあげるために，脳波の解析の方法についての提案や検証をしています．
                        </p>
                </b-media>
            </b-row>
            <b-row class="pb-5">
                <p>
                    以下の図は，SSVEPという脳波成分を用いて作成されるBCIの概要です．
                    SSVEPは，一定の周波数で点滅する刺激を注視した際に，刺激の点滅周波数に同調して現れる脳波成分です．
                    異なる点滅周波数の刺激を複数用意して，被験者に任意の刺激を注視してもらうことを考えると，脳波成分を観察すれば被験者がどの刺激を注視しているかがわかります．
                    この仕組みを利用すると以下の図のように，BCIが構築できます．
                </p>
                <b-img center src="../assets/ssvep.png" alt="ssvep" fluid style="max-height: 200px;"></b-img>
            </b-row>
            <b-row>
                <b-col>
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img src="https://avatars0.githubusercontent.com/u/6003329?s=200&v=4" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="OpenBCIチュートリアル">
                            <b-card-text>
                                日本語版のOpenBCIのチュートリアルがなかったので英語版を参考に作成しました．
                            </b-card-text>
                            <b-button block variant="secondary" href="https://openbci-tutorial.netlify.com/">Go Website</b-button>
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Oddball Stimulus">
                            <b-card-text>
                                Oddball課題用の実験刺激を提示すると同時にLSLで時間同期をとるプログラム
                            </b-card-text>
                            <b-button block variant="secondary" href="https://github.com/yagijin/Oddball_P300">Go Website</b-button>
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

</script>

<style>

</style>
