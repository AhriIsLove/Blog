import Swal from 'sweetalert2';
import { useEffect } from 'react';

const LoginComponent = ({ onLogin, onClose }) => {
    useEffect(() => {
        // Add style for custom confirm and cancel buttons
        const style = document.createElement('style');
        style.innerHTML = `
            .my-confirm-btn-class {
            background-color: #1976d2 !important;
            color: #fff !important;
            }
            .my-cancel-btn-class {
            background-color: #757575 !important;
            color: #fff !important;
            }
        `;
        document.head.appendChild(style);

        Swal.fire({
            title: '로그인',
            html:
            // `<input id="swal-username" class="swal2-input" placeholder="아이디" autofocus>` +
            `<input id="swal-password" class="swal2-input" placeholder="비밀번호" type="password">`,
            focusConfirm: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: '로그인',
            cancelButtonText: '취소',
            customClass: {
            confirmButton: 'my-confirm-btn-class',
            cancelButton: 'my-cancel-btn-class'
            },
            preConfirm: () => {
            // const username = document.getElementById('swal-username').value;
            // const password = document.getElementById('swal-password').value;
            // if (!username || !password) {
            //     Swal.showValidationMessage('아이디와 비밀번호를 모두 입력해주세요.');
            //     return false;
            // }
            // return { username, password };
            
            const password = document.getElementById('swal-password').value;
            if (!password) {
                Swal.showValidationMessage('비밀번호를 입력해주세요.');
                return false;
            }
            return { password };
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                // onLogin(result.value.username, result.value.password);
                onLogin(result.value.password);
            } else {
                onClose();
            }
        });
    }, [onLogin, onClose]);

    return null;
};

export default LoginComponent;
