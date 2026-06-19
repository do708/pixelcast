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

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  section: {
    marginBottom: 20,
  },

  customerBox: {
    marginBottom: 20,
  },

  tableHeader: {
    flexDirection: "row",
    borderBottom: 1,
    paddingBottom: 8,
    marginBottom: 8,
    fontWeight: "bold",
  },

  tableRow: {
    flexDirection: "row",
    marginBottom: 6,
  },

  colProduct: {
    width: "45%",
  },

  colQty: {
    width: "15%",
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
    marginTop: 25,
    alignSelf: "flex-end",
    width: 250,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  grandTotal: {
    fontSize: 16,
    marginTop: 10,
    borderTop: 1,
    paddingTop: 10,
  },

  footer: {
    marginTop: 40,
    fontSize: 9,
    color: "#666",
  },
});

interface QuotePdfProps {
  quote: any;
  lead: any;
  items: any[];
}

export default function QuotePdf({
  quote,
  lead,
  items,
}: QuotePdfProps) {
  const subtotal =
    Number(quote.total || 0);

  const vat =
    subtotal * 0.21;

  const totalInclVat =
    subtotal + vat;

  return (
    <Document>

      <Page
        size="A4"
        style={styles.page}
      >

        <Text style={styles.title}>
          PixelCast Offerte
        </Text>

        <View style={styles.customerBox}>

          <Text>
            Offertenummer:
            {" "}
            {quote.quote_number}
          </Text>

          <Text>
            Datum:
            {" "}
            {new Date().toLocaleDateString(
              "nl-NL"
            )}
          </Text>

          <Text>
            Bedrijf:
            {" "}
            {lead?.company || "-"}
          </Text>

          <Text>
            Contactpersoon:
            {" "}
            {lead?.name || "-"}
          </Text>

          <Text>
            E-mail:
            {" "}
            {lead?.email || "-"}
          </Text>

        </View>

        <View style={styles.section}>

          <View
            style={styles.tableHeader}
          >

            <Text
              style={
                styles.colProduct
              }
            >
              Product
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

          {items.map(
            (item: any) => (

              <View
                key={item.id}
                style={
                  styles.tableRow
                }
              >

                <Text
                  style={
                    styles.colProduct
                  }
                >
                  {item.product?.name ||
                    "Product"}
                </Text>

                <Text
                  style={
                    styles.colQty
                  }
                >
                  {
                    item.quantity
                  }
                </Text>

                <Text
                  style={
                    styles.colPrice
                  }
                >
                  €
                  {Number(
                    item.unit_price
                  ).toFixed(2)}
                </Text>

                <Text
                  style={
                    styles.colTotal
                  }
                >
                  €
                  {(
                    Number(
                      item.unit_price
                    ) *
                    Number(
                      item.quantity
                    )
                  ).toFixed(2)}
                </Text>

              </View>

            )
          )}

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
              {totalInclVat.toFixed(
                2
              )}
            </Text>

          </View>

        </View>

        <View style={styles.footer}>

          <Text>
            Deze offerte is
            geldig gedurende
            30 dagen na
            offertedatum.
          </Text>

          <Text>
            PixelCast CRM
          </Text>

        </View>

      </Page>

    </Document>
  );
}