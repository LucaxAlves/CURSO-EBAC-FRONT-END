$(document).ready(function() {
    // Evento de submissão do formulário
    $('#taskForm').on('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obtém o valor do input
        const taskText = $('#taskInput').val().trim();

        // Verifica se o campo não está vazio
        if (taskText) {
            // Cria um novo elemento <li> com a classe .task-item
            const taskItem = $('<li>').addClass('task-item').text(taskText);
            
            // Adiciona o item à lista
            $('#taskList').append(taskItem);

            // Limpa o campo de input
            $('#taskInput').val('');
        }
    });

    // Evento de clique para riscar a tarefa ao clicar
    $('#taskList').on('click', '.task-item', function() {
        $(this).toggleClass('completed');
    });
});
