import * as Alerts from '../../actions/alerts';

describe('Alerts', () => {
  it('Alerts action returns alerts', () => {
    Alerts.fetchAlerts('test', 'mobile', { withAuth: () => null }).getAlerts();
  });
  it('Alerts renders properly with alerts', () => {
    expect(Alerts.alertSeen(0).type).toBe("@@alerts/SEEN_ALERT");
  });
});
