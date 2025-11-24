import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        position: 'relative'
    },
    navGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 11
    },
    largeText: {
        fontSize: 40,
        fontWeight: '700', // string, not number
    },
    smallText: {
        fontSize: 12,
        color: '#7E7B7B'
    },
    // ... rest of your styles
});
