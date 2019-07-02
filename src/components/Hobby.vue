<template>
    <div>
        <b-container class="font-weight-bold pb-5">
            <b-row class="pb-5 pt-5">
                <b-col>
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="url" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="ボードゲームあ">
                            <b-card-text>
                                カタン日本選手権2019：地区予選敗退<br><br>
                                よくやるもの<br>
                                ・カタン<br>
                                ・カルカソンヌ<br>
                                ・ドミニオン<br>
                                ・バトルライン<br>
                            </b-card-text>
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="url3" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="マジック">
                            <b-card-text>
                                初めて半年<br>
                                主にスライハンドを練習<br>
                                現在は，ギミック作りに没頭中
                            </b-card-text>
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="pb-5">
                <b-col>
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="url2" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="海外旅行">
                            <b-card-text>
                                アイスランドにいつか行くことが夢<br><br>
                                行った国<br>
                                ・カナダ<br>
                                ・アメリカ<br>
                                ・台湾<br>
                                ・タイ
                            </b-card-text>
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="url4" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="ラーメン作り">
                            <b-card-text>
                                究極の煮干しラーメンを作るべく日々奮闘中<br>
                                いつか寸胴を買ったら豚骨もやりたい
                            </b-card-text>
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
/* eslint-disable */
export default {
  data: function() {
        return {
            url : require('../../src/assets/catan.jpg'),
            url2 : require('../../src/assets/trip.jpg'),
            url3 : require('../../src/assets/magic.jpg'),
            url4 : require('../../src/assets/ramen.jpg')
        }
    }
}
</script>

<style>

</style>
