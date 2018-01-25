Vue.filter('delimiter', function (value) {
    return value.toLocaleString();
});
Vue.component('my-component', {
    template: `
            <div class="[ form-group ]" style="padding:5px;">
            <input type="checkbox" name="aha" :id="label" autocomplete="off" v-model:checked="checked" />
            <div class="[ btn-group ]">
                <label :for="label" class="[ btn btn-default ]">
                    <span class="[ glyphicon glyphicon-ok ]"></span>
                    <span> </span>
                </label>
                <label :for="label" class="[ btn btn-default active ]">
                    {{label}}{{checked}}
                </label>
            </div>
        </div>`,

    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        label: String,
        checked: Boolean
    }
});

const app = new Vue({
    el: '#app',
    data: {
        hp: 27000,
        checked_atk : true,
        checked_selfdamage_per : true,
        checked_enemydamage_per : true,

        list: [
            {
                name: "モルジアナ",
                atk: 1138,
                selfdamage_per: 14,
                enemydamage_per: 125
            },
            {
                name: "バステト",
                atk: 1056,
                selfdamage_per: 10,
                enemydamage_per: 150
            },
            {
                name: "ユルグ",
                atk: 1029,
                selfdamage_per: 12,
                enemydamage_per: 125
            },
            {
                name: "マニアレ",
                atk: 1285,
                selfdamage_per: 7,
                enemydamage_per: 150
            }
        ]
    },
    computed: {},

    methods: {
        selfdamage: function (ret) {
            return Math.round(this.hp * ret.selfdamage_per / 100)
        },
        enemydamage: function (ret) {
            return Math.round(this.hp * ret.selfdamage_per * ret.enemydamage_per / 10000)
        },
        totaldamage: function (ret) {
            return this.enemydamage(ret) + ret.atk;
        },
        resultdamage: function (ret, ratio) {
            return Math.round(this.enemydamage(ret)) + Math.round(ret.atk * ratio);
        }
    }
})