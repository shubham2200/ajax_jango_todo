// this part is save the data django get the date by ajax throw in url get the data
$('form').on('click', '#savebtn', function (evenr) {
    event.preventDefault();
    console.log('click this button');
    output = ''
    var eid = $("#empid").val();
    var nm = $('#username').val();
    var tk = $('#task').val();
    var csr = $('input[name= csrfmiddlewaretoken]').val();
    console.log(nm);
    console.log(tk);
    if (nm == '') {
        console.log('error')
    }
    if (tk == '') {
        console.log('enter the full validation task')
    }
    else {
        // console.log(nm);
        // console.log(tk);
        my_data = { empid: eid, name: nm, task: tk, csrfmiddlewaretoken: csr };
        // console.log(my_data);
        $.ajax({
            url: "/save_data/",
            method: "POST",
            data: my_data,
            success: function (data) {
                //    console.log(data)




                if (data.status == 'save') {
                    console.log('data submit successfulyy')
                    x = data.emp_data
                    //    console.log(data.emp_data)
                    for (i = 0; i < x.length; i++) {
                        $('#tbody').append(

                            `<tr>
                            <td>  ${x[i].id}  </td>
                            <td>  ${x[i].employe_name}  </td>
                            <td> ${x[i].task} </td>
                            <td>
                            <input type='button' data-eid="${x[i].id}" class='btn btn-warning btn-sm btn-edit' value='edit'> 
                            <input type='button' data-eid="${x[i].id}" class='btn btn-danger btn-sm btn-delete' value='delete'> 
    
                            </td>
    
                            </tr>`
                        )

                        $('form')[0].reset();
                    }
                    // $('#tbody').html = (output);


                }
                if (data.status == 0) {
                    console.log('you data no save try again')
                }

            }

        })

    }

});
// this part of ajax in django delete

$('tbody').on('click', '.btn-delete', function () {
    // console.log('now the delete btn has click by now')
    var id = $(this).attr('data-eid');
    var csr = $('input[name= csrfmiddlewaretoken]').val();
    var mythis = this;
    my_data = { eid: id, csrfmiddlewaretoken: csr }
    console.log(my_data)
    $.ajax({
        url: "/delete_data/",
        method: "POST",
        data: my_data,
        success: function (data) {
            if (data.status == 1) {
                console.log('this data has successfuly deleted')
                $(mythis).closest("tr").fadeOut();

            }
            else {
                console.log('your data not deleted check the code again')
            }
        }

    })
})


// this part of ajax in django edit

// $('tbody').on('click', '.btn-edit', function () {
//     console.log('now the edit btn has click by now')
//     var id = $(this).attr('data-eid');
//     var csr = $('input[name= csrfmiddlewaretoken]').val();
//     my_data = { eid: id, csrfmiddlewaretoken: csr }
//     // console.log(my_data)
//     $.ajax({
//         url: "/edit_data/",
//         method: "POST",
//         data: my_data,
//         success: function (data) {
//             console.log(data)

//             $("#empid").val(data.id);
//             $("#username").val(data.name);
//             $("#task").val(data.task);



//         }

//     })
// })


$(document).on('change', '.task_c', function () {
    var x = $(this).val();
    var y = $(this).attr("id");
    console.log(x)
    console.log(y)

    $.ajax({
        url: `/edit_data/${y}/${x}`,
        type: 'PUT',

        success: function (data) {
            console.log(data.data)
        }

    })
})
