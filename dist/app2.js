const EmpteyString = "";
const input_FirstName = document.getElementById("firstName");
const input_LastName = document.getElementById("lastName");
const input_bankAccount = document.getElementById("bankAccount");
const button_model = document.getElementById("button_model");
const model = document.getElementById("staticBackdrop");
model.remove();
const domInput = { input_FirstName, input_LastName, input_bankAccount };
button_model.addEventListener("click", function () {
    if (checkFields()) {
        const userAccountArray = Object.keys(domInput).map(element => {
            return domInput[element].value;
        });
        const userAccount = new BankAccount({
            m_firstName: userAccountArray[0],
            m_lastName: userAccountArray[1],
            m_bankNumber: userAccountArray[2]
        });
        document.getElementById("container").append(model);
        AccountOption(userAccount);
    }
    else {
        model.remove();
    }
    function AccountOption(user) {
        const modalBody = document.getElementById("modal-body");
        const modalTitle = document.getElementById("staticBackdropLabel");
        modalTitle.innerText = `welcome ${user.m_firstName} ${user.m_lastName}`;
        const r_seeMoney = document.getElementById("radioSeeMoney");
        const r_takeMoney = document.getElementById("radioTakeMoney");
        const r_putMoney = document.getElementById("radioPutMoney");
        const drawMoney = document.getElementById("drawElement");
        r_seeMoney.addEventListener("change", seeMoneyInTheAccount);
        r_takeMoney.addEventListener("change", function () {
            accountAction(true);
        });
        r_putMoney.addEventListener("change", function () {
            accountAction(false);
        });
        function seeMoneyInTheAccount() {
            drawMoney.innerHTML = "";
            drawMoney.innerHTML = `Hay ${user.m_firstName} ${user.m_lastName} you Have in your account ${user.m_moneyInMyAccount}`;
        }
        function accountAction(getMoney) {
            drawMoney.innerHTML = "";
            const input = document.createElement("input");
            input.setAttribute("type", "number");
            input.value = "0";
            input.classList.add("form-control");
            const button = document.createElement("button");
            button.innerText = "Press me";
            button.classList.add("btn", "btn-primary");
            button.addEventListener("click", function () {
                if (getMoney) {
                    drawMoney.innerText = user.getMoneyFromMyAccount(+input.value);
                }
                else {
                    drawMoney.innerText = user.putMoneyInMyAccount(+input.value);
                }
            });
            drawMoney.append(input, button);
        }
    }
});
function checkFields() {
    let flag = true;
    Object.keys(domInput).forEach(element => {
        if (domInput[element].value === EmpteyString) {
            flag = false;
        }
    });
    return flag;
}
