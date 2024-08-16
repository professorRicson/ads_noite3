document.getElementById('telefone').addEventListener('input', function (e) {
    let telefone = e.target.value.replace(/\D/g, '');
    if (telefone.length > 11) {
        telefone = telefone.slice(0, 11);
    }
    telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefone = telefone.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = telefone;
});