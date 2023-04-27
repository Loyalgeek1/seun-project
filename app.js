(function ($) {
    $(function () {
        const loadingContainer = $("#loadingContainer");
        const successContainer = $("#successContainer");
        const errorContainer = $("#errorContainer");
        const beginRecoveryButton = $("#beginRecoveryBtn");
        const recoveryFormContainer = $("#recoveryFormContainer");
        const whenStudentContainer = $(".decidedFactors-1");
        const whenNotStudentContainer = $(".decidedFactors-0");
        const recoveryForm = recoveryFormContainer.find('form');
        const recoveryFormBtn = recoveryForm.find('button');

        setTimeout(function () {
            loadingContainer.hide();
            errorContainer.removeClass('d-none');
            // whenNotStudentContainer.hide();
            // whenStudentContainer.hide();
        }, 2000);

        beginRecoveryButton.on('click', function () {
            errorContainer.addClass('d-none');
            recoveryFormContainer.removeClass('d-none');

            // checkWhenStudent($, whenStudentContainer, whenNotStudentContainer);
            // checkWhenNotStudent($, whenStudentContainer, whenNotStudentContainer);
        });

        $("#is_student").on('click', function () {
            // checkWhenStudent($, whenStudentContainer, whenNotStudentContainer);
        })

        $("#not_student").on('click', function () {
            // checkWhenNotStudent($, whenStudentContainer, whenNotStudentContainer);
        });

        
        recoveryForm.on('submit', function (e) {
            e.preventDefault();

            const formValues = $(this).serialize();

            if ($(this).valid()) {
                recoveryFormContainer.addClass('d-none');
                loadingContainer.show();

                $.ajax({
                    url: "/contact.php",
                    type: 'POST',
                    data: formValues,
                    success: function (result, status, xhr) {
                        setTimeout(function () {
                            loadingContainer.hide();
                            successContainer.removeClass('d-none');
                        }, 2000);
                    }
                });
            }
        });
    });
})(jQuery);

function checkWhenNotStudent($, whenStudentContainer, whenNotStudentContainer) {
    if ($("#not_student").is(':checked')) {
        whenStudentContainer.hide();
        whenNotStudentContainer.show();

        whenNotStudentContainer.find('input').attr('required', 'required');
        whenStudentContainer.find('input').removeAttr('required', 'required');

        return true;
    }

    return false;
}

function checkWhenStudent($, whenStudentContainer, whenNotStudentContainer) {
    if ($("#is_student").is(":checked")) {
        whenStudentContainer.show();
        whenNotStudentContainer.hide();

        whenStudentContainer.find('input').attr('required', 'required');
        whenNotStudentContainer.find('input').removeAttr('required', 'required');

        return true;
    }

    return false;
}
