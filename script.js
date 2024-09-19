document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;

        if (taskText !== '' && startTime !== '' && endTime !== '') {
            const li = document.createElement('li');

            const taskContent = document.createElement('div');
            taskContent.className = 'task-content';
            taskContent.textContent = taskText;

            const timeInfo = document.createElement('div');
            timeInfo.className = 'time';
            timeInfo.textContent = `Start: ${new Date(startTime).toLocaleString()} - End: ${new Date(endTime).toLocaleString()}`;

            const buttonGroup = document.createElement('div');
            buttonGroup.className = 'buttonGroup';

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.className = 'completeButton';
            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'deleteButton';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            buttonGroup.appendChild(completeButton);
            buttonGroup.appendChild(deleteButton);

            li.appendChild(taskContent);
            li.appendChild(timeInfo);
            li.appendChild(buttonGroup);
            taskList.appendChild(li);

            taskInput.value = '';
            startTimeInput.value = '';
            endTimeInput.value = '';
        } else {
            alert('Please fill in all fields');
        }
    }
});
