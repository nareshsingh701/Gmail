import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, Modal, } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import React, { useState } from 'react'

const Search = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalFrom, setModalFrom] = useState(false);
    const [modalLabels, setModalLabels] = useState(false);
    const [modalAttachment, setModalAttachment] = useState(false);
    const [modalData, setModalData] = useState(false);
    const [Name, setName] = useState(false);

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheck, setToggleCheck] = useState(false)
    const [toggleCheckname, setToggleCheckname] = useState(false)
    const [togglename, setTogglename] = useState(false)
    const [togglebox, setTogglebox] = useState(false)
    const [toggleDrafts, setToggleDrafts] = useState(false)
    const [toggleAll, setToggleAll] = useState(false)

    const [toggleHas, setToggleHas] = useState(false)
    const [toggleDocu, setToggleDocu] = useState(false)
    const [toggleSlides, setToggleSlides] = useState(false)
    const [toggleSheets, setToggleSheets] = useState(false)
    const [toggleImages, setToggleImages] = useState(false)
    const [togglePDFs, setTogglePDFs] = useState(false)
    const [toggleVideos, setToggleVideos] = useState(false)

    const [data, setData] = useState(false)
    const [than, setThan] = useState(false)
    const [older, setOlder] = useState(false)
    const [months, setMonnths] = useState(false)
    const [year, setYear] = useState(false)

    const One = () => {
        setData(true)
        setThan(false)
        setOlder(false)
        setMonnths(false)
        setYear(false)
    }
    const name = () => {
        setData(false)
        setThan(true)
        setOlder(false)
        setMonnths(false)
        setYear(false)
    }
    const From = () => {
        setData(false)
        setThan(false)
        setOlder(true)
        setMonnths(false)
        setYear(false)
    }
    const Custom = () => {
        setData(false)
        setThan(false)
        setOlder(false)
        setMonnths(true)
        setYear(false)
    }
    const Renge = () => {
        setData(false)
        setThan(false)
        setOlder(false)
        setMonnths(false)
        setYear(true)
    }
    return (
        <View style={styles.container}>
            < View style={styles.Viewone}>
                {/* <View style={styles.Viewfor}> */}
                <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                    <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                {/* </View>
                <View style={styles.Viewtow}> */}
                <TextInput
                    style={styles.Text}
                    placeholder='Search in emails'
                    placeholderTextColor="#000"
                />
                {/* </View>
                <View style={styles.Viewthree}> */}
                <TouchableOpacity onPress={() => setName(true)}>
                    <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/recorder.png')} />
                </TouchableOpacity>
                {/* </View> */}
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.View}>
                    <TouchableOpacity onPress={() => setModalLabels(true)}>
                        <View style={styles.View2}>
                            <Text style={styles.Text1}>Labels</Text>
                            <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/doun.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalFrom(true)}>
                        <View style={styles.View2}>
                            <Text style={styles.Text1}>From</Text>
                            <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/doun.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.View3}>
                            <Text style={styles.Text1}>To</Text>
                            <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/doun.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalAttachment(true)}>
                        <View style={styles.View1}>
                            <Text style={styles.Text1}>Attachment</Text>
                            <Image resizeMode={'cover'} style={styles.Image5} source={require('../../assets/images/doun.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalData(true)}>
                        <View style={styles.View2}>
                            <Text style={styles.Text1}>Date</Text>
                            <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/doun.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.View2}>
                            <Text style={styles.Text1}>Is unread</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.View4}>
                            <Text style={styles.Text1}>Exclude calendar updates</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>


            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.View5}>
                                <TouchableOpacity
                                    style={[styles.croos, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/croos.png')} />
                                </TouchableOpacity>
                                <Text style={styles.modalText}>To</Text>
                            </View>
                            <View style={styles.View6}>
                                <TextInput
                                    placeholder='Type a name or email address'
                                />
                            </View>
                            <View style={styles.View7}>
                            </View>
                            <View style={styles.View8}>
                                <Text>Suggestions</Text>
                                <TouchableOpacity onPress={() => alert('About suggested people Google suggests people based on your interactions.')}>
                                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/iii.png')} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.View9}>
                                    <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/rama.png')} />
                                    <View style={styles.View10}>
                                        <Text style={styles.Text3}>Naresh Singh</Text>
                                        <Text>nareshsingh7011111@gmail.com</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalFrom}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.View5}>
                                <TouchableOpacity
                                    style={[styles.croos, styles.buttonClose]}
                                    onPress={() => setModalFrom(!modalFrom)}
                                >
                                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/croos.png')} />
                                </TouchableOpacity>
                                <Text style={styles.modalText}>From</Text>
                            </View>
                            <View style={styles.View6}>
                                <TextInput
                                    placeholder='Type a name or email address'
                                />
                            </View>
                            <View style={styles.View7}>
                            </View>
                            <View style={styles.View8}>
                                <Text>Suggestions</Text>
                                <TouchableOpacity onPress={() => alert('About suggested people Google suggests people based on your interactions.')}>
                                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/iii.png')} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.View9}>
                                    <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/rama.png')} />
                                    <View style={styles.View10}>
                                        <Text style={styles.Text3}>Naresh Singh</Text>
                                        <Text>nareshsingh7011111@gmail.com</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalLabels}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.View5}>
                                <TouchableOpacity
                                    style={[styles.croos, styles.buttonClose]}
                                    onPress={() => setModalLabels(!modalLabels)}
                                >
                                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/croos.png')} />
                                </TouchableOpacity>
                                <Text style={styles.modalText}>Labels</Text>
                            </View>
                            <View style={styles.View7}>
                            </View>
                            <View style={styles.View11}>
                                <TextInput
                                    placeholder='Type a name or email address'
                                />
                            </View>
                            <View style={styles.View12}>
                            </View>
                            <TouchableOpacity onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/cd.png')} />
                                            <Text style={styles.Text4} >Starred</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleCheckBox}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleCheck(!toggleCheck)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/ttt.png')} />
                                            <Text style={styles.Text4} >Snoozrd</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleCheck}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleCheck(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleCheckname(!toggleCheckname)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/important.png')} />
                                            <Text style={styles.Text4} >Important</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleCheckname}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleCheckname(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setTogglename(!togglename)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/sent.png')} />
                                            <Text style={styles.Text4} >Sent</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={togglename}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setTogglename(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setTogglebox(!togglebox)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/send.png')} />
                                            <Text style={styles.Text4} >Scheduled</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={togglebox}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setTogglebox(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleDrafts(!toggleDrafts)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/exmee.png')} />
                                            <Text style={styles.Text4} >Drafts</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleDrafts}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleDrafts(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleAll(!toggleAll)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/plp.png')} />
                                            <Text style={styles.Text4} >All mail</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleAll}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleAll(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalAttachment}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.modalView}>
                            <View style={styles.View5}>
                                <TouchableOpacity
                                    style={[styles.croos, styles.buttonClose]}
                                    onPress={() => setModalAttachment(!modalAttachment)}
                                >
                                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/croos.png')} />
                                </TouchableOpacity>
                                <Text style={styles.modalText}>Labels</Text>
                            </View>
                            <View style={styles.View11}>
                            </View>
                            <View style={styles.View12}>
                            </View>
                            <TouchableOpacity onPress={() => setToggleHas(!toggleHas)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/attachment.png')} />
                                            <Text style={styles.Text4} >Has any attachment</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleHas}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleHas(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleDocu(!toggleDocu)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/document.png')} />
                                            <Text style={styles.Text4} >Documents</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleDocu}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleDocu(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleSlides(!toggleSlides)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/slides.png')} />
                                            <Text style={styles.Text4}>Slides</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleSlides}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleSlides(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleSheets(!toggleSheets)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/Sheets.png')} />
                                            <Text style={styles.Text4}>Sheets</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleSheets}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleSheets(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleImages(!toggleImages)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/ImagesName.png')} />
                                            <Text style={styles.Text4}>Images</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleImages}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleImages(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setTogglePDFs(!togglePDFs)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/pdf.png')} />
                                            <Text style={styles.Text4}>PDFs</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={togglePDFs}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setTogglePDFs(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setToggleVideos(!toggleVideos)}>
                                <View style={styles.View13}>
                                    <View style={styles.View14}>
                                        <View style={styles.View15}>
                                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/video.png')} />
                                            <Text style={styles.Text4}>Videos</Text>
                                        </View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleVideos}
                                            boxType={'square'}
                                            onCheckColor={'#fff'}
                                            onFillColor={'blue'}
                                            lineWidth={3}
                                            tintColor={'#000'}
                                            onValueChange={(newValue) => setToggleVideos(newValue)}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalData}
                >
                    <View style={styles.centeredView2}>
                        <View style={styles.modalView}>
                            <View style={styles.View5}>
                                <TouchableOpacity
                                    style={[styles.croos, styles.buttonClose]}
                                    onPress={() => setModalData(!modalData)}
                                >
                                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/croos.png')} />
                                </TouchableOpacity>
                                <Text style={styles.modalText}>Data</Text>
                            </View>
                            <View style={styles.View7}>
                            </View>
                            <View style={styles.View16}>
                                <CircleCheckBox
                                    checked={data}
                                    innerColor='#0000ff'
                                    outerColor='#0000ff'
                                    filterSize='22'
                                    innerSize='14'
                                    onToggle={(data) => One(One)}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                />
                                <Text style={styles.Text5} onPress={() => One(One)}>Any time</Text>
                            </View>
                            <View style={styles.View16}>
                                <CircleCheckBox
                                    checked={than}
                                    innerColor='#0000ff'
                                    outerColor='#0000ff'
                                    filterSize='22'
                                    innerSize='14'
                                    onToggle={(than) => name(name)}
                                    labelPosition={LABEL_POSITION.RIGHT}

                                />
                                <Text style={styles.Text5} onPress={() => name(name)}>Older than a week</Text>
                            </View>
                            <View style={styles.View16}>
                                <CircleCheckBox
                                    checked={older}
                                    innerColor='#0000ff'
                                    outerColor='#0000ff'
                                    filterSize='22'
                                    innerSize='14'
                                    onToggle={(older) => From(From)}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                />
                                <Text style={styles.Text5} onPress={() => From(From)}>Older than a month</Text>
                            </View>
                            <View style={styles.View16}>
                                <CircleCheckBox
                                    checked={months}
                                    innerColor='#0000ff'
                                    outerColor='#0000ff'
                                    filterSize='22'
                                    innerSize='14'
                                    onToggle={(months) => Custom(Custom)}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                />
                                <Text style={styles.Text5} onPress={() => Custom(Custom)}>Older than 6 months</Text>
                            </View>
                            <View style={styles.View16}>
                                <CircleCheckBox
                                    checked={year}
                                    innerColor='#0000ff'
                                    outerColor='#0000ff'
                                    filterSize='22'
                                    innerSize='14'
                                    onToggle={(year) => Renge(Renge)}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                />
                                <Text style={styles.Text5} onPress={() => Renge(Renge)}>Older than a year</Text>
                            </View>
                            <View style={styles.View17}>
                                <Text style={styles.Text6}>Custom renge</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>



            <Modal
                animationType="none"
                transparent={true}
                visible={Name}
            >
                <View style={styles.View19}>
                    <View style={styles.View18}>
                        <Text style={styles.Text7}>Google</Text>
                        <Image resizeMode={'cover'} style={styles.Image9} source={require('../../assets/images/roud.jpg')} />
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setName(!Name)}
                        >
                            <Text style={styles.Text8}>Didn`t catch that. Try speaking again.</Text>
                        </TouchableOpacity>
                        <View style={styles.View20}>
                            <Text style={styles.Text9}>Try again</Text>
                        </View>
                        <Text style={styles.Text10}>English</Text>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    Viewone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 120,
        width: '100%',
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 16
    },
    Text: {
        fontSize: 20,
        marginTop: 46,
        width: 250
    },
    Image: {
        marginTop: 70,
    },
    Imageone: {
        marginTop: 70,
        height: 28,
        width: 28
    },

    View: {
        flexDirection: 'row'
    },
    View2: {
        width: 100,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row'
    },
    Text1: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 8
    },
    Image1: {
        marginLeft: 10,
        marginTop: 5
    },
    View3: {
        width: 75,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row'
    },
    View1: {
        width: 140,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row'
    },
    Image5: {
        marginLeft: 3,
        marginTop: 5
    },
    View4: {
        height: 35,
        width: 245,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 15
    },





    centeredView: {
        flex: 1,
        marginTop: 50
    },
    centeredView2: {
        flex: 1,
        marginTop: 290
    },
    centeredView1: {
        flex: 1,
        marginTop: 200
    },
    modalView: {
        backgroundColor: "white",
        height: '100%',
        width: '100%',
    },
    Image2: {
        height: 30,
        width: 30
    },
    Image3: {
        height: 20,
        width: 20,
        marginLeft: 18
    },
    View5: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 20
    },
    modalText: {
        fontSize: 25,
        marginLeft: 20
    },
    View6: {
        marginTop: 40,
        paddingHorizontal: 16
    },
    View7: {
        borderWidth: 0.4,
        marginTop: 15,
        borderColor: 'gray'
    },
    View8: {
        marginHorizontal: 16,
        marginTop: 20,
        flexDirection: 'row'
    },
    View9: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 20
    },
    View10: {
        marginTop: 7,
        marginLeft: 15
    },
    Text3: {
        fontSize: 17,
        fontWeight: 'bold'

    },





    View11: {
        marginTop: 15,
        paddingHorizontal: 16
    },
    View12: {
        borderWidth: 0.5,
        marginTop: 15,
        borderColor: 'gray'
    },
    View13: {
        marginTop: 22,
        paddingHorizontal: 16,
    },
    View14: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    View15: {
        flexDirection: 'row'
    },
    Text4: {
        fontSize: 16,
        marginLeft: 30
    },
    Image6: {
        width: 20,
        height: 20
    },
    Image7: {
        width: 25,
        height: 25
    },
    View16: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        marginTop: 20
    },
    Text5: {
        fontSize: 16,
        color: '#000',
        marginLeft: 20,
        marginTop: 4
    },
    Image4: {
        width: 50,
        height: 50
    },
    View17: {
        paddingHorizontal: 16,
        marginTop: 25
    },
    Text6: {
        fontSize: 18,
        color: 'blue'
    },
    Image10: {
        width: 30,
        height: 30
    },
    View18: {
        width: '100%',
        height: 315,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    View19: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text7: {
        fontSize: 30,
        fontWeight: '500',
        color: '#404040'
    },
    Image9: {
        width: 80,
        height: 80,
        marginTop: 25
    },
    Text8: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },
    View20: {
        width: 125,
        height: 40,
        borderWidth: 0.3,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    Text9: {
        color: '#0033cc',
        fontSize: 17
    },
    Text10: {
        marginTop: 15
    }
})