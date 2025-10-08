<template>

    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">

                    <h4 class="modal-title">Adicionar Tarefa</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Título" aria-label="Username"
                            aria-describedby="basic-addon1">
                    </div>

                    <div>
                        <label for="comment">Descrição</label>
                        <textarea class="form-control coment" rows="5" id="comment" name="text"
                            style="resize: none;"></textarea>
                    </div>

                    <div class="d-flex mr-5 pt-3 mb-3">
                        <input type="color" class="form-control form-control-color" value="#CCCCCC">
                        <div class="input-group">
                            <input type="file" class="form-control" id="inputGroupFile04"
                                aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="checkbox" value=""
                                aria-label="Checkbox for following text input">
                        </div>
                        <input type="text" class="form-control" aria-label="Text input with checkbox">
                        <button type="button" class="btn btn-primary">Adicionar</button>
                    </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Salvar mudanças</button>
                </div>

            </div>
        </div>
    </div>


</template>

<script>

</script>

<style>
.coment {
    height: 90px;
}

.color {
    background-color: rgb(3, 3, 3) !important;
    padding: 50px 2px 2px 2px;
}
</style>