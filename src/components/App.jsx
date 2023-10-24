import React from "react";
import { useDispatch } from "react-redux";
import { submit } from "./ContactForm/submit";
import { deleteContact, logIn, logout, signUp, userLocalStorage } from "api/api";
import { changeFilter } from "redux/slices/filterSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const RegisterForm = lazy(() => import("./RegisterForm/RegisterForm"));
const LoginForm = lazy(() => import("./LoginForm/LoginForm"));
const Contacts = lazy(() => import("./Contacts/Contacts"));
const Navigation = lazy(() => import("./Navigation/Navigation"));

export const App = () => {
const contacts = useSelector(state => state.contacts.items)
const filter = useSelector(state => state.filter)
const userEmail = useSelector(state => state.auth.user.email)
const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
const isRefreshing = useSelector(state => state.auth.isRefreshing)    
const userName = useSelector(state => state.auth.user.name)
const authError = useSelector(state => state.auth.error)
const dispatch = useDispatch();
const navigate = useNavigate()
useEffect(() => {
   dispatch(userLocalStorage())
}, [dispatch])

const onSubmitContact = evt => {
    evt.preventDefault()
    submit(evt, dispatch, contacts)
}
const onChangeInput = evt => {
    dispatch(changeFilter(evt.target.value))
}
const filterByName = () => {
     return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()))      
}
const deletingContact = evt => {
    dispatch(deleteContact(evt.target.id))
}

const onSignUp = async (evt) => {
    evt.preventDefault()
    const obj = {name: evt.currentTarget[0].value, email: evt.currentTarget[1].value, password: evt.currentTarget[2].value}
    const formReset = () => {
        evt.target[0].value = ""
        evt.target[1].value = ""
        evt.target[2].value = ""
    }
    
      await dispatch(signUp(obj))  
     
     if (authError) {
        return 
     } else {
         await formReset()   
     navigate("/contacts", { replace: true })   
     }
        
    
}
const onLogin = async (evt) => {
    evt.preventDefault()
    const obj = {email: evt.target[0].value, password: evt.target[1].value}
    const formReset = () => {
        evt.target[0].value = ""
        evt.target[1].value = ""
    }
    await dispatch(logIn(obj))
    await formReset()
    navigate("/contacts", { replace: true })
}
const onLogout = async () => {
    await dispatch(logout())
    navigate("/", { replace: true })

}
    return isRefreshing ? (<div>Loading</div>) : (
<Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path="/register" element={<RegisterForm onSignUp={onSignUp} isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element={<LoginForm onLogin={onLogin} isLoggedIn={isLoggedIn}/>} />
        <Route path="/contacts" element={<Contacts onSubmitContact={onSubmitContact} onChangeInput={onChangeInput} contacts={contacts} filter={filter} filterByName={filterByName} deletingContact={deletingContact} userEmail={userEmail} onLogout={onLogout} isLoggedIn={isLoggedIn}/>}/>
        <Route path="/" element={<Navigation isLoggedIn={isLoggedIn} userName={userName}/>}/>
        <Route path="*" element={<div>there are no page with this url</div>} />
    </Routes>
</Suspense>
    )
};

