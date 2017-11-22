Vue.component('command-list', {
    template: '<ul class="list-group"><command v-for="command in commands">{{ command.command }}</command></ul>',

    data() {
        return {
            commands: [
                {   command: 'Aasdas asdasd', complete: true },
                {   command: 'Basdasd asdasd', complete: false },
                {   command: 'Casdasd asd asdasd', complete: true },
            ]
        }
    }
});

Vue.component('command', {
    template: '<li class="list-group-item name" id="foo"><slot></slot><i class="fa fa-files-o pull-right" data-clipboard-target="#foo" aria-hidden="true"></i></li>'
});

var app = new Vue({
    el: '#app',
    data:{
        message: 'hello vue'
    } 
})

var clipboard = new Clipboard('.fa-files-o');
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});

/*
var options = {
  valueNames: [ 'name', 'born' ]
};
var userList = new List('users', options);
*/