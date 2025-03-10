import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MapView, Marker, Callout, Region } from '../../utils/map';

type MarkerType = 'beach' | 'historical';

interface TouristMarker {
    id: number;
    title: string;
    description: string;
    type: MarkerType;
    coordinate: {
        latitude: number;
        longitude: number;
    };
}

const CartagenaMap: React.FC = () => {
    const [region, setRegion] = useState<Region>({
        latitude: 10.41436601009676,
        longitude: -75.53624379796918,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [markers] = useState<TouristMarker[]>([
        { id: 1, title: 'Playa Blanca', description: 'Hermosa playa de arena blanca', type: 'beach', coordinate: { latitude: 10.2372, longitude: -75.5856 } },
        { id: 2, title: 'Castillo San Felipe de Barajas', description: 'Fortaleza histórica', type: 'historical', coordinate: { latitude: 10.4225, longitude: -75.5404 } },
        { id: 3, title: 'Ciudad Amurallada', description: 'Sitio del Patrimonio Mundial de la UNESCO', type: 'historical', coordinate: { latitude: 10.4236, longitude: -75.5503 } },
        { id: 4, title: 'Playa Bocagrande', description: 'Playa urbana popular', type: 'beach', coordinate: { latitude: 10.4018, longitude: -75.5566 } },
        { id: 5, title: 'Plaza de Bolívar', description: 'Plaza cívica histórica', type: 'historical', coordinate: { latitude: 10.4239, longitude: -75.5513 } },
        { id: 6, title: 'Playa La Boquilla', description: 'Playa tranquila con hermosas vistas', type: 'beach', coordinate: { latitude: 10.5000, longitude: -75.6000 } },
        { id: 7, title: 'Museo Naval del Caribe', description: 'Exposiciones sobre la historia naval del Caribe', type: 'historical', coordinate: { latitude: 10.4500, longitude: -75.5200 } },
        { id: 8, title: 'Isla de Barú', description: 'Destino popular para el buceo y la pesca', type: 'historical', coordinate: { latitude: 10.4000, longitude: -75.7000 } },
        { id: 9, title: 'Cerro de la Popa', description: 'Mirador con vistas panorámicas de Cartagena', type: 'historical', coordinate: { latitude: 10.4200, longitude: -75.5300 } },
        { id: 10, title: 'Bolívar Square Park', description: 'Espacio verde en el corazón de la ciudad', type: 'historical', coordinate: { latitude: 10.4300, longitude: -75.5600 } },
        { id: 11, title: 'Palacio de la Inquisición', description: 'Ejemplo arquitectónico del período colonial', type: 'historical', coordinate: { latitude: 10.4400, longitude: -75.5700 } },
        { id: 12, title: 'Teatro Heredia', description: 'Escenario cultural icónico de Cartagena', type: 'historical', coordinate: { latitude: 10.4300, longitude: -75.5800 } },
        { id: 13, title: 'Convento de Santa Clara', description: 'Monasterio histórico con jardines', type: 'historical', coordinate: { latitude: 10.4100, longitude: -75.5900 } },
        { id: 14, title: 'Parque Nacional Natural Isla Gorgona', description: 'Reserva ecológica con vida submarina rica', type: 'historical', coordinate: { latitude: 10.8000, longitude: -77.2000 } }, // Aproximado
        { id: 15, title: 'Catedral de Cartagena de Indias', description: 'Icono religioso y arquitectónico', type: 'historical', coordinate: { latitude: 10.4200, longitude: -75.4800 } },
    ]);
    

    const [filter, setFilter] = useState<'all' | MarkerType>('all');

    const filteredMarkers = filter === 'all' ? markers : markers.filter(marker => marker.type === filter);

    const markerColors: Record<MarkerType, string> = {
        beach: 'blue',
        historical: 'red',
    };

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                region={region}
                onRegionChangeComplete={setRegion}
            >
                {filteredMarkers.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={marker.coordinate}
                        pinColor={markerColors[marker.type]}
                    >
                        <Callout>
                            <View>
                                <Text style={styles.calloutTitle}>{marker.title}</Text>
                                <Text>{marker.description}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <View style={styles.filterContainer}>
                <TouchableOpacity style={[styles.filterButton, filter === 'all' && styles.activeFilter]} onPress={() => setFilter('all')}>
                    <Text>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterButton, filter === 'beach' && styles.activeFilter]} onPress={() => setFilter('beach')}>
                    <Text>Playas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterButton, filter === 'historical' && styles.activeFilter]} onPress={() => setFilter('historical')}>
                    <Text>Sitios Historicos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        padding: 10,
    },
    filterButton: {
        padding: 10,
        borderRadius: 20,
    },
    activeFilter: {
        backgroundColor: '#fe961b',
    },
    calloutTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
});

export default CartagenaMap;