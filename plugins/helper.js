import Vue from 'vue'
let is_num = require('locutus/php/var/is_numeric');
var _slug = require('slug');
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

// ClassicEditor.create( document.querySelector( '#editor' ), {
//     plugins: [ Base64UploadAdapter]
// } );

Vue.mixin({
    data() {
        return {
            CkEditor: ClassicEditor
        }
    },
	methods: {
	    humanize(str) {
            let frags = str.split('_');
            for (let i = 0; i < frags.length; i++) {
                frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
            }
            return frags.join(' ');
        },
        showErrorField(data) {
            Object.keys(data).forEach((v, k) => {
                setTimeout(() => {
                    this.$notify.error({
                        title: this.humanize(v),
                        message: data[v]
                    });
                }, 500)
            });
        },
        is_numeric(num) {
            return is_num(num);
        },
        isEmptyObj(obj) {
            return !Object.keys(obj).length;
        },
        slug(string) {
	        return _slug(string);
        },
        generateKey(string) {
	        return _slug(string) + Math.floor(Math.random() * 9999);
        },
        changeDateFormat(string) {
            //dd-mm-yyyy
            let arr = string.toString().split('-');
            //0,1,2

            if(arr.length > 2) {
                return arr[2] + '-' + arr[1] + '-' + arr[0];
            }

            return null;
        },
        changeDateTimeFormat(string) {
            let arr = string.toString().split(' ');
            if(arr.length > 0) {
                return this.changeDateFormat(arr[0]) + " " + arr[1];
            }
            return null;
        },
        numberWithCommas(x) {
            return x.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        currentDate(){
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            return date;
        }
    }
});
