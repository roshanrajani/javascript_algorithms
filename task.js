(function () {
    var task = [
        { "id": 1, "depends": [2, 3] },
        { "id": 2, "depends": [] },
        { "id": 3, "depends": [2, 4] },
        { "id": 4, "depends": [] }
    ];

    var runTask = function (task_arr) {
        var task_obj = {},
            len = task_arr.length;
        for (var i = 0; i < len; i++) {
            task_obj[task[i].id] = task[i];
        }
        var processed = {};
        var processTask = function(task_params) {
            var subTask = task_params.depends,
                subTaskLen = subTask.length;
            if(subTaskLen > 0) {
                var inprocess = false;
                for(var i=0; i<subTaskLen; i++) {
                    if(!processed[subTask[i]]) {
                        processTask({
                            'id' : subTask[i],
                            depends : task_obj[subTask[i]].depends
                        });
                    }
                }
                if(!inprocess && !processed[task_params.id]) {
                    console.log('Task '+task_params.id+' completed!!!');
                }
                processed[task_params.id] = true;
            } else {
                if(!processed[task_params.id]) {
                    console.log('Task '+task_params.id+' completed!!!');
                }
                processed[task_params.id] = true;
            }
        }

        for(key in task_obj) {
            processTask(task_obj[key]);
        }

    }

    runTask(task);

})();