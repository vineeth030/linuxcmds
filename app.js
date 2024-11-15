Vue.component('command-list', {
    data() {
        return {
            commands: [
                {   title: 'List files', command: 'ls -la' },
                {   title: 'Get current directory', command: 'pwd' },
                {   title: 'Search with grep', command: 'grep "search_term" filename' },
                {   title: 'Give permission/ownership to a user', command: 'chown user /path/to/folder' },
                {   title: 'Add a user to a group', command: 'sudo usermod -aG groupname username' },
                {   title: 'Update permission of a file', command: 'chmod u+rwx,g+rx,o+r filename' },
                {   title: 'Find the program path (executable)', command: 'which program' },
                {   title: 'Find the program path (binary)', command: 'where is program' },
                {   title: 'Get last n lines from a file', command: 'tail -n 10 filename' },
                {   title: 'Find running process', command: 'top' },
                {   title: 'Kill a running process', command: 'kill -9 PID' },
                {   title: 'Kill\Stop an app', command: 'pkill firefox' },
                {   title: 'Find a file', command: 'locate index.html' },
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
