var dataTable;

$(document).ready(function () {
    var url = window.location.search;
    if (url.includes("pending")) {
        LoadDataTable("pending");
    } else if (url.includes("approved")) {
        LoadDataTable("approved");
    } else if (url.includes("inprocess")) {
        LoadDataTable("inprocess");
    } else if (url.includes("completed")) {
        LoadDataTable("completed");
    } else {
        LoadDataTable("all");
    }
});

function LoadDataTable(status) {
    dataTable = $('#tbLoadData').DataTable({
        "ajax": {
            "url": "/Admin/Order/GetAll?status=" + status
        },
        "columns": [
            { "data": "id", "width": "5%" },
            { "data": "name", "width": "25%" },
            { "data": "phoneNumber", "width": "15%" },
            { "data": "applicationUser.email", "width": "15%" },
            { "data": "orderStatus", "width": "15%" },
            { "data": "orderTotal", "width": "15%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                    <td class="text-center" width="10%">
                    <div class="w-75 btn-group" role="group">
                        <a href="/Admin/Order/Details?orderId=${data}" class="btn btn-primary mx-2">
                            <i class="bi bi-pencil-square"></i>
                        </a>
                    </div>
                    </td>
                    `
                }, "width": "5%"
            },

        ]
    });
}
