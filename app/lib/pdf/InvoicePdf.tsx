import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
  },

  header: {
    marginBottom: 30,
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    marginBottom: 20,
  },

  customerBox: {
    marginBottom: 25,
  },

  infoRow: {
    marginBottom: 5,
  },

  table: {
    marginTop: 20,
    borderTop: 1,
    borderBottom: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },

  tableHeader: {
    flexDirection: "row",
    marginBottom: 10,
    fontWeight: "bold",
  },

  tableRow: {
    flexDirection: "row",
    marginBottom: 6,
  },

  colDescription: {
    width: "50%",
  },

  colQty: {
    width: "10%",
    textAlign: "center",
  },

  colPrice: {
    width: "20%",
    textAlign: "right",
  },

  colTotal: {
    width: "20%",
    textAlign: "right",
  },

  totals: {
    marginTop: 30,
    alignSelf: "flex-end",
    width: 250,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  grandTotal: {
    borderTop: 1,
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 50,
    fontSize: 9,
    color: "#666",
  },
});

interface Props {
  invoice: any;
  customer: any;
}

export default function InvoicePdf({
  invoice,
  customer,
}: Props) {

  const subtotal =
    Number(invoice.amount || 0);

  const vat =
    subtotal * 0.21;

  const total =
    subtotal + vat;

  return (
    <Document>

      <Page
        size="A4"
        style={styles.page}
      >

        <View style={styles.header}>

          <Text style={styles.logo}>
            PixelCast
          </Text>

          <Text style={styles.title}>
            Factuur
          </Text>

        </View>

        <View style={styles.customerBox}>

          <Text style={styles.infoRow}>
            Factuurnummer:{" "}
            {invoice.invoice_number}
          </Text>

          <Text style={styles.infoRow}>
            Factuurdatum:{" "}
            {new Date().toLocaleDateString(
              "nl-NL"
            )}
          </Text>

          <Text style={styles.infoRow}>
            Vervaldatum:{" "}
            {invoice.due_date}
          </Text>

          <Text style={styles.infoRow}>
            Bedrijf:{" "}
            {customer?.company}
          </Text>

          <Text style={styles.infoRow}>
            Contactpersoon:{" "}
            {customer?.contact_name}
          </Text>

          <Text style={styles.infoRow}>
            Email:{" "}
            {customer?.email}
          </Text>

        </View>

        <View style={styles.table}>

          <View
            style={
              styles.tableHeader
            }
          >

            <Text
              style={
                styles.colDescription
              }
            >
              Omschrijving
            </Text>

            <Text
              style={
                styles.colQty
              }
            >
              Aantal
            </Text>

            <Text
              style={
                styles.colPrice
              }
            >
              Prijs
            </Text>

            <Text
              style={
                styles.colTotal
              }
            >
              Totaal
            </Text>

          </View>

          <View
            style={
              styles.tableRow
            }
          >

            <Text
              style={
                styles.colDescription
              }
            >
              Dienstverlening
            </Text>

            <Text
              style={
                styles.colQty
              }
            >
              1
            </Text>

            <Text
              style={
                styles.colPrice
              }
            >
              €
              {subtotal.toFixed(
                2
              )}
            </Text>

            <Text
              style={
                styles.colTotal
              }
            >
              €
              {subtotal.toFixed(
                2
              )}
            </Text>

          </View>

        </View>

        <View style={styles.totals}>

          <View
            style={
              styles.totalRow
            }
          >

            <Text>
              Subtotaal
            </Text>

            <Text>
              €
              {subtotal.toFixed(
                2
              )}
            </Text>

          </View>

          <View
            style={
              styles.totalRow
            }
          >

            <Text>
              BTW 21%
            </Text>

            <Text>
              €
              {vat.toFixed(2)}
            </Text>

          </View>

          <View
            style={[
              styles.totalRow,
              styles.grandTotal,
            ]}
          >

            <Text>
              Totaal incl. BTW
            </Text>

            <Text>
              €
              {total.toFixed(2)}
            </Text>

          </View>

        </View>

        <View style={styles.footer}>

          <Text>
            Gelieve het factuurbedrag
            binnen de gestelde termijn
            te voldoen.
          </Text>

          <Text>
            PixelCast CRM
          </Text>

          <Text>
            IBAN: NL00BANK0123456789
          </Text>

          <Text>
            BTW: NL123456789B01
          </Text>

        </View>

      </Page>

    </Document>
  );
}