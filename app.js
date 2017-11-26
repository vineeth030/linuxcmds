Vue.component('command-list', {
    data() {
        return {
            commands: [
                {   title: 'Clean cache', command: 'php bin/magento cache:flush' },
                {   title: 'Reindex command', command: 'php bin/magento indexer:reindex' },
                {   title: 'Deploy  static files', command: 'php bin/magento static:deploy' },
            ]
        }
    },
    props: ['myQuery'],
    computed: {
        computedCommands : function() {
            var self = this;
            commands = this.commands.filter(function(command){
                return command.title.trim().toLowerCase().indexOf(self.myQuery.trim().toLowerCase()) !== -1;
            });

            return commands;
        }
    },
    template: `<ul class="list-group">
                    <a v-for="(command, key) in computedCommands" href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 :id="'command'+key" class="mb-1">{{ command.command }}</h5>
                          <small><i class="fa fa-files-o pull-right" :data-clipboard-target="'#command'+key" aria-hidden="true"></i></small>
                        </div>
                       <p name="name" class="mb-1">{{ command.title }} </p>
                    </a>
                </ul>`
});



var app = new Vue({
    el: '#app',
    data:{
        message: 'hello vue',
        parentQuery: ''
    } 
})

var clipboard = new Clipboard('.fa-files-o');
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});
