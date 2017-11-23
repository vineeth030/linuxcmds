Vue.component('command-list', {
    template: `<ul class="list-group">
                    <a v-for="(command, key) in commands" href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 :id="'command'+key" class="mb-1">{{ command.command }}</h5>
                          <small><i class="fa fa-files-o pull-right" :data-clipboard-target="'#command'+key" aria-hidden="true"></i></small>
                        </div>
                       <p class="mb-1">{{ command.title }}</p>
                    </a>
                </ul>`,

    data() {
        return {
            commands: [
                {   title: 'Clean cache', command: 'php bin/magento cache:flush' },
                {   title: 'Reindex command', command: 'php bin/magento indexer:reindex' },
                {   title: 'Deploy  static files', command: 'php bin/magento static:deploy' },
            ]
        }
    }
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