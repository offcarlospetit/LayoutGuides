import React from 'react'
import { View, SafeAreaView } from 'react-native'

const ReactGrid = (props) => {
    return (
        <View style={{ position: 'absolute', width: props.windowWidth, height: props.windowHeight }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', }}>
                {
                    props.arrayRows.map((row) => {
                        return (
                            <View key={("row"+row).toString()} style={{ flex: 1, flexDirection: 'row' }}>
                                {
                                    props.arrayColumns.map((colum) => {
                                        return (
                                            <>
                                                <View key={(colum).toString()} style={{ flex: 1, borderColor: '#bebebe', borderWidth: 1, alignContent: 'flex-start', alignItems: colum == props.arrayColumns.length - 1 ? 'flex-end' : colum == 0 ? 'flex-start' : "center" }}>
                                                    {
                                                        colum == 0 &&
                                                        <View style={{ flex: 1, width: 16, backgroundColor: 'rgba(223, 177, 200,0.5)' }}></View>
                                                    }
                                                    {
                                                        (colum == props.arrayColumns.length - 1) &&
                                                        <View style={{ flex: 1, width: 16, backgroundColor: 'rgba(223, 177, 200,0.5)' }}></View>
                                                    }
                                                </View>
                                            </>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
            </SafeAreaView>
        </View>
    )
}

export default ReactGrid
