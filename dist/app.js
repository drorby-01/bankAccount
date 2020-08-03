class BankAccount {
    constructor(userAccount) {
        this._m_moneyInMyAccount = Math.floor(Math.random() * 10000);
        this._m_firstName = userAccount.m_firstName;
        this._m_lastName = userAccount.m_lastName;
        this._m_bankNumber = userAccount.m_bankNumber;
    }
    putMoneyInMyAccount(money) {
        this._m_moneyInMyAccount += money;
        return "The deposit was made successfully";
    }
    getMoneyFromMyAccount(money) {
        if (this._m_moneyInMyAccount - money < 0) {
            return "You don't have enought money in your account!!!";
        }
        else {
            this._m_moneyInMyAccount -= money;
            return "The withdrawal of the money was carried out successfully";
        }
    }
    get m_moneyInMyAccount() {
        return this._m_moneyInMyAccount;
    }
    get m_firstName() {
        return this._m_firstName;
    }
    set m_firstName(firstName) {
        this._m_firstName = firstName;
    }
    get m_lastName() {
        return this._m_lastName;
    }
    set m_lastName(lastName) {
        this._m_lastName = lastName;
    }
    get m_bankNumber() {
        return this._m_bankNumber;
    }
    set m_bankNumber(bankNumber) {
        this._m_bankNumber = bankNumber;
    }
}
