document.addEventListener('DOMContentLoaded', function() {

    let draggedElement;

    // Add event listeners to draggable elements
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', function(event) {
            draggedElement = event.target;
        });
    });

    // Add event listeners to droppable elements
    const droppables = document.querySelectorAll('.droppable');
    droppables.forEach((droppable) => {
        droppable.addEventListener('dragover', function(event) {
            event.preventDefault();
        });
        
        droppable.addEventListener('drop', function(event) {
            if (draggedElement.textContent.trim() === event.target.textContent.trim()) {
                event.target.style.display = 'none';
                draggedElement.style.display = 'none';
            }
        });
    });
});

