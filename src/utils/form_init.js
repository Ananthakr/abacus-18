export default function form_init(form_uname_array_obj, Fingerprint,component) {

    function create_handlers(form_uname, form_uid) {
        var form_el = document.getElementById(form_uname)
        return form_el.addEventListener('submit', function(event) {
            event.preventDefault()
            var form = document.getElementById(form_uname)
            var inputElems = []
            var inputElemsRaw = getFormInputElems(form)
            for(var i=0;i<inputElemsRaw.length;i++){
                if(inputElemsRaw[i].type !== 'submit'){
                    inputElems.push(inputElemsRaw[i])
                }
            }
            var data = []
            for (var i = 0; i < inputElems.length; i++) {
                data.push({
                    'name': inputElems[i].name,
                    'value': inputElems[i].value
                })
            }
            //console.log(inputElems)
            //console.log(data)
            var FormsubmitTime = new Date().getTime().toString()
            var FormstartTime = form.startDirtyTimestamp
            var autoFilled = false
            if (FormstartTime === undefined) {
                autoFilled = true
            }
            var uid = get_fingerprint()
            if (uid === undefined) {
                uid = 'na'
            }
            var formatted_data = {
                "form_uname": form_uname,
                "data": data,
                "form_uid": form_uid,
                "performance": window.performance,
                "auto_filled": autoFilled,
                "form_start_timestamp": FormstartTime,
                "form_submit_timestamp": FormsubmitTime,
                "version": "1.0",
                "fingerprint": uid
            }
            component.setState({loading:true});
            var ajax = new XMLHttpRequest()
            ajax.open("POST", "https://dash.cyces.co/form_cap/save")
            ajax.setRequestHeader("Content-Type", "application/json")
            ajax.setRequestHeader("X-Requested-With", "XMLHttpRequest")
            ajax.onreadystatechange = function() {
                if (ajax.readyState === 4) {
                    if (ajax.status === 201) {
                        //alert("Submitted successfully!");
                        component.handleSubmit(true);
                        return true;
                    } else {
                        console.log(ajax.responseText)
                        //alert("Error in submission");
                        component.handleSubmit(false);
                        return false;
                    }
                }
            }
            return ajax.send(JSON.stringify(formatted_data))
        })

    }

    function listenToForm(formID) {
        var formelem = document.getElementById(formID)
        var inputElems = getFormInputElems(formelem)
        listenToInputElems(inputElems)
    }

    function getFormInputElems(formelem) {
        /*var children = formelem.childNodes
        var inputs = []
        for (var i = 0; i < children.length; i++) {
            var child = children[i]
            if(child.tagName !== 'INPUT'){
                child = 
            }
            if (child.tagName === 'INPUT') {
                child.parent_form = formelem
                inputs.push(child)
            }
        }*/
        var all = []
        var inputs = document.getElementsByTagName("input")
        var selects = document.getElementsByTagName("select")
        //console.log(inputs)
        //var inputs_filtered = inputs.filter(x=>x.form===formelem)
        var textareas = document.getElementsByTagName("textarea")
        //var textareas_filtered = textareas.filter(x=>x.form===formelem)
        //console.log(inputs, textareas, inputs_filtered, textareas_filtered)
        for(var i=0;i<inputs.length;i++){
            inputs[i].parent_form = formelem
            if(inputs[i].name !== ''){
                all.push(inputs[i])
            }
        }
        for(var i=0;i<textareas.length;i++){
            textareas[i].parent_form = formelem
            all.push(textareas[i])
        }
        for(var i=0;i<selects.length;i++){
            selects[i].parent_form = formelem
            all.push(selects[i])
        }
        return all
    }

    function listenToInputElems(inputElems) {
        for (var i = 0; i < inputElems.length; i++) {
            inputElems[i].addEventListener('keyup', function(event) {
                keyup(event, event.target)
            })
        }
    }

    function keyup(event, inputElem) {
        setFormDirty(inputElem.parent_form)
    }

    function setFormDirty(formElem) {
        console.log(formElem)
        if (formElem.dirty === undefined) {
            formElem.dirty = true
            formElem.startDirtyTimestamp = new Date().getTime().toString()
            return notify_form_is_dirty(formElem)
        } else if (formElem.dirty === true) {}
    }

    function notify_form_is_dirty(formElem) {}

    function get_fingerprint() {
        return new Fingerprint().get(function(result, components) {
            return result.toString()
        })
    }

    for (var i = 0; i < form_uname_array_obj.length; i++) {
        var form_uname = form_uname_array_obj[i]['uname']
        var form_uid = form_uname_array_obj[i]['uid']
        listenToForm(form_uname)
        create_handlers(form_uname, form_uid)
    }
}